import { Analytics } from "@/components/seo/Analytics";

import { Footer } from "@/components/layout/Footer";

import { FloatingCTA } from "@/components/layout/FloatingCTA";

import { Header } from "@/components/layout/Header";

import { JsonLd } from "@/components/seo/JsonLd";

import { HOME_METADATA } from "@/lib/seo";

import { Inter, Manrope } from "next/font/google";

import "./globals.css";



const inter = Inter({

  subsets: ["latin", "cyrillic"],

  variable: "--font-inter",

  display: "swap",

  preload: true,

});



const manrope = Manrope({

  subsets: ["latin", "cyrillic"],

  variable: "--font-manrope",

  display: "swap",

  preload: true,

});



export const metadata = HOME_METADATA;



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (

    <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>

      <body className="font-sans">

        <a

          href="#main-content"

          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"

        >

          Перейти к содержимому

        </a>

        <Analytics />

        <JsonLd />

        <Header />

        <main id="main-content">{children}</main>

        <Footer />

        <FloatingCTA />

      </body>

    </html>

  );

}

