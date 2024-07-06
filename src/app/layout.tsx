import type { Metadata } from "next";
import "./globals.css";
import { Tenor_Sans } from 'next/font/google'


export const metadata: Metadata = {
  title: "Yuma Bio",
  description: "Phoenix Test Project",
};

const tenor = Tenor_Sans({weight: '400', subsets:['cyrillic']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={tenor.className}>
      <body>{children}</body>
    </html>
  );
}
