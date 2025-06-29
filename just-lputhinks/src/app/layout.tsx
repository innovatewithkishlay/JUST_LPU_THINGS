import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Just LPUThinks',
  description: 'Modern Educational Resource Hub for LPU Students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + " bg-white text-gray-900 antialiased"}>
        <Header />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
