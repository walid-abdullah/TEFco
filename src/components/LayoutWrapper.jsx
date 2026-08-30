"use client";
import { usePathname } from 'next/navigation';
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";
import VideoModal from "./VideoModal";
import FloatingDock from "./FloatingDock";
import GlassMeshBackground from "./GlassMeshBackground";
import { ThemeProvider } from "@/context/ThemeContext";

export default function LayoutWrapper({ children, settings }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <main>{children}</main>;
  }

  return (
    <ThemeProvider>
      <div style={{ position: 'relative', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
        <GlassMeshBackground />
        <Navbar menu={settings?.headerMenu} />
        <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
        <Footer menu={settings?.footerMenu} />
        <FloatingDock />
        <ChatWidget />
        <VideoModal />
      </div>
    </ThemeProvider>
  );
}
