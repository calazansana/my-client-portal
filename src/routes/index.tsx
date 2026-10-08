import { createFileRoute } from "@tanstack/react-router";
import patternAsset from "@/assets/anna-memoire-pattern.png.asset.json";
import logoAsset from "@/assets/anna-memoire-monogram.png.asset.json";

const INSTAGRAM = "https://www.instagram.com/byannamemoire/";
const WHATSAPP = "https://wa.me/5511981459124?text=Quero%20saber%20mais";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ANNA Memoire — Serviços e Orçamentos" },
      {
        name: "description",
        content:
          "Pacotes de fotografia, social media, branding e serviços avulsos. Valores de lançamento.",
      },
      { property: "og:title", content: "ANNA Memoire — Serviços e Orçamentos" },
      {
        property: "og:description",
        content: "Conteúdo que faz sua marca ser vista. Conheça os pacotes e valores.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Pkg = { name: string; items: string[]; price: string; featured?: boolean };

const fotografia: { group: string; pkgs: Pkg[] }[] = [
  {
    group: "Essencial",
    pkgs: [
      { name: "Pacote 1", items: ["10 fotos profissionais editadas", "1 post para Instagram (reel, carrossel ou post)"], price: "R$ 220" },
      { name: "Pacote 2", items: ["20 fotos profissionais", "1h30 de captação", "Tratamento das fotos", "1 vídeo editado"], price: "R$ 320" },
      { name: "Pacote 3", items: ["40 fotos profissionais", "3 horas de captação", "Tratamento das fotos", "2 vídeos editados"], price: "R$ 420" },
      { name: "Pacote 4", items: ["100 fotos profissionais", "Mais de 4 horas de captação", "Tratamento das fotos", "4 vídeos editados"], price: "R$ 700" },
    ],
  },
  {
    group: "Essencial 2",
    pkgs: [
      { name: "Pacote 1", items: ["15 fotos", "1 carrossel"], price: "R$ 280" },
      { name: "Pacote 2", items: ["15 fotos", "1 Reel", "1 carrossel"], price: "R$ 370" },
    ],
  },
  {
    group: "Premium",
    pkgs: [
      { name: "Premium", items: ["15 fotos", "2 Reels", "1 carrossel", "2 posts", "1 story"], price: "R$ 420", featured: true },
    ],
  },
];

const social: Pkg[] = [
  { name: "Plano Mensal 1", items: ["1 Reel por mês", "1 carrossel", "3 posts", "12 Stories"], price: "R$ 290" },
  { name: "Plano Mensal 2", items: ["2 Reels", "2 carrosséis", "5 posts", "15 Stories"], price: "R$ 390", featured: true },
];

const branding: Pkg[] = [
  { name: "Projeto de Branding", items: ["Logo", "Identidade visual", "Instagram preparado", "E outros itens"], price: "R$ 450" },
  { name: "Rebranding", items: ["Análise da identidade atual", "Redesign da marca", "Logo principal + variações", "Paleta de cores", "Tipografia", "Elementos gráficos", "Direcionamento visual para redes sociais"], price: "R$ 530" },
];

const avulsos = [
  { name: "7 fotos profissionais", price: "R$ 150" },
  { name: "2 Reels", price: "R$ 180" },
  { name: "5 fotos profissionais e 1 Reel", price: "R$ 200" },
];

const nav = [
  { id: "fotografia", label: "Fotografia" },
  { id: "social", label: "Social Media" },
  { id: "branding", label: "Branding" },
  { id: "avulsos", label: "Avulsos" },
  { id: "trabalhos", label: "Trabalhos" },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold uppercase leading-none ${className}`}>
      ANNA{" "}
      <span className="font-medium normal-case italic tracking-normal">Memoire</span>
    </span>
  );
}

function SectionHeader({ n, title, subtitle }: { n: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12 flex items-end justify-between gap-6 border-b border-foreground pb-5">
      <div>
        <h2 className="font-display text-4xl font-semibold uppercase tracking-wide md:text-6xl">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <span className="font-display text-3xl italic text-muted-foreground md:text-4xl">{n}</span>
    </div>
  );
}

function PackageCard({ pkg, suffix }: { pkg: Pkg; suffix?: string }) {
  return (
    <article
      className={`group relative flex flex-col border p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
        pkg.featured ? "border-foreground bg-primary text-primary-foreground" : "border-border bg-card"
      }`}
    >
      {pkg.featured && (
        <span className="absolute -top-3 left-8 bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
          Mais completo
        </span>
      )}
      <h3 className="font-display text-3xl font-semibold">{pkg.name}</h3>
      <ul className={`mt-6 flex-1 space-y-2.5 text-sm ${pkg.featured ? "opacity-80" : "text-muted-foreground"}`}>
        {pkg.items.map((i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 h-px w-3 shrink-0 bg-gold" />
            {i}
          </li>
        ))}
      </ul>
      <div className={`mt-8 border-t pt-6 ${pkg.featured ? "border-primary-foreground/20" : ""}`}>
        <span className="font-display text-4xl font-semibold">{pkg.price}</span>
        {suffix && <span className="font-display text-xl italic opacity-70">{suffix}</span>}
      </div>
    </article>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Logo ANNA Memoire"
              width={64}
              height={64}
              className="h-9 w-9 object-cover"
            />
            <Wordmark className="text-xl tracking-[0.12em]" />
          </a>
          <nav className="hidden gap-7 text-xs font-medium uppercase tracking-[0.2em] lg:flex">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Orçamento
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-gold">Serviços & Orçamentos</p>
          <h1 className="animate-fade-up-delay mt-6 font-display text-6xl font-bold leading-[0.95] md:text-8xl">
            ANNA
            <span className="block font-medium italic tracking-normal">Memoire</span>
          </h1>
          <p className="animate-fade-up-delay mt-4 font-display text-2xl italic text-muted-foreground md:text-3xl">
            conteúdo que faz sua marca ser vista.
          </p>
          <p className="animate-fade-up-delay-2 mt-8 max-w-md leading-relaxed text-muted-foreground">
            Fotografia profissional, gestão de redes sociais e identidade visual — pensados para dar presença e personalidade ao seu negócio.
          </p>
          <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-4">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Conhecer os trabalhos
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Fale comigo
            </a>
          </div>
        </div>
        <div className="animate-fade-up-delay relative mx-auto w-full max-w-md">
          <div className="absolute -bottom-4 -left-4 h-full w-full border border-gold" />
          <img
            src={logoAsset.url}
            alt="Logo ANNA Memoire"
            width={852}
            height={873}
            className="relative aspect-square w-full object-cover"
          />
        </div>
      </section>

      <main className="mx-auto max-w-6xl space-y-28 px-6 pb-24">
        <section id="fotografia" className="scroll-mt-24">
          <SectionHeader n="01" title="Fotografia & Conteúdo" />
          <div className="space-y-14">
            {fotografia.map((g) => (
              <div key={g.group}>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{g.group}</p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {g.pkgs.map((p) => <PackageCard key={g.group + p.name} pkg={p} />)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="social" className="scroll-mt-24">
          <SectionHeader n="02" title="Social Media" subtitle="Planos mensais de produção de conteúdo" />
          <div className="grid gap-6 md:grid-cols-2">
            {social.map((p) => <PackageCard key={p.name} pkg={p} suffix="/mês" />)}
          </div>
        </section>

        <section id="branding" className="scroll-mt-24">
          <SectionHeader n="03" title="Branding" subtitle="Identidade visual que comunica quem você é" />
          <div className="grid gap-6 md:grid-cols-2">
            {branding.map((p) => <PackageCard key={p.name} pkg={p} />)}
          </div>
        </section>

        <section id="avulsos" className="scroll-mt-24">
          <SectionHeader n="04" title="Avulsos" />
          <div className="divide-y divide-border border border-border bg-card">
            {avulsos.map((a) => (
              <div key={a.name} className="flex items-center justify-between gap-6 px-8 py-6 transition-colors hover:bg-secondary">
                <span className="font-display text-2xl font-semibold">{a.name}</span>
                <span className="font-display text-3xl font-semibold">{a.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="trabalhos" className="scroll-mt-24">
          <SectionHeader n="05" title="Trabalhos" subtitle="Uma amostra do que já criei" />
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 h-full w-full border border-gold" />
              <img
                src={patternAsset.url}
                alt="Padrão de monogramas ANNA Memoire"
                width={1080}
                height={1350}
                className="relative aspect-[4/5] w-full object-cover"
              />
            </div>
            <div>
              <p className="leading-relaxed text-muted-foreground">
                Cada projeto começa com uma conversa: entender a sua marca, o seu tom e o que você quer mostrar.
                A partir daí, fotografo e produzo conteúdo com coerência visual — para que o seu perfil conte uma
                história só sua.
              </p>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block border border-foreground px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Ver no Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Contato */}
      <section id="contato" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Vamos criar juntos</p>
          <h2 className="mt-6 font-display text-5xl font-semibold md:text-6xl">Pronta para ser vista?</h2>
          <p className="mx-auto mt-6 max-w-lg leading-relaxed opacity-75">
            Valores de lançamento. Consulte disponibilidade e condições — entre em contato para montar o pacote ideal para a sua marca.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Falar no WhatsApp
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-foreground/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:border-primary-foreground"
            >
              Instagram
            </a>
          </div>
          <div className="mx-auto mt-16 flex flex-col items-center gap-5">
            <img
              src={logoAsset.url}
              alt="Logo ANNA Memoire"
              width={852}
              height={873}
              className="h-28 w-28 border border-primary-foreground/20 object-cover"
            />
            <Wordmark className="text-3xl tracking-[0.1em]" />
            <p className="font-display text-lg italic opacity-70">conteúdo que faz sua marca ser vista.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
