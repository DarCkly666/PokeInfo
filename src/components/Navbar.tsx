import React from "react";
import { createPortal } from "react-dom";
import { ThemeContext } from "../context/ThemeProvider";
import { FilterContext } from "../context/FilterProvider";
import Styles from "../styles/Navbar.module.css";
import Filter from "./Filter";
import SearchPokemon from "./SearchPokemon";

const Navbar = () => {
  const { theme, setTheme, navColor }: any = React.useContext(ThemeContext);
  const { isOpenSearch, setIsOpenSearch }: any =
    React.useContext(FilterContext);
  //const [isOpen, setIsOpen] = React.useState(false);

  const theme_change = () => {
    if (theme === "ligth") {
      setTheme("dark");
    } else {
      setTheme("ligth");
    }
  };

  const bgColor = {
    backgroundColor: theme === "ligth" ? navColor : "#292929",
  };

  return (
    <nav className={`nav-${theme} ${Styles.navbar}`} style={bgColor}>
      <div className={Styles.navbar_left}>
        <i
          className="fa-solid fa-arrow-left"
          onClick={() => {
            history.back();
          }}
        ></i>
        <p
          className={Styles.navbar_title}
          onClick={() => {
            window.location.replace("/");
          }}
        >
          Pokédex
        </p>
      </div>
      <div className={Styles.theme_change_button}>
        <Filter />
        <span onClick={theme_change}>
          {theme === "ligth" ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun"></i>
          )}
        </span>
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={() => {
            setIsOpenSearch(true);
          }}
        ></i>
      </div>
      <SearchPokemon
        isOpenSearch={isOpenSearch}
        setIsOpenSearch={setIsOpenSearch}
      />
    </nav>
  );
};

export default Navbar;
