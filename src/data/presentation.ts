type Social = {
  label: string;
  link: string;
};


type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};


const presentation: Presentation = {
  mail: "maulanayulidar@gmail.com",
  title: "< Hello World! />",
  // profile: "/profile.webp",
  description:
    "Hi, I'm Yulidar Maulana, a *front-end developer* based in Indonesia. My current focus is developing applications using *JavaScript* and *React*. Outside of work, I m constantly learning new things.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/codepleasure",
    },
    {
      label: "Github",
      link: "https://github.com/yulidarmaulana",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/yulidar-maulana/",
    }
  ],
};


export default presentation;
