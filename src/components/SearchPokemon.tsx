import React, { useState, useEffect } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useFetch } from "../hooks/useFetch";
import Styles from "../styles/SearchPokemon.module.css";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=1154";
type Item = {
  name: string;
  url: string;
};
const SearchPokemon = () => {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(URL, {});
  const [fetchData, setFetchData] = useState(true);

  const handleOnSearch = (string: any, results: any) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    //console.log(string, results);
  };

  const handleOnHover = (result: any) => {
    // the item hovered
    //console.log(result);
  };

  const handleOnSelect = (item: Item) => {
    // the item selected
    //console.log(item);
    window.location.href = `/pokemon/${item.name}`;
  };

  const handleOnFocus = () => {
    //console.log("Focused");
  };

  const formatResult = (item: Item) => {
    return (
      <>
        <span
          style={{ display: "block", textAlign: "left", cursor: "pointer" }}
        >
          {item.name}
        </span>
      </>
    );
  };

  useEffect(() => {
    if (data.results !== undefined) {
      setFetchData(false);
      //console.log(data);
    }
  }, [data]);

  return (
    <div className={Styles.autocomplete} style={{ width: "250px" }}>
      <ReactSearchAutocomplete<Item>
        items={data.results}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchPokemon;
