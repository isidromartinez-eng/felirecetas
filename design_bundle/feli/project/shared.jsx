// Componentes compartidos para todos los mockups de FeliRecetas

// — Status bar minimalista (sin device frame para densidad)
function StatusBar({ time = "9:41", dark = false }) {
  const c = dark ? "#fff" : "var(--ink)";
  return (
    <div className="sb" style={{ color: c }}>
      <span style={{ fontWeight: 600 }}>{time}</span>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <svg width="18" height="11" viewBox="0 0 18 11" fill={c === "#fff" ? "#fff" : "#2A1F18"}>
          <rect x="0" y="6.5" width="3" height="4.5" rx=".6"/>
          <rect x="4.5" y="4.5" width="3" height="6.5" rx=".6"/>
          <rect x="9" y="2" width="3" height="9" rx=".6"/>
          <rect x="13.5" y="0" width="3" height="11" rx=".6"/>
        </svg>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke={c === "#fff" ? "#fff" : "#2A1F18"} strokeWidth="1.1">
          <path d="M1 4.5C2.5 3 4.5 2 7 2s4.5 1 6 2.5"/>
          <path d="M3 6.5c1-1 2.5-1.5 4-1.5s3 .5 4 1.5"/>
          <circle cx="7" cy="8.5" r="1" fill={c === "#fff" ? "#fff" : "#2A1F18"} stroke="none"/>
        </svg>
        <svg width="24" height="11" viewBox="0 0 24 11" fill="none" stroke={c === "#fff" ? "#fff" : "#2A1F18"} strokeWidth=".8">
          <rect x=".5" y=".5" width="20" height="10" rx="2.5"/>
          <rect x="2" y="2" width="15" height="7" rx="1" fill={c === "#fff" ? "#fff" : "#2A1F18"} stroke="none"/>
          <path d="M22 3.5v4c.8-.3 1.2-1 1.2-2s-.4-1.7-1.2-2z" fill={c === "#fff" ? "#fff" : "#2A1F18"} stroke="none"/>
        </svg>
      </div>
    </div>
  );
}

// — Top bar con logo (sticky)
function TopBar({ onMenu = true, onCart = true, dark = false }) {
  return (
    <div className="topbar" style={dark ? { background: "transparent", borderBottom: "1px solid rgba(255,255,255,.12)", color: "#fff" } : {}}>
      <button className="row" style={{ background: "transparent", border: 0, padding: 4, cursor: "pointer", color: "inherit" }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <path d="M3 6h14M3 10h14M3 14h14"/>
        </svg>
      </button>
      <div className="logo" style={dark ? { color: "#fff" } : {}}>
        Feli <em>Recetas</em>
      </div>
      <button style={{ background: "transparent", border: 0, padding: 4, cursor: "pointer", color: "inherit", position: "relative" }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <path d="M4 6h12l-1.5 8.5a1.5 1.5 0 01-1.5 1.3H7a1.5 1.5 0 01-1.5-1.3L4 6z"/>
          <path d="M7 6V4.5a3 3 0 016 0V6"/>
        </svg>
        <span style={{ position: "absolute", top: 2, right: 0, width: 6, height: 6, background: "var(--wine)", borderRadius: 999 }}/>
      </button>
    </div>
  );
}

// — Tab bar inferior
function TabBar({ active = "home" }) {
  const tabs = [
    { id: "home", label: "Inicio", icon: <path d="M3 9l7-6 7 6v8a1 1 0 01-1 1h-4v-5H8v5H4a1 1 0 01-1-1V9z" strokeLinejoin="round"/> },
    { id: "cat", label: "Catálogo", icon: <><rect x="3" y="4" width="6" height="6" rx="1"/><rect x="11" y="4" width="6" height="6" rx="1"/><rect x="3" y="11" width="6" height="6" rx="1"/><rect x="11" y="11" width="6" height="6" rx="1"/></> },
    { id: "fav", label: "Favoritos", icon: <path d="M10 17s-6-3.5-6-8.5A3.5 3.5 0 0110 5a3.5 3.5 0 016 3.5c0 5-6 8.5-6 8.5z" strokeLinejoin="round"/> },
    { id: "pedir", label: "Pedir", icon: <><path d="M4 6h12l-1.5 8.5a1.5 1.5 0 01-1.5 1.3H7a1.5 1.5 0 01-1.5-1.3L4 6z"/><path d="M7 6V4.5a3 3 0 016 0V6"/></> },
  ];
  return (
    <div className="tabbar">
      {tabs.map(t => (
        <div key={t.id} className={"tab" + (t.id === active ? " active" : "")}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">{t.icon}</svg>
          <span>{t.label}</span>
          {t.id === active && <div className="dot"/>}
        </div>
      ))}
    </div>
  );
}

// — Tarjeta de producto del catálogo
function ProductCard({ name, price, tag, tone = "cream", subtitle, big = false }) {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column" }}>
      <div className={"img " + tone} style={{ height: big ? 200 : 130, position: "relative" }}>
        {tag && <span className="chip-tag" style={{ position: "absolute", top: 10, left: 10 }}>{tag}</span>}
        <span className="img-label">{name.toLowerCase()}.jpg</span>
      </div>
      <div style={{ padding: "12px 14px 14px" }}>
        <div className="h3" style={{ fontSize: big ? 22 : 17 }}>{name}</div>
        {subtitle && <div className="caption" style={{ marginTop: 2 }}>{subtitle}</div>}
        <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline", marginTop: 10 }}>
          <span className="price-serif num">$ {price}</span>
          <span className="caption" style={{ color: "var(--wine)", fontWeight: 500 }}>Encargar →</span>
        </div>
      </div>
    </div>
  );
}

// — Botón pildora flotante de WhatsApp
function WhatsappFAB() {
  return (
    <div style={{
      position: "absolute", right: 14, bottom: 90,
      width: 52, height: 52, borderRadius: 999,
      background: "#25D366",
      boxShadow: "0 8px 24px rgba(37,211,102,.4), 0 2px 6px rgba(0,0,0,.12)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.92.55 3.79 1.6 5.41L2 22l4.79-1.26a9.9 9.9 0 005.25 1.5c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.78 14.16c-.25.71-1.42 1.36-2 1.45-.5.08-1.15.11-1.85-.12-.43-.14-.97-.32-1.67-.62-2.95-1.27-4.87-4.24-5.02-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.3.59-.37.79-.37.2 0 .39 0 .57.01.18.01.42-.07.66.5.25.62.85 2.07.93 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.39-.45.52-.15.15-.31.31-.13.62.17.3.78 1.28 1.67 2.07 1.15 1.02 2.11 1.34 2.42 1.49.31.15.49.13.67-.07.18-.2.78-.91.99-1.22.2-.31.4-.26.68-.15.27.1 1.72.81 2.02.96.3.15.49.22.57.35.07.13.07.74-.18 1.45z"/>
      </svg>
    </div>
  );
}

// — Wrapper de pantalla mobile (390x844)
function Screen({ children, dark = false, noBar = false, scroll = false }) {
  return (
    <div className={"fr" + (scroll ? " scroll" : "")} style={dark ? { background: "var(--ink)", color: "var(--paper)" } : {}}>
      {!noBar && <StatusBar dark={dark}/>}
      {children}
    </div>
  );
}

Object.assign(window, { StatusBar, TopBar, TabBar, ProductCard, WhatsappFAB, Screen });
