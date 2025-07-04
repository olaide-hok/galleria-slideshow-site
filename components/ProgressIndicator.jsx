export default function ProgressIndicator({currentIndex, total}) {
    return (
        <div className="slideshow-progress-indicator">
            <progress
                max={total}
                value={currentIndex + 1}
                className="progress-bar"
            />
        </div>
    );
}
