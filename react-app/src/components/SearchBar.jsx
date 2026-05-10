import '../styles/SearchBar.css';

export default function SearchBar(props) {
    return (
        <div className="search-bar">
            <input 
            type="search" 
            aria-label="Search spots by name, suburb, type, or keywords"
            className="search-input"
            placeholder="Search by name, suburb, category, or keywords..."
            value={props.searchTerm}
            onChange={props.handleSearch}
            />
        </div>
    )
}