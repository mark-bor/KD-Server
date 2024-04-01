type ProjectData = {
  id: string
  url: string
  github?: string
  title: string
  description: string
  steck: string[]
  status: string
  category: string
  type: string
}

export const PROJECTS: ProjectData[] = [
  { 
    id: "lanze",
    url: "https://lanze.org",
    title: "Lanze",
    description: "Platform for freelancers and work searching that is base on blockchain.",
    steck: ["HTML", "CSS", "SCSS", "TypeScript", "React", "Next", "Redux"],
    status: "in-process",
    category: "commercial",
    type: "other",
  },
  { 
    id: "kitsune-diary",
    url: "https://kitsune-diary.vercel.app",
    github: "https://github.com/mark-bor/Kitsune-Diary",
    title: "Kitsune Diary",
    description: "Personal website with blog and professional information.",
    steck: ["HTML", "CSS", "SCSS", "TypeScript", "React", "Next", "Redux"],
    status: "in-process",
    category: "personal",
    type: "other",
  },
  { 
    id: "generators",
    url: "https://generators-spot.netlify.app/",
    github: "https://github.com/mark-bor/Generators",
    title: "Generators",
    description: "A website with various generators such as passwords, dates and others.",
    steck: ["HTML", "CSS", "TypeScript", "Vue", "Nuxt"],
    status: "in-process",
    category: "pet-project",
    type: "generators",
  },
  { 
    id: "event-timer",
    url: "https://calendar-timer.netlify.app",
    title: "Event Timer",
    description: "Timer for counting time to a certain day or event.",
    steck: ["HTML", "CSS", "JavaScript", "TypeScript", "Vue", "Vite", "Pinia"],
    status: "completed",
    category: "pet-project",
    type: "timers",
  },
  { 
    id: "calculators",
    url: "#",
    title: "Calculators",
    description: "Calculator for counting deposit percent.",
    steck: [],
    status: "in-process",
    category: "pet-project",
    type: "calculators",
  },
  { 
    id: "mobile-app",
    url: "https://expo.dev/@marchi003/MyCV-Application?release-channel=default",
    github: "https://github.com/mark-bor/React-Native-CV-Application",
    title: "Mobile App",
    description: "Mobile app made with React Native. It can be started through Expo.",
    steck: ["JavaScript", "CSS", "React", "React Native", "Expo", "React Navigation"],
    status: "completed",
    category: "pet-project",
    type: "other",
  },
]