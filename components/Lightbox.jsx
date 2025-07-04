'use client';

import {useEffect} from 'react';

export default function Lightbox({src, alt, onClose}) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div
                className="lightbox-content flex"
                onClick={(e) => e.stopPropagation()}>
                <button
                    className="lightbox-close text-white fs-14 lh-200 ls-2 fw-700 uppercase"
                    onClick={onClose}>
                    close
                </button>
                <img src={src} alt={alt} />
            </div>
        </div>
    );
}
