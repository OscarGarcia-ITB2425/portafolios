import { 
  Server, 
  Code, 
  Network, 
  Cloud, 
  Database, 
  Github, 
  Book, 
  Calculator, 
  Mail, 
  Phone, 
  MapPin, 
  FileText 
} from 'lucide-react';
import { Skill, Project, Experience, ContactMethod } from './types';

export const HERO_DATA = {
  name: "Òscar García Fernán",
  role: "Administrador de Sistemas i Xarxes",
  titles: [
    "SysAdmin",
    "Cybersecurity Enthusiast",
    "Network Engineer",
    "Automation Lover"
  ]
};

export const ABOUT_DATA = {
  intro: "Tecnic Superior d'Administració de Sistemes i Xarxes amb passió per la tecnologia i la ciberseguretat. Concretament m'agrada molt el món de la criptografia i el pentesting. Aprofito el meu temps lliure a construir projectes relacionats amb el món ciber.",
  goals: "M'estic formant en el camp de la criptografia aplicada a les tecnologies blockchain. A nivell personal també tinc un gran interès en la Intel·ligència Artificial amb projectes d'automatització en n8n i altres frameworks d'automatització amb IA."
};

export const SKILLS_DATA: Skill[] = [
  {
    name: "Sistemes Windows y Linux",
    icon: Server,
    items: [
      "Gestió de Usuaris y Polítiques",
      "Instalació i manteniment",
      "Active Directory, Samba y SambaAD",
      "Automatizació de tascas",
      "Administració de procesos i remota"
    ]
  },
  {
    name: "Programació",
    icon: Code,
    items: [
      "Python",
      "Bash",
      "PowerShell"
    ]
  },
  {
    name: "Xarxas",
    icon: Network,
    items: [
      "TCP/IP",
      "Routing",
      "Subnetting"
    ]
  },
  {
    name: "Cloud",
    icon: Cloud,
    items: [
      "AWS",
      "AZURE"
    ]
  },
  {
    name: "Bases de Dades",
    icon: Database,
    items: [
      "MySQL",
      "PostgreSQL"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Mi GitHub",
    description: "Veure tots els meus repositoris.",
    link: "https://github.com/OscarGarcia-ITB2425",
    icon: Github,
    isGithub: true
  },
  {
    title: "Projecto AWS",
    description: "Implementacion de servicios como Nginx, MySQL, Streaming...",
    link: "https://github.com/MarcCaNadas-ITB2425/pro-asixc1b-g1-",
    icon: Book,
    tags: ["AWS", "Nginx", "Linux"]
  },
  {
    title: "Calculadora de Consum",
    description: "Eina pel cálcul de consum energétic.",
    link: "https://github.com/OscarGarcia-ITB2425/Calculadora_de_Consumo_ITB",
    icon: Calculator,
    tags: ["Python", "Utility"]
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    date: "2024 - Actual",
    title: "Cicle superior de ASIX",
    description: "Cicle d'Administración de Sistemas Informátics i Xarxes.",
    institution: "ITB - Institut Tecnològic de Barcelona"
  },
  {
    date: "2022 - 2024",
    title: "Bachillerat Tecnologic",
    description: "Estudis de Baxillerat amb grans capacitats en Fissica, Matematiques i Tecnologia industrial, a mes de introducio a la programacio i la robotica.",
    institution: "Institut Gabriela Mistral"
  }
];

export const CONTACT_DATA: ContactMethod[] = [
  {
    title: "Correu Electrónic",
    value: "oscargarfer06@gmail.com",
    href: "mailto:oscargarfer06@gmail.com",
    icon: Mail
  },
  {
    title: "Teléfon",
    value: "+34 650 72 23 32",
    href: "tel:+34650722332",
    icon: Phone
  },
  {
    title: "Ubicació",
    value: "Barcelona, España",
    href: "#",
    icon: MapPin
  },
  {
    title: "Currículum Vitae",
    value: "Ver/Descaregar CV",
    href: "public/CV_Oscar_Tecnico_Ciberseguridad.pdf",
    icon: FileText,
    isDownload: true
  }
];