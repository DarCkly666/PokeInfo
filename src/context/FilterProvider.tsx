import React, { createContext } from "react";

interface FilterContextInterface {
  url: string;
  setUrl: any;
  filter: string;
  setFilter: any;
  isOpenSearch: boolean;
  setIsOpenSearch: any;
}

export const FilterContext = createContext<FilterContextInterface | null>(null);

const FilterProvider = (props: any) => {
  const children = props.children;
  const [filter, setFilter] = React.useState("all");
  const [url, setUrl] = React.useState("https://pokeapi.co/api/v2/pokemon/");
  const [isOpenSearch, setIsOpenSearch] = React.useState(false);
  return (
    <FilterContext.Provider
      value={{ filter, setFilter, url, setUrl, isOpenSearch, setIsOpenSearch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
