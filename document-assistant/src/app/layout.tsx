import type { Metadata } from "next";
import { CssBaseline } from "@mui/material";
import localFont from "next/font/local";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/utils/ProgressBar";
import "@/styles/globals.css";

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

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
      <body className={`antialiased ${montserrat.variable}`}>
        <CssBaseline />
        <Header />
        <ProgressBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
