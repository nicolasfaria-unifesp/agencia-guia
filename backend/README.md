# Agência Guia — API de Leads

Backend simples em Node.js + Express que recebe os envios do formulário de
contato do site e salva no banco de dados PostgreSQL (Supabase ou Neon).

## Estrutura

```
backend/
├── migrations/
│   └── 001_create_leads.sql   # SQL da tabela (opcional, o server já cria sozinho)
├── src/
│   ├── db.js                  # Conexão com o Postgres + criação automática da tabela
│   └── server.js              # Rotas da API (Express)
├── .env.example
└── package.json
```

## 1. Banco de dados (Neon ou Supabase)

1. Crie uma conta gratuita em [neon.tech](https://neon.tech) ou
   [supabase.com](https://supabase.com).
2. Crie um novo projeto/banco.
3. Copie a **Connection String** (URL de conexão Postgres).
   - Neon: já vem no formato certo, algo como
     `postgresql://usuario:senha@ep-xxxx.aws.neon.tech/neondb?sslmode=require`
   - Supabase: em **Project Settings → Database → Connection string**, use o
     modo **Session pooler** ou a URI direta.
4. Não precisa criar a tabela manualmente — o backend faz isso sozinho no
   primeiro start (função `ensureSchema()` em `src/db.js`). Se preferir criar
   manualmente, use o SQL em `migrations/001_create_leads.sql` no editor SQL
   do Supabase/Neon.

## 2. Rodando localmente

```bash
cd backend
cp .env.example .env
# edite o .env e cole sua DATABASE_URL
npm install
npm run dev
```

A API sobe em `http://localhost:3000`. Teste com:

```bash
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"João","phone":"11999999999","message":"Quero saber mais"}'
```

## 3. Deploy no Render

1. Suba a pasta `backend/` para um repositório no GitHub (pode ser o mesmo
   repositório do frontend, o Render permite escolher a subpasta).
2. Em [render.com](https://render.com), clique em **New → Web Service** e
   conecte o repositório.
3. Configurações do serviço:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Em **Environment**, adicione as variáveis:
   - `DATABASE_URL` → connection string do Supabase/Neon
   - `FRONTEND_URL` → URL do site publicado (ex: `https://agencia-guia.vercel.app`)
5. Clique em **Create Web Service**. O Render vai gerar uma URL pública, algo
   como `https://agencia-guia-api.onrender.com`.

> ⚠️ No plano gratuito do Render, a API "dorme" após 15 min sem uso e demora
> ~30-50s para acordar na primeira requisição. Acesse a URL antes de
> apresentar o projeto para "aquecer" o servidor.

## 4. Conectando o frontend

No frontend, defina a variável de ambiente `VITE_API_URL` com a URL da API
publicada no Render (veja instruções no README da raiz do projeto / no
código de `src/App.tsx`, componente `Contact`).

## Rotas disponíveis

| Método | Rota          | Descrição                                  |
|--------|---------------|---------------------------------------------|
| GET    | `/`           | Health check                                |
| GET    | `/health`     | Health check                                |
| POST   | `/api/leads`  | Cria um lead `{ name, phone, message }`     |
| GET    | `/api/leads`  | Lista os últimos leads (`?limit=50`)        |
