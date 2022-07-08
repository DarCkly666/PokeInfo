import React from "react";
import Styles from "../styles/Filter.module.css";
import { FilterContext } from "../context/FilterProvider";
import { ThemeContext } from "../context/ThemeProvider";
import { getColor } from "../utils/colors";
const Filter = () => {
  const values: any = React.useContext(FilterContext);
  const { setNavColor }: any = React.useContext(ThemeContext);
  const { filter, setFilter, setUrl } = values;

  return (
    <>
      <select
        className={Styles.filter}
        name="Type"
        id="type"
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
          if (event.target.value === "all") {
            setUrl("https://pokeapi.co/api/v2/pokemon/");
            setNavColor("#4169e1");
          } else {
            setUrl(`https://pokeapi.co/api/v2/type/${event.target.value}`);
            setNavColor(getColor(event.target.value));
          }
        }}
      >
        <option value="all">All</option>
        <option value="fire">Fire</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="water">Water</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="fairy">Fairy</option>
        <option value="poison">Poison</option>
        <option value="bug">Bug</option>
        <option value="dragon">Dragon</option>
        <option value="psychic">Psychic</option>
        <option value="flying">Flying</option>
        <option value="fighting">Fighting</option>
        <option value="normal">Normal</option>
        <option value="ice">Ice</option>
        <option value="ghost">Ghost</option>
        <option value="dark">Dark</option>
        <option value="steel">Steel</option>
        <option value="unknown">Unknown</option>
        <option value="shadow">Shadow</option>
      </select>
    </>
  );
};

export default Filter;
