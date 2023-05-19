/* eslint-disable import/no-anonymous-default-export */
export default {
  head: {
    description:
      "Discover my web portfolio as a front-end developer. I am David Avellaneda and here you will find examples of my skills in designing and programming websites with different technologies.",
  },
  body: {
    header: {
      img: {
        originalLogo: {
          src: "/original-logo.png",
          alt: "David Avellaneda logo with the original color",
        },
        whiteLogo: {
          src: "/white-logo.png",
          alt: "David Avellaneda logo in white color",
        },
      },
      menuBtn: {
        arialLabel: {
          open: "Open navigation menu",
          close: "Close navigation menu",
        },
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
        socialMedia: [
          {
            img: {
              src: "/icons/linkedin.svg",
              alt: "Linkedin logo in svg format",
            },
            link: "https://www.linkedin.com/in/david-santiago-avellaneda-montero-28260a274/",
          },
          {
            img: { src: "/icons/github.svg", alt: "Github logo in svg format" },
            link: "https://github.com/david-avellaneda",
          },
          {
            img: {
              src: "/icons/instagram.svg",
              alt: "Instagram logo in svg format",
            },
            link: "https://instagram.com/_santi.avellaneda_?igshid=OTk0YzhjMDVlZA==",
          },
        ],
      },
      about: {
        title: "About me",
        text: "My name is David Santiago, I am 18 years old, originally from Bogotá, Colombia.. I am passionate about developing technological solutions that improve the user experience and offer efficient results to clients.",
        buttons: ["Studies", "Experience"],
        img: {
          alt: "Hacker 3D illustration",
          text: "Technology is constantly evolving, and so am I",
        },
        modalWindows: {
          closeBtn: {
            arialLabel: "Close modal window",
            img: { alt: "Close or x symbol" },
          },
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
          modal2: {
            title: "Work experience",
            info: `During my career, I have had the opportunity to work on website development on both the frontend and backend sides, although my current main focus is on frontend development. I have worked with two different companies, where I have been in charge of designing, redesigning and developing the interfaces of their websites.<br /><br />On the frontend side, I have used various technologies and tools such as HTML, CSS, JavaScript, React and Next to build attractive and functional web pages. I have made sure that the pages are compatible with different browsers and devices, as I have also worked on optimizing their performance to improve the user experience. In this same portfolio there are projects for companies and personal projects that demonstrate my skills.<br /><br />Regarding the backend, I have used technologies such as Node.js, Express and MySQL, in order to create REST APIs. I have also worked on the integration of different systems and platforms so that applications can interact with other services.<br /><br />In summary, my experience in web page development has allowed me to acquire both frontend and backend skills, which has allowed me to fully understand how web applications work and how they can be improved to offer a better user experience. user.`,
            img: {
              src: "/about-me/experience/tech.png",
              alt: "Animated people viewing statistics in virtual reality",
            },
          },
        },
      },
      skills: {
        title: "Skills",
        text: "These are some of my web development skills.",
        advanced: {
          title: "Advanced",
          technologies: {
            tech: {
              img: { src: "/icons/react.svg", alt: "" },
              name: "React JS",
            },
          },
        },
      },
    },
  },
};
