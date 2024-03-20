import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ten James",
  description: "Ten James Presentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main className="relative z-10 h-dvh grid place-items-center md:p-10 overflow-hidden">
          {children}
        </main>
        <BackgroundBeams />
      </body>
    </html>
  );
}
