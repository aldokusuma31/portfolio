import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aldo Kusuma",
  description: "Fullstack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex flex-col min-h-screen bg-orange-100 z-20">
          <div className="relative bg-orange-200 w-full z-50 mx-auto px-4 py-3 md:py-5 lg:px-10">
            <Header />
          </div>
          <main className="text-slate-900">
            {children}
          </main>
        </div>
        </body>
    </html>
  );
}
