import type { Metadata } from "next";
import { Outfit, Inter, Caveat, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Yuhansi Dinethma | UI/UX Designer & Developer Portfolio",
  description: "Personal portfolio of Yuhansi Dinethma, featuring UI/UX design case studies and web development projects. Aspiring designer and developer specializing in beautiful, functional and meaningful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${caveat.variable} ${playfair.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
