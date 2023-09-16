import React from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Book-Shelf!",
  description: "A simple book-collection SPA.",
  authors: { name: "Mostafa Vahabzadeh", url: "https://github.com/vah-most" },
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
