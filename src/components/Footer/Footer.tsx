import { FC } from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/paths";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles["footer-container"]}`}>
        <div className={styles.footer_logo}>
          <img src={logo} alt="logo" />
          <span>Pizanio</span>
        </div>
        <nav className={styles.footer_nav}>
          <Link to={ROUTES.main}>Головна</Link>
          <Link to={ROUTES.menu}>Меню</Link>
          <Link to={ROUTES.cart}>Замовлення</Link>
          <Link to={ROUTES.about_us}>Про нас</Link>
        </nav>
        <nav className={styles.footer_nav}>
          <a href="tel:+38012141132">+380 1214 11 32</a>
          <a href="tel:+38012141132">+380 1214 11 32</a>
          <a href="mailto:example@gmail.com">example@gmail.com</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
