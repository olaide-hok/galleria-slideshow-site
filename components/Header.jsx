import Link from 'next/link';

const Header = () => {
    return (
        <header className="header flex">
            <Link href="/">
                <img
                    className="logo"
                    src="./assets/shared/logo.svg"
                    alt="galleria logo"
                />
            </Link>
            <button type="button" className="slide-show-btn uppercase">
                start slideshow
            </button>
        </header>
    );
};

export default Header;
