'use client';

import ImageCard from '@/components/ImageCard';
import data from '@/lib/data.json';
import {useEffect, useState} from 'react';

export const organizeIntoColumns = (items, screenSize) => {
    if (screenSize === 'xl') {
        // 1440px+
        return [
            [items[0], items[4], items[8], items[11]],
            [items[1], items[5], items[9], items[12]],
            [items[2], items[6], items[13]],
            [items[3], items[7], items[10], items[14]],
        ];
    }

    if (screenSize === 'md') {
        // 768px - 1439px
        // 2 columns
        return [
            [
                items[0],
                items[2],
                items[4],
                items[6],
                items[8],
                items[11],
                items[13],
            ],
            [
                items[1],
                items[3],
                items[5],
                items[7],
                items[9],
                items[10],
                items[12],
                items[14],
            ],
        ];
    }

    // sm: below 760px (1 column)
    return [items]; // Single column with all items
};

export default function HomePage() {
    const [screenSize, setScreenSize] = useState('md'); // Default to medium

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.matchMedia('(min-width: 1440px)').matches) {
                setScreenSize('xl');
            } else if (window.matchMedia('(min-width: 768px)').matches) {
                setScreenSize('md');
            } else {
                setScreenSize('sm');
            }
        };

        // Initial check
        checkScreenSize();

        // Add event listener
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const columns = organizeIntoColumns(data, screenSize);

    return (
        <div className="multicol">
            {columns.map((columnItems, columnIndex) => (
                <div key={columnIndex} className="gallery-column">
                    {columnItems.map((item) => (
                        <ImageCard key={item.name} details={item} />
                    ))}
                </div>
            ))}
        </div>
    );
}
