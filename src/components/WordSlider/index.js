import styles from "./index.module.css";
import React, { useState, useEffect } from "react";

const WordSlider = ({ t }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = t;

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentWord((prev) => (prev + 1) % words.length),
      9000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {words.map((el, i) => (
        <p
          key={i}
          className={`${styles.word} ${i === currentWord ? styles.active : ""}`}
        >
          {el}
        </p>
      ))}
    </div>
  );
};

export default WordSlider;
