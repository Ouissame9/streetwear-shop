"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "../../context/CartContext";

const produits = [
  { id: 19, name: "Nike Trail Bas", variante: "Noir", marque: "Nike", categorie: "Bas", prix: 85, photos: ["/images/bas-niketrail.JPG","/images/bas-niketrail-devant.JPG","/images/bas-niketrail-derriere.JPG","/images/bas-niketrail-interieur.JPG","/images/bas-niketrail-fermeture.JPG","/images/bas-niketrail-pied.JPG"] },
  { id: 1, name: "Nike Therma-FIT Manche Longue", variante: "Vert", marque: "Nike", categorie: "Hauts", prix: 215, photos: null },
  { id: 2, name: "Nike Therma-FIT Manche Longue", variante: "Gris", marque: "Nike", categorie: "Hauts", prix: 215, photos: null },
  { id: 3, name: "Nike Therma-FIT Manche Longue", variante: "Noir", marque: "Nike", categorie: "Hauts", prix: 215, photos: null },
  { id: 4, name: "Nike Therma-FIT Manche Longue", variante: "Bleu Marine", marque: "Nike", categorie: "Hauts", prix: 180, photos: null },
  { id: 5, name: "Nike Therma Manche Longue Spé", variante: "Kaki", marque: "Nike", categorie: "Hauts", prix: 215, photos: null },
  { id: 6, name: "Nike Therma Manche Longue Spé", variante: "Noir", marque: "Nike", categorie: "Hauts", prix: 215, photos: null },
  { id: 7, name: "Nike Therma Manche Courte", variante: "Bleu Vert", marque: "Nike", categorie: "Hauts", prix: 180, photos: null },
  { id: 8, name: "Nike Therma Manche Courte", variante: "Blanc", marque: "Nike", categorie: "Hauts", prix: 215, photos: null },
  { id: 9, name: "Nike Therma Trail Manche Courte", variante: "Noir", marque: "Nike", categorie: "Hauts", prix: 215, photos: null },
  { id: 10, name: "Nike Trail Veste", variante: "Noir", marque: "Nike", categorie: "Vestes", prix: 215, photos: null },
  { id: 11, name: "Nike Trail Veste", variante: "Nuage", marque: "Nike", categorie: "Vestes", prix: 215, photos: null },
  { id: 12, name: "Nike Trail Veste V2", variante: "Noir", marque: "Nike", categorie: "Vestes", prix: 215, photos: null },
  { id: 13, name: "Nike Trail Veste V2", variante: "Beige", marque: "Nike", categorie: "Vestes", prix: 215, photos: null },
  { id: 14, name: "Nike Trail Veste V3", variante: "Noir", marque: "Nike", categorie: "Vestes", prix: 215, photos: null },
  { id: 15, name: "Nike Trail Pull", variante: "Noir", marque: "Nike", categorie: "Hauts", prix: 70, photos: null },
  { id: 16, name: "Nike Trail Pull", variante: "Lavande", marque: "Nike", categorie: "Hauts", prix: 70, photos: null },
  { id: 17, name: "Nike Trail Pull V2", variante: "Noir", marque: "Nike", categorie: "Hauts", prix: 70, photos: null },
  { id: 18, name: "Nike Trail Pull V2", variante: "Mix", marque: "Nike", categorie: "Hauts", prix: 70, photos: null },
  { id: 20, name: "Under Armour Hybride", variante: "Vert & Noir", marque: "Under Armour", categorie: "Hauts", prix: 80, photos: null },
];

export default function PageProduit() {
  const { id } = useParams();
  const produit = produits.find(p => p.id === Number(id));
  const [photoIndex, setPhotoIndex] = useState(0);
  const [taille, setTaille] = useState("");
  const [ajoute, setAjoute] = useState(false);
  const { ajouterAuPanier, nbArticles } = useCart();

  if (!produit) return (
    <main style={{minHeight: "100vh", background: "black", color: "white", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <p style={{fontSize: "24px", fontWeight: 900}}>Produit introuvable</p>
    </main>
  );

  const handleAjouter = () => {
    if (!taille) { alert("Choisis une taille !"); return; }
    ajouterAuPanier({
      id: produit.id,
      name: produit.name,
      variante: produit.variante,
      taille,
      prix: produit.prix,
      photo: produit.photos ? produit.photos[0] : null,
      quantite: 1,
    });
    setAjoute(true);
    setTimeout(() => setAjoute(false), 2000);
  };

  return (
    <main style={{minHeight: "100vh", background: "black", color: "white"}}>

      {/* NAVBAR */}
      <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid rgba(255,255,255,0.1)", position: "sticky", top: 0, zIndex: 50, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(10px)"}}>
        <a href="/" style={{fontSize: "22px", fontWeight: 900, letterSpacing: "0.2em", textDecoration: "none"}}>
          <span style={{color: "#4ade80", textShadow: "0 0 20px #4ade80"}}>STREET</span>
          <span style={{color: "white"}}>VAULT</span>
        </a>
        <div style={{display: "flex", gap: "32px", fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em"}}>
          <a href="/" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>ACCUEIL</a>
          <a href="/catalogue" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>CATALOGUE</a>
          <a href="#" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>MARQUES</a>
          <a href="#" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>CONTACT</a>
        </div>
        <a href="/panier" style={{border: "2px solid #4ade80", color: "#4ade80", background: "transparent", fontWeight: 900, padding: "10px 22px", borderRadius: "999px", fontSize: "13px", cursor: "pointer", textDecoration: "none", position: "relative"}}>
          PANIER {nbArticles > 0 && <span style={{background: "#4ade80", color: "black", borderRadius: "50%", width: "20px", height: "20px", fontSize: "11px", display: "inline-flex", alignItems: "center", justifyContent: "center", marginLeft: "6px", fontWeight: 900}}>{nbArticles}</span>}
        </a>
      </nav>

      {/* CONTENU */}
      <section style={{maxWidth: "1100px", margin: "0 auto", padding: "60px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start"}}>

        {/* PHOTOS */}
        <div>
          <div style={{borderRadius: "20px", overflow: "hidden", background: "#111", aspectRatio: "1/1", marginBottom: "12px", position: "relative"}}>
            {produit.photos ? (
              <>
                <img src={produit.photos[photoIndex]} alt={produit.name} style={{width: "100%", height: "100%", objectFit: "cover"}} />
                <button onClick={() => setPhotoIndex((photoIndex - 1 + produit.photos!.length) % produit.photos!.length)}
                  style={{position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.7)", border: "none", color: "white", borderRadius: "50%", width: 40, height: 40, cursor: "pointer", fontSize: 20}}>‹</button>
                <button onClick={() => setPhotoIndex((photoIndex + 1) % produit.photos!.length)}
                  style={{position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.7)", border: "none", color: "white", borderRadius: "50%", width: 40, height: 40, cursor: "pointer", fontSize: 20}}>›</button>
              </>
            ) : (
              <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "100px"}}>👕</div>
            )}
          </div>
          {produit.photos && (
            <div style={{display: "flex", gap: "8px", flexWrap: "wrap"}}>
              {produit.photos.map((photo, i) => (
                <div key={i} onClick={() => setPhotoIndex(i)}
                  style={{width: "60px", height: "60px", borderRadius: "8px", overflow: "hidden", border: i === photoIndex ? "2px solid #4ade80" : "2px solid transparent", cursor: "pointer", opacity: i === photoIndex ? 1 : 0.5, transition: "all 0.2s"}}>
                  <img src={photo} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* INFOS */}
        <div>
          <p style={{color: "rgba(255,255,255,0.3)", fontSize: "12px", letterSpacing: "0.1em", marginBottom: "16px"}}>
            <a href="/catalogue" style={{color: "#4ade80", textDecoration: "none"}}>CATALOGUE</a> / {produit.categorie.toUpperCase()}
          </p>
          <span style={{fontSize: "11px", fontWeight: 900, color: "rgba(255,255,255,0.4)", letterSpacing: "0.3em", textTransform: "uppercase"}}>{produit.marque}</span>
          <h1 style={{fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, margin: "8px 0 4px", lineHeight: 1.1}}>{produit.name}</h1>
          <p style={{color: "#4ade80", fontSize: "16px", fontWeight: 700, marginBottom: "24px"}}>{produit.variante}</p>
          <div style={{marginBottom: "32px"}}>
            <span style={{fontSize: "48px", fontWeight: 900, color: "#4ade80", textShadow: "0 0 20px rgba(74,222,128,0.4)"}}>{produit.prix}€</span>
          </div>

          {/* TAILLES */}
          <div style={{marginBottom: "32px"}}>
            <p style={{fontSize: "12px", fontWeight: 900, letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textTransform: "uppercase"}}>Taille disponible</p>
            <div style={{display: "flex", gap: "12px"}}>
              {["M", "L"].map(t => (
                <button key={t} onClick={() => setTaille(t)}
                  style={{width: "56px", height: "56px", border: taille === t ? "2px solid #4ade80" : "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", background: taille === t ? "rgba(74,222,128,0.1)" : "transparent", color: taille === t ? "#4ade80" : "rgba(255,255,255,0.6)", fontWeight: 900, fontSize: "16px", cursor: "pointer", transition: "all 0.2s"}}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* BOUTONS */}
          <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
            <button onClick={handleAjouter}
              style={{background: ajoute ? "rgba(74,222,128,0.2)" : "#4ade80", color: ajoute ? "#4ade80" : "black", fontWeight: 900, padding: "18px", borderRadius: "999px", fontSize: "16px", border: ajoute ? "2px solid #4ade80" : "none", cursor: "pointer", boxShadow: "0 0 30px rgba(74,222,128,0.4)", letterSpacing: "0.05em", transition: "all 0.3s"}}>
              {ajoute ? "✅ AJOUTÉ AU PANIER !" : "AJOUTER AU PANIER 🛒"}
            </button>
            <button style={{background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontWeight: 700, padding: "18px", borderRadius: "999px", fontSize: "16px", cursor: "pointer"}}>
              CONTACTER VIA INSTAGRAM
            </button>
          </div>

          {/* LIVRAISON */}
          <div style={{marginTop: "32px", padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", background: "rgba(255,255,255,0.02)"}}>
            <p style={{fontSize: "13px", color: "rgba(255,255,255,0.5)", margin: "0 0 8px"}}>⚡ Livraison express 24H disponible</p>
            <p style={{fontSize: "13px", color: "rgba(255,255,255,0.5)", margin: "0 0 8px"}}>✅ Pièces authentiques garanties</p>
            <p style={{fontSize: "13px", color: "rgba(255,255,255,0.5)", margin: 0}}>📦 Emballage soigné</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{textAlign: "center", padding: "40px", borderTop: "1px solid rgba(255,255,255,0.08)"}}>
        <p style={{fontWeight: 900, fontSize: "20px", marginBottom: "8px"}}>
          <span style={{color: "#4ade80", textShadow: "0 0 15px #4ade80"}}>STREET</span>
          <span style={{color: "white"}}>VAULT</span>
        </p>
        <p style={{color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase"}}>© 2026 — La Renaissance de la Street</p>
      </footer>

    </main>
  );
}