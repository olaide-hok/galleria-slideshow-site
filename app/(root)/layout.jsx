import Header from '@/components/Header';

export default function RootLayout({children}) {
    return (
        <main className="container">
            <Header />
            {children}
        </main>
    );
}
