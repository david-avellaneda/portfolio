/* eslint-disable import/no-anonymous-default-export */
export default {
  head: {
    description:
      "Descubre mi portafolio web como desarrollador front-end. Soy David Santiago Avellaneda Montero y aquí encontrarás ejemplos de mis habilidades en diseño y programación de sitios web con diferentes tecnologías.",
  },
  body: {
    header: {
      img: {
        originalLogo: {
          src: "/original-logo.svg",
          alt: "Logotipo de David Avellaneda con el color original",
        },
        whiteLogo: {
          src: "/white-logo.svg",
          alt: "Logotipo de David Avellaneda en color blanco",
        },
      },
      menuBtn: {
        arialLabel: {
          open: "Abrir menú de navegación",
          close: "Cerrar menú de navegación",
        },
      },
      items: [
        {
          item: "Sobre mí",
          href: "#about",
        },
        {
          item: "Habilidades",
          href: "#skills",
        },
        {
          item: "Projectos",
          href: "#projects",
        },
        {
          item: "Contacto",
          href: "#contact",
        },
      ],
      modes: [
        { mode: "Claro", value: "light" },
        { mode: "Oscuro", value: "dark" },
      ],
    },
    main: {
      presentation: {
        title: "¡Hola! Soy ",
        name: "David Avellaneda",
        text: "Soy un apasionado desarrollador con experiencia en la creación de sitios y aplicaciones web dinámicas utilizando tecnologías de vanguardia.",
        button: "Conóceme",
        socialMedia: [
          {
            img: {
              src: "/icons/linkedin.svg",
              alt: "Logotipo de Linkedin en formato svg",
            },
            link: "https://www.linkedin.com/in/david-santiago-avellaneda-montero-28260a274/",
          },
          {
            img: {
              src: "/icons/github.svg",
              alt: "Logotipo de Github en formato svg",
            },
            link: "https://github.com/david-avellaneda",
          },
          {
            img: {
              src: "/icons/instagram.svg",
              alt: "Logotipo de Instagram en formato svg",
            },
            link: "https://instagram.com/_santi.avellaneda_?igshid=OTk0YzhjMDVlZA==",
          },
        ],
      },
      about: {
        title: "Sobre mí",
        text: "Me llamo David Santiago, tengo 18 años, originario de Bogotá, Colombia. Me apasiona el desarrollo de soluciones tecnológicas que mejoren la experiencia del usuario y ofrezcan resultados eficientes a los clientes.",
        buttons: ["Estudios", "Experiencia"],
        img: {
          alt: "Ilustración de hacker en 3D",
          text: "La tecnología está en constante evolución, y yo también lo estoy",
        },
        modalWindows: {
          closeBtn: {
            arialLabel: "Cerrar ventana modal",
            img: { alt: "Cerrar o símbolo x" },
          },
          modal1: {
            title: "Formación académica",
            cards: [
              {
                title: "Título bachiller",
                info: ["Título en Énfasis y Gestión Empresarial", "2020"],
                img: {
                  src: "/about-me/studies/high-school.png",
                  alt: "Imagen animada en 3D sobre estadísticas",
                },
              },
              {
                title: "Servicio Nacional de Aprendizaje",
                info: [
                  "Tecnólogo en Analisis y Desarrollo de Sistemas de Información (ADSI - SENA)",
                  "2021 - 2023",
                ],
                img: {
                  src: "/about-me/studies/sena.png",
                  alt: "Mundo digital 3D en manos humanas",
                },
              },
              {
                title: "Academia de idiomas Smart",
                info: [
                  "Cursos de inglés - Nivel actual A2",
                  "2021 - Actualmente",
                ],
                img: {
                  src: "/about-me/studies/smart.png",
                  alt: "Dados con las primeras letras del abecedario en 3D",
                },
              },
              {
                title: "Platzi",
                info: [
                  "Cursos de desarrollo web y seguridad informática. <a href='https://facebook.com'>Ver perfil</a>",
                  "2020 - Actualmente",
                ],
                img: {
                  src: "/about-me/studies/platzi.png",
                  alt: "Interfaz de una página web en computador animada en 3D",
                },
              },
            ],
          },
          modal2: {
            title: "Experiencia laboral",
            info: `Durante mi carrera, he tenido la oportunidad de trabajar en el desarrollo de páginas web tanto en el lado del frontend como en el backend, aunque mi enfoque principal actual está en el desarrollo frontend. He trabajado con dos empresas diferentes, donde me he encargado de diseñar, rediseñar y desarrollar las interfaces de sus sitios web.<br /><br />En el lado del frontend, he utilizado diversas tecnologías y herramientas como HTML, CSS, JavaScript, React y Next para construir páginas web que sean atractivas y funcionales. Me he asegurado de que las páginas sean compatibles con diferentes navegadores y dispositivos, como también he trabajado en la optimización de su rendimiento para mejorar la experiencia del usuario. En este mismo portafolio se encuentran proyectos para empresas y proyectos personales que demuestran mis habilidades.<br /><br />En cuanto al backend, he utilizado tecnologías como Node.js, Express y MySQL, con el fin de crear REST APIs. También he trabajado en la integración de diferentes sistemas y plataformas para que las aplicaciones puedan interactuar con otros servicios.<br /><br />En resumen, mi experiencia en el desarrollo de páginas web me ha permitido adquirir habilidades tanto en el frontend como en el backend, lo que me ha permitido entender de manera integral cómo funcionan las aplicaciones web y cómo se pueden mejorar para ofrecer una mejor experiencia al usuario.`,
            img: {
              src: "/about-me/experience/tech.png",
              alt: "Personas animadas viendo estadísticas en realidad virtual",
            },
          },
        },
      },
      skills: {
        title: "Habilidades",
        text: "Te presento algunas de mis aptitudes en el desarrollo web.",
        skills: [
          {
            title: "Avanzado",
            technologies: [
              {
                img: { src: "/icons/react.svg", alt: "" },
                name: "React JS",
              },
            ],
          },
        ],
      },
    },
  },
};
