import { BoardMember } from "../types/content";

type BoardCardProps = {
  member: BoardMember;
};

export function BoardCard({ member }: BoardCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-conecta-100 bg-white shadow-panel transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[4/4.75] overflow-hidden bg-[radial-gradient(circle_at_top,#eef8f2_0%,#d7efdf_40%,#c4e4d0_100%)]">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-top transition duration-500 hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[1.85rem] font-semibold leading-tight text-conecta-900">
          {member.name}
        </h3>
        <p className="mt-3 text-base italic text-conecta-700">{member.role}</p>
        <p className="mt-5 flex-1 text-sm leading-7 text-conecta-700">{member.bio}</p>
      </div>
    </article>
  );
}
