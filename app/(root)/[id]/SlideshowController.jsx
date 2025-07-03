'use client';
import Link from 'next/link';
import ProgressIndicator from './ProgressIndicator';

const SlideshowController = ({
    artName,
    artistName,
    totalArtworks,
    index,
    nextId,
    prevId,
}) => {
    const isFirst = index === 0;
    const isLast = index === totalArtworks - 1;

    return (
        <div className="slideshow-controller-wrapper">
            <ProgressIndicator currentIndex={index} total={totalArtworks} />
            <div className="slide-info flex">
                {/* art info */}
                <div className="art-info flex">
                    <p className="text-preset-3 fw-700">{artName}</p>
                    <p className="text-preset-5">{artistName}</p>
                </div>

                {/* buttons */}
                <div className="slideshow-btns flex">
                    {isFirst ? (
                        <button disabled className="disabled">
                            <svg
                                width="26"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#000" fill="none" fillRule="evenodd">
                                    <path
                                        d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                                        strokeWidth="2"
                                    />
                                    <path
                                        fill="#D8D8D8"
                                        d="M.986.5h-1v22.775h1z"
                                    />
                                </g>
                            </svg>
                        </button>
                    ) : (
                        <Link type="button" href={`/${prevId}`}>
                            {' '}
                            <svg
                                width="26"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#000" fill="none" fillRule="evenodd">
                                    <path
                                        d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                                        strokeWidth="2"
                                    />
                                    <path
                                        fill="#D8D8D8"
                                        d="M.986.5h-1v22.775h1z"
                                    />
                                </g>
                            </svg>
                        </Link>
                    )}

                    {/* Next */}
                    {isLast ? (
                        <button disabled className="disabled">
                            <svg
                                width="26"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#000" fill="none" fillRule="evenodd">
                                    <path
                                        d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                                        strokeWidth="2"
                                    />
                                    <path
                                        fill="#D8D8D8"
                                        d="M24.708.5h1v22.775h-1z"
                                    />
                                </g>
                            </svg>
                        </button>
                    ) : (
                        <Link type="button" href={`/${nextId}`}>
                            <svg
                                width="26"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg">
                                <g stroke="#000" fill="none" fillRule="evenodd">
                                    <path
                                        d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                                        strokeWidth="2"
                                    />
                                    <path
                                        fill="#D8D8D8"
                                        d="M24.708.5h1v22.775h-1z"
                                    />
                                </g>
                            </svg>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SlideshowController;
