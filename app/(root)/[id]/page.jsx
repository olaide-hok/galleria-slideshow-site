import data from '@/lib/data.json';
import ArtDetails from './art-details';

export async function generateMetadata({params}) {
    const {id} = await params;
    const artwork = data.find((item) => item.id === id);

    if (!artwork) return {title: 'Artwork Not Found'};

    return {
        title: `${artwork.name} - Galleria`,
        description: artwork.description,
    };
}

async function DetailsPage({params}) {
    const {id} = await params;

    const index = data.findIndex((art) => art.id === id);

    const artwork = data[index];
    const nextId = data[(index + 1) % data.length].id;
    const prevId = data[(index - 1 + data.length) % data.length].id;

    return (
        <ArtDetails
            artwork={artwork}
            index={index}
            total={data.length}
            nextId={nextId}
            prevId={prevId}
        />
    );
}

export default DetailsPage;
