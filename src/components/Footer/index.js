import Link from "next/link";
import styles from "./index.module.css";
import ImageUploader from "../ImageUploader";

const Footer = ({ t }) => {
  const { thanks, info, socialMedia } = t;

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <p className={styles.thanks}>{thanks}</p>
        <div className={styles.info}>
          <p>{info.position}</p>
          <p>
            {info.email.value}
            <Link href="mailto:avellaneda.dev@gmail.com?subject=Hola%20David%20Avellaneda">
              {info.email.address}
            </Link>
          </p>
          <p>{info.location}</p>
        </div>
        <div className={styles.socialMedia}>
          {socialMedia.map((el, index) => (
            <div key={index} className={styles.image}>
              <Link href={el.link} target="_blank" aria-label={el.arialLabel}>
                <ImageUploader
                  src={el.img.src}
                  alt={el.img.alt}
                  class="medium"
                  background="#292929"
                  color="#fff"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2023 David Avellaneda</p>
      </div>
    </footer>
  );
};

export default Footer;
