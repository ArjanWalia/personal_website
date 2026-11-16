/** Technical skills, grouped by area. Shown under the portfolio, above Awards. */
/** `headingEs` and `skillsEs` are the Spanish versions; skillsEs falls back to `skills` when the names are the same. */
export const skillGroups: { heading: string; headingEs: string; skills: string[]; skillsEs?: string[] }[] = [
  {
    heading: "Software Engineering",
    headingEs: "Ingeniería de software",
    skills: ["Python", "JavaScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "HTML", "FastAPI", "Blockchain Infrastructure"],
    skillsEs: ["Python", "JavaScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "HTML", "FastAPI", "Infraestructura blockchain"],
  },
  {
    heading: "AI & Security",
    headingEs: "IA y seguridad",
    skills: [
      "Autonomous Agent Orchestration",
      "AI-native Product Development",
      "LLM Security",
      "Data Exfiltration Defense",
      "Prompt Injection Mitigation",
    ],
    skillsEs: [
      "Orquestación de agentes autónomos",
      "Desarrollo de productos nativos de IA",
      "Seguridad de LLM",
      "Defensa contra la exfiltración de datos",
      "Mitigación de inyección de prompts",
    ],
  },
  {
    heading: "Hardware & ML",
    headingEs: "Hardware y aprendizaje automático",
    skills: ["Machine Learning", "Deep Learning", "Arduino"],
    skillsEs: ["Aprendizaje automático", "Aprendizaje profundo", "Arduino"],
  },
  {
    heading: "Libraries",
    headingEs: "Bibliotecas",
    skills: ["PyTorch", "NumPy", "Pandas"],
  },
  {
    heading: "Cloud & Developer Tools",
    headingEs: "Nube y herramientas de desarrollo",
    skills: ["AWS", "LiveKit", "GCP", "GitHub", "AI coding tools"],
    skillsEs: ["AWS", "LiveKit", "GCP", "GitHub", "Herramientas de programación con IA"],
  },
];
