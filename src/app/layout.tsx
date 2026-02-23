import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Header, Footer } from "@/components/widgets";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Focus",
  description: "Focus",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <Header />
        <main className="flex flex-col gap-37.5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
