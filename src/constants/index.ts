import { TNavLink, TService, TTechnology, TExperience, TTestimonial, TProject } from "../types";
import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, starbucks, tesla, shopify, carrent, jobit, tripguide, threejs, re1, re2, re3, cc1, cc2, cc3, cc4, pp1, pp2, pp3, pp4 } from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Video & Reel Editor",
    icon: backend, // You can change the icon to something more suitable
  },
  {
    title: "Graphic Designer",
    icon: web, // You can change the icon to something more suitable
  },
  {
    title: "Content Writer",
    icon: mobile, // You can change the icon to something more suitable
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Started My Instagram Channel",
    companyName: "@chota.banana",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2025",
    url: "https://www.instagram.com/chota.banana/",
    points: [
      "Started @chota.banana as a creative outlet for humor, memes, and relatable content using trending audios and cultural moments.",
      "Designed and edited short-form memes using tools like CapCut, Canva, InShot, and Photoshop to build punchy, scroll-stopping content.",
      "Studied meme formats, online behavior, and reel dynamics to learn how to grab attention within the first 3 seconds",
      "Built a consistent posting schedule while exploring tone, style, and audience engagement in a fast-paced content landscape.",
    ],
  },
  {
    title: "1M+ Views on a Meme Reel",
    companyName: "@chota.banana",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "3 March 2025",
    url: "https://www.instagram.com/reel/DGvWyu2PiSf/",
    points: [
      "A meme reel I created unexpectedly blew up, hitting over 1 million views and sparking thousands of shares, saves, and reactions.",
      "Mixed trending audio with original caption humor and editing timing that hit perfectly with Gen Z & meme lovers.",
      "This reel taught me how simple but relatable storytelling, if well-timed and edited, can connect on a massive scale.",
      "It became a turning point for the channel, growing followers quickly and encouraging me to sharpen my meme editing skills.",
    ],
  },
  {
    title: "Hit 5M+ Views on a Single Meme Reel",
    companyName: "@chota.banana",
    icon: shopify,
    iconBg: "#383E56",
    date: " 5 May 2025",
    url: "https://www.instagram.com/reel/DJO7IaRP2gH/",
    points: [
      "Created a meme reel that skyrocketed to 5 million+ views, becoming one of my most impactful and shared pieces of content.",
      "Blended humor, timing, and a trending clip with fast-paced editing and captions using CapCut and sound syncing.",
      "Learned to analyze reel analytics — retention, drop-off rate, saves — to better understand content performance and viewer behavior.",
      "Boosted channel credibility and visibility, leading to higher engagement, reposts by large pages, and a stronger creative identity",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Their ability to adapt across projects—design, translation, transcription, and more—is exceptional. It's rare to find someone so detail-oriented yet creatively free.",
    name: "Disha",
    designation: "YouTube Channel Manager",
    company: "The wealth biome",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Not only did Manav manage our YouTube uploads and SEO, but they also created compelling thumbnails and edits that boosted our views significantly",
    name: "Prashant",
    designation: "Content Creator",
    company: "chota.banana",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Smart, creative, and super quick— Manav helped me complete a last-minute Canva design and CapCut edit overnight. Lifesaver!",
    name: "Aditya",
    designation: "Freelancer & Small Business Owner",
    company: "primitive",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Graphic & Video Editing Showcase",
    description:
      "A curated collection of creative edits — from high-performing Instagram reels to aesthetic meme formats. This block includes short-form content made for @chota.banana, showcasing my ability to grab attention, sync sound, and tell visual stories using trending formats. Whether it’s high-impact transitions, creative masking, or viral clip timing, these samples reflect my style, humor, and audience insight.",
    tags: [
      {
        name: "capcut",
        color: "blue-text-gradient",
      },
      {
        name: "canva",
        color: "green-text-gradient",
      },
      {
        name: "photoshop",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    images: [carrent, jobit, tripguide],
    sourceCodeLink: "https://drive.google.com/drive/u/0/folders/1U4sL3VHwpIJJikJYo3dYqn6_7cR5I8Md",
  },
  {
    name: "Research Paper: Heavy Metals in Water Sources",
    description:
      "This paper presents findings on heavy metal contamination in local water sources, combining field data, lab testing, and impact analysis. I explored lead, arsenic, and cadmium levels and their long-term health effects. The research focuses on public health relevance, potential mitigation strategies, and policy-level insights — showing my scientific rigor and concern for community welfare.",
    tags: [
      {
        name: "Academic writing",
        color: "blue-text-gradient",
      },
      {
        name: "data analysis",
        color: "green-text-gradient",
      },
      {
        name: "environmental awareness",
        color: "pink-text-gradient",
      },
    ],
    image: re1,
    images: [re1, re2, re3],
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Campus Connect – College Communication Prototype",
    description:
      "An innovative solution designed to simplify communication between students, clubs, and administration. Campus Connect is a concept app prototype that centralizes announcements, event updates, and resources. This block contains wireframes, mockups, and a clickable prototype showing how the platform could streamline college life — from lost notices to missed events.",
    tags: [
      {
        name: "prototyping",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "ideation",
        color: "pink-text-gradient",
      },
    ],
    image: cc1,
    images: [cc1, cc2, cc3, cc4],
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Presentation Design Gallery",
    description:
      "A showcase of clean, visually engaging presentations I’ve designed for academic and personal projects. These decks combine effective storytelling, visual balance, and design consistency. You'll find slides that explain concepts with clarity, use icons and typography wisely, and follow branding principles — perfect for pitching ideas, reports, or teaching.",
    tags: [
      {
        name: "PowerPoint",
        color: "blue-text-gradient",
      },
      {
        name: "layout design",
        color: "green-text-gradient",
      },
      {
        name: "visual communication",
        color: "pink-text-gradient",
      },
    ],
    image: pp1,
    images: [pp1, pp2, pp3, pp4],
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
