import ImageUploader from "../ImageUploader";
import styles from "./index.module.css";

const Studies = ({ t }) => {
  const { title, cards } = t;

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={`${styles.content} scroll`}>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <div className={styles.card} key={index}>
              <h4>{card.title}</h4>
              <ul>
                {card.info.map((info) => (
                  <li key={info} dangerouslySetInnerHTML={{ __html: info }} />
                ))}
              </ul>
              <div className={styles.image}>
                <ImageUploader src={card.img.src} alt={card.img.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Studies;
