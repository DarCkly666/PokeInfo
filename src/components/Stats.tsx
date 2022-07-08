import React from "react";
import Styles from "../styles/Pokemon.module.css";

const Stats = (props: any): React.ReactElement => {
  const { data } = props;
  return (
    <div className={Styles.pokemon_stats}>
      <h4 className={Styles.stat_stat}>Stats</h4>
      <div>
        <p className={Styles.stat_desc}>hp</p>
        <div
          className={`${Styles.stat_container} w3-light-grey w3-round-xlarge`}
        >
          <div
            className={`${Styles.stat_inner} w3-container w3-green w3-round-xlarge w3-tiny`}
            style={{
              width: `${data.stats[0].base_stat}%`,
            }}
          ></div>
        </div>
      </div>

      <div>
        <p className={Styles.stat_desc}>attack</p>
        <div
          className={`${Styles.stat_container} w3-light-grey w3-round-xlarge`}
        >
          <div
            className={`${Styles.stat_inner} w3-container w3-red w3-round-xlarge w3-tiny`}
            style={{
              width: `${data.stats[1].base_stat}%`,
            }}
          ></div>
        </div>
      </div>

      <div>
        <p className={Styles.stat_desc}>defense</p>
        <div
          className={`${Styles.stat_container} w3-light-grey w3-round-xlarge`}
        >
          <div
            className={`${Styles.stat_inner} w3-container w3-blue w3-round-xlarge w3-tiny`}
            style={{
              width: `${data.stats[2].base_stat}%`,
            }}
          ></div>
        </div>
      </div>

      <div>
        <p className={Styles.stat_desc}>special attack</p>
        <div
          className={`${Styles.stat_container} w3-light-grey w3-round-xlarge`}
        >
          <div
            className={`${Styles.stat_inner} w3-container w3-red w3-round-xlarge w3-tiny`}
            style={{
              width: `${data.stats[3].base_stat}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
