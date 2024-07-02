import { FC, useEffect, useState } from "react";
import { getAllPizzas } from "../../app/api/pizzaAPI";
import { PizzaDiscountCard } from "../../components";
import styles from "./HomePage.module.css";
import arrow from "../../assets/img/arrow.svg";

interface IPizza {
  _id: string;
  description: string;
  discount: number;
  image: string;
  name: string;
  price: number;
}

const HomePage: FC = () => {
  let [sales, setSales] = useState<IPizza[]>([]);
  let [currentPizza, setCurrentPizza] = useState<IPizza | null>(null);

  useEffect(() => {
    getAllPizzas().then((data) => {
      setSales(data);
      setCurrentPizza(data[0]);
    });
  }, []);

  return (
    <>
      <section className={styles.mainPageContainer}>
        <article className={styles.description}>
          <h1 className={styles.descriptionTitle}>Pizza</h1>
          <h2 className={styles.descriptionSubitle}>Special</h2>
        </article>
        <article>
          {!currentPizza ? (
            <span>loading</span>
          ) : (
            <PizzaDiscountCard pizza={currentPizza} />
          )}
          
        </article>
      </section>
    </>
  );
};

export default HomePage;
