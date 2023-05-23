import ImageUploader from "../ImageUploader";
import styles from "./index.module.css";

const Skills = ({ t }) => {
  const { title, text, skills } = t;

  return (
    <section className={styles.container} id="skills">
      <div className={styles.title}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillContainer}>
            <h3>{skill.title}</h3>
            <div className={styles.skills}>
              {skill.technologies.map((tech, index) => (
                <div key={index} className={styles.skill}>
                  <div className={styles.image}>
                    <ImageUploader
                      src={tech.img.src}
                      alt={tech.img.alt}
                      widthDiv="2rem"
                      heightDiv="2rem"
                    />
                  </div>
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
