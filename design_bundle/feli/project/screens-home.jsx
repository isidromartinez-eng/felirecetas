// Pantallas: Sistema de diseño + Inicio (con 2 variantes de hero) + Menú

function ScreenSystem() {
  const Swatch = ({ name, val, hex, light }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ width: 44, height: 44, borderRadius: 8, background: val, border: "1px solid rgba(0,0,0,.08)" }}/>
      <div>
        <div style={{ fontFamily: "var(--sans)", fontSize: 13, fontWeight: 600 }}>{name}</div>
        <div className="caption" style={{ fontFamily: "var(--mono)", fontSize: 10.5 }}>{hex}</div>
      </div>
    </div>
  );
  return (
    <Screen scroll>
      <div style={{ padding: "8px 24px 40px" }}>
        <div className="eyebrow" style={{ marginTop: 8 }}>— Sistema</div>
        <div className="h1 serif" style={{ marginTop: 6 }}>
          Boutique <span className="serif-i">parisina</span>.
        </div>
        <p style={{ color: "var(--ink-2)", fontSize: 13, lineHeight: 1.55, marginTop: 8 }}>
          Editorial, cálido y minimalista. Cormorant para titulares con bastardilla
          como acento; DM Sans para todo lo legible. Paleta tierra con vino
          refinado para los CTAs y momentos de marca.
        </p>

        <div className="ornament" style={{ marginTop: 22 }}>Color</div>
        <div className="col gap-3" style={{ marginTop: 14 }}>
          <Swatch name="Crema fondo" hex="#F4EDE2" val="#F4EDE2"/>
          <Swatch name="Papel tarjeta" hex="#FBF7F0" val="#FBF7F0"/>
          <Swatch name="Tinta · ink" hex="#2A1F18" val="#2A1F18"/>
          <Swatch name="Vino · CTA" hex="#6E2A2A" val="#6E2A2A"/>
          <Swatch name="Rosé empolvado" hex="#E8C9B8" val="#E8C9B8"/>
          <Swatch name="Verde oliva" hex="#8A9279" val="#8A9279"/>
          <Swatch name="Dorado opaco" hex="#B89968" val="#B89968"/>
        </div>

        <div className="ornament" style={{ marginTop: 26 }}>Tipografía</div>
        <div style={{ marginTop: 14 }}>
          <div style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 38, lineHeight: 1, letterSpacing: "-0.02em" }}>
            Cormorant <span className="serif-i" style={{ color: "var(--wine)" }}>Garamond</span>
          </div>
          <div className="caption" style={{ marginTop: 4, fontFamily: "var(--mono)" }}>Display / H1 / H2 — 500 + 400 italic</div>
        </div>
        <div style={{ marginTop: 16 }}>
          <div style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 16, letterSpacing: "-0.005em" }}>
            DM Sans — body, UI, captions
          </div>
          <div className="caption" style={{ marginTop: 4, fontFamily: "var(--mono)" }}>400 / 500 / 600 · 10–16px</div>
        </div>

        <div className="ornament" style={{ marginTop: 26 }}>Voz</div>
        <div className="col gap-2" style={{ marginTop: 12 }}>
          <span className="caption" style={{ color: "var(--ink)", fontSize: 13 }}>
            <span style={{ color: "var(--sage)" }}>✓</span> Cálida, en primera persona, sin tecnicismos
          </span>
          <span className="caption" style={{ color: "var(--ink)", fontSize: 13 }}>
            <span style={{ color: "var(--sage)" }}>✓</span> Pausada — "tu pausa", "una pequeña ceremonia"
          </span>
          <span className="caption" style={{ color: "var(--ink)", fontSize: 13 }}>
            <span style={{ color: "var(--wine)" }}>×</span> Sin emojis, sin signos de admiración
          </span>
        </div>

        <div className="ornament" style={{ marginTop: 26 }}>Botones</div>
        <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
          <button className="btn btn-wine btn-sm">Pedir por WhatsApp</button>
          <button className="btn btn-ghost btn-sm">Ver catálogo</button>
        </div>
      </div>
    </Screen>
  );
}

// — Inicio: hero editorial, foto grande, eyebrow + display + dos CTAs
function ScreenHome() {
  return (
    <Screen scroll>
      <TopBar/>
      {/* Banner edición */}
      <div style={{ background: "var(--ink)", color: "var(--paper)", padding: "8px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, letterSpacing: ".08em" }}>
        <span style={{ textTransform: "uppercase" }}>Edición otoño · Junio</span>
        <span style={{ color: "var(--rose)" }}>Pedidos 48h →</span>
      </div>

      {/* Hero */}
      <div style={{ padding: "18px 22px 8px" }}>
        <div className="eyebrow">— 01 · Pastelería artesanal</div>
        <div className="display" style={{ marginTop: 10 }}>
          Tu pequeña pausa, <span className="serif-i" style={{ color: "var(--wine)" }}>para disfrutar</span>.
        </div>
      </div>

      {/* Foto grande */}
      <div className="img" style={{ height: 280, margin: "12px 22px", borderRadius: 6, position: "relative" }}>
        <span className="img-label">macarons-flatlay.jpg</span>
        <div style={{ position: "absolute", left: 14, bottom: 14, color: "#fff" }}>
          <div className="eyebrow" style={{ color: "rgba(255,255,255,.8)" }}>— Destacado del mes</div>
          <div className="serif" style={{ fontSize: 22, marginTop: 4 }}>Red Velvet <span className="serif-i">de la casa</span></div>
        </div>
      </div>

      {/* Subtítulo + CTAs */}
      <div style={{ padding: "10px 22px 16px" }}>
        <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>
          Macarons, croissants y tortas personalizadas para los días que merecen
          una pequeña ceremonia.
        </p>
        <div className="row gap-2" style={{ marginTop: 16 }}>
          <button className="btn btn-wine" style={{ flex: 1 }}>Ver catálogo</button>
          <button className="btn btn-ghost btn-icon" aria-label="info">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <circle cx="9" cy="9" r="7"/><path d="M9 12V8M9 6.5v0"/>
            </svg>
          </button>
        </div>
      </div>

      {/* La carta — grid de categorías */}
      <hr className="rule-soft" style={{ margin: "8px 22px" }}/>
      <div style={{ padding: "16px 22px 12px" }}>
        <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
          <div>
            <div className="eyebrow">— 02 · La carta</div>
            <div className="h2" style={{ marginTop: 4 }}>Nuestros <span className="serif-i">productos</span></div>
          </div>
          <span className="caption" style={{ color: "var(--wine)" }}>Ver todo →</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
          <ProductCard name="Macarons" price="4.800" tag="Clásico" subtitle="Caja x 6 · 6 sabores" tone="cream"/>
          <ProductCard name="Croissants" price="1.200" tag="Nuevo" subtitle="Manteca · hojaldre 72h" tone="gold"/>
          <ProductCard name="Cookies" price="3.600" tag="Popular" subtitle="Caja x 6 · choc. doble" tone="choc"/>
          <ProductCard name="Cake pops" price="6.400" subtitle="Personalizables · x 12" tone="wine"/>
        </div>
      </div>

      {/* Stats franja */}
      <div style={{ background: "var(--bg-soft)", padding: "20px 22px", marginTop: 12 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[
            { n: "06", suf: "+", t: "años horneando" },
            { n: "500", suf: "+", t: "clientes felices" },
            { n: "100", suf: "%", t: "artesanal" },
          ].map(s => (
            <div key={s.t}>
              <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 30, lineHeight: 1, color: "var(--wine)" }}>{s.n}<span style={{ fontStyle: "normal" }}>{s.suf}</span></div>
              <div className="caption" style={{ marginTop: 6 }}>{s.t}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 80 }}/>
      <TabBar active="home"/>
    </Screen>
  );
}

// — Menú lateral (overlay)
function ScreenMenu() {
  const items = [
    { n: "01", t: "Catálogo", s: "Macarons · Tortas · Cookies" },
    { n: "02", t: "Personalizar una torta", s: "Configurador paso a paso", new: true },
    { n: "03", t: "Cómo pedir", s: "El proceso · 48hs mínimo" },
    { n: "04", t: "Nuestra historia", s: "Desde 2019 · La Plata" },
    { n: "05", t: "Galería", s: "Instagram + eventos" },
    { n: "06", t: "Preguntas frecuentes" },
  ];
  return (
    <Screen>
      {/* Backdrop tinted */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(42,31,24,.45)", backdropFilter: "blur(2px)" }}/>
      <div style={{
        position: "absolute", inset: 0, right: 60,
        background: "var(--paper)",
        display: "flex", flexDirection: "column",
        boxShadow: "0 0 40px rgba(0,0,0,.2)",
      }}>
        <div style={{ padding: "12px 20px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="logo" style={{ fontFamily: "var(--serif)", fontSize: 19 }}>Feli <em style={{ color: "var(--wine)" }}>Recetas</em></span>
          <button style={{ background: "transparent", border: 0, fontSize: 22, color: "var(--ink-2)" }}>×</button>
        </div>
        <hr className="rule-soft" style={{ margin: "0 20px" }}/>

        <div style={{ padding: "12px 0", flex: 1 }}>
          {items.map((it, i) => (
            <div key={it.n} style={{ padding: "14px 20px", borderBottom: i < items.length-1 ? "1px solid var(--rule-soft)" : "none", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span className="eyebrow" style={{ marginTop: 4 }}>{it.n}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 22, lineHeight: 1.1, letterSpacing: "-0.012em", color: "var(--ink)" }}>
                  {it.t}
                  {it.new && <span className="chip-tag sage" style={{ marginLeft: 8, verticalAlign: "middle", fontSize: 9 }}>Nuevo</span>}
                </div>
                {it.s && <div className="caption" style={{ marginTop: 2 }}>{it.s}</div>}
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: 20, borderTop: "1px solid var(--rule-soft)" }}>
          <button className="btn btn-wine btn-block">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.92.55 3.79 1.6 5.41L2 22l4.79-1.26a9.9 9.9 0 005.25 1.5c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z"/></svg>
            Pedir por WhatsApp
          </button>
          <div className="row" style={{ justifyContent: "space-between", marginTop: 14, color: "var(--ink-3)", fontSize: 11 }}>
            <span>@felirecetas</span>
            <span>La Plata, AR · desde 2019</span>
          </div>
        </div>
      </div>
    </Screen>
  );
}

Object.assign(window, { ScreenSystem, ScreenHome, ScreenMenu });
