import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Portal from "./test/page";
import Stars from "./test/Stars";

import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

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
        {/* {[...Array(50)].map((item, index) => {
          const randomRight = Math.floor(Math.random() * (2180 - 0 + 1) + 0);
          const randomHeight = Math.floor(Math.random() * (2 - 1 + 1) + 1);
          return (
            <span
              className={`animate-shootingstar absolute h-[1px] w-[300px] bg-[#e0f0ea]`}
              style={{
                animationDuration: `${Math.random() * (5 - 1 + 1) + 1}s`,
                animationDelay: `${Math.random() * (5 - 1 + 1) + 1}s`,
                left: "initial",
                top: `-20px`,
                right: `${randomRight}px`,
              }}
              key={index}
            ></span>
          );
        })}
        {[...Array(20)].map((item, index) => {
          const randomTop = Math.floor(Math.random() * (2180 - 0 + 1) + 0);
          const randomHeight = Math.floor(Math.random() * (2 - 1 + 1) + 1);
          return (
            <span
              className={`animate-shootingstar absolute h-[1px] w-[200px] bg-[#e0f0ea]`}
              style={{
                animationDuration: `${Math.random() * (5 - 1 + 1) + 1}s`,
                animationDelay: `${Math.random() * (5 - 1 + 1) + 1}s`,
                left: "initial",
                top: `${randomTop}px`,
                right: `-300px`,
              }}
              key={index}
            ></span>
          );
        })} */}
        {/* <StarsCanvas /> */}

        {children}
      </body>
    </html>
  );
}
