export interface Project {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  preview: string;
  tech: string[];
  links: {
    website: string;
    github: string;
    video: string;
  };
  color: string;
}

export const projects: Project[] = [
  {
    id: "crypto-tracker",
    subtitle: "Crypto Tracker Application",
    title: "CoinSight",
    description:
      "Crypto Tracker is a web application that enables users to monitor real-time cryptocurrency prices and trends with CoinGecko API integration. Users can search and explore thousands of coins, view interactive historical price charts, and manage a personalized watchlist to keep track of their favorite cryptocurrencies. With Firebase Firestore handling authentication and data storage, and a sleek interface built using React.js and Material-UI, the app offers a smooth and responsive user experience.",
    preview: "https://prashant-vish.github.io/crypto-tracker/",
    tech: [
      "React",
      "API Integrations",
      "Firebase",
      "Javascript",
      "Material UI",
      "github-pages",
    ],
    links: {
      website: "https://prashant-vish.github.io/crypto-tracker/",
      github: "https://github.com/prashant-vish/crypto-tracker",
      video:
        "https://www.linkedin.com/feed/update/urn:li:activity:7289009539171946496/",
    },
    color: "from-[#10B981] to-[#059669]",
  },
  {
    id: "sentix-ai",
    subtitle: "Youtube Comment Analyzer",
    title: "Sentix AI",
    description:
      "YouTube Comment Analyzer is a web application that allows users to analyze comments from any YouTube video by extracting and visualizing key insights such as sentiment analysis, keyword frequency, and engagement metrics. Built with React.js for the frontend and powered by the YouTube Data API, the app processes large volumes of comments to identify patterns in viewer feedback. Users can gain quick overviews through data visualizations, sentiment breakdowns, and word clouds, making it a powerful tool for content creators, marketers, and researchers.",
    preview: "https://yt-comment-analyzer-psi.vercel.app/",
    tech: [
      "Typescript",
      "Tailwind CSS",
      "Shad-CN",
      "React",
      "Node.js",
      "MonogDb",
      "Express.js",
      "GeminiAI",
      "Vercel",
    ],
    links: {
      website: "https://yt-comment-analyzer-psi.vercel.app/",
      github: "https://github.com/prashant-vish/yt-comment-analyzer",
      video: "https://www.loom.com/share/6c68dd448db545dab22d0d8872035bc5",
    },
    color: "from-[#10B981] to-[#059669]",
  },
];
