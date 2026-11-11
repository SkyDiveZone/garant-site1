import { Analytics } from "@/components/seo/Analytics";
import { YandexMetrikaRouteHit } from "@/components/seo/YandexMetrikaRouteHit";
import { CookieConsentBanner } from "@/components/legal/CookieConsentBanner";
import { EkbFooter } from "@/components/ekb2/EkbFooter";
import { EkbHeader } from "@/components/ekb2/EkbHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_METADATA } from "@/lib/seo";
import { Manrope } from "next/font/google";
import "./globals.css";
import "@/styles/ekb2.css";

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
    <html lang="ru" className={manrope.variable}>
      <body style={{ fontFamily: "var(--font-manrope), Manrope, 'Segoe UI', sans-serif" }}>
        <JsonLd />
        <EkbHeader />
        {children}
        <EkbFooter />
        <CookieConsentBanner />
        <Analytics />
        <YandexMetrikaRouteHit />
      </body>
    </html>
  );
}
