import '@/app/ui/global.css';
import Header from '@/components/Header';

import {Libre_Baskerville} from 'next/font/google';

const libreBaskerville = Libre_Baskerville({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--ff-libre-baskerville',
    display: 'swap',
});

export default function RootLayout({children}) {
    return (
        <html lang="en" className={`${libreBaskerville.variable}`}>
            <title>Galleria Slideshow Site</title>
            <body className="container">
                <Header />
                {children}
            </body>
        </html>
    );
}
