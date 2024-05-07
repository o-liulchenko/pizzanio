import { FC, useState } from "react";
import styles from "./Header_sm.module.css";
import logo from "../../assets/img/logo.svg";
import iconBurgerFull from "../../assets/img/menu_hamburger_full.svg";
import iconBurgerMin from "../../assets/img/menu_hamburger_min.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/paths";

const Header_sm: FC = () => {
  let [burgerMenuShow, setBurgerMenuShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <header className={styles.header}>
        <div
          className={`container ${styles.headerContainer} ${styles.headerSM}`}
        >
          <img src={logo} alt="logo" />
          <span className={styles.logoText}>Pizzanio</span>
          <button onClick={() => setBurgerMenuShow(!burgerMenuShow)}>
            <img
              src={burgerMenuShow ? iconBurgerMin : iconBurgerFull}
              alt="icon pizza"
            />
          </button>
        </div>
      </header>
      <nav
        className={`${styles.navigation} ${!burgerMenuShow && styles.hidden}`}
      >
        <ul>
          <li className={styles.navButton}>
            <Link to={ROUTES.menu}>Меню</Link>
          </li>
          <li className={styles.navButton}>
            <Link to={ROUTES.main}>Головна</Link>
          </li>
          <li className={styles.navButton}>
            <Link to={ROUTES.cart}>Замовлення</Link>
          </li>
          <li className={styles.navButton}>
            <Link to={ROUTES.about_us}>Про нас</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header_sm;
