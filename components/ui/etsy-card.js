import Image from "next/image";
import styles from "./etsy-card.module.css";

const EtsyCardComponent = ({ item }) => {
  const { title, url, price, img, discount_70 } = item;
  return (
    <div className={styles.etsyCard}>
      <a href={url}>
        <Image
          src={`/images/etsy/${img}`}
          height={270}
          width={340}
          layout="responsive"
          alt="M1"
        />
      </a>
      <h1 className="w3-center">{title}</h1>
      <div>
        <span className={styles.price}>&#163;{discount_70}</span>
        <span className={styles.priceOriginal}>&#163;{price}</span>
        <span className={styles.discount}>(70% OFF)</span>
      </div>
    </div>
  );
};

export default EtsyCardComponent;
