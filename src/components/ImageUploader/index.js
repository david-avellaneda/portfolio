import styles from "./index.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ImageUploader = ({ src, alt, background, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const handleLoading = (e) => {
    isLoading
      ? setIsLoading(e.target.complete)
      : setTimeout(() => setIsLoading(e.target.complete), 500);
  };

  return (
    <div className={styles.container} ref={ref}>
      <div
        className={styles.loader}
        style={{
          display: isLoading ? "none" : "flex",
          background: background ? background : "var(--elements)",
        }}
      >
        {!isLoading && (
          <div
            style={{
              borderColor: color ? color : "var(--text)",
            }}
          ></div>
        )}
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 320px) 100vw, 100vw"
        loading="lazy"
        quality={90}
        onLoad={handleLoading}
        style={{ display: isVisible ? "flex" : "none" }}
      />
    </div>
  );
};

export default ImageUploader;
