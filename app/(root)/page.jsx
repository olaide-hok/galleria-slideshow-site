import ImageCard from '@/components/ImageCard';
import data from '@/lib/data.json';

export default function HomePage() {
    return (
        <>
            {data.map((item) => {
                return <ImageCard key={item.name} details={item} />;
            })}
        </>
    );
}
