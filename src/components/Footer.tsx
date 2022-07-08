import React from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Styles from "../styles/Footer.module.css";

const Footer = () => {
  const { theme, navColor }: any = React.useContext(ThemeContext);

  const bgColor = {
    backgroundColor: theme === "ligth" ? navColor : "#292929",
  };

  return (
    <footer className={`${Styles.footer} footer-${theme}`} style={bgColor}>
      <h3 className={`${Styles.title} text-${theme}`}>®CRM</h3>
      <a href="https://github.com/DarCkly666" target="blank">
        <i className="fa-brands fa-github"></i>
      </a>
    </footer>
  );
};

export default Footer;
