import "./globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";

export const metadata: Metadata = {
  title: "AsanaPad",
  description: "Create, time, and reuse your yoga class sequences"
};

const mulish = Mulish({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
