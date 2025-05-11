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
  // {
  //   id: "Xoerox",
  //   subtitle: "An AI based OCR tool",
  //   title: "Xoerox AI",
  //   description:
  //     "XOEROX AI is a document processing application that helps in conversion of unstructured data to structure data using Optical Character Recognition (OCR) as well as Open AI for enhanced text extraction and formatting. It allows users to upload PDF files, process them to extract text, and convert the text into structured Markdown as well as in JSON.",
  //   preview: "https://xoerox.vercel.app/",
  //   tech: [
  //     "Express.js",
  //     "React",
  //     "Node.js",
  //     "TypeScript",
  //     "Optimal Character Recognition (OCR)",
  //     "OpenAI",
  //     "Vercel",
  //   ],
  //   links: {
  //     website: "https://xoerox.vercel.app/",
  //     github: "https://github.com/samrathreddy/XOEROX",
  //     video: "https://www.loom.com/share/52583e6b1b684f6b8570b6751e286809",
  //   },
  //   color: "from-[#4F46E5] to-[#7C3AED]",
  // },
  // {
  //   id: "Unipay",
  //   subtitle: "University Fee Payment Platform",
  //   title: "Unipay",
  //   description:
  //     "A comprehensive and user-friendly fee payment platform designed specifically for university students. This application streamlines the fee payment process and provides fee insights via Discord and payment integration via Razorpay.",
  //   preview: "https://unipay-cvr.vercel.app/",
  //   tech: [
  //     "Express.js",
  //     "React",
  //     "MongoDB",
  //     "JavaScript",
  //     "Razorpay API",
  //     "Discord API",
  //     "Xlsx",
  //     "Security",
  //   ],
  //   links: {
  //     website: "https://unipay-cvr.vercel.app/",
  //     github: "https://github.com/samrathreddy/Unipay/",
  //     video: "https://www.loom.com/share/b5639004dbab48be9184a8f39d17499f?t=21",
  //   },
  //   color: "from-[#FFD700] to-[#FFC000]",
  // },
];
