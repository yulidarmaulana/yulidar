export type Project = {
  title: string;
  techs: string[];
  link: string;
  github: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Al-Quran",
    techs: ["Javascript"],
    github: "https://github.com/yulidarmaulana/Al-Quran-Online",
    link: "https://yulidarmaulana.github.io/Al-Quran-Online/",
  },
  {
    title: "Anymelist",
    techs: ["React"],
    github: "https://github.com/yulidarmaulana/anymelist",
    link: "https://anymelist.vercel.app/",
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
  // {
  //   title: "",
  //   techs: [""],
  //   link: "/",
  //   github: "/",
  //   isComingSoon: false,
  // },
];

export default projects;
