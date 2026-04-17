"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";

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

    const recap = panier.map(p => `• ${p.name} (${p.variante}) - Taille ${p.taille} x${p.quantite} = ${p.prix * p.quantite}€`).join("\n");

    const message = `
🛒 NOUVELLE COMMANDE STREETVAULT

👤 Client : ${prenom} ${nom}
📞 Téléphone : ${telephone}
📦 Adresse : ${adresse}, ${codePostal} ${ville}

🧾 Commande :
${recap}

💰 TOTAL : ${total}€
    `.trim();

    const url = `https://wa.me/33698242804?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
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
          <a href="/panier" style={{color: "rgba(255,255,255,0.7)", textDecoration: "none"}}>PANIER</a>
        </div>
      </nav>

      <section style={{maxWidth: "800px", margin: "0 auto", padding: "60px 40px"}}>

        <h1 style={{fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 900, marginBottom: "8px", letterSpacing: "-0.02em"}}>
          MA <span style={{color: "#4ade80", textShadow: "0 0 30px rgba(74,222,128,0.6)"}}>COMMANDE</span>
        </h1>
        <p style={{color: "rgba(255,255,255,0.4)", marginBottom: "48px", fontSize: "15px"}}>Remplis tes infos, on t'envoie la confirmation sur WhatsApp 📱</p>

        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start"}}>

          {/* FORMULAIRE */}
          <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
            <h2 style={{fontSize: "14px", fontWeight: 900, letterSpacing: "0.3em", color: "#4ade80", marginBottom: "8px"}}>// INFOS PERSONNELLES</h2>

            {[
              {label: "Prénom", value: prenom, setter: setPrenom, placeholder: "Ton prénom"},
              {label: "Nom", value: nom, setter: setNom, placeholder: "Ton nom"},
              {label: "Téléphone", value: telephone, setter: setTelephone, placeholder: "06 XX XX XX XX"},
              {label: "Adresse", value: adresse, setter: setAdresse, placeholder: "Rue, numéro..."},
              {label: "Code Postal", value: codePostal, setter: setCodePostal, placeholder: "75001"},
              {label: "Ville", value: ville, setter: setVille, placeholder: "Paris"},
            ].map(field => (
              <div key={field.label}>
                <label style={{fontSize: "11px", fontWeight: 900, letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", display: "block", marginBottom: "6px"}}>{field.label}</label>
                <input
                  value={field.value}
                  onChange={e => field.setter(e.target.value)}
                  placeholder={field.placeholder}
                  style={{width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "14px 16px", color: "white", fontSize: "15px", outline: "none", boxSizing: "border-box"}}
                />
              </div>
            ))}
          </div>

          {/* RÉCAP COMMANDE */}
          <div>
            <h2 style={{fontSize: "14px", fontWeight: 900, letterSpacing: "0.3em", color: "#4ade80", marginBottom: "16px"}}>// RÉCAP</h2>

            {panier.length === 0 ? (
              <div style={{textAlign: "center", padding: "40px 0"}}>
                <p style={{color: "rgba(255,255,255,0.4)", marginBottom: "16px"}}>Ton panier est vide</p>
                <a href="/catalogue" style={{color: "#4ade80", fontWeight: 900, textDecoration: "none"}}>← Retour au catalogue</a>
              </div>
            ) : (
              <>
                <div style={{display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px"}}>
                  {panier.map((p, i) => (
                    <div key={i} style={{display: "flex", gap: "12px", alignItems: "center", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "12px", background: "rgba(255,255,255,0.02)"}}>
                      <div style={{width: "50px", height: "50px", borderRadius: "8px", overflow: "hidden", flexShrink: 0, background: "#111"}}>
                        {p.photo ? (
                          <img src={p.photo} alt={p.name} style={{width: "100%", height: "100%", objectFit: "cover"}} />
                        ) : (
                          <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px"}}>👕</div>
                        )}
                      </div>
                      <div style={{flex: 1}}>
                        <p style={{fontSize: "13px", fontWeight: 900, margin: "0 0 2px"}}>{p.name}</p>
                        <p style={{fontSize: "11px", color: "rgba(255,255,255,0.4)", margin: 0}}>{p.variante} • Taille {p.taille} • x{p.quantite}</p>
                      </div>
                      <span style={{fontSize: "16px", fontWeight: 900, color: "#4ade80"}}>{p.prix * p.quantite}€</span>
                    </div>
                  ))}
                </div>

                <div style={{borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "16px", marginBottom: "24px"}}>
                  <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
                    <span style={{color: "rgba(255,255,255,0.5)", fontSize: "14px"}}>Livraison</span>
                    <span style={{color: "#4ade80", fontWeight: 700}}>Gratuite</span>
                  </div>
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                    <span style={{fontWeight: 900, fontSize: "18px"}}>TOTAL</span>
                    <span style={{fontWeight: 900, fontSize: "28px", color: "#4ade80"}}>{total}€</span>
                  </div>
                </div>

                <button onClick={handleCommander}
                  style={{width: "100%", background: "#4ade80", color: "black", fontWeight: 900, padding: "18px", borderRadius: "999px", fontSize: "16px", border: "none", cursor: "pointer", boxShadow: "0 0 30px rgba(74,222,128,0.4)", letterSpacing: "0.05em"}}>
                  ENVOYER SUR WHATSAPP 📱
                </button>

                <p style={{textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: "12px", marginTop: "12px"}}>
                  Tu vas être redirigé vers WhatsApp avec le récap de ta commande
                </p>
              </>
            )}
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