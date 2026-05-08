import '../styles/SpotCard.css';

export default function SpotCard({ spot }) {
    return (
        <article className="spot-card">
            <header className="card-heading">
                <div className="type-badge">{spot.type}</div>
                <h2 className="spot-name">{spot.name}</h2>
                <div className="spot-suburb">{spot.suburb}</div>
            </header>

            <div className="card-body">
                <p className="spot-notes">{spot.notes}</p>

                <div className="spot-tags">
                    {spot.tags.map((item) => (
                        <div key={item} className="spot-tag">
                            {item}
                        </div>
                    ))}
                </div>
            </div>


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