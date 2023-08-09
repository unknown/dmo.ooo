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
    date: new Date("Aug 7, 2023"),
    title: "Awardrobe",
    text: "Open-source clothes price tracker that notifies you when your favorite clothes go on sale and come back in stock.\nBuilt using React (Next.js) with a MySQL database for user authentication and data storage.",
    url: "https://getawardrobe.com/",
    tags: [
      {
        key: "projects",
        title: "Launched a project",
        color: "#9AD9F4",
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
        color: "#9AD9F4",
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
        color: "#F4E09A",
      },
    ],
  },
  {
    date: new Date("Jun 16, 2022"),
    title: "Personal website",
    text: "Designed and built this personal website featuring a timeline of milestones.\n Crafted using React (Next.js) and Framer Motion for animations.",
    tags: [
      {
        key: "projects",
        title: "Built this website",
        color: "#9AD9F4",
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
        color: "#F4E09A",
      },
    ],
  },
  {
    date: new Date("Mar 25, 2022"),
    title: "Arithmetic",
    text: "A fast-paced arithmetic drill designed to test mental math.\n Built using React (Next.js) with a MySQL database for problem statistics logging.",
    url: "https://arithmetic.dmo.ooo/",
    tags: [
      {
        key: "projects",
        title: "Launched a project",
        color: "#9AD9F4",
      },
    ],
  },
  {
    date: new Date("Nov 11, 2019"),
    title: "Dark Patterns Recognition",
    text: "A Chrome Extension that identifies and classifies potential dark patterns on the pages of online stores with 97% accuracy.\n\
                  Created Chrome Extension front-end using plain JavaScript that interfaced a Python back-end running Naive Bayes Classifiers using Flask and sklearn.",
    url: "https://github.com/unknown/dark-patterns-recognition",
    tags: [
      {
        key: "projects",
        title: "Attended a hackathon",
        color: "#9AD9F4",
      },
    ],
  },
];
