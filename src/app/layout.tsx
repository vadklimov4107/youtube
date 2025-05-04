import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import { Layout } from '@/components/layout/Layout';

import './globals.scss';

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Youtube',
  description: 'Best video hosting platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
