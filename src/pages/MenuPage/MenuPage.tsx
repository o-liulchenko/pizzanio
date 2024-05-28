import axios from "axios";
import { FC, useEffect, useState } from "react";

export const MenuPage: FC = () => {
  let [sales, setSales] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/o-liulchenko/pizzanio/sales")
      .then((response) => {
        console.log(response.data);
        setSales(response.data);
      });
  }, []);

  return (
    <>
      <h1>MenuPage</h1>
    </>
  );
};
