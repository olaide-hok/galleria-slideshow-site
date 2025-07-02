'use client';

import ImageCard from '@/components/ImageCard';
import data from '@/lib/data.json';
import React from 'react';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
    default: 4,
    760: 2,
    425: 1,
};

export default function HomePage() {
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="multicol"
            columnClassName="gallery-column">
            {data.map((item) => {
                return <ImageCard key={item.name} details={item} />;
            })}
        </Masonry>
    );
}
