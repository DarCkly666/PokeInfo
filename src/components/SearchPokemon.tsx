import React, { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import Styles from "../styles/SearchPokemon.module.css";
import { ThemeContext } from "../context/ThemeProvider";
import Pokemon from "./Pokemon";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=1154";

type Item = {
  name: string;
  url: string;
};

type Data = {
  count: number;
  next: string;
  previous: string;
  results: Item[];
};

const InitialValue: Data = {
  count: 0,
  next: "",
  previous: "",
  results: [],
};

const SearchPokemon = ({
  isOpenSearch,
  setIsOpenSearch,
}: {
  isOpenSearch: boolean;
  setIsOpenSearch: any;
}) => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<Data>(InitialValue);
  const [loading, setLoading] = useState<boolean>(true);
  const [filtered, setFiltered] = useState<Item[]>([]);
  const values = useContext(ThemeContext);

  const onChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    console.log(event.target.value);
    if (event.target.value.length === 0) {
      setFiltered([]);
    } else {
      setFiltered(
        data.results.filter((item: Item) =>
          item.name
            .toLocaleLowerCase()
            .startsWith(event.target.value.toLocaleLowerCase())
        )
      );
    }
    console.log(filtered.length);
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!isOpenSearch) return null;

  return createPortal(
    <div className={Styles.search_container}>
      <button
        className={`bg-${values?.theme}`}
        onClick={() => setIsOpenSearch(false)}
      >
        Close
      </button>
      <div className={`${Styles.search_search_container} bg-${values?.theme}`}>
        <input
          className={`${Styles.search_input} text-${values?.theme} bg-${values?.theme}`}
          type="text"
          placeholder="Search"
          value={query}
          onChange={onChangeQuery}
          disabled={loading}
        />
        <ul className={Styles.search_search_results_container}>
          {filtered.length === 0 && query.length > 0 ? (
            <h2
              className={`${Styles.search_not_found_text} text-${values?.theme}`}
            >
              Nothing found
            </h2>
          ) : (
            filtered.map(function (item: Item, index: number) {
              return <Pokemon key={item.name} searched={true} pokemon={item} />;
            })
          )}
        </ul>
      </div>
    </div>,
    document.getElementById("search_modal") as HTMLElement
  );
};

export default SearchPokemon;
