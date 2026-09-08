-- Tabela de leads gerados pelo formulário de contato do site da Agência Guia
-- Compatível com PostgreSQL (Supabase ou Neon)

CREATE TABLE IF NOT EXISTS leads (
  id          BIGSERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  phone       TEXT NOT NULL,
  message     TEXT NOT NULL,
  source      TEXT DEFAULT 'site',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Índice para consultar leads mais recentes rapidamente
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);
