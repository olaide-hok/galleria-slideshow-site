'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="header flex">
            <Link href="/">
                <img
                    className="logo"
                    src="./assets/shared/logo.svg"
                    alt="galleria logo"
                />
            </Link>
            <Link
                href={pathname !== '/' ? '/' : '/starry-night'}
                className="slide-show-btn uppercase">
                {pathname === '/' ? 'start slideshow' : 'stop slideshow'}
            </Link>
        </header>
    );
};

export default Header;
