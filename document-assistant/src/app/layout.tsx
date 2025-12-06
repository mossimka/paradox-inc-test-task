import type { Metadata } from "next";

import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/utils/ProgressBar";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Paradox Inc Test Task",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CssBaseline />
        <ToastContainer className="z-50" />
        <Header />
        <ProgressBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
