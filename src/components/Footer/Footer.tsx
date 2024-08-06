import { FC } from "react";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../app/routes/paths";

const Footer: FC = () => {
  return (
    <footer >
      <div>
        <div >
          <img src={logo} alt="logo" />
          <span>Pizanio</span>
        </div>
        <nav >
          <Link to={ROUTES.main}>Головна</Link>
          <Link to={ROUTES.menu}>Меню</Link>
          <Link to={ROUTES.cart}>Замовлення</Link>
          <Link to={ROUTES.about_us}>Про нас</Link>
        </nav>
        <nav >
          <a href="tel:+38012141132">+380 1214 11 32</a>
          <a href="tel:+38012141132">+380 1214 11 32</a>
          <a href="mailto:example@gmail.com">example@gmail.com</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
