import React from "react";
import PlaceholderLoading from "react-placeholder-loading/";
import { useFetch } from "../hooks/useFetch";
import { getColor } from "../utils/colors";
import Pokeball from "./Pokeball";

import Styles from "../styles/Pokemon.module.css";
import { Link } from "react-router-dom";
import Stats from "./Stats";
import { FilterContext } from "../context/FilterProvider";

type Item = {
  name: string;
  url: string;
};

const Pokemon = ({
  pokemon,
  searched = false,
}: {
  pokemon: Item;
  searched: boolean;
}): React.ReactElement => {
  const { data, loading = true, error } = useFetch(pokemon.url, {});
  const { setIsOpenSearch }: any = React.useContext(FilterContext);

  if (loading)
    return <PlaceholderLoading shape="rect" width={120} height={180} />;

  if (error) return <h2>Error {error}</h2>;

  return (
    <Link className={Styles.pokemon_card_container} to={`./pokemon/${data.id}`}>
      <div
        className={Styles.pokemon_card}
        style={{
          backgroundColor: `${getColor(data.types[0].type.name)}`,
        }}
        onClick={() => {
          setIsOpenSearch(false);
        }}
      >
        <img
          className={Styles.pokemon_image}
          src={data.sprites.front_default}
          alt={data.name}
        />
        <Pokeball />
        <h4 className={Styles.pokemon_name}>{data.name}</h4>
        {!searched && <Stats data={data} />}
      </div>
    </Link>
  );
};

export default Pokemon;
