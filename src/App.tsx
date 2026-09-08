import { useState, useEffect } from "react";
import agenciaGuiaImg from "./imports/agenciaGuia.jpg";
import matheusMartinsImg from "./imports/matheusMartins.jpg";
import matheusPorangabaImg from "./imports/matheusPorangaba.jpg";

// ─── Icons ──────────────────────────────────────────────────────────────────

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

// ─── Logo ───────────────────────────────────────────────────────────────────

function AGLogo({ size = 40 }: { size?: number }) {
  return (
    <img
      src={agenciaGuiaImg}
      alt="Agência Guia logo"
      style={{ width: size, height: size, borderRadius: 10, flexShrink: 0, objectFit: "cover" }}
    />
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,12,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <AGLogo size={36} />
          <span className="font-display font-bold text-lg" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            Agência <span style={{ color: "var(--blue-glow)" }}>Guia</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200"
            style={{ background: "var(--blue-vivid)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blue-glow)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blue-vivid)")}
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile burger */}
        <button className="md:hidden" style={{ color: "var(--text-primary)" }} onClick={() => setOpen(!open)}>
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{ background: "rgba(8,12,20,0.97)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium py-1"
              style={{ color: "var(--text-muted)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white text-center"
            style={{ background: "var(--blue-vivid)" }}
            onClick={() => setOpen(false)}
          >
            Fale Conosco
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="hero-bg relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8"
            style={{
              background: "rgba(37,99,235,0.15)",
              border: "1px solid rgba(37,99,235,0.35)",
              color: "var(--blue-light)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Marketing Digital para Restaurantes
          </div>

          <h1
            className="font-display font-black leading-none mb-6 glow-text"
            style={{
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
            }}
          >
            Agência Guia:{" "}
            <span style={{ color: "var(--blue-glow)" }}>O Mapa</span> para o
            Sucesso do seu Restaurante
          </h1>

          <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: "var(--text-muted)" }}>
            Especialistas em tráfego pago, redes sociais e consultoria para restaurantes e delivery.
            Transformamos visibilidade em clientes reais — com estratégias que vendem de verdade.
          </p>

          {/* Founders */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex -space-x-3">
              {[matheusMartinsImg, matheusPorangabaImg].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={i === 0 ? "Matheus Martins" : "Matheus Porangaba"}
                  className="w-10 h-10 rounded-full object-cover"
                  style={{ outline: "2px solid var(--bg-dark)" }}
                />
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                Matheus Martins & Matheus Porangaba
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Fundadores & Especialistas em Marketing Gastronômico
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contato"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 glow-blue"
              style={{ background: "var(--blue-vivid)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--blue-glow)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--blue-vivid)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Quero Crescer Agora <IconArrow />
            </a>
            <a
              href="#cases"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                color: "var(--text-primary)",
                background: "rgba(255,255,255,0.04)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)"; e.currentTarget.style.background = "rgba(37,99,235,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
            >
              Ver Cases de Sucesso
            </a>
          </div>
        </div>

        {/* Right: image + stats */}
        <div className="relative hidden lg:block">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1765646772493-7b5341714eea?w=700&h=520&fit=crop&auto=format"
              alt="Restaurante sofisticado com mesa posta"
              className="w-full h-80 object-cover"
              style={{ filter: "brightness(0.75)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(8,12,20,0.9) 0%, transparent 60%)" }}
            />
            {/* Floating stat cards */}
            <div
              className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3"
            >
              {[
                { label: "Clientes Atendidos", value: "80+" },
                { label: "ROAS Médio", value: "6.4×" },
                { label: "Receita Gerada", value: "R$2M+" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl px-3 py-3 text-center"
                  style={{
                    background: "rgba(8,12,20,0.85)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(37,99,235,0.3)",
                  }}
                >
                  <p className="font-display font-black text-xl" style={{ color: "var(--blue-light)" }}>
                    {s.value}
                  </p>
                  <p className="text-xs mt-0.5 leading-tight" style={{ color: "var(--text-muted)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stats */}
      <div className="lg:hidden max-w-6xl mx-auto px-6 pb-16 grid grid-cols-3 gap-3">
        {[
          { label: "Clientes", value: "80+" },
          { label: "ROAS Médio", value: "6.4×" },
          { label: "Receita", value: "R$2M+" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl px-3 py-4 text-center"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(37,99,235,0.25)",
            }}
          >
            <p className="font-display font-black text-2xl" style={{ color: "var(--blue-light)" }}>
              {s.value}
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Sobre ───────────────────────────────────────────────────────────────────

function Sobre() {
  return (
    <section id="sobre" className="py-24" style={{ background: "var(--bg-surface)" }}>
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image stack */}
        <div className="relative hidden lg:flex flex-col gap-4">
          {/* Founder photos side by side */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: matheusMartinsImg, name: "Matheus Martins", role: "Co-Fundador & Estrategista" },
              { src: matheusPorangabaImg, name: "Matheus Porangaba", role: "Co-Fundador & Especialista em Tráfego" },
            ].map((f) => (
              <div
                key={f.name}
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <img
                  src={f.src}
                  alt={f.name}
                  className="w-full h-56 object-cover"
                  style={{ filter: "brightness(0.85)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(8,12,20,0.9) 0%, transparent 55%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display font-bold text-sm" style={{ color: "#fff" }}>{f.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--blue-light)" }}>{f.role}</p>
                </div>
              </div>
            ))}
          </div>
          {/* AG logo badge */}
          <div
            className="rounded-2xl p-5 flex items-center gap-4"
            style={{ background: "var(--bg-card)", border: "1px solid rgba(37,99,235,0.3)" }}
          >
            <AGLogo size={52} />
            <div>
              <p className="font-display font-bold text-sm" style={{ color: "var(--text-primary)" }}>Agência Guia</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Desde 2021 · São Paulo, SP</p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue-glow)" }}>
            Nossa História
          </p>
          <h2
            className="font-display font-black mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", letterSpacing: "-0.03em", color: "var(--text-primary)" }}
          >
            Nascemos do prato.<br />Crescemos no digital.
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
            A Agência Guia surgiu da paixão de <strong style={{ color: "var(--text-primary)" }}>Matheus Martins</strong> e{" "}
            <strong style={{ color: "var(--text-primary)" }}>Matheus Porangaba</strong> pela gastronomia e pelo marketing de
            resultado. Cansados de ver restaurantes incríveis fechando as portas por falta de visibilidade, decidiram criar
            uma agência 100% focada no universo gastronômico.
          </p>
          <p className="text-sm leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
            Nossa missão é simples: <span style={{ color: "var(--blue-light)" }}>transformar restaurantes e deliveries em máquinas de geração de clientes</span> — usando
            tráfego pago inteligente, gestão de redes sociais estratégica e consultoria personalizada para cada negócio.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Estratégia personalizada para cada restaurante",
              "Time especialista em gastronomia & delivery",
              "Resultados mensuráveis em 30 dias",
              "Atendimento próximo e transparente",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(37,99,235,0.2)", color: "var(--blue-light)" }}
                >
                  <IconCheck />
                </div>
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────

const services = [
  {
    icon: "📈",
    title: "Tráfego Pago",
    desc: "Campanhas no Meta Ads e Google Ads com foco em pedidos e reservas reais. Cada real investido é monitorado e otimizado para o máximo de retorno.",
    features: ["Meta Ads (Facebook & Instagram)", "Google Ads Search & Display", "Relatórios de ROAS semanais", "Criativos testados e otimizados"],
    highlight: true,
  },
  {
    icon: "📱",
    title: "Gestão de Redes Sociais",
    desc: "Presença digital estratégica que gera fome e fidelização. Fotos, reels, stories e copy com identidade visual única para o seu negócio.",
    features: ["Calendário editorial mensal", "Produção de fotos e vídeos", "Gestão de comentários e DMs", "Crescimento orgânico de seguidores"],
    highlight: false,
  },
  {
    icon: "🎯",
    title: "Consultoria Gastronômica",
    desc: "Diagnóstico completo do seu negócio e um plano de ação para escalar. Para restaurantes que querem crescer com estratégia.",
    features: ["Diagnóstico de marketing completo", "Plano de ação personalizado", "Acompanhamento mensal de metas", "Suporte via WhatsApp direto"],
    highlight: false,
  },
];

function Services() {
  return (
    <section id="servicos" className="py-24" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue-glow)" }}>
            O Que Fazemos
          </p>
          <h2
            className="font-display font-black leading-tight"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", letterSpacing: "-0.03em", color: "var(--text-primary)" }}
          >
            Nossos Serviços
          </h2>
          <p className="text-sm mt-4 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Soluções completas de marketing digital pensadas especialmente para o mercado gastronômico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl p-7 card-hover flex flex-col"
              style={{
                background: s.highlight ? "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)" : "var(--bg-card)",
                border: s.highlight ? "1px solid rgba(59,130,246,0.5)" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{
                  background: s.highlight ? "rgba(255,255,255,0.2)" : "rgba(37,99,235,0.15)",
                }}
              >
                {s.icon}
              </div>
              <h3
                className="font-display font-bold text-xl mb-3"
                style={{ color: s.highlight ? "#fff" : "var(--text-primary)" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: s.highlight ? "rgba(255,255,255,0.8)" : "var(--text-muted)" }}
              >
                {s.desc}
              </p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span style={{ color: s.highlight ? "#93c5fd" : "var(--blue-glow)" }}>✓</span>
                    <span style={{ color: s.highlight ? "rgba(255,255,255,0.85)" : "var(--text-muted)" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Cases ───────────────────────────────────────────────────────────────────

const cases = [
  {
    name: "Burguer House SP",
    category: "Delivery · São Paulo",
    img: "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?w=520&h=340&fit=crop&auto=format",
    result: "+312% em pedidos",
    period: "Em 60 dias",
    roas: "7.2×",
    desc: "Campanha de tráfego pago no Meta Ads com criativos focados em urgência e fome. Triplicamos os pedidos mensais.",
  },
  {
    name: "Trattoria Bella Notte",
    category: "Restaurante · Rio de Janeiro",
    img: "https://images.unsplash.com/photo-1784981260317-b97ef0163129?w=520&h=340&fit=crop&auto=format",
    result: "+185% de seguidores",
    period: "Em 90 dias",
    roas: "4.8×",
    desc: "Gestão completa de redes sociais com fotografia profissional e estratégia de conteúdo. Instagram saiu de 800 para 2.300 seguidores engajados.",
  },
  {
    name: "Sushi Zen Delivery",
    category: "Delivery · Curitiba",
    img: "https://images.unsplash.com/photo-1700513971603-eda40374ba0a?w=520&h=340&fit=crop&auto=format",
    result: "R$180k gerados",
    period: "Em 3 meses",
    roas: "8.1×",
    desc: "Estratégia de tráfego pago + consultoria de cardápio digital. Melhor desempenho da história do restaurante.",
  },
];

function Cases() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section id="cases" className="py-24" style={{ background: "var(--bg-surface)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue-glow)" }}>
            Resultados Reais
          </p>
          <h2
            className="font-display font-black leading-tight"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", letterSpacing: "-0.03em", color: "var(--text-primary)" }}
          >
            Cases de Sucesso
          </h2>
        </div>

        {/* Case tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {cases.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setActive(i)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: active === i ? "var(--blue-vivid)" : "rgba(255,255,255,0.05)",
                color: active === i ? "#fff" : "var(--text-muted)",
                border: active === i ? "1px solid transparent" : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Active case */}
        <div
          className="rounded-2xl overflow-hidden grid lg:grid-cols-2"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "var(--bg-card)" }}
        >
          <div className="relative h-64 lg:h-auto">
            <img
              src={c.img}
              alt={c.name}
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.7)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, transparent 60%, var(--bg-card) 100%)" }}
            />
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--blue-glow)" }}>
              {c.category}
            </span>
            <h3 className="font-display font-black text-2xl mb-3" style={{ color: "var(--text-primary)" }}>
              {c.name}
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              {c.desc}
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Resultado Principal", value: c.result },
                { label: "Período", value: c.period },
                { label: "ROAS", value: c.roas },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display font-black text-xl" style={{ color: "var(--blue-light)" }}>{m.value}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {[
            {
              name: "Carlos Mendes",
              role: "Dono, Burguer House SP",
              text: "Em 2 meses meu delivery triplicou os pedidos. A equipe da Agência Guia conhece o segmento de comida como ninguém.",
              stars: 5,
            },
            {
              name: "Francesca Romano",
              role: "Sócia, Trattoria Bella Notte",
              text: "Nossa presença no Instagram nunca foi tão forte. Clientes chegam dizendo que nos acharam pelo Instagram. Resultado real.",
              stars: 5,
            },
            {
              name: "Roberto Tanaka",
              role: "CEO, Sushi Zen Delivery",
              text: "Melhor investimento que fiz no restaurante. O Matheus e o Matheus são extremamente dedicados e entregam resultados.",
              stars: 5,
            },
          ].map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 card-hover"
              style={{ background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => <IconStar key={i} />)}
              </div>
              <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "var(--text-muted)" }}>
                "{t.text}"
              </p>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--blue-glow)" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

// URL da API do backend. Em desenvolvimento local, aponta pro server rodando
// na porta 3000. Em produção, defina a variável de ambiente VITE_API_URL
// (ex: no painel da Vercel/Netlify) com a URL pública do Render.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error("Falha ao enviar mensagem");
      }
      setSent(true);
    } catch (err) {
      setError(
        "Não foi possível enviar sua mensagem agora. Tente novamente ou fale pelo WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: info */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue-glow)" }}>
            Vamos Conversar
          </p>
          <h2
            className="font-display font-black leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", letterSpacing: "-0.03em", color: "var(--text-primary)" }}
          >
            Pronto para lotar seu restaurante?
          </h2>
          <p className="text-sm leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
            Fale com nossa equipe e descubra como a Agência Guia pode transformar o marketing do seu negócio gastronômico.
            Respondemos em até 2 horas.
          </p>

          <div className="space-y-5">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
              style={{ background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-green-400 flex-shrink-0"
                style={{ background: "rgba(34,197,94,0.12)" }}
              >
                <IconWhatsApp />
              </div>
              <div>
                <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--text-muted)" }}>WhatsApp</p>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>+55 (11) 99999-9999</p>
              </div>
            </a>

            <div
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{ background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(37,99,235,0.15)", color: "var(--blue-light)" }}
              >
                <IconInstagram />
              </div>
              <div>
                <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--text-muted)" }}>Instagram</p>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>@agenciaguia</p>
              </div>
            </div>

            <div
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{ background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm"
                style={{ background: "rgba(37,99,235,0.15)", color: "var(--blue-light)" }}
              >
                ✉
              </div>
              <div>
                <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--text-muted)" }}>E-mail</p>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>contato@agenciaguia.com.br</p>
              </div>
            </div>
          </div>

          {/* Founders card */}
          <div
            className="mt-8 rounded-2xl p-6 flex items-center gap-5"
            style={{
              background: "linear-gradient(135deg, rgba(29,78,216,0.2) 0%, rgba(37,99,235,0.1) 100%)",
              border: "1px solid rgba(37,99,235,0.3)",
            }}
          >
            <div className="flex -space-x-3">
              {[matheusMartinsImg, matheusPorangabaImg].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={i === 0 ? "Matheus Martins" : "Matheus Porangaba"}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ outline: "2px solid var(--bg-dark)" }}
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                Matheus Martins & Matheus Porangaba
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                Atendimento pessoal pelos fundadores
              </p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div
          className="rounded-2xl p-8 lg:p-10"
          style={{ background: "var(--bg-card)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center h-72 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-5"
                style={{ background: "rgba(37,99,235,0.2)", border: "1px solid rgba(37,99,235,0.4)" }}
              >
                ✅
              </div>
              <h3 className="font-display font-bold text-xl mb-2" style={{ color: "var(--text-primary)" }}>
                Mensagem enviada!
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Entraremos em contato em até 2 horas. <br /> Fique de olho no seu WhatsApp.
              </p>
              <button
                className="mt-6 px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
                style={{ background: "var(--blue-vivid)" }}
                onClick={() => setSent(false)}
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-display font-bold text-xl mb-2" style={{ color: "var(--text-primary)" }}>
                Fale com a Agência Guia
              </h3>
              <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
                Preencha o formulário e entraremos em contato pelo WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "var(--text-muted)" }}>
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João da Silva"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "var(--text-muted)" }}>
                    Número de Telefone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="form-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "var(--text-muted)" }}>
                    Mensagem / Sua Necessidade *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Conte um pouco sobre seu restaurante e o que você busca..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input w-full rounded-xl px-4 py-3 text-sm resize-none"
                  />
                </div>

                {error && (
                  <p className="text-xs" style={{ color: "#f87171" }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 flex items-center justify-center gap-2 glow-blue disabled:opacity-60"
                  style={{ background: "var(--blue-vivid)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blue-glow)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blue-vivid)")}
                >
                  {loading ? "Enviando..." : "Enviar Mensagem"} <IconArrow />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="py-12"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <AGLogo size={32} />
          <span className="font-display font-bold text-base" style={{ color: "var(--text-primary)" }}>
            Agência <span style={{ color: "var(--blue-glow)" }}>Guia</span>
          </span>
        </div>

        <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
          © 2024 Agência Guia. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-3">
          {[
            { icon: <IconInstagram />, label: "Instagram" },
            { icon: <IconWhatsApp />, label: "WhatsApp" },
            { icon: <IconLinkedIn />, label: "LinkedIn" },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.05)", color: "var(--text-muted)", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(37,99,235,0.2)"; e.currentTarget.style.color = "var(--blue-light)"; e.currentTarget.style.borderColor = "rgba(37,99,235,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ minHeight: "100%", background: "var(--bg-dark)" }}>
      <Navbar />
      <Hero />
      <Sobre />
      <Services />
      <Cases />
      <Contact />
      <Footer />
    </div>
  );
}
