import '../styles/SpotCard.css';

export default function SpotCard({ spot, onFilterClick, targetRef }) {
    const spotType = spot.type.toLowerCase().replaceAll(" ", "-");

    return (
        <article 
            className={`spot-card ${spotType}`}
        >
            <button 
            className="spot-type-header"
            onClick={onFilterClick}
            value={spot.type}
            >
                {spot.type}
            </button>
            
            <section className="card-content">
            <header className="card-heading">

                <h2 className="spot-name">{spot.name}</h2>

                <button 
                    className="spot-suburb"
                    onClick={onFilterClick}
                    value={spot.suburb}
                >
                    {spot.suburb}
                </button>
                
            </header>

            <div className="card-body">
                <p className="spot-notes">{spot.notes}</p>

                <div className="spot-tags">
                    {spot.tags.map((item) => (
                        <button 
                        key={item} 
                        className="spot-tag"
                        onClick={onFilterClick}
                        value={item}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
            </section>

            <footer className="card-footer">
                <div className="line"></div>
                
                <div className="spot-address">{spot.address}</div>
                <a 
                 href={spot.website} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="spot-link"
                 >
                    Visit Website
                </a>
            </footer>

        </article>
    )
}