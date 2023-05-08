/* eslint-disable import/no-anonymous-default-export */
export default {
  head: {
    description:
      "Discover my web portfolio as a front-end developer. I am David Avellaneda and here you will find examples of my skills in designing and programming websites with different technologies.",
  },
  body: {
    header: {
      img: {
        alt: "David Avellaneda logo",
      },
      items: [
        {
          item: "About me",
          href: "#about",
        },
        {
          item: "Skills",
          href: "#skills",
        },
        {
          item: "Projects",
          href: "#projects",
        },
        {
          item: "Contact",
          href: "#contact",
        },
      ],
      modes: [
        { mode: "Light", value: "light" },
        { mode: "Dark", value: "dark" },
      ],
    },
    main: {
      presentation: {
        title: "Hello! I am ",
        name: "David Avellaneda",
        text: "I am a passionate developer with experience building dynamic web sites and applications using cutting edge technologies.",
        button: "Know me",
      },
      about: {
        title: "About me",
        text: "My name is David Santiago, I am 18 years old, originally from Bogotá, Colombia.. I am passionate about developing technological solutions that improve the user experience and offer efficient results to clients.",
        buttons: ["Studies", "Experience"],
        img: {
          alt: "Hacker 3D",
          text: "Technology is constantly evolving, and so am I",
        },
        modalWindows: {
          modal1: {
            title: "Educational credentials",
            cards: [
              {
                title: "High school diploma",
                info: ["Business Management Emphasis Degree", "2020"],
                img: {
                  src: "/about-me/studies/high-school.png",
                  alt: "3D animated image about statistics",
                },
              },
              {
                title: "Servicio Nacional de Aprendizaje",
                info: [
                  "Technologist in Analysis and Development of Information Systems (SENA)",
                  "2021 - 2023",
                ],
                img: {
                  src: "/about-me/studies/sena.png",
                  alt: "3D digital world in human hands",
                },
              },
              {
                title: "Smart Language Academy",
                info: ["English courses - Current level A2", "2021 - Now"],
                img: {
                  src: "/about-me/studies/smart.png",
                  alt: "Dice with the first letters of the alphabet in 3D",
                },
              },
              {
                title: "Platzi",
                info: [
                  "Web development and computer security courses. <a href='https://facebook.com'>View profile</a>",
                  "2020 - Now",
                ],
                img: {
                  src: "/about-me/studies/platzi.png",
                  alt: "3D animated computer web page interface",
                },
              },
            ],
          },
        },
      },
    },
  },
};
