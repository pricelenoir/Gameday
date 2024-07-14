import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gameday",
  description: "Gameday Fantasy Sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex">
          <div className="w-1/4 bg-gray-200 min-h-screen">
            <Sidebar />
          </div>
          <div className="flex-grow w-1/2 min-h-screen">
            {children}
          </div>
          <div className="w-1/4 min-h-screen"></div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
