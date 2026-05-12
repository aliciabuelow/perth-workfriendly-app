import { useState, useRef } from 'react';
import './App.css';
import { spots } from './data/spots.js';
import SpotList from './components/SpotList';
import SearchBar from './components/SearchBar';
import EmptyState from './components/EmptyState';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const targetRef = useRef(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const search = searchTerm.toLowerCase();

  const filteredSpots = spots.filter((spot) => {
    return (
    spot.name.toLowerCase().includes(search) ||
    spot.suburb.toLowerCase().includes(search) ||
    spot.type.toLowerCase().includes(search) ||
    spot.tags.some((tag) => tag.toLowerCase().includes(search))
  )
  });

  const onFilterClick = (e) => {
    setSearchTerm(e.currentTarget.value.toLowerCase());

    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const onScrollUp = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Hero />

      <SearchBar 
        searchTerm={searchTerm} 
        handleSearch={handleSearch} 
        clearSearch={clearSearch} 
        targetRef={targetRef}
      />

      {filteredSpots.length > 0 && (
      <h4>{filteredSpots.length} spot{filteredSpots.length === 1 ? "" : "s"} found</h4>
      )}

      {filteredSpots.length > 0 ? <SpotList spots={filteredSpots} onFilterClick={onFilterClick} /> : <EmptyState />}

      <button
        className="scroll-button"
        onClick={onScrollUp}
      >
        ⬆️
      </button>

      <Footer />

    </div>
  )
}

export default App
