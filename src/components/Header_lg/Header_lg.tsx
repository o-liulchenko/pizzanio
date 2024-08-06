import { FC, useState } from "react";
import logo from "../../assets/img/logo.svg";
import { ROUTES } from "../../app/routes/paths";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { SelectTotalPrice } from "../../app/store/slices/cartSlice";
import {
  changeLanguage,
  LANG_LIST,
  SelectLang,
} from "../../app/store/slices/langSlice";
import { Dropdown, Underlined } from "../ui";
import { Link } from "react-router-dom";

const Header_lg: FC = () => {
  const dispatch = useAppDispatch();

  const totalCartPrice = useAppSelector(SelectTotalPrice);
  const currentLanguage = useAppSelector(SelectLang);
  const availableLanguages = Object.entries(LANG_LIST).filter(
    ([key]) => key !== currentLanguage
  );

  const changeLanguageHandler = (newLanguage: string) => {
    console.log(newLanguage);
    dispatch(changeLanguage(newLanguage));
  };

  return (
    <header className="container-full bg-white rounded-b-3xl drop-shadow-xl">
      <div className="container flex items-center justify-between py-6 text-xl font-bold">
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" />
          <Underlined>Pizanio</Underlined>
        </div>
        <Underlined>
          <Link to={ROUTES.main}>Головна</Link>
        </Underlined>
        <Underlined>
          <Link to={ROUTES.menu}>Меню</Link>
        </Underlined>
        <Underlined>
          <Link to={ROUTES.about_us}>Про нас</Link>
        </Underlined>
        <div className="flex items-center gap-4">
          <Underlined>
            <a href="tel:+380xxxxxxxxx">+380xxxxxxxxx</a>
          </Underlined>
          <Underlined>
            <Dropdown>
              <span>{currentLanguage}</span>
              {availableLanguages.map((lang) => (
                <button
                  key={lang[1]}
                  onClick={() => changeLanguageHandler(lang[1])}
                >
                  {lang[1]}
                </button>
              ))}
            </Dropdown>
          </Underlined>
          <Underlined>
            <Link to={ROUTES.cart}>Сума: {totalCartPrice} грн. 🛒</Link>
          </Underlined>
        </div>
      </div>
    </header>
  );
};

export default Header_lg;
