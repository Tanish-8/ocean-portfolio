import type { Metadata } from 'next';
import { Inter, Cinzel } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ocean/providers/ThemeProvider';
import OceanProvider from '@/components/ocean/providers/OceanProvider';
import ScrollProvider from '@/components/ocean/providers/ScrollProvider';
import AudioProvider from '@/components/ocean/providers/AudioProvider';
import CursorProvider from '@/components/ocean/providers/CursorProvider';
import { SITE_METADATA } from '@/constants/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: SITE_METADATA.siteName,
  description: SITE_METADATA.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-text-primary">
        <ThemeProvider>
          <OceanProvider>
            <ScrollProvider>
              <AudioProvider>
                <CursorProvider>{children}</CursorProvider>
              </AudioProvider>
            </ScrollProvider>
          </OceanProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
