import SpotCard from './SpotCard';
import '../styles/SpotList.css';

export default function SpotList({ spots }) {
    return (
        <div className="spot-list">
            {spots.map(spot => (
                <SpotCard key={spot.id} spot={spot} />
            ))}
        </div>
    )
}