import "./globals.css";
import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import Portal from "./test/page";
import ReactTyped from "react-typed";

const inter = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "NextJs Auth Full Stack",
  description: "Application created by Umang Sachdeva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Portal />
        {children}
      </body>
    </html>
  );
}
