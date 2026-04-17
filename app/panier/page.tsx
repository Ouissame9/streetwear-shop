"use client";
import { useState } from "react";

const produitsInitiaux = [
  { id: 19, name: "Nike Trail Bas", variante: "Noir", taille: "M", prix: 85, photo: "/images/bas-niketrail.JPG", quantite: 1 },
];

export default function Panier() {
  const [panier, setPanier] = useState(produitsInitiaux);

  const total = panier.reduce((acc, p) => acc + p.prix * p.quantite, 0);

  const supprimer = (id: number) => setPanier(panier.filter(p => p.id !== id));
  const modifierQte = (id: number, qte: number) => {
    if (qte < 1) return supprimer(id);
    setPanier(panier.map(p => p.id === id ? {...p, quantite: qte} : p));
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
        <button style={{border: "2px solid #4ade80", color: "#4ade80", background: "transparent", fontWeight: 900, padding: "10px 22px", borderRadius: "999px", fontSize: "13px", cursor: "pointer"}}>
          PANIER 🛒
        </button>
      </nav>

      <section style={{maxWidth: "900px", margin: "0 auto", padding: "60px 40px"}}>

        <h1 style={{fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 900, marginBottom: "40px", letterSpacing: "-0.02em"}}>
          MON <span style={{color: "#4ade80", textShadow: "0 0 30px rgba(74,222,128,0.6)"}}>PANIER</span>
        </h1>

        {panier.length === 0 ? (
          <div style={{textAlign: "center", padding: "80px 0"}}>
            <p style={{fontSize: "64px", marginBottom: "20px"}}>🛒</p>
            <p style={{fontSize: "20px", fontWeight: 900, marginBottom: "8px"}}>Ton panier est vide</p>
            <p style={{color: "rgba(255,255,255,0.4)", marginBottom: "32px"}}>Ajoute des pièces depuis le catalogue</p>
            <a href="/catalogue" style={{background: "#4ade80", color: "black", fontWeight: 900, padding: "16px 40px", borderRadius: "999px", fontSize: "16px", textDecoration: "none", display: "inline-block"}}>
              VOIR LE CATALOGUE →
            </a>
          </div>
        ) : (
          <div style={{display: "grid", gridTemplateColumns: "1fr 320px", gap: "40px", alignItems: "start"}}>

            {/* LISTE */}
            <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
              {panier.map(p => (
                <div key={p.id} style={{display: "flex", gap: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "20px", background: "rgba(255,255,255,0.02)", alignItems: "center"}}>
                  
                  {/* Photo */}
                  <div style={{width: "90px", height: "90px", borderRadius: "12px", overflow: "hidden", flexShrink: 0, background: "#111"}}>
                    {p.photo ? (
                      <img src={p.photo} alt={p.name} style={{width: "100%", height: "100%", objectFit: "cover"}} />
                    ) : (
                      <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px"}}>👕</div>
                    )}
                  </div>

                  {/* Infos */}
                  <div style={{flex: 1}}>
                    <h3 style={{fontSize: "16px", fontWeight: 900, margin: "0 0 4px"}}>{p.name}</h3>
                    <p style={{color: "#4ade80", fontSize: "13px", fontWeight: 700, margin: "0 0 4px"}}>{p.variante}</p>
                    <p style={{color: "rgba(255,255,255,0.4)", fontSize: "12px", margin: 0}}>Taille : {p.taille}</p>
                  </div>

                  {/* Quantité */}
                  <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                    <button onClick={() => modifierQte(p.id, p.quantite - 1)}
                      style={{width: "32px", height: "32px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "white", borderRadius: "50%", cursor: "pointer", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center"}}>−</button>
                    <span style={{fontWeight: 900, fontSize: "16px", minWidth: "20px", textAlign: "center"}}>{p.quantite}</span>
                    <button onClick={() => modifierQte(p.id, p.quantite + 1)}
                      style={{width: "32px", height: "32px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "white", borderRadius: "50%", cursor: "pointer", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center"}}>+</button>
                  </div>

                  {/* Prix */}
                  <div style={{textAlign: "right", minWidth: "80px"}}>
                    <p style={{fontSize: "20px", fontWeight: 900, color: "#4ade80", margin: "0 0 8px"}}>{p.prix * p.quantite}€</p>
                    <button onClick={() => supprimer(p.id)}
                      style={{background: "transparent", border: "none", color: "rgba(255,255,255,0.3)", cursor: "pointer", fontSize: "12px", fontWeight: 700, letterSpacing: "0.05em"}}>
                      RETIRER
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* RÉCAP */}
            <div style={{border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "28px", background: "rgba(255,255,255,0.02)", position: "sticky", top: "100px"}}>
              <h2 style={{fontSize: "18px", fontWeight: 900, marginBottom: "24px", letterSpacing: "0.1em"}}>RÉCAPITULATIF</h2>
              
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "12px"}}>
                <span style={{color: "rgba(255,255,255,0.5)", fontSize: "14px"}}>Sous-total</span>
                <span style={{fontWeight: 700}}>{total}€</span>
              </div>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "24px"}}>
                <span style={{color: "rgba(255,255,255,0.5)", fontSize: "14px"}}>Livraison</span>
                <span style={{color: "#4ade80", fontWeight: 700}}>Gratuite</span>
              </div>

              <div style={{borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px", marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <span style={{fontWeight: 900, fontSize: "16px"}}>TOTAL</span>
                <span style={{fontWeight: 900, fontSize: "28px", color: "#4ade80"}}>{total}€</span>
              </div>

              <button style={{width: "100%", background: "#4ade80", color: "black", fontWeight: 900, padding: "18px", borderRadius: "999px", fontSize: "16px", border: "none", cursor: "pointer", boxShadow: "0 0 30px rgba(74,222,128,0.4)", marginBottom: "12px", letterSpacing: "0.05em"}}>
                COMMANDER →
              </button>
              <a href="/catalogue" style={{display: "block", textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "13px", textDecoration: "none", fontWeight: 700}}>
                ← Continuer mes achats
              </a>
            </div>

          </div>
        )}
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