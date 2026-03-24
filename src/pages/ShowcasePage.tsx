import { ScrollReveal } from "../components/ScrollReveal";
import { ShowcaseCard } from "../components/ShowcaseCard";
import { showcaseMembers } from "../data/showcase";

export function ShowcasePage() {
  return (
    <section className="page-shell bg-conecta-900">
      <div className="section-shell">
        <ScrollReveal as="header" className="border-b border-white/10 pb-12 text-center">
          <h1 className="font-display text-4xl font-semibold tracking-[0.03em] text-white md:text-6xl">
            VITRINE DE NEGÓCIOS
          </h1>
          <p className="mt-5 text-lg text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.18)]">
            Conectando os melhores profissionais de Araguari
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {showcaseMembers.map((member, index) => (
            <ScrollReveal
              key={member.id}
              delay={(index % 2) * 90}
              className="h-full"
            >
              <ShowcaseCard member={member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
