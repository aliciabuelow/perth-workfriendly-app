import { useState } from 'react';
import './App.css';
import { spots } from './data/spots.js';
import SpotList from './components/SpotList';
import SearchBar from './components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }

  return (
    <div className="App">
      <h1>Perth Work-Friendly</h1>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <SpotList spots={spots} />
    </div>
  )
}

export default App
