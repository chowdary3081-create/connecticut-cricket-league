import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Connecticut Cricket League",
  description: "Official website for Connecticut Cricket League (CCL).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
