import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  console.warn(
    "[db] Aviso: variável de ambiente DATABASE_URL não foi definida. " +
      "Configure-a com a Connection String do Supabase ou Neon."
  );
}

// O pool gerencia as conexões com o Postgres.
// ssl: { rejectUnauthorized: false } é necessário para Supabase e Neon,
// que exigem conexão criptografada.
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("localhost")
    ? false
    : { rejectUnauthorized: false },
});

// Cria a tabela "leads" automaticamente caso ainda não exista.
// Assim o backend "se auto-configura" no primeiro start, sem precisar
// rodar migrações manuais no painel do banco.
export async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id          BIGSERIAL PRIMARY KEY,
      name        TEXT NOT NULL,
      phone       TEXT NOT NULL,
      message     TEXT NOT NULL,
      source      TEXT DEFAULT 'site',
      created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
  await pool.query(`
    CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);
  `);
}
