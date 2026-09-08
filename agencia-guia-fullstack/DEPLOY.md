# Guia de Publicação — Agência Guia

Este projeto tem duas partes:

- **Frontend** (raiz do repositório): site em React + Vite.
- **Backend** (`/backend`): API em Node.js/Express que salva os leads do
  formulário de contato em um banco PostgreSQL.

Siga a ordem abaixo — banco → backend → frontend.

## 1. Banco de dados (Supabase ou Neon)

Veja o passo a passo detalhado em [`backend/README.md`](./backend/README.md#1-banco-de-dados-neon-ou-supabase).
Resumo: crie a conta, crie o projeto, copie a Connection String.

## 2. Backend (Render)

Veja [`backend/README.md`](./backend/README.md#3-deploy-no-render`). Resumo:

- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`
- Variáveis: `DATABASE_URL` (do banco) e `FRONTEND_URL` (URL do site)

Ao final você terá uma URL pública, ex: `https://agencia-guia-api.onrender.com`.

## 3. Frontend (Vercel ou Netlify)

1. Suba este repositório (a raiz, com `package.json`, `src/`, etc.) para o
   GitHub.
2. Na Vercel ou Netlify, importe o repositório e faça o deploy (framework
   detectado automaticamente como Vite).
3. Nas variáveis de ambiente do projeto, adicione:
   - `VITE_API_URL` = a URL do backend publicada no Render
     (ex: `https://agencia-guia-api.onrender.com`)
4. Redeploy. O formulário de contato (`src/App.tsx`, componente `Contact`)
   agora vai enviar os dados via `POST` para `VITE_API_URL/api/leads`, que
   salva no Postgres.

## Antes de apresentar

- Acesse a URL do backend no navegador (ex: `https://agencia-guia-api.onrender.com/health`)
  alguns minutos antes, para "acordar" o servidor gratuito do Render.
- Teste o formulário do site publicado uma vez para confirmar que o lead
  está sendo salvo (você pode conferir em `GET /api/leads` do backend, ou
  direto no painel do Supabase/Neon, tabela `leads`).
