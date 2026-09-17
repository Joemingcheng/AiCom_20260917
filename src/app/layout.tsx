import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Parallax } from "@/components/Parallax";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "愛康科技 Comtrend | Leading the Communication Trend",
  description:
    "愛康科技股份有限公司提供光纖、VDSL、乙太網路、家用電力線網路與企業遠端管理解決方案，領導通訊趨勢。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body id="top" className="relative flex min-h-full flex-col overflow-x-hidden bg-[#f5f7fb] text-slate-900">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#f5f7fb]" />
          <Parallax fixed speed={0.12} className="absolute -top-48 right-[-15%] h-[640px] w-[640px] rounded-full bg-cyan-300/30 blur-[160px]">{null}</Parallax>
          <Parallax fixed speed={-0.08} className="absolute bottom-[-20%] left-[-10%] h-[520px] w-[520px] rounded-full bg-blue-300/25 blur-[160px]">{null}</Parallax>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}