import { Inter, Oswald, Rajdhani, Shrikhand } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: '--font-oswald',
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ['500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-rajdhani',
  display: "swap",
});

const shrikhand = Shrikhand({
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-shrikhand',
  display: "swap",
});

export const metadata = {
  title: "NEXTCAR | Engineered for Passion",
  description: "Premium automobile dashboard — Precision. Power. Performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} ${rajdhani.variable} ${shrikhand.variable} antialiased`}>{children}</body>
    </html>
  );
}

