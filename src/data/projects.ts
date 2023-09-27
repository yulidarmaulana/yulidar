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
    title: "QR Code Generator",
    techs: ["Javascript"],
    github: "https://github.com/yulidarmaulana/Generate_QR_CODE_JS",
    link: "https://generate-qr-code-js.vercel.app/",
  },
  {
    title: "Books Todo List",
    techs: ["Javascript"],
    github: "https://github.com/yulidarmaulana/bookshelf-app",
    link: "https://bookshelf-app-six.vercel.app/",
  },
  {
    title: "",
    techs: [""],
    link: "/",
    github: "/",
    isComingSoon: true,
  },
];

export default projects;
