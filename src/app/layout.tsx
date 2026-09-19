import type { Metadata } from "next";
import { Libre_Franklin, Courier_Prime } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-system-var",
  display: "swap",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Randi — Web Developer Portfolio",
  description: "Portfolio of Randi Andhika Djaja — fullstack developer & computer engineering graduate.",
  icons: {
    icon: "/web-icon3.png",
    shortcut: "/web-icon3.png",
    apple: "/web-icon3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreFranklin.variable} ${courierPrime.variable}`}>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
