"use client";
import { usePathname } from 'next/navigation';
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";
import VideoModal from "./VideoModal";

export default function LayoutWrapper({ children, settings }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar menu={settings?.headerMenu} />
      <main>{children}</main>
      <Footer menu={settings?.footerMenu} />
      <ChatWidget />
      <VideoModal />
    </>
  );
}
