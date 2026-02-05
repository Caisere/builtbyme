import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common-components/header";
import Footer from "@/components/common-components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import {ViewTransitions} from "next-view-transitions";

const inter = Inter({
  subsets: ["latin"],
  // variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  // variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "BuiltByMe - Share Your Creations, Discover Amazing Projects",
  description: "A platform to showcase and discover projects built by developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <ClerkProvider>
      <html lang="en">
        <body
          className={`${outfit.className} antialiased`}
        >
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
      </ClerkProvider>
    </ViewTransitions>
  );
}
