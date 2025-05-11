export interface Experience {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  preview: string;
  links: {
    website: string;
  };
  color: string;
}

export const experiences: Experience[] = [
  {
    id: "magic-edtech",
    subtitle: "Magic Edtech Pvt Ltd. -> Apr 2025 - Present",
    title: "Software Test Traine(Hybrid)",
    description:
      "As a Software Test Trainee at Magic Edtech, I contributed to the quality assurance process of various web applications. My responsibilities included manual and automated testing, identifying and reporting bugs, and collaborating with development teams to ensure software reliability.",
    preview: "https://www.magicedtech.com/",
    links: {
      website: "https://www.magicedtech.com/",
    },
    color: "from-[#10B981] to-[#059669]",
  },
  {
    id: "code-alpha",
    subtitle: "Code Aplha --> Oct,2023 -Nov,2023",
    title: "Developer Intern(Remote)",
    description: `Developed fast, scalable web applications using HTML, CSS, JavaScript, and React, ensuring responsive design and cross-browser compatibility.

    Implemented optimized front-end architecture and reusable components, significantly reducing load times and improving maintainability.

    Applied industry-standard frameworks and best practices to create user-centric interfaces, resulting in a 30% improvement in performance and enhanced user engagement.

    Focused on clean, semantic code and performance tuning, leading to smoother interactions and quicker initial load experiences.

`,
    preview: "https://www.codealpha.tech/",
    links: {
      website: "https://www.codealpha.tech/",
    },
    color: "from-[#10B981] to-[#059669]",
  },
];
