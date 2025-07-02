import React from 'react';

const SlideshowController = ({artName, artistName}) => {
    return (
        <div className="slideshow-controller-wrapper">
            <div className="slideshow-progress-indicator"></div>
            <div className="slide-info flex">
                {/* art info */}
                <div className="art-info flex">
                    <p className="text-preset-3 fw-700">{artName}</p>
                    <p className="text-preset-5">{artistName}</p>
                </div>

                {/* buttons */}
                <div className="slideshow-btns flex">
                    <button type="button">
                        <svg
                            width="26"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg">
                            <g stroke="#000" fill="none" fill-rule="evenodd">
                                <path
                                    d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                                    stroke-width="2"
                                />
                                <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
                            </g>
                        </svg>
                    </button>
                    <button type="button">
                        <svg
                            width="26"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg">
                            <g stroke="#000" fill="none" fill-rule="evenodd">
                                <path
                                    d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                                    stroke-width="2"
                                />
                                <path
                                    fill="#D8D8D8"
                                    d="M24.708.5h1v22.775h-1z"
                                />
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SlideshowController;
