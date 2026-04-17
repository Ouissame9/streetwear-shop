"use client";
import { useState } from "react";

const produits = [
  {
    id: 19,
    name: "Nike Trail Bas",
    variante: "Noir",
    marque: "Nike",
    categorie: "Bas",
    photos: [
      "/images/bas-niketrail.JPG",
      "/images/bas-niketrail-devant.JPG",
      "/images/bas-niketrail-derriere.JPG",
      "/images/bas-niketrail-interieur.JPG",
      "/images/bas-niketrail-fermeture.JPG",
      "/images/bas-niketrail-pied.JPG",
    ],
  },
  { id: 1, name: "Nike Therma-FIT Manche Longue", variante: "Vert", marque: "Nike", categorie: "Hauts", photos: null },
  { id: 2, name: "Nike Therma-FIT Manche Longue", variante: "Gris", marque: "Nike", categorie: "Hauts", photos: null },
  { id: 3, name: "Nike Therma-FIT Manche Longue", variante: "Noir", marque: "Nike", categorie: "Hauts", photos: null },
  { id: 4, name: "Nike Therma-FIT Manche Longue", variante: "Bleu Marine", marque: "Nike", categorie: "Hauts", photos: null },
  { id: 5, name: "Nike Therma Manche Longue Spé", variante: "Kaki", marque: "Nike", categorie: "Hauts", photos: null },
  { id: 6, name: "Nike Therma Manche Longue Spé", variante: "Noir", marque: "Nike", categorie: "Hauts", photos: null },
  { id: 7, name: "Nike Therma Manche Courte", variante: "Bleu Vert", marque: "Nike", categorie: "Hauts", photos: null },
  { id: 8, name: "Nike Therma Manche Courte", variante: "Blanc", marque: "Nike", categorie: "Hauts", photos: null },
  { id: 9, name: "Nike Therma Trail Manche Courte", variante: "Noir", marque: "Nike", categorie: "Hauts", photos: null },
  { id: 10, name: "Nike Trail Veste", variante: "Noir", marque: "Nike", categorie: "Vestes", photos: null },
  { id: 11, name: "Nike Trail Veste", variante: "Nuage", marque: "Nike", categorie: "Vestes", photos: null },
  { id: 12, name: "Nike Trail Veste V2", variante: "Noir", marque: "Nike", categorie: "Vestes", photos: null },
  { id: 13, name: "Nike Trail Veste V2", variante: "Beige", marque: "Nike", categorie: "Vestes", photos: null },
  { id: 14, name: "Nike Trail Veste V3", variante: "Noir", marque: "Nike", categorie: "Vestes", photos: null },
  { id: 15, name: "Nike Trail Pull", variante: "Noir", marque: "Nike", categorie: "Hauts", photos: null },
  { id: 16, name: "Nike Trail Pull", variante: "Lavande", marque: "Nike", categorie: "Hauts", photos: null },
  { id: 17, name: "Nike Trail Pull V2", variante: "Noir", marque: "Nike", categorie: "Hauts", photos: null },
  { id: 18, name: "Nike Trail Pull V2", variante: "Mix", marque: "Nike", categorie: "Hauts", photos: null },
  { id: 20, name: "Under Armour Hybride", variante: "Vert & Noir", marque: "Under Armour", categorie: "Hauts", photos: null },
];

function Carousel({ photos }: { photos: string[] }) {
  const [index, setIndex] = useState(0);
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", overflow: "hidden", borderRadius: "12px", background: "#111" }}>
      <img
        src={photos[index]}
        alt="produit"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); setIndex((index - 1 + photos.length) % photos.length); }}
            style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.6)", border: "none", color: "white", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setIndex((index + 1) % photos.length); }}
            style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.6)", border: "none", color: "white", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
            ›
          </button>
          <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 4 }}>
            {photos.map((_, i) => (
              <div key={i} onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                style={{ width: i === index ? 20 : 6, height: 6, borderRadius: 999, background: i === index ? "#4ade80" : "rgba(255,255,255,0.3)", cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Catalogue() {
  const [filtre, setFiltre] = useState("TOUT");
  const categories = ["TOUT", "HAUTS", "BAS", "VESTES", "NIKE", "UNDER ARMOUR"];

  const produitsFiltres = produits.filter(p => {
    if (filtre === "TOUT") return true;
    if (filtre === "NIKE") return p.marque === "Nike";
    if (filtre === "UNDER ARMOUR") return p.marque === "Under Armour";
    return p.categorie === filtre;
  });

  return (
    <main style={{ minHeight: "100vh", background: "black", color: "white" }}>

      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid rgba(255,255,255,0.1)", position: "sticky", top: 0, zIndex: 50, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(10px)" }}>
        <a href="/" style={{ fontSize: "22px", fontWeight: 900, letterSpacing: "0.2em", textDecoration: "none" }}>
          <span style={{ color: "#4ade80", textShadow: "0 0 20px #4ade80" }}>STREET</span>
          <span style={{ color: "white" }}>VAULT</span>
        </a>
        <div style={{ display: "flex", gap: "32px", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em" }}>
          <a href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>ACCUEIL</a>
          <a href="/catalogue" style={{ color: "#4ade80", textDecoration: "none" }}>CATALOGUE</a>
          <a href="#" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>MARQUES</a>
          <a href="#" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>CONTACT</a>
        </div>
        <button style={{ border: "2px solid #4ade80", color: "#4ade80", background: "transparent", fontWeight: 900, padding: "10px 22px", borderRadius: "999px", fontSize: "13px", cursor: "pointer", boxShadow: "0 0 20px rgba(74,222,128,0.3)" }}>
          PANIER 🛒
        </button>
      </nav>

      {/* HEADER */}
      <section style={{ padding: "60px 40px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.25) 0%, black 65%)" }} />
        <div style={{ position: "relative", zIndex: 10 }}>
          <p style={{ color: "#4ade80", fontSize: "11px", fontWeight: 900, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: "16px" }}>// Notre sélection //</p>
          <h1 style={{ fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
            LE <span style={{ color: "#4ade80", textShadow: "0 0 30px rgba(74,222,128,0.6)" }}>CATALOGUE</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "16px" }}>{produitsFiltres.length} pièces disponibles</p>
        </div>
      </section>

      {/* FILTRES */}
      <section style={{ padding: "0 40px 40px", display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        {categories.map(f => (
          <button key={f}
            onClick={() => setFiltre(f)}
            style={{ background: filtre === f ? "#4ade80" : "transparent", color: filtre === f ? "black" : "rgba(255,255,255,0.5)", border: "1px solid", borderColor: filtre === f ? "#4ade80" : "rgba(255,255,255,0.15)", fontWeight: 900, padding: "8px 20px", borderRadius: "999px", fontSize: "12px", cursor: "pointer", letterSpacing: "0.1em", transition: "all 0.2s" }}>
            {f}
          </button>
        ))}
      </section>

      {/* GRILLE */}
      <section style={{ padding: "0 40px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px", maxWidth: "1200px", margin: "0 auto" }}>
          {produitsFiltres.map(p => (
            <div key={p.id}
              style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden", background: "rgba(255,255,255,0.02)", cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.5)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}>

              {p.photos ? (
                <Carousel photos={p.photos} />
              ) : (
                <div style={{ width: "100%", aspectRatio: "1/1", background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "64px" }}>
                  👕
                </div>
              )}

              <div style={{ padding: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "10px", fontWeight: 900, color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.1)", padding: "2px 8px", borderRadius: "999px" }}>{p.marque}</span>
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>{p.categorie}</span>
                </div>
                <h3 style={{ fontSize: "15px", fontWeight: 900, margin: "0 0 2px", lineHeight: 1.3 }}>{p.name}</h3>
                <p style={{ color: "#4ade80", fontSize: "12px", fontWeight: 700, margin: "0 0 12px" }}>{p.variante}</p>
                <button style={{ width: "100%", border: "1px solid rgba(74,222,128,0.4)", color: "#4ade80", background: "transparent", fontWeight: 900, padding: "10px", borderRadius: "999px", fontSize: "12px", cursor: "pointer", letterSpacing: "0.1em" }}>
                  VOIR +
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "40px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <p style={{ fontWeight: 900, fontSize: "20px", marginBottom: "8px" }}>
          <span style={{ color: "#4ade80", textShadow: "0 0 15px #4ade80" }}>STREET</span>
          <span style={{ color: "white" }}>VAULT</span>
        </p>
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase" }}>© 2026 — La Renaissance de la Street</p>
      </footer>

    </main>
  );
}