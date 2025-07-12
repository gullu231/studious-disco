type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Manav Mahawar — 3D Portfolio",
    fullName: "Manav Mahawar",
    email: "johndoe@mail.com", // Update email if needed
  },
  hero: {
    name: "Manav Mahawar",
    p: [
      "I’m a multidisciplinary creative specializing in design, writing, and digital media.",
      "I bring ideas to life through visuals, words, and content that connects."
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I’m a passionate and multi-skilled creative professional with experience in graphic design, content writing, creative writing, video editing, reel editing, channel management, translation, transcription, image processing, and copywriting. I love blending visuals and words to tell stories, spark emotions, and communicate ideas effectively. Whether it's designing a poster, editing a video, writing content, or managing digital platforms, I bring creativity, attention to detail, and a fresh perspective to every project. I'm always eager to learn and explore new styles and tools. Currently, I’m looking for internship opportunities where I can grow, collaborate, and contribute to meaningful creative work.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Explore a selection of my creative projects showcasing my skills in graphic design, content writing, video editing, reel creation, creative storytelling, and more. Each project reflects my passion for visual communication, strong attention to detail, and ability to craft engaging content for digital platforms.`,
    },
  },
};
