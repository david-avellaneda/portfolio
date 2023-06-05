import Link from "next/link";
import ImageUploader from "../ImageUploader";
import styles from "./index.module.css";

const Projects = ({ t }) => {
  const { title, projects } = t;

  return (
    <section className={styles.container} id="projects">
      <h2>{title}</h2>
      <div className={styles.projects}>
        {projects.map((el, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.image}>
              <Link
                key={index}
                href={el.tech.links[0].href}
                aria-label={el.arialLabel}
                target="_blank"
              >
                <ImageUploader src={el.img.src} alt={el.img.alt} />
              </Link>
            </div>
            <p className={styles.projectTitle}>{el.title}</p>
            <p className={styles.projectDescription}>{el.description}</p>
            <div className={styles.tech}>
              <p>{el.tech.elements}</p>
              <div className={styles.links}>
                {el.tech.links.map((el, index) => (
                  <Link
                    key={index}
                    href={el.href}
                    aria-label={el.arialLabel}
                    target="_blank"
                  >
                    <ImageUploader
                      src={el.img.src}
                      alt={el.img.alt}
                      background="#f5f5f5"
                      custom="medium"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
