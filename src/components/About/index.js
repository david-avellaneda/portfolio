import styles from "./index.module.css";
import hacker from "../../../public/about-me/hacker.png";
import ImageUploader from "../ImageUploader";

const About = ({ t }) => {
  const { title, text, buttons, img, modalWindows } = t;

  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={styles.buttons}>
          {buttons.map((button, id) => (
            <button key={id}>
              {button}
              <span></span>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={`${styles.image} image`}>
          <ImageUploader
            src={hacker}
            alt={img.alt}
            background="#221f1f"
            color="#fff"
          />
        </div>
        <p>{`"${img.text}"`}</p>
      </div>
    </section>
  );
};

export default About;
