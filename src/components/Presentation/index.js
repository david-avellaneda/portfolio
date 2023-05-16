import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

const Presentation = ({ t }) => {
  const { title, name, text, button, socialMedia } = t;

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
            {socialMedia.map((el, index) => (
              <Link
                key={index}
                href={el.link}
                target="_blank"
                className={styles.containerIcon}
              >
                <Image
                  src={el.img.src}
                  alt={el.img.alt}
                  width={15}
                  height={15}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
