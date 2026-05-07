import { useState } from 'react';
import './App.css';
import { spots } from './data/spots.js';
import SpotList from './components/SpotList';
import SearchBar from './components/SearchBar';
import EmptyState from './components/EmptyState';
import Hero from './components/Hero';
import Footer from './components/Footer';

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
      <Hero />

      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

      {filteredSpots.length > 0 ? <SpotList spots={filteredSpots} /> : <EmptyState />}

      <Footer />

    </div>
  )
}

export default App
