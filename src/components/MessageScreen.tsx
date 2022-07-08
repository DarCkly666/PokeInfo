import React from "react";
import { ThemeContext } from "../context/ThemeProvider";

import Styles from "../styles/Loading.module.css";

const MessageScreen = ({ message }: any) => {
  const { theme }: any = React.useContext(ThemeContext);
  return (
    <div className={`${Styles.loading_container} bg-${theme} text-${theme}`}>
      <h2 className={`${Styles.loading_loading} text-${theme}`}>{message}</h2>
    </div>
  );
};

export default MessageScreen;
