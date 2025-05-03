import Navigation from '@/components/Navigation';
import './globals.css';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

export const metadata: Metadata = {
  title: 'AsanaPad',
  description: 'Create, time, and reuse your yoga class sequences'
};

const mulish = Mulish({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Navigation />
        {children}
        <footer>
          &copy; 2025 by{' '}
          <a
            href="https://github.com/AsthangaLabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            AshtangaLabs
          </a>
        </footer>
      </body>
    </html>
  );
}
