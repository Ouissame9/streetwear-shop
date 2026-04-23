"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Panier() {
  const { panier, supprimerDuPanier, modifierQuantite, total, nbArticles } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{minHeight: "100vh", background: "black", color: "white"}}>
      <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.1)", position: "sticky", top: 0, zIndex: 50, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(10px)", width: "100%", boxSizing: "border-box"}}>
        <a href="/" style={{fontSize: "18px", fontWeight: 900, letterSpacing: "0.15em", textDecoration: "none", flexShrink: 0}}>
          <span style={{color: "#4ade80"}}>STREET</span><span style={{color: "white"}}>VAULT</span>
        </a>
        <div style={{display: "flex", gap: "12px", fontSize: "11px", fontWeight: 700}} className="desktop-menu">
          <a href="/" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>ACCUEIL</a>
          <a href="/catalogue" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>CATALOGUE</a>
          <a href="/contact" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>CONTACT</a>
        </div>
        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
          <a href="/panier" style={{border: "2px solid #4ade80", color: "#4ade80", background: "transparent", fontWeight: 900, padding: "8px 12px", borderRadius: "999px", fontSize: "12px", textDecoration: "none"}}>
            🛒 {nbArticles > 0 && <span style={{background: "#4ade80", color: "black", borderRadius: "50%", width: "18px", height: "18px", fontSize: "10px", display: "inline-flex", alignItems: "center", justifyContent: "center", marginLeft: "4px", fontWeight: 900}}>{nbArticles}</span>}
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{background: "transparent", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "8px", padding: "6px 10px", cursor: "pointer", color: "white", fontSize: "18px", display: "none"}}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div style={{position: "fixed", top: "56px", left: 0, right: 0, bottom: 0, background: "linear-gradient(135deg, #581c87, #7e22ce, #be185d)", zIndex: 49, padding: "40px 24px", display: "flex", flexDirection: "column", animation: "slideDown 0.3s ease"}}>
          {[{label:"ACCUEIL",href:"/"},{label:"CATALOGUE",href:"/catalogue"},{label:"PANIER",href:"/panier"},{label:"CONTACT",href:"/contact"}].map((item, i) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{color: "#4ade80", textDecoration: "none", fontWeight: 900, fontSize: "clamp(28px, 8vw, 42px)", letterSpacing: "0.15em", padding: "16px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none", textTransform: "uppercase", textShadow: "0 0 20px rgba(74,222,128,0.8)"}}>
              {item.label}
            </a>
          ))}
        </div>
      )}

      <section style={{maxWidth: "800px", margin: "0 auto", padding: "40px 20px"}}>
        <h1 style={{fontSize: "clamp(32px, 8vw, 60px)", fontWeight: 900, marginBottom: "32px", letterSpacing: "-0.02em"}}>
          MON <span style={{color: "#4ade80", textShadow: "0 0 30px rgba(74,222,128,0.6)"}}>PANIER</span>
        </h1>
        {panier.length === 0 ? (
          <div style={{textAlign: "center", padding: "60px 0"}}>
            <p style={{fontSize: "56px", marginBottom: "16px"}}>🛒</p>
            <p style={{fontSize: "20px", fontWeight: 900, marginBottom: "8px"}}>Ton panier est vide</p>
            <p style={{color: "rgba(255,255,255,0.4)", marginBottom: "28px"}}>Ajoute des pièces depuis le catalogue</p>
            <a href="/catalogue" style={{background: "#4ade80", color: "black", fontWeight: 900, padding: "14px 36px", borderRadius: "999px", fontSize: "15px", textDecoration: "none", display: "inline-block"}}>
              VOIR LE CATALOGUE →
            </a>
          </div>
        ) : (
          <div style={{display: "flex", flexDirection: "column", gap: "24px"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
              {panier.map((p, i) => (
                <div key={i} style={{display: "flex", gap: "16px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "16px", background: "rgba(255,255,255,0.02)", alignItems: "center"}}>
                  <div style={{width: "70px", height: "70px", borderRadius: "10px", overflow: "hidden", flexShrink: 0, background: "#111"}}>
                    {p.photo ? <img src={p.photo} alt={p.name} style={{width: "100%", height: "100%", objectFit: "cover"}} /> : <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px"}}>👕</div>}
                  </div>
                  <div style={{flex: 1, minWidth: 0}}>
                    <h3 style={{fontSize: "14px", fontWeight: 900, margin: "0 0 2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{p.name}</h3>
                    <p style={{color: "#4ade80", fontSize: "12px", fontWeight: 700, margin: "0 0 2px"}}>{p.variante}</p>
                    <p style={{color: "rgba(255,255,255,0.4)", fontSize: "11px", margin: 0}}>Taille : {p.taille}</p>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px", flexShrink: 0}}>
                    <span style={{fontSize: "18px", fontWeight: 900, color: "#4ade80"}}>{p.prix * p.quantite}€</span>
                    <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                      <button onClick={() => modifierQuantite(p.id, p.taille, p.quantite - 1)} style={{width: "28px", height: "28px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "white", borderRadius: "50%", cursor: "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center"}}>−</button>
                      <span style={{fontWeight: 900, fontSize: "14px", minWidth: "16px", textAlign: "center"}}>{p.quantite}</span>
                      <button onClick={() => modifierQuantite(p.id, p.taille, p.quantite + 1)} style={{width: "28px", height: "28px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "white", borderRadius: "50%", cursor: "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center"}}>+</button>
                    </div>
                    <button onClick={() => supprimerDuPanier(p.id, p.taille)} style={{background: "transparent", border: "none", color: "rgba(255,255,255,0.3)", cursor: "pointer", fontSize: "11px", fontWeight: 700}}>RETIRER</button>
                  </div>
                </div>
              ))}
            </div>
            <div style={{border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "24px", background: "rgba(255,255,255,0.02)"}}>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "12px"}}>
                <span style={{color: "rgba(255,255,255,0.5)", fontSize: "14px"}}>Sous-total</span>
                <span style={{fontWeight: 700}}>{total}€</span>
              </div>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "20px"}}>
                <span style={{color: "rgba(255,255,255,0.5)", fontSize: "14px"}}>Livraison</span>
                <span style={{color: "#4ade80", fontWeight: 700}}>Gratuite</span>
              </div>
              <div style={{borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "16px", marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <span style={{fontWeight: 900, fontSize: "16px"}}>TOTAL</span>
                <span style={{fontWeight: 900, fontSize: "28px", color: "#4ade80"}}>{total}€</span>
              </div>
              <button onClick={() => window.location.href = '/commande'} style={{width: "100%", background: "#4ade80", color: "black", fontWeight: 900, padding: "18px", borderRadius: "999px", fontSize: "16px", border: "none", cursor: "pointer", boxShadow: "0 0 30px rgba(74,222,128,0.4)", marginBottom: "12px"}}>
                COMMANDER →
              </button>
              <a href="/catalogue" style={{display: "block", textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "13px", textDecoration: "none", fontWeight: 700}}>← Continuer mes achats</a>
            </div>
          </div>
        )}
      </section>
      <footer style={{textAlign: "center", padding: "32px 20px", borderTop: "1px solid rgba(255,255,255,0.08)"}}>
        <p style={{fontWeight: 900, fontSize: "20px", marginBottom: "8px"}}><span style={{color: "#4ade80"}}>STREET</span><span style={{color: "white"}}>VAULT</span></p>
        <p style={{color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase"}}>© 2026 — La Renaissance de la Street</p>
      </footer>
    </main>
  );
}