"use client";

import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WelcomeLeadPopup } from "@/components/ui/WelcomeLeadPopup";
import { usePathname } from "next/navigation";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const home = pathname === "/";

  return (
    <>
      {!home && <Header />}
      <main id="main-content">{children}</main>
      {!home && (
        <>
          <Footer />
          <FloatingCTA />
          <WelcomeLeadPopup />
        </>
      )}
    </>
  );
}
