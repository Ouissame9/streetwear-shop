"use client";

export default function Home() {
  return (
    <main style={{minHeight: "100vh", background: "linear-gradient(135deg, #581c87, #7e22ce, #be185d)", color: "white"}}>

      {/* NAVBAR */}
      <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)", position: "sticky", top: 0, zIndex: 50, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(10px)"}}>
        <div style={{fontSize: "20px", fontWeight: 900, letterSpacing: "0.2em"}}>
          <span style={{color: "#4ade80"}}>STREET</span>
          <span style={{color: "white"}}>VAULT</span>
        </div>
        <div style={{display: "flex", gap: "16px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em"}}>
          <a href="/" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>ACCUEIL</a>
          <a href="/catalogue" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>CATALOGUE</a>
          <a href="/contact" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>CONTACT</a>
        </div>
        <a href="/panier" style={{background: "#4ade80", color: "black", fontWeight: 900, padding: "8px 16px", borderRadius: "999px", fontSize: "12px", textDecoration: "none"}}>
          🛒
        </a>
      </nav>

      {/* HERO */}
      <section style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 20px"}}>
        <p style={{color: "#4ade80", fontSize: "11px", fontWeight: 900, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "16px"}}>
          — La Renaissance de la Street —
        </p>
        <h1 style={{fontSize: "clamp(48px, 12vw, 120px)", fontWeight: 900, lineHeight: 0.9, margin: "0 0 8px", letterSpacing: "-0.03em"}}>
          LA <span style={{color: "#4ade80", textShadow: "0 0 30px rgba(74,222,128,0.8)"}}>STREET</span>
        </h1>
        <h1 style={{fontSize: "clamp(48px, 12vw, 120px)", fontWeight: 900, lineHeight: 0.9, margin: "0 0 24px", letterSpacing: "-0.03em"}}>
          EST DE RETOUR
        </h1>
        <p style={{color: "rgba(255,255,255,0.7)", fontSize: "clamp(14px, 3vw, 18px)", maxWidth: "500px", marginBottom: "32px", lineHeight: 1.6}}>
          Nike Therma, Trail, Hybrid Under Armour... Les pièces qui définissent une génération. Pas du hype, de la vraie culture.
        </p>
        <a href="/catalogue" style={{background: "#4ade80", color: "black", fontWeight: 900, padding: "16px 36px", borderRadius: "999px", fontSize: "clamp(14px, 3vw, 18px)", textDecoration: "none", display: "inline-block"}}>
          VOIR LA COLLECTION →
        </a>
      </section>

      {/* DICTON */}
      <section style={{background: "rgba(0,0,0,0.3)", backdropFilter: "blur(10px)", padding: "32px 20px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)"}}>
        <p style={{fontSize: "clamp(18px, 4vw, 32px)", fontWeight: 900, fontStyle: "italic", margin: 0}}>
          "La <span style={{color: "#4ade80"}}>street</span> n'est pas un style, c'est une âme."
        </p>
      </section>

      {/* MARQUES */}
      <section style={{padding: "48px 20px", textAlign: "center"}}>
        <h2 style={{fontSize: "11px", fontWeight: 900, letterSpacing: "0.4em", color: "#4ade80", textTransform: "uppercase", marginBottom: "24px"}}>Nos Marques</h2>
        <div style={{display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap"}}>
          <a href="/catalogue" style={{color: "rgba(255,255,255,0.4)", fontSize: "clamp(16px, 4vw, 24px)", fontWeight: 900, letterSpacing: "0.2em", textDecoration: "none"}}>NIKE</a>
          <a href="/catalogue" style={{color: "rgba(255,255,255,0.4)", fontSize: "clamp(16px, 4vw, 24px)", fontWeight: 900, letterSpacing: "0.2em", textDecoration: "none"}}>UNDER ARMOUR</a>
        </div>
      </section>

      {/* PIÈCES PHARES */}
      <section style={{padding: "48px 20px"}}>
        <h2 style={{fontSize: "clamp(28px, 6vw, 48px)", fontWeight: 900, textAlign: "center", marginBottom: "32px", letterSpacing: "-0.02em"}}>
          PIÈCES <span style={{color: "#4ade80"}}>PHARES</span>
        </h2>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", maxWidth: "1000px", margin: "0 auto"}}>
          {[
            { id: 19, name: "Nike Trail Bas", type: "Bas / Street", tag: "🔥 BEST", photo: "/images/bas-niketrail.JPG" },
            { id: 4, name: "Nike Therma-FIT Bleu Marine", type: "Haut technique", tag: "⚡ EXCLU", photo: null },
            { id: 20, name: "Under Armour Hybride", type: "Vert & Noir", tag: "💜 NEW", photo: null },
          ].map((p) => (
            <a key={p.id} href={`/produit/${p.id}`} style={{textDecoration: "none"}}>
              <div style={{background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "20px", cursor: "pointer", transition: "all 0.3s"}}>
                <div style={{borderRadius: "12px", height: "180px", marginBottom: "16px", overflow: "hidden", background: "rgba(74,222,128,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "56px"}}>
                  {p.photo ? (
                    <img src={p.photo} alt={p.name} style={{width: "100%", height: "100%", objectFit: "cover"}} />
                  ) : "👕"}
                </div>
                <span style={{fontSize: "11px", fontWeight: 900, color: "#4ade80", letterSpacing: "0.2em"}}>{p.tag}</span>
                <h3 style={{fontSize: "18px", fontWeight: 900, margin: "6px 0 4px", color: "white"}}>{p.name}</h3>
                <p style={{color: "rgba(255,255,255,0.5)", fontSize: "13px", margin: "0 0 16px"}}>{p.type}</p>
                <span style={{color: "#4ade80", fontWeight: 900, fontSize: "13px", letterSpacing: "0.05em"}}>VOIR LE PRODUIT →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{padding: "60px 20px", textAlign: "center", background: "rgba(0,0,0,0.2)"}}>
        <h2 style={{fontSize: "clamp(28px, 6vw, 52px)", fontWeight: 900, marginBottom: "16px"}}>
          REJOINS LE <span style={{color: "#4ade80"}}>MOUVEMENT</span>
        </h2>
        <p style={{color: "rgba(255,255,255,0.5)", marginBottom: "28px", fontSize: "clamp(13px, 3vw, 16px)"}}>Drops exclusifs. Accès prioritaire. Vraie culture street.</p>
        <a href="/catalogue" style={{background: "#4ade80", color: "black", fontWeight: 900, padding: "16px 40px", borderRadius: "999px", fontSize: "clamp(14px, 3vw, 18px)", textDecoration: "none", display: "inline-block"}}>
          VOIR TOUT LE CATALOGUE →
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{textAlign: "center", padding: "32px 20px", borderTop: "1px solid rgba(255,255,255,0.1)"}}>
        <p style={{fontWeight: 900, fontSize: "20px", marginBottom: "8px"}}>
          <span style={{color: "#4ade80"}}>STREET</span>
          <span style={{color: "white"}}>VAULT</span>
        </p>
        <p style={{color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase"}}>© 2026 — La Renaissance de la Street</p>
      </footer>

    </main>
  );
}