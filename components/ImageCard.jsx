import Link from 'next/link';
const ImageCard = ({details}) => {
    const {
        name: artName,
        artist: {name: artistName},
        images: {thumbnail},
        id,
    } = details;
    return (
        <Link className="image-card" href={`/${id}`}>
            <img className="image" src={thumbnail} alt={artName} />
            <div className="art-info-overlay flex">
                <p className="text-white fs-24 lh-125 fw-700">{artName}</p>
                <p className="text-white fs-13 lh-125">{artistName}</p>
            </div>
        </Link>
    );
};

export default ImageCard;
