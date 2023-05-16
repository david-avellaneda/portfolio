import styles from "./index.module.css";
import Image from "next/image";

const Modal = ({ children, isOpen, handleClose, modal, t }) => {
  const { closeBtn } = t;
  const handleBoxClick = (e) => e.stopPropagation();

  return (
    <div
      className={`${styles.container} ${isOpen ? styles.active : ""}`}
      onClick={() => handleClose(modal)}
    >
      <div className={styles.box} onClick={handleBoxClick}>
        <button
          className={styles.close}
          onClick={() => handleClose(modal)}
          aria-label={closeBtn.arialLabel}
        >
          <Image
            src="/icons/remove.svg"
            alt={closeBtn.img.alt}
            width={20}
            height={20}
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
