import { ReactNode } from "react";
import {
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { LinkType, ShowcaseMember } from "../types/content";

type ShowcaseCardProps = {
  member: ShowcaseMember;
};

const iconByType: Record<LinkType, ReactNode> = {
  email: <Mail className="h-4 w-4" />,
  instagram: <Instagram className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  phone: <Phone className="h-4 w-4" />,
  website: <Globe className="h-4 w-4" />,
  whatsapp: <MessageCircle className="h-4 w-4" />,
};

export function ShowcaseCard({ member }: ShowcaseCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-conecta-100 bg-white shadow-panel">
      <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-conecta-50 to-white">
        <img src={member.image} alt={member.name} className="h-full w-full object-contain p-6" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex rounded-full bg-conecta-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
            {member.category}
          </span>
        </div>

        <h3 className="mt-4 font-display text-3xl font-semibold text-conecta-900">
          {member.name}
        </h3>
        <p className="mt-2 text-base font-semibold text-conecta-600">{member.tagline}</p>
        <p className="mt-4 text-sm leading-7 text-conecta-700">{member.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {member.links.map((link) => (
            <a
              key={`${member.id}-${link.type}-${link.url}`}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-conecta-100 bg-conecta-50 px-4 py-2 text-sm font-medium text-conecta-700 transition hover:border-conecta-300 hover:bg-conecta-100 hover:text-conecta-900"
            >
              {iconByType[link.type]}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
