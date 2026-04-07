import { BoardCard } from "../components/BoardCard";
import { ScrollReveal } from "../components/ScrollReveal";
import { boardMembers, boardPeriod } from "../data/board";

export function BoardPage() {
  return (
    <section className="page-shell bg-[linear-gradient(180deg,#f3f1ea_0%,#eef8f2_100%)]">
      <div className="section-shell">
        <ScrollReveal as="header" className="border-b border-conecta-100 pb-12 text-center">
          <h1 className="font-display text-4xl font-semibold leading-tight text-conecta-900 md:text-6xl">
            Diretoria Executiva
            <br />
            ACIA Conecta
          </h1>
          <p className="mt-5 text-lg text-conecta-700">{boardPeriod}</p>
        </ScrollReveal>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {boardMembers.map((member, index) => (
            <ScrollReveal
              key={member.id}
              delay={(index % 3) * 90}
              className="h-full self-stretch"
            >
              <BoardCard member={member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
