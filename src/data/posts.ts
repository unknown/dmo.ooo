export type Post = {
  date: Date;
  title: string;
  text: string;
  url?: string;
  tags: Tag[];
};

export type Tag = {
  key: string;
  title: string;
  color: string;
};

export const tabs = [
  { key: "all", title: "All" },
  { key: "projects", title: "Projects" },
  { key: "experience", title: "Experience" },
];

export const posts: Post[] = [
  {
    date: new Date("June 2, 2024"),
    title: "Intern at Capital One",
    text: "Started a summer internship at Capital One as a software developer building a chaos testing tool to test the resilience of the company's systems.",
    tags: [{ key: "experience", title: "Started an internship", color: "#FDC70A70" }],
  },
  {
    date: new Date("Aug 7, 2023"),
    title: "Awardrobe",
    text: "Clothes price tracker that keeps track of when clothes go on sale and come back in stock.\nTech stack includes Next.js, MySQL, and Meilisearch.",
    url: "https://github.com/unknown/awardrobe-archive",
    tags: [
      {
        key: "projects",
        title: "Launched a project",
        color: "#04B4FF70",
      },
    ],
  },
  {
    date: new Date("Nov 17, 2022"),
    title: "BUGS @ NYU",
    text: "Designed and built the new BUGS @ NYU website.\nBUGS is NYU’s premier open source club, connecting students to create an inclusive environment to work on projects together.",
    url: "https://bugsnyu.com/",
    tags: [
      {
        key: "projects",
        title: "Built a website",
        color: "#04B4FF70",
      },
    ],
  },
  {
    date: new Date("June 29, 2022"),
    title: "Intern at Chariot",
    text: "Started a part-time internship at Chariot, prototyping back-end services to process donations from Donor Advised Funds.",
    url: "https://www.givechariot.com/",
    tags: [
      {
        key: "experience",
        title: "Started an internship",
        color: "#FDC70A70",
      },
    ],
  },
  {
    date: new Date("Jun 16, 2022"),
    title: "Personal website",
    text: "Designed and built this personal website featuring a timeline of milestones.\nCrafted using Next.js and Framer Motion for animations.",
    tags: [
      {
        key: "projects",
        title: "Built this website",
        color: "#04B4FF70",
      },
    ],
  },
  {
    date: new Date("May 23, 2022"),
    title: "Intern at Moore Capital Management",
    text: "Started a summer internship at Moore Capital Management as a software developer on the Portfolio and Risk Team.",
    tags: [
      {
        key: "experience",
        title: "Started an internship",
        color: "#FDC70A70",
      },
    ],
  },
  {
    date: new Date("Mar 25, 2022"),
    title: "Arithmetic",
    text: "A fast-paced arithmetic drill designed to test mental math.\nBuilt with Next.js interfacing a MySQL database for problem statistics logging.",
    url: "https://arithmetic.dmo.ooo/",
    tags: [
      {
        key: "projects",
        title: "Launched a project",
        color: "#04B4FF70",
      },
    ],
  },
  {
    date: new Date("Nov 11, 2019"),
    title: "Dark Patterns Recognition",
    text: "A Chrome Extension that identifies and classifies potential dark patterns on the pages of online stores with 97% accuracy.\nCreated Chrome Extension front-end using plain JavaScript that interfaced a Python back-end running Naive Bayes Classifiers using Flask and sklearn.",
    url: "https://github.com/unknown/dark-patterns-recognition",
    tags: [
      {
        key: "projects",
        title: "Attended a hackathon",
        color: "#04B4FF70",
      },
    ],
  },
];
