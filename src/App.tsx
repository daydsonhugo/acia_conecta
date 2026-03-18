import {
  ArrowRight,
  Building2,
  GraduationCap,
  Handshake,
  Menu,
  Sparkles,
  Store,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

import { BoardCard } from "./components/BoardCard";
import { BrandMark } from "./components/BrandMark";
import { SectionHeading } from "./components/SectionHeading";
import { ShowcaseCard } from "./components/ShowcaseCard";
import { boardMembers, boardPeriod } from "./data/board";
import {
  aboutData,
  aciaSiteUrl,
  benefits,
  heroData,
  membershipFormUrl,
  navigationLinks,
} from "./data/home";
import { showcaseMembers } from "./data/showcase";

const benefitIcons = {
  graduation: GraduationCap,
  handshake: Handshake,
  store: Store,
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", ...new Set(showcaseMembers.map((member) => member.category))];
  const filteredShowcaseMembers =
    selectedCategory === "Todos"
      ? showcaseMembers
      : showcaseMembers.filter((member) => member.category === selectedCategory);

  return (
    <div className="min-h-screen bg-sand text-ink">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-conecta-900/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>
            <BrandMark light />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/75 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={membershipFormUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-conecta-900 transition hover:bg-conecta-100"
            >
              Entrar no grupo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label="Abrir menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-white/10 px-6 pb-5 md:hidden">
            <nav className="flex flex-col gap-4 pt-5">
              {navigationLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/75"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={membershipFormUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-conecta-900"
              >
                Entrar no grupo
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden bg-conecta-900">
          <div className="absolute inset-0">
            <img
              src={heroData.backgroundImage}
              alt="Networking do ACIA Conecta"
              className="h-full w-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,139,89,0.35),transparent_32%),linear-gradient(135deg,rgba(6,20,15,0.97),rgba(2,108,62,0.78))]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pb-24 lg:pt-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-conecta-100 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                {heroData.badge}
              </div>

              <h1 className="mt-8 font-display text-5xl font-semibold leading-none text-white md:text-7xl">
                {heroData.title}
                <span className="mt-3 block text-conecta-200">{heroData.accent}</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white md:text-xl">
                {heroData.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#vitrine"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-conecta-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-conecta-400"
                >
                  Ver vitrine
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={membershipFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:bg-white/20"
                >
                  Quero ser membro
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 text-white shadow-soft backdrop-blur">
                <p className="text-xs uppercase tracking-[0.28em] text-conecta-100">Panorama</p>
                <p className="mt-4 font-display text-5xl font-semibold">
                  {boardMembers.length}
                </p>
                <p className="mt-2 text-sm text-white/75">Lideranças ativas na diretoria.</p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 text-white shadow-soft backdrop-blur">
                <p className="text-xs uppercase tracking-[0.28em] text-conecta-100">Vitrine</p>
                <p className="mt-4 font-display text-5xl font-semibold">
                  {showcaseMembers.length}
                </p>
                <p className="mt-2 text-sm text-white/75">Negócios prontos para contato.</p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white to-conecta-100 p-6 text-conecta-900 shadow-soft sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-conecta-900 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-conecta-700">
                      Hub empresarial
                    </p>
                    <p className="font-display text-2xl font-semibold">Presença forte no digital</p>
                  </div>
                </div>
                <p className="mt-5 max-w-xl text-sm leading-7 text-conecta-800">
                  Uma base moderna, responsiva e pronta para evoluir com backend, painel de gestão
                  e conteúdo dinâmico.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-conecta-900 p-6 shadow-soft md:p-8">
            <div className="absolute inset-0 bg-glow opacity-80" />
            <div className="relative flex min-h-[22rem] items-center justify-center rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur md:p-8">
              <div className="mx-auto w-full max-w-[20rem] overflow-hidden rounded-[1.75rem] bg-white/95 px-6 py-5 shadow-[0_24px_60px_rgba(6,20,15,0.28)]">
                <img
                  src="/images/logo_acia_conecta.png"
                  alt="Marca ACIA Conecta"
                  className="mx-auto h-auto w-full max-w-[15rem] rounded-[1.25rem] object-contain"
                />
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Sobre o núcleo"
              title={aboutData.title}
              description={aboutData.description}
            />

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefitIcons[benefit.icon];

                return (
                  <article
                    key={benefit.id}
                    className="rounded-[1.75rem] border border-conecta-100 bg-white p-6 shadow-panel"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-conecta-50 text-conecta-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-conecta-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-conecta-700">
                      {benefit.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="diretoria"
          className="scroll-mt-28 bg-[linear-gradient(180deg,#f3f1ea_0%,#eef8f2_100%)]"
        >
          <div className="section-shell">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Diretoria executiva"
                title="Lideranças que fazem o ACIA Conecta acontecer"
                description="Uma gestão com visão institucional, relacionamento e execução para fortalecer o ecossistema empresarial de Araguari."
              />
              <div className="inline-flex self-start rounded-full border border-conecta-200 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-conecta-700">
                {boardPeriod}
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {boardMembers.map((member) => (
                <BoardCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        <section id="vitrine" className="scroll-mt-28 bg-conecta-900">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Vitrine de negócios"
              title="Conecte-se com serviços e empresas do grupo"
              description="Uma experiência mais clara para apresentar cada membro, destacar diferenciais e facilitar o contato em qualquer tela."
              light
            />

            <div className="mt-10 flex flex-wrap gap-3">
              {categories.map((category) => {
                const active = category === selectedCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                      active
                        ? "bg-white text-conecta-900"
                        : "border border-white/15 bg-white/10 text-white/80 hover:bg-white/20"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-2">
              {filteredShowcaseMembers.map((member) => (
                <ShowcaseCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-shell">
          <div className="grid gap-8 overflow-hidden rounded-[2.5rem] bg-conecta-900 px-6 py-8 shadow-soft md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-10">
            <div>
              <SectionHeading
                eyebrow="Próximo passo"
                title="Sua empresa merece um lugar visível nessa rede"
                description="Se a ideia é transformar esse site em uma plataforma mais robusta depois, essa base já está pronta para receber API, autenticação e painel administrativo."
                light
              />
            </div>

            <div className="flex flex-col gap-4 self-center">
              <a
                href={membershipFormUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-conecta-900 transition hover:bg-conecta-100"
              >
                Preencher inscrição
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={aciaSiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/15"
              >
                Visitar site da ACIA
                <Users className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-conecta-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <BrandMark />
          <div className="text-sm leading-7 text-conecta-700">
            <p>&copy; 2026 ACIA Conecta - Araguari/MG.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
