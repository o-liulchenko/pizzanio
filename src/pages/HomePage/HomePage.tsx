import { FC, useEffect, useState } from "react";
import axios from "axios";
import styles from "./HomePage.module.css";

interface IData {
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
    axios
      .get("http://localhost:3030/api/pizzas")
      .then((response) => {
        setSales(response.data);
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
          {
            isloading
            ? <span>loading</span>
            : sales.map(e => <>
              <p>{e.name}</p>
              <p>{e.price} uah.</p>
              <img src={e.image} alt="" />
            </>)
          }
        </article>
      </section>
    </>
  );
};
