import type { NextApiRequest, NextApiResponse } from "next";

export interface Post {
  data: {
    date: string;
    title: string;
    text: string;
    url?: string;
  };
  tags: Tag[];
}

interface Tag {
  key: string;
  title: string;
  color: string;
}

type Data = {
  posts: Post[];
};

const posts = [
  {
    data: {
      date: "Nov 17, 2022",
      title: "BUGS @ NYU",
      text: "Designed and built the new BUGS @ NYU website.\nBUGS is NYU’s premier open source club, connecting students to create an inclusive environment to work on projects together.",
      url: "https://bugs-nyu.github.io/",
    },
    tags: [
      {
        key: "projects",
        title: "Built a website",
        color: "#9AD9F4",
      },
    ],
  },
  {
    data: {
      date: "June 29, 2022",
      title: "Intern at Chariot",
      text: "Started a part-time internship at Chariot, prototyping back-end services to process donations from Donor Advised Funds.",
      url: "https://www.givechariot.com/",
    },
    tags: [
      {
        key: "experience",
        title: "Started an internship",
        color: "#F4E09A",
      },
    ],
  },
  {
    data: {
      date: "Jun 16, 2022",
      title: "Personal website",
      text: "Designed and built this personal website featuring a timeline of milestones.\n Crafted using React (Next.js) and Framer Motion for animations.",
    },
    tags: [
      {
        key: "projects",
        title: "Built this website",
        color: "#9AD9F4",
      },
    ],
  },
  {
    data: {
      date: "May 23, 2022",
      title: "Intern at Moore Capital Management",
      text: "Started a summer internship at Moore Capital Management as a software developer on the Portfolio and Risk Team.",
    },
    tags: [
      {
        key: "experience",
        title: "Started an internship",
        color: "#F4E09A",
      },
    ],
  },
  {
    data: {
      date: "Mar 25, 2022",
      title: "Arithmetic",
      text: "A fast-paced arithmetic drill designed to test mental math.\n Built using React (Next.js) with a MySQL database for problem statistics logging.",
      url: "https://arithmetic.dmo.ooo/",
    },
    tags: [
      {
        key: "projects",
        title: "Launched a project",
        color: "#9AD9F4",
      },
    ],
  },
  {
    data: {
      date: "Nov 11, 2019",
      title: "Dark Patterns Recognition",
      text: "A Chrome Extension that identifies and classifies potential dark patterns on the pages of online stores with 97% accuracy.\n\
                  Created Chrome Extension front-end using plain JavaScript that interfaced a Python back-end running Naive Bayes Classifiers using Flask and sklearn.",
      url: "https://github.com/unknown/dark-patterns-recognition",
    },
    tags: [
      {
        key: "projects",
        title: "Attended a hackathon",
        color: "#9AD9F4",
      },
    ],
  },
];

export const getPosts = () => {
  return posts;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ posts: getPosts() });
}
