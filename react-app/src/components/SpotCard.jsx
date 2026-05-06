export default function SpotCard({ spot }) {
    return (
        <div className="spot-card">

            <h2>{spot.name}</h2>
            <p>{spot.suburb}</p>
            <p>{spot.type}</p>
            <p>{spot.address}</p>
            <p>{spot.notes}</p>

        </div>
    )
}