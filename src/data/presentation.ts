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
  title: "Yulidar Maulana",
  // profile: "/profile.webp",
  description:
    "Hi, I'm Yulidar Maulana, a *junior front-end developer* based in Indonesia. My current focus is developing applications using JavaScript and React. Currently learning *Typescript* and *Nextjs*.",
  socials: [
    // {
    //   label: "X",
    //   link: "https://twitter.com/codepleasure",
    // },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/yulidar-maulana/",
    },
    {
      label: "Dribbble",
      link: "https://dribbble.com/Yulidar",
    }
  ],
};


export default presentation;
