import { FC, useState } from "react";
import styles from "./Header_lg.module.css";
import logo from "../../assets/img/logo.svg";
import icon_pizza from "../../assets/img/icon_pizza.svg";
import icon_lang from "../../assets/img/icon_language.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/paths";

const Header_lg: FC = () => {
  let [langChangerHidden, setLangChangerHidden] = useState(true);

  return (
    <header className={styles.header}>
      <div
        className={`container ${styles.header_container} ${styles.header_lg}`}
      >
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <span className={styles.logo_font}>Pizanio</span>
        </div>
        <Link className={styles.nav_button} to={ROUTES.main}>
          Головна
        </Link>
        <Link className={styles.nav_button} to={ROUTES.menu}>
          Меню
        </Link>
        <Link className={styles.nav_button} to={ROUTES.cart}>
          Замовлення
        </Link>
        <Link className={styles.nav_button} to={ROUTES.about_us}>
          Про нас
        </Link>
        <div className={styles.header_side_icons}>
          <button
            onClick={() => {
              setLangChangerHidden(!langChangerHidden);
            }}
          >
            <img src={icon_lang} alt="icon_lang" />
          </button>
          <img src={icon_pizza} alt="icon_pizza" />
          <div
            className={`${styles.lang_change_dropdown} ${
              langChangerHidden ? styles.hidden : ""
            }`}
          >
            <button className={styles.lang_change_button}>Українська</button>
            <div className={styles.lang_change_borderline}></div>
            <button className={styles.lang_change_button}>English</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header_lg;
