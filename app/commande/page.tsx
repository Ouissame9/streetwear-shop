"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";
const [menuOpen, setMenuOpen] = useState(false);


export default function Commande() {
  const { panier, total } = useCart();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [codePostal, setCodePostal] = useState("");

  const handleCommander = () => {
  if (!nom || !prenom || !telephone || !adresse || !ville || !codePostal) {
    alert("Remplis tous les champs !");
    return;
  }
  if (!/^(0[67][0-9]{8})$/.test(telephone)) {
    alert("Numéro de téléphone invalide — Ex: 0698242804");
    return;
  }
  if (!/^[0-9]+\s+.{3,}$/.test(adresse)) {
    alert("Adresse invalide — Ex: 12 Rue de la Paix");
    return;
  }
  if (!/^[0-9]{5}$/.test(codePostal)) {
    alert("Code postal invalide — 5 chiffres requis");
    return;
  }
  if (!/^[a-zA-ZÀ-ÿ\s\-]{2,}$/.test(ville)) {
    alert("Ville invalide");
    return;
  }
  const recap = panier.map(p => `• ${p.name} (${p.variante}) - Taille ${p.taille} x${p.quantite} = ${p.prix * p.quantite}€`).join("\n");
  const message = `🛒 NOUVELLE COMMANDE STREETVAULT\n\n👤 ${prenom} ${nom}\n📞 ${telephone}\n📦 ${adresse}, ${codePostal} ${ville}\n\n🧾 Commande :\n${recap}\n\n💰 TOTAL : ${total}€`.trim();
  window.open(`https://wa.me/33698242804?text=${encodeURIComponent(message)}`, "_blank");
};

  return (
    <main style={{minHeight: "100vh", background: "black", color: "white"}}>

      {/* NAVBAR */}
      <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.1)", position: "sticky", top: 0, zIndex: 50, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(10px)", width: "100%", boxSizing: "border-box"}}>
  <a href="/" style={{fontSize: "18px", fontWeight: 900, letterSpacing: "0.15em", textDecoration: "none", flexShrink: 0}}>
    <span style={{color: "#4ade80"}}>STREET</span>
    <span style={{color: "white"}}>VAULT</span>
  </a>
  <div style={{display: "flex", gap: "12px", fontSize: "11px", fontWeight: 700}} className="desktop-menu">
    <a href="/" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>ACCUEIL</a>
    <a href="/catalogue" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>CATALOGUE</a>
    <a href="/contact" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>CONTACT</a>
  </div>
  <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
    <a href="/panier" style={{border: "2px solid #4ade80", color: "#4ade80", background: "transparent", fontWeight: 900, padding: "8px 12px", borderRadius: "999px", fontSize: "12px", textDecoration: "none"}}>
      🛒
    </a>
    <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
      style={{background: "transparent", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "8px", padding: "6px 10px", cursor: "pointer", color: "white", fontSize: "18px", display: "none"}}>
      {menuOpen ? "✕" : "☰"}
    </button>
  </div>
</nav>

{menuOpen && (
  <div style={{
    position: "fixed", top: "56px", left: 0, right: 0, bottom: 0,
    background: "linear-gradient(135deg, #581c87, #7e22ce, #be185d)",
    zIndex: 49, padding: "40px 24px", display: "flex", flexDirection: "column",
    gap: "0px", animation: "slideDown 0.3s ease"
  }}>
    {[
      { label: "ACCUEIL", href: "/" },
      { label: "CATALOGUE", href: "/catalogue" },
      { label: "PANIER", href: "/panier" },
      { label: "CONTACT", href: "/contact" },
    ].map((item, i) => (
      <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
        style={{
          color: "#4ade80",
          textDecoration: "none",
          fontWeight: 900,
          fontSize: "clamp(28px, 8vw, 42px)",
          letterSpacing: "0.15em",
          padding: "16px 0",
          borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
          textTransform: "uppercase",
          textShadow: "0 0 20px rgba(74,222,128,0.8), 0 0 40px rgba(74,222,128,0.4)",
        }}>
        {item.label}
      </a>
    ))}
  </div>
)}

      <section style={{maxWidth: "600px", margin: "0 auto", padding: "40px 20px"}}>

        <h1 style={{fontSize: "clamp(32px, 8vw, 56px)", fontWeight: 900, marginBottom: "8px", letterSpacing: "-0.02em"}}>
          MA <span style={{color: "#4ade80", textShadow: "0 0 30px rgba(74,222,128,0.6)"}}>COMMANDE</span>
        </h1>
        <p style={{color: "rgba(255,255,255,0.4)", marginBottom: "36px", fontSize: "14px"}}>Remplis tes infos, on t'envoie la confirmation sur WhatsApp 📱</p>

        {/* RÉCAP */}
        {panier.length > 0 && (
          <div style={{marginBottom: "32px"}}>
            <h2 style={{fontSize: "12px", fontWeight: 900, letterSpacing: "0.3em", color: "#4ade80", marginBottom: "12px"}}>// RÉCAP</h2>
            <div style={{display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px"}}>
              {panier.map((p, i) => (
                <div key={i} style={{display: "flex", gap: "12px", alignItems: "center", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px", background: "rgba(255,255,255,0.02)"}}>
                  <div style={{width: "48px", height: "48px", borderRadius: "8px", overflow: "hidden", flexShrink: 0, background: "#111"}}>
                    {p.photo ? (
                      <img src={p.photo} alt={p.name} style={{width: "100%", height: "100%", objectFit: "cover"}} />
                    ) : (
                      <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px"}}>👕</div>
                    )}
                  </div>
                  <div style={{flex: 1, minWidth: 0}}>
                    <p style={{fontSize: "13px", fontWeight: 900, margin: "0 0 2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{p.name}</p>
                    <p style={{fontSize: "11px", color: "rgba(255,255,255,0.4)", margin: 0}}>{p.variante} • Taille {p.taille} • x{p.quantite}</p>
                  </div>
                  <span style={{fontSize: "16px", fontWeight: 900, color: "#4ade80", flexShrink: 0}}>{p.prix * p.quantite}€</span>
                </div>
              ))}
            </div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", border: "1px solid rgba(74,222,128,0.2)", borderRadius: "12px", background: "rgba(74,222,128,0.05)"}}>
              <span style={{fontWeight: 900, fontSize: "16px"}}>TOTAL</span>
              <span style={{fontWeight: 900, fontSize: "28px", color: "#4ade80"}}>{total}€</span>
            </div>
          </div>
        )}

        {/* FORMULAIRE */}
        <h2 style={{fontSize: "12px", fontWeight: 900, letterSpacing: "0.3em", color: "#4ade80", marginBottom: "16px"}}>// INFOS PERSONNELLES</h2>
        <div style={{display: "flex", flexDirection: "column", gap: "14px", marginBottom: "24px"}}>
     {[
  {label: "Prénom", value: prenom, setter: setPrenom, placeholder: "Ton prénom", type: "text", pattern: undefined, maxLength: 50},
  {label: "Nom", value: nom, setter: setNom, placeholder: "Ton nom", type: "text", pattern: undefined, maxLength: 50},
  {label: "Téléphone", value: telephone, setter: setTelephone, placeholder: "06 XX XX XX XX", type: "tel", pattern: "^(0[67][0-9]{8})$", maxLength: 10},
  {label: "Adresse", value: adresse, setter: setAdresse, placeholder: "Ex: 12 Rue de la Paix", type: "text", pattern: "^[0-9]+\\s+.{3,}$", maxLength: 100},
  {label: "Code Postal", value: codePostal, setter: setCodePostal, placeholder: "Ex: 75001", type: "text", pattern: "^[0-9]{5}$", maxLength: 5},
  {label: "Ville", value: ville, setter: setVille, placeholder: "Ex: Paris", type: "text", pattern: "^[a-zA-ZÀ-ÿ\\s\\-]{2,}$", maxLength: 50},
].map(field => (
  <div key={field.label}>
    <label style={{fontSize: "11px", fontWeight: 900, letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", display: "block", marginBottom: "6px"}}>{field.label}</label>
    <input
      value={field.value}
      onChange={e => field.setter(e.target.value)}
      placeholder={field.placeholder}
      type={field.type}
      maxLength={field.maxLength}
      style={{width: "100%", background: "rgba(255,255,255,0.05)", border: `1px solid ${
        field.value.length === 0 ? "rgba(255,255,255,0.1)" :
        field.pattern && !new RegExp(field.pattern).test(field.value) ? "rgba(255,80,80,0.6)" :
        "rgba(74,222,128,0.4)"
      }`, borderRadius: "12px", padding: "14px 16px", color: "white", fontSize: "15px", outline: "none", boxSizing: "border-box", transition: "border 0.2s"}}
    />
    {/* Message d'erreur */}
    {field.value.length > 0 && field.pattern && !new RegExp(field.pattern).test(field.value) && (
      <p style={{color: "rgba(255,80,80,0.8)", fontSize: "11px", margin: "4px 0 0", fontWeight: 700}}>
        {field.label === "Téléphone" && "📞 Numéro invalide — 10 chiffres commençant par 06 ou 07"}
        {field.label === "Adresse" && "🏠 Format invalide — Ex: 12 Rue de la Paix"}
        {field.label === "Code Postal" && "📮 5 chiffres requis — Ex: 75001"}
        {field.label === "Ville" && "🏙️ Ville invalide — lettres uniquement"}
      </p>
    )}
  </div>
))}
        </div>

        {panier.length === 0 ? (
          <div style={{textAlign: "center", padding: "20px 0"}}>
            <p style={{color: "rgba(255,255,255,0.4)", marginBottom: "16px"}}>Ton panier est vide</p>
            <a href="/catalogue" style={{color: "#4ade80", fontWeight: 900, textDecoration: "none"}}>← Retour au catalogue</a>
          </div>
        ) : (
          <>
            <button onClick={handleCommander}
              style={{width: "100%", background: "#4ade80", color: "black", fontWeight: 900, padding: "18px", borderRadius: "999px", fontSize: "16px", border: "none", cursor: "pointer", boxShadow: "0 0 30px rgba(74,222,128,0.4)", marginBottom: "12px"}}>
              ENVOYER SUR WHATSAPP 📱
            </button>
            <p style={{textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: "12px"}}>
              Tu vas être redirigé vers WhatsApp avec le récap
            </p>
          </>
        )}
      </section>

      {/* FOOTER */}
      <footer style={{textAlign: "center", padding: "32px 20px", borderTop: "1px solid rgba(255,255,255,0.08)"}}>
        <p style={{fontWeight: 900, fontSize: "20px", marginBottom: "8px"}}>
          <span style={{color: "#4ade80"}}>STREET</span>
          <span style={{color: "white"}}>VAULT</span>
        </p>
        <p style={{color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase"}}>© 2026 — La Renaissance de la Street</p>
      </footer>

    </main>
  );
}