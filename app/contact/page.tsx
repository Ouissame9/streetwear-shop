"use client";
import { useState } from "react";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{minHeight: "100vh", background: "black", color: "white", overflowX: "hidden"}}>
      <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.1)", position: "sticky", top: 0, zIndex: 50, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(10px)", width: "100%", boxSizing: "border-box"}}>
        <a href="/" style={{fontSize: "18px", fontWeight: 900, letterSpacing: "0.15em", textDecoration: "none", flexShrink: 0}}>
          <span style={{color: "#4ade80"}}>STREET</span><span style={{color: "white"}}>VAULT</span>
        </a>
        <div style={{display: "flex", gap: "12px", fontSize: "11px", fontWeight: 700}} className="desktop-menu">
          <a href="/" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>ACCUEIL</a>
          <a href="/catalogue" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>CATALOGUE</a>
          <a href="/contact" style={{color: "#4ade80", textDecoration: "none"}}>CONTACT</a>
        </div>
        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
          <a href="/panier" style={{background: "#4ade80", color: "black", fontWeight: 900, padding: "8px 12px", borderRadius: "999px", fontSize: "12px", textDecoration: "none"}}>🛒</a>
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

      <section style={{padding: "50px 16px 32px", textAlign: "center", position: "relative", overflow: "hidden"}}>
        <div style={{position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.25) 0%, black 65%)"}} />
        <div style={{position: "relative", zIndex: 10}}>
          <p style={{color: "#4ade80", fontSize: "10px", fontWeight: 900, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: "12px"}}>// Nous contacter //</p>
          <h1 style={{fontSize: "clamp(36px, 10vw, 72px)", fontWeight: 900, margin: "0 0 16px", letterSpacing: "-0.02em"}}>
            CONTACT <span style={{color: "#4ade80", textShadow: "0 0 30px rgba(74,222,128,0.6)"}}>& INFOS</span>
          </h1>
          <p style={{color: "rgba(255,255,255,0.4)", fontSize: "14px", maxWidth: "500px", margin: "0 auto"}}>Une question sur un produit ? On te répond rapidement.</p>
        </div>
      </section>

      <section style={{maxWidth: "600px", margin: "0 auto", padding: "0 16px 40px"}}>
        <div style={{border: "1px solid rgba(74,222,128,0.3)", borderRadius: "24px", padding: "28px", background: "rgba(74,222,128,0.04)", marginBottom: "24px", textAlign: "center"}}>
          <div style={{width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #4ade80, #7e22ce)", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", fontWeight: 900, color: "black"}}>O</div>
          <h2 style={{fontSize: "22px", fontWeight: 900, margin: "0 0 4px", letterSpacing: "0.05em"}}>EL QMACHE OUISSAME</h2>
          <p style={{color: "#4ade80", fontSize: "13px", fontWeight: 700, margin: "0 0 8px", letterSpacing: "0.1em"}}>REVENDEUR STREETWEAR INDÉPENDANT</p>
          <p style={{color: "rgba(255,255,255,0.4)", fontSize: "12px", margin: "0 0 24px", lineHeight: 1.6}}>
            Spécialisé dans la sélection de pièces techniques et streetwear premium. Chaque article proposé est <span style={{color: "#4ade80", fontWeight: 700}}>100% authentique</span>, soigneusement vérifié avant mise en vente.
          </p>
          <div style={{display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)", borderRadius: "999px", padding: "8px 16px", marginBottom: "24px"}}>
            <span style={{fontSize: "16px"}}>✅</span>
            <span style={{fontSize: "12px", fontWeight: 900, color: "#4ade80", letterSpacing: "0.1em"}}>PRODUITS 100% AUTHENTIQUES GARANTIS</span>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
            <a href="tel:+33698242804" style={{display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "14px 16px", textDecoration: "none", color: "white"}}>
              <span style={{fontSize: "20px"}}>📞</span>
              <div style={{textAlign: "left"}}>
                <p style={{fontSize: "10px", color: "rgba(255,255,255,0.4)", margin: "0 0 2px", fontWeight: 700, letterSpacing: "0.15em"}}>TÉLÉPHONE</p>
                <p style={{fontSize: "15px", fontWeight: 900, margin: 0}}>06 98 24 28 04</p>
              </div>
            </a>
            <a href="https://wa.me/33698242804" target="_blank" style={{display: "flex", alignItems: "center", gap: "12px", background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.2)", borderRadius: "14px", padding: "14px 16px", textDecoration: "none", color: "white"}}>
              <span style={{fontSize: "20px"}}>💬</span>
              <div style={{textAlign: "left"}}>
                <p style={{fontSize: "10px", color: "rgba(255,255,255,0.4)", margin: "0 0 2px", fontWeight: 700, letterSpacing: "0.15em"}}>WHATSAPP</p>
                <p style={{fontSize: "15px", fontWeight: 900, margin: 0}}>Envoyer un message</p>
              </div>
              <span style={{marginLeft: "auto", color: "#4ade80", fontSize: "18px"}}>→</span>
            </a>
          </div>
        </div>

        <div style={{border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "24px", background: "rgba(255,255,255,0.02)", marginBottom: "24px"}}>
          <h3 style={{fontSize: "12px", fontWeight: 900, letterSpacing: "0.3em", color: "#4ade80", marginBottom: "16px", textTransform: "uppercase"}}>// Nos Garanties</h3>
          <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
            {[
              {icon: "✅", title: "Authenticité garantie", desc: "Chaque pièce est vérifiée et certifiée authentique avant expédition."},
              {icon: "📦", title: "Emballage soigné", desc: "Tes commandes sont emballées avec soin pour arriver en parfait état."},
              {icon: "⚡", title: "Livraison rapide", desc: "Expédition express sous 24H après confirmation de commande."},
              {icon: "💬", title: "Support réactif", desc: "Disponible sur WhatsApp pour répondre à toutes tes questions."},
            ].map(g => (
              <div key={g.title} style={{display: "flex", gap: "12px", alignItems: "flex-start"}}>
                <span style={{fontSize: "18px", flexShrink: 0}}>{g.icon}</span>
                <div>
                  <p style={{fontSize: "13px", fontWeight: 900, margin: "0 0 2px"}}>{g.title}</p>
                  <p style={{fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.5}}>{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{textAlign: "center"}}>
          <a href="/catalogue" style={{display: "inline-block", background: "#4ade80", color: "black", fontWeight: 900, padding: "16px 36px", borderRadius: "999px", fontSize: "15px", textDecoration: "none", boxShadow: "0 0 30px rgba(74,222,128,0.4)"}}>
            VOIR LE CATALOGUE →
          </a>
        </div>
      </section>

      <footer style={{textAlign: "center", padding: "28px 16px", borderTop: "1px solid rgba(255,255,255,0.08)"}}>
        <p style={{fontWeight: 900, fontSize: "18px", marginBottom: "6px"}}><span style={{color: "#4ade80"}}>STREET</span><span style={{color: "white"}}>VAULT</span></p>
        <p style={{color: "rgba(255,255,255,0.2)", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase"}}>© 2026 — La Renaissance de la Street</p>
      </footer>
    </main>
  );
}