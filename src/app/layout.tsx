import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

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
    <html lang="en">
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
