import React from "react";

import Styles from "../styles/Pagination.module.css";

const Pagination = (props: any): React.ReactElement => {
  const next = props.next;
  const prev = props.prev;
  const setUrl = props.setUrl;

  const nextPage = (): void => {
    if (next) {
      setUrl(next);
    }
  };

  const prevPage = (): void => {
    if (prev) {
      setUrl(prev);
    }
  };

  return (
    <div className={Styles.buttons_container}>
      <button className={Styles.button_prev} onClick={prevPage}>
        Prev
      </button>
      <button className={Styles.button_next} onClick={nextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
