import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "StreetVault — La Renaissance de la Street",
  description: "Nike Therma, Trail, Hybrid Under Armour. Pas du hype, de la vraie culture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" style={{overflowX: "hidden", maxWidth: "100%"}}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body style={{margin: 0, padding: 0, overflowX: "hidden", maxWidth: "100%", boxSizing: "border-box"}}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
