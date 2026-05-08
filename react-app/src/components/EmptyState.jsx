import '../styles/EmptyState.css';

export default function EmptyState() {
    return (
        <div className="EmptyState">
            <h2>Sorry, no spots found!</h2>
            <p>Try a different name, suburb, or type - or clear your search to browse all spots.</p>
        </div>
    )
}