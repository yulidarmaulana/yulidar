export type Project = {
  title: string;
  techs: string[];
  link: string;
  github: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Basic React",
    techs: ["React, Typescipt"],
    github: "https://github.com/yulidarmaulana/basic-react",
    link: "https://basic-react-flame.vercel.app/",
  },
  {
    title: "Anymelist",
    techs: ["React, Javascript"],
    github: "https://github.com/yulidarmaulana/anymelist",
    link: "https://anymelist.vercel.app/",
  },
  {
    title: "Hacker News",
    techs: ["React, Typescipt"],
    github: "https://github.com/yulidarmaulana/hacker-news",
    link: "https://hacker-news-six-alpha.vercel.app/",
  },
  {
    title: "Books Todo List",
    techs: ["Javascript"],
    github: "https://github.com/yulidarmaulana/bookshelf-app",
    link: "https://bookshelf-app-six.vercel.app/",
  },
  {
    title: "Valorant API",
    techs: ["Javascript"],
    github: "https://github.com/yulidarmaulana/valorant",
    link: "https://valorant-gold.vercel.app/",
  },
  {
    title: "Al-Quran Online",
    techs: ["Javascript"],
    github: "https://github.com/yulidarmaulana/Al-Quran-Online",
    link: "https://yulidarmaulana.github.io/Al-Quran-Online/",
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
