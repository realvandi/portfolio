import { AppBar } from "@mui/material";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { Navbar } from "@nextui-org/navbar";
import { Providers } from "./providers";
import AlvandiNavbar from "./AlvandiNavbar";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import Loading from "./Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dylan Alvandi",
  description: "Get to know Dylan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <AlvandiNavbar />
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
