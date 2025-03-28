import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sri Ramana Events',
  description: `Creating Unforgettable Moments for Your Special Events
Exquisite decorations and flawless event management for weddings, birthdays, anniversaries, and more.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`scroll-smooth`}>{children}</body>
    </html>
  );
}
