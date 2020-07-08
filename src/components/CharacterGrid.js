import React from "react";
import CharacterCard from './CharacterCard'

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ?
   <h1>Loading...</h1> 
   : 
   <section className="characters-grid">
       {items.map(item => (
           <CharacterCard 
                item={item} 
                key={item.char_id}
            />
       ))}
   </section>;
};

export default CharacterGrid;
