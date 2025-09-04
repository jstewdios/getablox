import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Building Blox — Grow Blox Presale",
  description: "A beautiful one-page site to pre-sell Grow Blox: a countertop living greenhouse.",
  openGraph: {
    title: "Building Blox — Grow Blox Presale",
    description: "A beautiful one-page site to pre-sell Grow Blox: a countertop living greenhouse.",
    images: ["/og.jpg"]
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
