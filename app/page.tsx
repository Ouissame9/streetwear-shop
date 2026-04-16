export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-black/20">
        <div className="text-2xl font-black tracking-widest">
          <span className="text-green-400">STREET</span>
          <span className="text-white">VAULT</span>
        </div>
        <div className="flex gap-8 text-sm font-semibold tracking-wider">
          <a href="#" className="hover:text-green-400 transition-colors">ACCUEIL</a>
          <a href="#" className="hover:text-green-400 transition-colors">CATALOGUE</a>
          <a href="#" className="hover:text-green-400 transition-colors">MARQUES</a>
          <a href="#" className="hover:text-green-400 transition-colors">CONTACT</a>
        </div>
        <button className="bg-green-400 text-black font-black px-5 py-2 rounded-full text-sm hover:bg-green-300 transition-colors">
          PANIER 🛒
        </button>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <p className="text-green-400 text-sm font-bold tracking-[0.4em] uppercase mb-4">
          — La Renaissance de la Street —
        </p>
        <h1 className="text-6xl md:text-8xl font-black leading-none mb-2 tracking-tight">
          LA <span className="text-green-400 drop-shadow-[0_0_30px_rgba(74,222,128,0.8)]">STREET</span>
        </h1>
        <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tight">
          EST DE RETOUR
        </h1>
        <p className="text-white/70 text-lg max-w-xl mb-10">
          Nike Therma, Trail, Hybrid Under Armour... Les pièces qui définissent une génération. Pas du hype, de la vraie culture.
        </p>
        <div className="flex gap-4">
          <button className="bg-green-400 text-black font-black px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform hover:bg-green-300">
            VOIR LA COLLECTION →
          </button>
          <button className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg hover:border-green-400 hover:text-green-400 transition-colors">
            NOS MARQUES
          </button>
        </div>
      </section>

      {/* DICTON */}
      <section className="bg-black/30 backdrop-blur-sm py-8 px-6 text-center border-y border-white/10">
        <p className="text-2xl md:text-3xl font-black italic text-white/90">
          "La <span className="text-green-400">street</span> n'est pas un style, c'est une âme."
        </p>
      </section>

      {/* MARQUES */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-sm font-bold tracking-[0.4em] text-green-400 uppercase mb-8">Nos Marques</h2>
        <div className="flex justify-center gap-12 flex-wrap text-white/40 text-2xl font-black tracking-widest">
          <span className="hover:text-white transition-colors cursor-pointer">NIKE</span>
          <span className="hover:text-white transition-colors cursor-pointer">UNDER ARMOUR</span>
        </div>
      </section>

      {/* PRODUITS */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-black text-center mb-12">
          PIÈCES <span className="text-green-400">PHARES</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Nike Therma-FIT", type: "Veste technique", price: "89€", tag: "🔥 BEST" },
            { name: "Nike Trail Pegasus", type: "Running / Street", price: "119€", tag: "⚡ NEW" },
            { name: "UA Hybrid Fleece", type: "Under Armour", price: "74€", tag: "💜 EXCLU" },
          ].map((p) => (
            <div key={p.name} className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-green-400/50 hover:scale-105 transition-all cursor-pointer">
              <div className="bg-gradient-to-br from-green-400/20 to-purple-600/20 rounded-xl h-40 mb-4 flex items-center justify-center text-5xl">
                👕
              </div>
              <span className="text-xs font-bold text-green-400 tracking-widest">{p.tag}</span>
              <h3 className="text-xl font-black mt-1">{p.name}</h3>
              <p className="text-white/50 text-sm mb-4">{p.type}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-black text-green-400">{p.price}</span>
                <button className="bg-green-400 text-black font-bold px-4 py-2 rounded-full text-sm hover:bg-green-300 transition-colors">
                  AJOUTER
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-white/10 text-white/30 text-sm font-semibold tracking-wider">
        <p className="text-green-400 font-black text-lg mb-1"><span className="text-white">STREET</span>VAULT</p>
        © 2026 — La Renaissance de la Street
      </footer>

    </main>
  );
}