export const CATEGORIES = ["projects", "experience"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Post = {
  category: Category;
  date: Date;
  title: string;
  text: string;
  url?: string;
  images?: Image[];
  tags: string[];
};

export type Tag = {
  tag: string;
  title: string;
};

export type Image = {
  src: string;
  alt: string;
};

export const posts: Post[] = [
  {
    category: "projects",
    date: new Date("Oct 17, 2024"),
    title: "runc Shim",
    text: "Created a shim for runc that allows users to run containers with a CLI loosely inspired by containerd.",
    url: "https://github.com/unknown/runc-shim",
    tags: ["Rust", "runc", "Linux"],
  },
  {
    category: "projects",
    date: new Date("July 15, 2024"),
    title: "Rust Executor",
    text: "Built a Rust code playground that allows users to write Rust code and execute it in a sandboxed environment.",
    url: "https://github.com/unknown/executor",
    images: [
      {
        src: "/executor.png",
        alt: "Screenshot of Executor, a Rust code playground.",
      },
    ],
    tags: ["Svelte", "Rust", "Nomad", "Terraform"],
  },
  {
    category: "experience",
    date: new Date("June 2, 2024"),
    title: "Intern at Capital One",
    text: "Started a summer internship at Capital One as a software developer building a chaos testing tool to test the resilience of the company's systems.",
    tags: ["React", "TypeScript", "Python"],
  },
  {
    category: "projects",
    date: new Date("May 5, 2024"),
    title: "JavaScript Compiler",
    url: "https://github.com/unknown/komodo",
    text: "Built a JavaScript compiler that transpiles a subset of JavaScript to C.",
    tags: ["OCaml", "JavaScript", "C"],
  },
  {
    category: "projects",
    date: new Date("Aug 7, 2023"),
    title: "Awardrobe",
    text: "A price tracker that keeps track of when clothes go on sale and come back in stock.",
    url: "https://github.com/unknown/awardrobe-archive",
    tags: ["TypeScript", "Next.js", "MySQL"],
  },
  {
    category: "experience",
    date: new Date("June 29, 2022"),
    title: "Intern at Chariot",
    text: "Started a part-time internship at Chariot, prototyping back-end services to process donations from Donor Advised Funds.",
    url: "https://www.givechariot.com/",
    tags: ["TypeScript"],
  },
  {
    category: "projects",
    date: new Date("Jun 16, 2022"),
    title: "Personal website",
    text: "Designed and built this personal website that features a timeline of my milestones.",
    tags: ["Next.js", "Framer Motion"],
  },
  {
    category: "experience",
    date: new Date("May 23, 2022"),
    title: "Intern at Moore Capital Management",
    text: "Started a summer internship at Moore Capital Management as a software developer on the Portfolio and Risk Team.",
    tags: ["React", "TypeScript", "Python"],
  },
  {
    category: "projects",
    date: new Date("Nov 11, 2019"),
    title: "Dark Patterns Recognition",
    text: "Created a Chrome Extension that identifies and classifies potential dark patterns on the pages of online stores with 97% accuracy.",
    url: "https://github.com/unknown/dark-patterns-recognition",
    tags: ["Python", "JavaScript"],
  },
];
