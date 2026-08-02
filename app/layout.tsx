import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ergerica.github.io"),
  title: "Erica Ross — DevOps & Builder",
  description: "The things Erica Ross is building, learning, and figuring out along the way.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Erica Ross — DevOps & Builder",
    description: "Things I’m building, learning, and figuring out along the way.",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "Erica Ross — DevOps and Builder" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
