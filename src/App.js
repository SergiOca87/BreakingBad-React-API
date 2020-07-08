import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

// Components
import Header from './components/Header'
import CharacterGrid from './components/CharacterGrid'
import Search from './components/Search'

const App = () => {

  // This is using state with hooks
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  // The Array callback are dependencies for useEffect

  // Isolate the fecth into another function
  // useEffect, add searchQuery dependency (reloads everytime it changes)
  // useEffect, create a way to filter the Array. So we prevent API calls

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)

      console.log(result);
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems();
  }, [])

  return (
    <div className="App">
        <Header />
        <Search getSearchQuery={(q) => setSearchQuery(q)}/>
        <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
