import React from "react";
import type { Metadata } from "next";

import Header from "@/components/Header";
import StoreProvider from "@/redux/store";

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
        <StoreProvider>
          <div className="app_container">
            <Header />
            {children}
          </div>
        </StoreProvider>
        <div id="portal-modal-id" />
        <div id="portal-prompt-id" />
      </body>
    </html>
  );
}
