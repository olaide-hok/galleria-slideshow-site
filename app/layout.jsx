import '@/app/ui/global.css';
import {Libre_Baskerville} from 'next/font/google';

const libreBaskerville = Libre_Baskerville({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--ff-libre-baskerville',
    display: 'swap',
});

export default function AppLayout({children}) {
    return (
        <html lang="en" className={`${libreBaskerville.variable}`}>
            <title>Galleria Slideshow Site</title>
            <body>{children}</body>
        </html>
    );
}
