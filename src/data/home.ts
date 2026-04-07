import { Benefit } from "../types/content";

export const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "Diretoria", path: "/diretoria" },
  { label: "Vitrine", path: "/vitrine" },
];

export const heroData = {
  badge: "ACIA ARAGUARI",
  title: "Conectando Negócios,",
  accent: "Fortalecendo Empresas.",
  description:
    "O ACIA Conecta é um ambiente onde grandes empresários de Araguari se encontram, trocam experiências e colaboram para o crescimento mútuo.",
  // backgroundImage: "/assets/images/acia-network.jpg",
     backgroundImage: "/images/ConexaoAnderson.jpg",
};

export const aciaSiteUrl = "https://www.aciaaraguari.com.br";
export const membershipFormUrl = "https://forms.gle/5r9K65P2j93dkn1h6";

export const aboutData = {
  title: "O que é o ACIA Conecta?",
  description:
    "Nascido dentro da Associação Comercial e Industrial de Araguari, nosso grupo reúne empresários locais que buscam crescimento e colaboração.",
};

export const benefits: Benefit[] = [
  {
    id: "networking",
    title: "Networking Qualificado",
    description: "Networking Qualificado",
    icon: "handshake",
  },
  {
    id: "education",
    title: "Educação Executiva",
    description: "Educação Executiva",
    icon: "graduation",
  },
  {
    id: "showcase",
    title: "Vitrine Exclusiva de Serviços",
    description: "Vitrine Exclusiva de Serviços",
    icon: "store",
  },
];
