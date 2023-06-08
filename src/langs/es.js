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
          src: "/original-logo.png",
          alt: "Logotipo de David Avellaneda con el color original",
        },
        whiteLogo: {
          src: "/white-logo.png",
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
                img: { src: "/icons/react.svg", alt: "Logotipo de react.js" },
                name: "React JS",
              },
              {
                img: { src: "/icons/nextjs.svg", alt: "Logotipo de next.js" },
                name: "Next.js",
              },
              {
                img: { src: "/icons/git.svg", alt: "Logotipo de Git" },
                name: "Git",
              },
              {
                img: { src: "/icons/github.svg", alt: "Logotipo de GitBub" },
                name: "GitHub",
              },
            ],
          },
          {
            title: "Intermedio",
            technologies: [
              {
                img: { src: "/icons/nodejs.svg", alt: "Logotipo de node.js" },
                name: "Node.js",
              },
              {
                img: {
                  src: "/icons/expressjs.svg",
                  alt: "Logotipo de express.js",
                },
                name: "Express.js",
              },
              {
                img: { src: "/icons/mysql.svg", alt: "Logotipo de MySQL" },
                name: "MySQL",
              },
              {
                img: { src: "/icons/sass.svg", alt: "Logotipo de SASS" },
                name: "SASS",
              },
            ],
          },
          {
            title: "Principiante",
            technologies: [
              {
                img: { src: "/icons/webpack.svg", alt: "Logotipo de Webpack" },
                name: "Webpack",
              },
              {
                img: {
                  src: "/icons/wordpress.svg",
                  alt: "Logotipo de WordPress",
                },
                name: "WordPress",
              },
              {
                img: {
                  src: "/icons/bootstrap.svg",
                  alt: "Logotipo de Bootstrap",
                },
                name: "Bootstrap",
              },
            ],
          },
        ],
      },
      wordSlider: [
        `"Sé el cambio que quieres ver en el mundo digital"`,
        `"Innovación sin seguridad es una ilusión"`,
        `"Los límites solo existen en tu mente, no en la tecnología"`,
        `"La pasión por la tecnología alimenta la motivación para superar cualquier obstáculo"`,
        `"La curiosidad es la chispa que enciende el fuego de la creatividad"`,
        `"No te conformes con seguir las tendencias, sé quien las crea"`,
        `"La ciberseguridad es una carrera sin línea de meta"`,
        `"En el mundo digital, el conocimiento es poder y la seguridad es protección"`,
        `"El éxito en tecnología se basa en aprender de los fracasos y seguir adelante"`,
      ],
      projects: {
        title: "Projectos",
        projects: [
          {
            img: {
              src: "/projects/gmgf.jpg",
              alt: "Vista previa de la página web del colegio Gimnasio Moderno Generación del Futuro",
            },
            title: "Gimnasio Moderno Generación del Futuro",
            description:
              "Página web para una escuela, brinda información sobre sus instalaciones, servicios, etc.",
            tech: {
              elements: "HTML - CSS - JS",
              links: [
                {
                  href: "https://gm-gf.github.io/frontend/",
                  arialLabel: "Vista previa del projecto",
                  img: {
                    src: "/icons/view.svg",
                    alt: "Icono de un ojo",
                  },
                },
              ],
            },
          },
          {
            img: {
              src: "/projects/rest-countries-api.jpg",
              alt: "Vista previa de la página web REST Countries API",
            },
            title: "REST Countries API",
            description:
              "Es un proyecto que brinda información de todos los países del mundo como población, idioma, moneda, etc.",
            tech: {
              elements: "React.js - Next.js 13",
              links: [
                {
                  href: "https://rest-countries-api-david-avellaneda.vercel.app/",
                  arialLabel: "Vista previa del projecto",
                  img: {
                    src: "/icons/view.svg",
                    alt: "Icono de un ojo",
                  },
                },
                {
                  href: "https://github.com/santi-avellaneda/rest-countries-api",
                  arialLabel: "Repositorio de GitHub del projecto",
                  img: {
                    src: "/icons/github.svg",
                    alt: "Icono de GitHub",
                  },
                },
              ],
            },
          },
          {
            img: {
              src: "/projects/glpi-pepeganga.jpg",
              alt: "Vista previa de la página web de GLPI de Pepe Ganga",
            },
            title: "GLPI - Pepe Ganga",
            description:
              "Personalización y rediseño de interfaz web. Es un recurso para resolver problemas tecnológicos y productos similares.",
            tech: {
              elements: "HTML - CSS - JS",
              links: [
                {
                  href: "https://mesadeayuda.pepeganga.com/glpi/",
                  arialLabel: "Vista previa del projecto",
                  img: {
                    src: "/icons/view.svg",
                    alt: "Icono de un ojo",
                  },
                },
              ],
            },
          },
          {
            img: {
              src: "/projects/zabbix-pepeganga.jpg",
              alt: "Vista previa de la página web de Zabbix de Pepe Ganga",
            },
            title: "Monitoreo Zabbix - Pepe Ganga",
            description:
              "Personalización y rediseño de interfaz web. Está diseñado para monitorizar y registrar el estado de varios servicios de red.",
            tech: {
              elements: "HTML - CSS - JS",
              links: [
                {
                  href: "https://monitoreo.pepeganga.com/zabbix/",
                  arialLabel: "Vista previa del projecto",
                  img: {
                    src: "/icons/view.svg",
                    alt: "Icono de un ojo",
                  },
                },
              ],
            },
          },
          {
            img: {
              src: "/projects/mantis-pepeganga.jpg",
              alt: "Vista previa de la página web de Mantis Bug Tracker de Pepe Ganga",
            },
            title: "Mantis Bug Tracker - Pepe Ganga",
            description:
              "Personalización y rediseño de interfaz web. Consiste en una solución completa para gestionar tareas en un equipo de trabajo.",
            tech: {
              elements: "HTML - CSS - JS",
              links: [
                {
                  href: "https://mantis.pepeganga.com/login_page.php",
                  arialLabel: "Vista previa del projecto",
                  img: {
                    src: "/icons/view.svg",
                    alt: "Icono de un ojo",
                  },
                },
              ],
            },
          },
        ],
      },
      contact: {
        title: "Contacto",
        inputs: [
          {
            label: {
              for: "name",
              value: "Nombre completo  *",
            },
            input: {
              type: "text",
              placeholder: "David Santiago Avellaneda",
            },
          },
          {
            label: {
              for: "email",
              value: "Correo electrónico  *",
            },
            input: {
              type: "email",
              placeholder: "avellaneda.dev@gmail.com",
            },
          },
        ],
        textarea: {
          label: {
            for: "comment",
            value: "Comentarios  *",
          },
          input: {
            placeholder:
              "Tus comentarios son bienvenidos, envíame tus ideas o sugerencias para mejorar",
          },
        },
        alerts: {
          name: {
            required: `El campo "Nombre" es requerido`,
            min: `El campo "Nombre" debe tener mínimo 10 caracteres`,
            max: `El campo "Nombre" no debe ser mayor 30 caracteres`,
            err: `El campo "Nombre" solo admite espacios, letras mayúsculas o minúsculas con o sin acento`,
          },
          email: {
            required: `El campo "Email" es requerido`,
            max: `El campo "Email" no debe ser mayor 40 caracteres`,
            err: `El campo "Email" no contiene una estructura valida. user@example.com`,
          },
          comment: {
            required: `El campo "Comentarios" es requerido`,
            min: `El campo "Comentarios" debe tener mínimo 4 caracteres`,
            max: `El campo "Comentarios" no debe ser mayor a 255 caracteres`,
          },
        },
        submitBtn: {
          arialLabel: "Enviar formulario",
          value: "Enviar",
        },
        loading: "Enviando formulario 😜",
        response: {
          true: "Mensaje enviado con éxito 😎",
          false: "Error de conexión",
        },
      },
    },
  },
};
