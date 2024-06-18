import { FC } from "react";
import styles from "./PizzaDiscountCard.module.css";

interface IPizzaProps {
  image: string;
  name: string;
  price: number;
  discount: number;
}

const PizzaDiscountCard: FC<IPizzaProps> = ({
  image,
  name,
  price,
  discount,
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.discount}>-{discount}%</span>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={name} />
      </div>
      <span className={styles.name + " " + styles.text}>{name}</span>
      <span className={styles.price + " " + styles.text}>{price * (discount / 100)} грн.</span>
    </div>
  );
};

export default PizzaDiscountCard;
