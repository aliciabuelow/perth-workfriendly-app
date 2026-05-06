export default function SearchBar(props) {
    return (
        <div className="search-bar">
            <input 
            type="text" 
            placeholder="Search by name, suburb, or type..."
            value={props.searchTerm}
            onChange={props.handleSearch}
            />
        </div>
    )
}