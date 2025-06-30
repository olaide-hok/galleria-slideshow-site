import '@/app/ui/global.css';

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <title>Galleria Slideshow Site</title>
            <body>{children}</body>
        </html>
    );
}
