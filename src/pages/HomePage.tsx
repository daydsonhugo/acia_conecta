import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import { ScrollReveal } from "../components/ScrollReveal";
import { aciaSiteUrl, benefits, heroData, membershipFormUrl } from "../data/home";

import { Instagram } from "lucide-react";

export function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[calc(100svh-81px)] items-center overflow-hidden bg-conecta-900">
        <div className="absolute inset-0">
          <img
            src={heroData.backgroundImage}
            alt="Networking do ACIA Conecta"
            className="h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,139,89,0.18),transparent_24%),linear-gradient(135deg,rgba(3,12,9,0.985),rgba(4,34,22,0.95)_52%,rgba(3,61,39,0.92)_100%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-16 lg:pb-24 lg:pt-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <a
              href={aciaSiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/18 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition hover:border-white/30 hover:text-white"
            >
              {heroData.badge}
            </a>

            <h1 className="mt-8 max-w-[13ch] font-display text-5xl font-semibold leading-[0.94] text-white [text-shadow:0_10px_28px_rgba(0,0,0,0.26)] md:text-7xl xl:text-[5.35rem]">
              {heroData.title}
              <span className="mt-3 block text-conecta-100">{heroData.accent}</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.22)] md:text-[1.3rem] md:leading-9">
              {heroData.description}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                to="https://www.instagram.com/acia_conecta/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-conecta-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-conecta-400"
              >
                <Instagram className="h-4 w-4" />
                Nosso Instagram
              </Link>
              <Link
                to="/diretoria"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-conecta-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-conecta-400"
              >
                Diretoria
                {/* <ArrowRight className="h-4 w-4" /> */}
              </Link>   
              <Link
                to="/vitrine"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-conecta-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-conecta-400"
              >
                Vitrine de Membros
                {/* <ArrowRight className="h-4 w-4" /> */}
              </Link>              
              <a
                href={membershipFormUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white/35 hover:text-white"
              >
                Quero ser Membro
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <ScrollReveal className="section-shell grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight text-conecta-900 md:text-5xl">
              O que é o <span className="text-conecta-600">ACIA Conecta?</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-conecta-700 md:text-lg">
              Nascido dentro da Associação Comercial e Industrial de Araguari, nosso grupo reúne
              os maiores empresários locais com um objetivo comum:{" "}
              <strong>crescer juntos.</strong>
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit.id} className="flex items-start gap-3 text-conecta-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-conecta-500" />
                  <span className="text-base font-medium">{benefit.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[2.25rem] border border-conecta-100 bg-conecta-50 shadow-panel">
            <img
              src={heroData.backgroundImage}
              alt="Networking"
              className="h-full w-full object-cover"
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-conecta-900">
        <ScrollReveal className="section-shell text-center">
          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
            Faça parte do ACIA Conecta
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.18)] md:text-lg">
            Sua empresa merece destaque no grupo empresarial que mais cresce em Araguari.
          </p>
          <a
            href={membershipFormUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-conecta-900 transition hover:bg-conecta-100"
          >
            Preencher Formulário de Inscrição
            <ArrowRight className="h-4 w-4" />
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
