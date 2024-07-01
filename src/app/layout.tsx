import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next JS 3d portfolio",
  description:
    "Poftfolio build with Next Js using Typescript, Tailwindcss,and ThreeJS",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <header>
        <Navbar />
      </header>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
