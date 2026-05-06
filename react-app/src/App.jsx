import { useState } from 'react';
import './App.css';
import { spots } from './data/spots.js';
import SpotList from './components/SpotList';
import SearchBar from './components/SearchBar';
import EmptyState from './components/EmptyState';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const search = searchTerm.toLowerCase();

  const filteredSpots = spots.filter((spot) => {
    return (
    spot.name.toLowerCase().includes(search) ||
    spot.suburb.toLowerCase().includes(search) ||
    spot.type.toLowerCase().includes(search)
  )
  });

  return (
    <div className="App">
      <h1>Perth Work-Friendly</h1>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

      {filteredSpots.length > 0 ? <SpotList spots={filteredSpots} /> : <EmptyState />}

    </div>
  )
}

export default App
