import React from "react";

type Item = {
  name: string;
  url: string;
};

const SearchResultItem = ({ item }: { item: Item }) => {
  return (
    <li>
      <p>{item.name}</p>
    </li>
  );
};

export default SearchResultItem;
