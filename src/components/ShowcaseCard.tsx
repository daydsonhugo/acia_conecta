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
    <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-conecta-100 bg-white shadow-panel">
      <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-conecta-50 to-white">
        <img src={member.image} alt={member.name} className="h-full w-full object-contain p-6" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-3xl font-semibold text-conecta-900">{member.name}</h3>
        <p className="mt-2 text-base italic text-conecta-600">{member.tagline}</p>
        <p className="mt-4 flex-1 text-sm leading-7 text-conecta-700">{member.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {member.links.map((link) => (
            <a
              key={`${member.id}-${link.type}-${link.url}`}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-conecta-100 bg-conecta-50 text-conecta-700 transition hover:border-conecta-300 hover:bg-conecta-100 hover:text-conecta-900"
            >
              {iconByType[link.type]}
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
