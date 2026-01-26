import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  // variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "BuiltByMe",
  description: "A platform to showcase and discover projects built by developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
