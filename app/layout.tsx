import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend challenges",
  description: "Frontend challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children} </body>
    </html>
  );
}
