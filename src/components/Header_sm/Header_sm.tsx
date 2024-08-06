import { FC, useState } from "react";
import logo from "../../assets/img/logo.svg";
import iconBurgerFull from "../../assets/img/menu_hamburger_full.svg";
import iconBurgerMin from "../../assets/img/menu_hamburger_min.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../app/routes/paths";

const Header_sm: FC = () => {
  let [burgerMenuShow, setBurgerMenuShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <header>
        <div>
          <img src={logo} alt="logo" />
          <span>Pizzanio</span>
          <button onClick={() => setBurgerMenuShow(!burgerMenuShow)}>
            <img
              src={burgerMenuShow ? iconBurgerMin : iconBurgerFull}
              alt="icon pizza"
            />
          </button>
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.menu}>Меню</Link>
          </li>
          <li>
            <Link to={ROUTES.main}>Головна</Link>
          </li>
          <li>
            <Link to={ROUTES.cart}>Замовлення</Link>
          </li>
          <li>
            <Link to={ROUTES.about_us}>Про нас</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header_sm;
