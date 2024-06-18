import { FC, useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { getAllPizzas } from "../../api/pizzaAPI";
import { PizzaDiscountCard } from "../../components";

interface IData {
  _id: string;
  description: string;
  discount: number;
  image: string;
  name: string;
  price: number;
}

export const HomePage: FC = () => {
  let [sales, setSales] = useState<IData[]>([]);
  let [isloading, setIsloading] = useState(true);

  useEffect(() => {
    getAllPizzas().then((data) => {
      setSales(data);
      setIsloading(false);
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
          {isloading ? (
            <span>loading</span>
          ) : (
            sales.map((e) => (
              <PizzaDiscountCard props={e} />
            ))
          )}
        </article>
      </section>
    </>
  );
};
