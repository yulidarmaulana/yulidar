export type Project = {
  title: string;
  techs: string[];
  link: string;
  github: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Valorant API",
    techs: ["Javascript"],
    github: "https://github.com/yulidarmaulana/valorant",
    link: "https://valorant-gold.vercel.app/",
  },
  {
    title: "Anymelist",
    techs: ["React"],
    github: "https://github.com/yulidarmaulana/anymelist",
    link: "https://anymelist.vercel.app/",
  },
  // {
  //   title: "Books Todo List",
  //   techs: ["Javascript"],
  //   github: "https://github.com/yulidarmaulana/bookshelf-app",
  //   link: "https://bookshelf-app-six.vercel.app/",
  // },
  {
    title: "Hacker News",
    techs: ["React, Typescipt"],
    github: "https://github.com/yulidarmaulana/hacker-news",
    link: "https://hacker-news-six-alpha.vercel.app/",
  },
  // {
  //   title: "",
  //   techs: [""],
  //   link: "/",
  //   github: "/",
  //   isComingSoon: true,
  // },
];

export default projects;
