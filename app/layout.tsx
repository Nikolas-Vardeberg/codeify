import type { Metadata } from "next";
import "./globals.css";
import { RootProvider } from 'fumadocs-ui/provider';
import localFont from "next/font/local";

const aeronaut = localFont({
  src: "./fonts/Aeronaut.woff2",
  variable: "--font-aeronaut",
})

export const metadata: Metadata = {
  title: "Codeify",
  description: "Learn Next.js without paying anything, open source learning platform to learn Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html suppressHydrationWarning>
        <body
          className={`${aeronaut.variable} antialiased`}
        >
          <RootProvider>
            {children}
          </RootProvider>
        </body>
      </html>
  );
}
