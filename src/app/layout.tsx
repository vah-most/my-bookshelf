import React from "react";
import type { Metadata } from "next";

import Header from "@/components/Header";

import "./globals.scss";

export const metadata: Metadata = {
  title: "My Book-Shelf!",
  description: "Simple book-store application",
  authors: { name: "Mostafa Vahabzadeh", url: "https://github.com/vah-most" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app_container">
          <Header />
          {children}
        </div>
        <div id="portal-modal-id" />
        <div id="portal-prompt-id" />
      </body>
    </html>
  );
}
