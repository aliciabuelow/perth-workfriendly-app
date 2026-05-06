import SpotCard from './SpotCard';

export default function SpotList({ spots }) {
    return (
        <div className="spot-list">
            {spots.map(spot => (
                <SpotCard key={spot.id} spot={spot} />
            ))}
        </div>
    )
}