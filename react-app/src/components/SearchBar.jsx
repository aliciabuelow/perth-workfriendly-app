import '../styles/SearchBar.css';

export default function SearchBar(props) {
    return (
        <div 
            className="search-bar" 
            id="search-bar"
            ref={props.targetRef}
        >
            <div className="search-row">
                <input 
                type="search" 
                aria-label="Search spots by name, suburb, type, or keyword"
                className="search-input"
                placeholder="Search by name, suburb, category, or keyword..."
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