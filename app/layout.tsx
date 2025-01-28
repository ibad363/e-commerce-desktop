import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartProvider from "./context/CartProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SanityLive } from "@/sanity/lib/live";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furniro",
  description: "Furniro - Your Dream Furniture Store",
  icons: "/assets/main-logo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <ToastContainer/>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
        <SanityLive/>
      </body>
    </html>
    </ClerkProvider>
  );
}
