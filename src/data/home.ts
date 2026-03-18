import { Benefit } from "../types/content";

export const navigationLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Diretoria", href: "#diretoria" },
  { label: "Vitrine", href: "#vitrine" },
  { label: "Contato", href: "#contato" },
];

export const heroData = {
  badge: "ACIA ARAGUARI",
  title: "Conectando negócios,",
  accent: "fortalecendo empresas.",
  description:
    "O ACIA Conecta é o hub oficial de networking da ACIA para empresários e prestadores de serviço de Araguari gerarem relacionamento, visibilidade e novas oportunidades.",
  backgroundImage: "/assets/images/acia-network.jpg",
};

export const aciaSiteUrl = "https://www.aciaaraguari.com.br";
export const membershipFormUrl = "https://forms.gle/5r9K65P2j93dkn1h6";

export const aboutData = {
  title: "Uma comunidade empresarial pensada para crescer junto",
  description:
    "Nascido dentro da Associação Comercial e Industrial de Araguari, o ACIA Conecta reúne profissionais e empresas locais com um objetivo comum: gerar valor real por meio de relacionamento, educação e presença de mercado.",
};

export const benefits: Benefit[] = [
  {
    id: "networking",
    title: "Networking qualificado",
    description:
      "Encontros e conexões com empresários que abrem portas para parceria, indicação e novos negócios.",
    icon: "handshake",
  },
  {
    id: "education",
    title: "Educação executiva",
    description:
      "Troca de experiência e aprendizado contínuo para fortalecer gestão, estratégia e posicionamento.",
    icon: "graduation",
  },
  {
    id: "showcase",
    title: "Vitrine exclusiva",
    description:
      "Um espaço digital para destacar serviços, diferenciais e canais de contato dos membros do grupo.",
    icon: "store",
  },
];
