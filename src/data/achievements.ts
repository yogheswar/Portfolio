export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'vit-hackathon-2026',
    year: '2026',
    title: 'Finalist – VIT Hackathon 2026',
    description: "Selected as a finalist at Vellore Institute of Technology's premier hackathon challenge."
  },
  {
    id: 'viyugam-ideathon-2025',
    year: '2025',
    title: 'Winner (1st Prize) – VIYUGAM 2K25 Ideathon',
    description: 'Awarded top prize at PPG Institute of Technology for pitching an innovative startup concept.'
  },
  {
    id: 'kgisl-incubation-2025',
    year: '2025',
    title: 'Shortlisted for Incubation Cell – KGiSL',
    description: 'Selected into the campus incubator program to build and scale entrepreneurial projects.'
  },
  {
    id: 'startup-singam-2025',
    year: '2025',
    title: 'Startup Singam Participant',
    description: 'Pitched project to early-stage venture mentors and angel investors for feedback.'
  },
  {
    id: 'kpr-cicada-2025',
    year: '2025',
    title: 'KPR CICADA Hackathon Participant',
    description: 'Built a rapid prototype targeting social sustainability during the 24-hour innovation challenge.'
  }
];
