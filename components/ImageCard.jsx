import Link from 'next/link';
const ImageCard = ({details}) => {
    const {
        name,
        year,
        description,
        source,
        artist: {name: artistName, image: artistImage},
        images: {thumbnail, hero, gallery},
        id,
    } = details;
    return (
        <Link href={`/${id}`}>
            <img className="image" src={thumbnail} alt={name} />
        </Link>
    );
};

export default ImageCard;
