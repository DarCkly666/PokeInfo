import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getColor } from "../utils/colors";

import Styles from "../styles/PokemonView.module.css";
import { ThemeContext } from "../context/ThemeProvider";
import Loading from "../components/MessageScreen";
import NotFound from "../components/NotFound";

const PokemonView = (): React.ReactElement => {
  const { id } = useParams();
  const { theme }: any = React.useContext(ThemeContext);

  const {
    data,
    loading = true,
    error,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, undefined);

  if (loading) return <Loading message="Loading..." />;

  if (error) return <NotFound />;
  return (
    <div className={`${Styles.pokemoview_container} bg-${theme}`}>
      <h1 className={`${Styles.pokemoview_name} text-${theme}`}>
        {data.name} <span>Nº: {data.id}</span>
      </h1>
      <div className={Styles.pokemoview_stats_container}>
        <img
          className={Styles.pokemoview_image}
          src={`${data.sprites.front_default}`}
          alt={`${data.name}`}
        />
        <div className={`${Styles.pokemoview_stats} text-${theme}`}>
          <p>
            <span>Base experience:</span> {data.base_experience}
          </p>
          <p>
            <span>Height:</span> {data.height * 10} cm
          </p>
          <p>
            <span>Weight:</span> {data.weight * 0.1} kg
          </p>
          <p>
            <span>Hp:</span> {data.stats[0].base_stat}
          </p>
          <p>
            <span>Attack:</span> {data.stats[1].base_stat}
          </p>
          <p>
            <span>Defense:</span> {data.stats[2].base_stat}
          </p>
          <p>
            <span>Special Attack:</span> {data.stats[3].base_stat}
          </p>
          <p>
            <span>Special Defense:</span> {data.stats[4].base_stat}
          </p>
          <p>
            <span>Speed:</span> {data.stats[5].base_stat}
          </p>
        </div>
      </div>
      <div className={`${Styles.pokemoview_type_container} text-${theme}`}>
        <h3>Type</h3>
        <div>
          {data.types.map((poketype: any) => (
            <h4
              style={{ backgroundColor: `${getColor(poketype.type.name)}` }}
              key={poketype.slot}
            >
              {poketype.type.name}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonView;
