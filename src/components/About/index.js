import styles from "./index.module.css";
import hacker from "../../../public/about-me/hacker.png";
import ImageUploader from "../ImageUploader";
import Modal from "../Modal";
import { useState } from "react";
import Studies from "../Studies";

const About = ({ t }) => {
  const { title, text, buttons, img, modalWindows } = t;
  const { modal1, modal2 } = modalWindows;

  const [isOpen, setIsOpen] = useState({ modal1: false, modal2: false });

  const handleOpen = (id) => {
    setIsOpen({ ...isOpen, [`modal${id + 1}`]: true });
    document.body.classList.add("no-scroll");
  };

  const handleClose = (id) => {
    setIsOpen({ ...isOpen, [`modal${id + 1}`]: false });
    document.body.classList.remove("no-scroll");
  };

  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={styles.buttons}>
          {buttons.map((button, id) => (
            <button key={id} onClick={() => handleOpen(id)}>
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
      <Modal isOpen={isOpen.modal1} handleClose={handleClose} modal={0}>
        <Studies isOpen={isOpen.modal1} t={modal1} />
      </Modal>
    </section>
  );
};

export default About;
