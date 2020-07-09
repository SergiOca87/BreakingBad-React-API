import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterGrid = ({ items, isLoading, searchQuery }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="characters-grid">
      {searchQuery.length > 0
        ? items
            .filter((item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((filteredItems) => (
              <CharacterCard item={filteredItems} key={filteredItems.char_id} />
            ))
        : items.map((item) => <CharacterCard item={item} key={item.char_id} />)}
    </section>
  );
};

export default CharacterGrid;
