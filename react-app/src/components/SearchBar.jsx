import '../styles/SearchBar.css';

export default function SearchBar(props) {
    return (
        <div className="search-bar">
            <div className="search-row">
                <input 
                type="search" 
                aria-label="Search spots by name, suburb, type, or keywords"
                className="search-input"
                placeholder="Search by name, suburb, category, or keywords..."
                value={props.searchTerm}
                onChange={props.handleSearch}
                />
                {props.searchTerm.length > 0 && (
                    <button 
                    type="button"
                    className="clear-search"
                    onClick={props.clearSearch}
                    >
                        clear search
                    </button>
                )}
            </div>
        </div>
    )
}