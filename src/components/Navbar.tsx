import React from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Styles from "../styles/Navbar.module.css";
import Filter from "./Filter";

const Navbar = () => {
  const { theme, setTheme, navColor }: any = React.useContext(ThemeContext);

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
      <p className={Styles.navbar_title}>Pokédex</p>
      <div className={Styles.theme_change_button}>
        <Filter />
        <span onClick={theme_change}>
          {theme === "ligth" ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun"></i>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
