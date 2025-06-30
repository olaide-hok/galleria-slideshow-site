import React from 'react';

const Header = () => {
    return (
        <header className="header flex">
            <img
                className="logo"
                src="./assets/shared/logo.svg"
                alt="galleria logo"
            />
            <button type="button" className="slide-show-btn uppercase">
                start slideshow
            </button>
        </header>
    );
};

export default Header;
