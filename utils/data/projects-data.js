import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "AI Content Generator",
    description:
      "I built an AI-powered content generator. I have developed API using NextJS, Typescript, Google Gemini, PostgreSQL. Integrated API-driven workflows for seamless data handling and content creation. Ensured scalability and optimized performance for handling large volumes of content requests. Developed a secure payment gateway page using Razorpay to handle transactions for content generation services.",
    tools: [
      "NextJS",
      "PostgreSQL",
      "Gemini 1.5 API",
      "Tailwind-CSS",
      "Drizzle",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "HeisenBerg Blog",
    description:
      "I have designed and developed a full-stack blog platform with support for interactive content and custom formatting. Implemented advanced content management features, including server-side rendering for better SEO. Focused on scalability and maintainability, allowing for easy content updates and database management.",
    tools: [
      "NextJS",
      "Tailwind CSS",
      "TypeScript",
      "PostgreSQL",
      "MDX",
      "Prisma",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Flow Tube",
    description:
      "I built a video streaming platform with real-time search and recommendation features. Built an intuitive user interface focused on smooth video browsing and user engagement. Designed the application to support high user traffic with efficient data retrieval and storage methods.",
    tools: [
      "React",
      "Bootstrap",
      "Express",
      "Javascript",
      "MongoDB",
      "RapidAPI",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
];
