import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Психотерапија',
  description: 'Званична страница психотерапије',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <nav style={{ backgroundColor: '#003366', padding: '1rem' }}>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ marginRight: '65.5rem' , marginLeft:'2.5rem'}}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Почетна</Link>
            </li>
            <li style={{ marginRight: '1.5rem' }}>
              <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>О нама</Link>
            </li>
                    <li style={{ marginRight: '1.5rem' }} >
          <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>
            Блог
          </Link>
        </li>
            <li style={{ marginRight: '1.5rem' }}>
              <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Контакт</Link>
            </li>
          </ul>
        </nav>

        <main style={{ flex: '1', padding: '1rem' }}>
          {children}
        </main>

        <footer style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', padding: '1rem' }}>
          <p>© 2025 Психотерапија. Сва права задржана.</p>
        </footer>
      </body>
    </html>
  );
}
