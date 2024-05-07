import { FC } from "react";
import { Outlet } from "react-router-dom";
import { useWindowSize } from "../../hooks";
import { Footer, Header_lg, Header_sm } from "../../components";
import styles from "./MainLayout.module.css";

export const MainLayout: FC = () => {
  let [width] = useWindowSize();

  return (
    <div className={styles.MainLayoutContainer}>
      {width <= 768 ? <Header_sm /> : <Header_lg />}
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
