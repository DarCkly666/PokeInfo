import React, { useContext, lazy, Suspense } from "react";
import { useFetch } from "../hooks/useFetch";

// import Pokemon from "./Pokemon";
import Pagination from "./Pagination";
import { FilterContext } from "../context/FilterProvider";

import PlaceholderLoading from "react-placeholder-loading/";

import Styles from "../styles/PokemonContainer.module.css";
import { ThemeContext } from "../context/ThemeProvider";
import MessageScreen from "./MessageScreen";

const INTIAL_STATE = {
  count: null,
  next: null,
  previous: null,
  results: [],
};

const PokemonContainer = () => {
  const { filter, url, setUrl }: any = useContext(FilterContext);
  const { theme }: any = useContext(ThemeContext);
  const { data, loading, error } = useFetch(url, INTIAL_STATE);

  const Pokemon = lazy(() => import("../components/Pokemon"));

  const pokemones = filter === "all" ? data.results : data.pokemon;

  if (loading) return <MessageScreen message="Loading..." />;

  if (error) return <h2>Error {error}</h2>;

  return (
    <div className={`${Styles.pokemon_container} bg-${theme}`}>
      {filter === "all" && (
        <Pagination next={data.next} prev={data.previous} setUrl={setUrl} />
      )}
      {!pokemones ? (
        <MessageScreen message="Loading..." />
      ) : pokemones.length === 0 ? (
        <MessageScreen message="Nothing found" />
      ) : filter === "all" ? (
        pokemones.map((poke: any) => (
          <Suspense
            key={poke.name}
            fallback={
              <PlaceholderLoading shape="rect" width={120} height={180} />
            }
          >
            <Pokemon key={poke.name} pokemon={poke} />
          </Suspense>
        ))
      ) : (
        pokemones.map((poke: any) => (
          <Suspense
            key={poke.name}
            fallback={
              <PlaceholderLoading shape="rect" width={120} height={180} />
            }
          >
            <Pokemon key={poke.pokemon.name} pokemon={poke.pokemon} />
          </Suspense>
        ))
      )}
    </div>
  );
};

export default PokemonContainer;
