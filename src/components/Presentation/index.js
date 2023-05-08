import styles from "./index.module.css";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Github from "../../../public/icons/github.svg";
import Instagram from "../../../public/icons/instagram.svg";
import Link from "next/link";

const Presentation = ({ t }) => {
  const { title, name, text, button } = t;

  return (
    <section className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {title}
          <span>{name}</span>
        </h1>
        <p className={styles.txt}>{text}</p>
        <button className={styles.btn}>
          <a href="#about">{button}</a>
        </button>
        <div className={styles.socialMedia}>
          <div className={styles.icons}>
            <Link
              href="https://www.linkedin.com/in/david-santiago-avellaneda-montero-28260a274/"
              target="_blank"
              className={styles.containerIcon}
            >
              <LinkedIn />
            </Link>
            <Link
              href="https://github.com/david-avellaneda"
              target="_blank"
              className={styles.containerIcon}
            >
              <Github />
            </Link>
            <Link
              href="https://www.instagram.com/_santi.avellaneda_/"
              target="_blank"
              className={styles.containerIcon}
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
