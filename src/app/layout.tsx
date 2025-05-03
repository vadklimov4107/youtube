import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import './globals.scss';
import { Layout } from '@/components/layout/Layout';

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youtube",
  description: "Best video hosting platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
