import ImageUploader from "../ImageUploader";
import styles from "./index.module.css";

const Experience = ({ t }) => {
  const { title, info, img } = t;

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={`${styles.content} scroll`}>
        <p dangerouslySetInnerHTML={{ __html: info }} />
        <div className={`${styles.image} image`}>
          <ImageUploader
            src={img.src}
            alt={img.alt}
            background="var(--background)"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
