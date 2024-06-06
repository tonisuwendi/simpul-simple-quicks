import React from 'react';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { DashboardLayout } from '@components/layouts';
import { QuicksProvider } from '@context';
import '@mantine/core/styles.css';
import '@styles/globals.css';

const inter = Lato({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Simple Quicks',
  description: 'Simple Quicks is a collection of simple and quick recipes.'
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <html lang="en">
    <head>
      <ColorSchemeScript />
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
    </head>
    <body className={inter.className}>
      <MantineProvider>
        <QuicksProvider>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </QuicksProvider>
      </MantineProvider>
    </body>
  </html>
);

export default RootLayout;
