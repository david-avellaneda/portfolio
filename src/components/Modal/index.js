import styles from "./index.module.css";
import Remove from "../../../public/icons/remove.svg";

const Modal = ({ children, isOpen, handleClose, modal }) => {
  const handleBoxClick = (e) => e.stopPropagation();

  return (
    <div
      className={`${styles.container} ${isOpen ? styles.active : ""}`}
      onClick={() => handleClose(modal)}
    >
      <div className={styles.box} onClick={handleBoxClick}>
        <div className={styles.close} onClick={() => handleClose(modal)}>
          <Remove />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
