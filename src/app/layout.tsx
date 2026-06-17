import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Randi — Web Developer Portfolio",
  description: "Portfolio of Randi Andhika Djaja — fullstack developer & computer engineering graduate.",
  icons: {
    icon: "/logoporto.png",
    shortcut: "/logoporto.png",
    apple: "/logoporto.png",
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
