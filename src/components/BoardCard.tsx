import { BoardMember } from "../types/content";

type BoardCardProps = {
  member: BoardMember;
};

export function BoardCard({ member }: BoardCardProps) {
  const [roleTitle, organization] = member.role.split("|").map((value) => value.trim());

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-panel transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(135deg,#06140f_0%,#0d8b59_72%,#b6dfc4_100%)]" />

      <div className="relative p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex rounded-full border border-white/10 bg-white/12 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
            Liderança
          </span>
          {organization ? (
            <span className="inline-flex rounded-full bg-white/90 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-conecta-700 shadow-[0_10px_24px_rgba(6,20,15,0.12)]">
              {organization}
            </span>
          ) : null}
        </div>

        <div className="mt-5 overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-[0_22px_44px_rgba(6,20,15,0.14)] ring-1 ring-conecta-100/80">
          <div className="aspect-[4/4.75] overflow-hidden rounded-[1.35rem] bg-[radial-gradient(circle_at_top,#eef8f2_0%,#d7efdf_40%,#c4e4d0_100%)]">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#f8faf8_0%,#ffffff_100%)] p-6 ring-1 ring-conecta-100/80">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-conecta-600">
            {roleTitle}
          </p>
          <h3 className="mt-3 font-display text-[1.85rem] font-semibold leading-tight text-conecta-900">
            {member.name}
          </h3>
          <div className="mt-4 h-px w-full bg-[linear-gradient(90deg,#0d8b59_0%,#d7efdf_48%,transparent_100%)]" />
          <p className="mt-4 text-sm leading-7 text-conecta-700">{member.bio}</p>
        </div>
      </div>
    </article>
  );
}
