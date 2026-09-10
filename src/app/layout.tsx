import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "JakeGenerates — Practical tools for repetitive work", template: "%s | JakeGenerates" },
  description: "A growing collection of practical tools that save time on repetitive work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
