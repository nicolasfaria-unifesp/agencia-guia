import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool, ensureSchema } from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Middlewares ───────────────────────────────────────────────────────────

app.use(express.json());

// CORS: define explicitamente os domínios permitidos via variável de ambiente.
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((o) => o.trim())
  : [];

app.use(
  cors({
    origin: (origin, callback) => {
      // Em ambiente de desenvolvimento local, permite sem 'origin' (Postman/Curl)
      if (
        !origin ||
        allowedOrigins.includes("*") ||
        allowedOrigins.includes(origin)
      ) {
        callback(null, true);
      } else {
        callback(new Error("Não permitido pelo CORS"));
      }
    },
  })
);

// Middleware de proteção para rotas administrativas/sensíveis
const requireAuth = (req, res, next) => {
  const adminSecret = process.env.ADMIN_API_KEY;

  if (!adminSecret) {
    console.error("[security] ADMIN_API_KEY não definida nas variáveis de ambiente.");
    return res.status(500).json({ error: "Erro na configuração de segurança da API." });
  }

  const authHeader = req.headers.authorization;
  const customHeader = req.headers["x-admin-key"];

  const providedKey = authHeader?.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : customHeader;

  if (!providedKey || providedKey !== adminSecret) {
    return res.status(401).json({ error: "Acesso não autorizado." });
  }

  next();
};

// ─── Rotas ──────────────────────────────────────────────────────────────────

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", service: "agencia-guia-api" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// PÚBLICA: Cria um novo lead a partir do formulário de contato
app.post("/api/leads", async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({
        error: "Campos obrigatórios: name, phone, message.",
      });
    }

    if (
      typeof name !== "string" ||
      typeof phone !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({ error: "Campos devem ser texto." });
    }

    const result = await pool.query(
      `INSERT INTO leads (name, phone, message)
       VALUES ($1, $2, $3)
       RETURNING id, name, phone, message, created_at`,
      [name.trim(), phone.trim(), message.trim()]
    );

    const newLead = result.rows[0];

    // ── Disparo instantâneo para o Make ──────────────────────────────────────
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;

    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLead),
      })
        .then(() => console.log("[webhook] Lead enviado ao Make com sucesso."))
        .catch((err) =>
          console.error("[webhook] Erro ao disparar Webhook:", err.message)
        );
    } else {
      console.warn("[webhook] MAKE_WEBHOOK_URL não configurada no .env");
    }

    return res.status(201).json({ lead: newLead });
  } catch (err) {
    console.error("Erro ao criar lead:", err);
    return res.status(500).json({ error: "Erro interno ao salvar lead." });
  }
});

// PROTEGIDA: Lista os leads cadastrados (Requer ADMIN_API_KEY)
app.get("/api/leads", requireAuth, async (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit) || 50, 200);
    const result = await pool.query(
      `SELECT id, name, phone, message, created_at
       FROM leads
       ORDER BY created_at DESC
       LIMIT $1`,
      [limit]
    );
    return res.json({ leads: result.rows });
  } catch (err) {
    console.error("Erro ao listar leads:", err);
    return res.status(500).json({ error: "Erro interno ao listar leads." });
  }
});

// ─── Start ──────────────────────────────────────────────────────────────────

async function start() {
  try {
    await ensureSchema();
    console.log("[db] Schema verificado/criado com sucesso.");
  } catch (err) {
    console.error("[db] Falha ao verificar/criar schema:", err.message);
  }

  app.listen(PORT, () => {
    console.log(`[server] API rodando na porta ${PORT}`);
  });
}

start();
