"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Produit = {
  id: number;
  name: string;
  variante: string;
  taille: string;
  prix: number;
  photo: string | null;
  quantite: number;
};

type CartContextType = {
  panier: Produit[];
  ajouterAuPanier: (produit: Produit) => void;
  supprimerDuPanier: (id: number, taille: string) => void;
  modifierQuantite: (id: number, taille: string, qte: number) => void;
  total: number;
  nbArticles: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [panier, setPanier] = useState<Produit[]>([]);

  const ajouterAuPanier = (produit: Produit) => {
    setPanier(prev => {
      const existe = prev.find(p => p.id === produit.id && p.taille === produit.taille);
      if (existe) {
        return prev.map(p => p.id === produit.id && p.taille === produit.taille
          ? {...p, quantite: p.quantite + 1} : p);
      }
      return [...prev, produit];
    });
  };

  const supprimerDuPanier = (id: number, taille: string) => {
    setPanier(prev => prev.filter(p => !(p.id === id && p.taille === taille)));
  };

  const modifierQuantite = (id: number, taille: string, qte: number) => {
    if (qte < 1) return supprimerDuPanier(id, taille);
    setPanier(prev => prev.map(p => p.id === id && p.taille === taille ? {...p, quantite: qte} : p));
  };

  const total = panier.reduce((acc, p) => acc + p.prix * p.quantite, 0);
  const nbArticles = panier.reduce((acc, p) => acc + p.quantite, 0);

  return (
    <CartContext.Provider value={{panier, ajouterAuPanier, supprimerDuPanier, modifierQuantite, total, nbArticles}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart doit être utilisé dans CartProvider");
  return context;
}