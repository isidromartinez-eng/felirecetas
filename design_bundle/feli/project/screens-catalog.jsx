// Pantallas: Catálogo + Catálogo con filtros + Producto detalle

function ScreenCatalog() {
  const cats = ["Todos", "Macarons", "Tortas", "Viennoiserie", "Cookies", "Cake pops"];
  return (
    <Screen scroll>
      <TopBar/>

      {/* Encabezado catálogo */}
      <div style={{ padding: "20px 22px 8px" }}>
        <div className="eyebrow">— Catálogo · Edición Otoño</div>
        <div className="h1 serif" style={{ marginTop: 6 }}>
          La <span className="serif-i">carta</span> del mes
        </div>
        <p className="caption" style={{ marginTop: 6, fontSize: 13 }}>
          12 productos · pedidos con 48hs · La Plata y alrededores
        </p>
      </div>

      {/* Filtros horizontales */}
      <div style={{ overflowX: "auto", padding: "12px 22px 8px", display: "flex", gap: 8 }}>
        {cats.map((c, i) => (
          <span key={c} className="chip" style={i === 0 ? { background: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)" } : {}}>
            {c}
          </span>
        ))}
      </div>

      {/* Acción ordenar / filtros */}
      <div className="row" style={{ justifyContent: "space-between", padding: "4px 22px 12px" }}>
        <span className="caption">12 resultados</span>
        <span className="caption row gap-2" style={{ color: "var(--ink)", fontWeight: 500 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"><path d="M2 4h10M3.5 7h7M5 10h4"/></svg>
          Ordenar
        </span>
      </div>

      {/* Destacado del mes — grande */}
      <div style={{ padding: "0 22px 16px" }}>
        <ProductCard
          name="Red Velvet de la casa"
          price="18.500"
          tag="Destacado"
          subtitle="Bizcocho aterciopelado · frosting de queso crema · 12/16/24 porciones"
          tone="wine"
          big
        />
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: "0 22px 30px" }}>
        <ProductCard name="Macarons" price="4.800" tag="Clásico" subtitle="Caja x 6 · 6 sabores" tone="cream"/>
        <ProductCard name="Croissants" price="1.200" tag="Nuevo" subtitle="Manteca · 72h" tone="gold"/>
        <ProductCard name="Cookies" price="3.600" tag="Popular" subtitle="Caja x 6 · choc." tone="choc"/>
        <ProductCard name="Cake pops" price="6.400" subtitle="Eventos · x 12" tone="wine"/>
        <ProductCard name="Lemon pie" price="8.200" tag="Temporada" subtitle="Bandeja · 8 porc." tone="gold"/>
        <ProductCard name="Brownies" price="5.400" tag="Clásico" subtitle="x 9 · semi-amargo" tone="choc"/>
        <ProductCard name="Alfajores" price="3.200" tag="Popular" subtitle="x 4 · dulce de leche" tone="cream"/>
        <ProductCard name="Cheesecake" price="12.500" tag="Nuevo" subtitle="8 porc. · queso crema" tone="sage"/>
      </div>

      <div style={{ height: 80 }}/>
      <TabBar active="cat"/>
    </Screen>
  );
}

// — Catálogo con panel de filtros desplegado (bottom sheet)
function ScreenCatalogFilters() {
  return (
    <Screen>
      <TopBar/>
      <div style={{ padding: "20px 22px 8px", opacity: .35 }}>
        <div className="eyebrow">— Catálogo · Edición Otoño</div>
        <div className="h1 serif" style={{ marginTop: 6 }}>
          La <span className="serif-i">carta</span> del mes
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: "16px 22px", opacity: .35 }}>
        <div style={{ height: 180, background: "var(--bg-soft)", borderRadius: 14 }}/>
        <div style={{ height: 180, background: "var(--bg-soft)", borderRadius: 14 }}/>
      </div>

      {/* Overlay tint */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(42,31,24,.4)", pointerEvents: "none" }}/>

      {/* Bottom sheet */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        background: "var(--paper)",
        borderTopLeftRadius: 24, borderTopRightRadius: 24,
        padding: "12px 22px 28px",
        boxShadow: "0 -8px 32px rgba(0,0,0,.18)",
      }}>
        <div style={{ width: 40, height: 4, background: "var(--rule)", borderRadius: 999, margin: "0 auto 14px" }}/>
        <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
          <div className="h2">Filtrar</div>
          <span className="caption" style={{ color: "var(--wine)" }}>Limpiar</span>
        </div>

        <div className="ornament" style={{ marginTop: 18, justifyContent: "flex-start", gap: 10 }}>
          <span style={{ flex: "0 0 auto" }}>Categoría</span>
          <span style={{ flex: 1, borderTop: "1px solid var(--rule)", height: 0 }}/>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
          {["Macarons", "Tortas", "Viennoiserie", "Cookies", "Cake pops", "Brownies"].map((c, i) => (
            <span key={c} className="chip" style={i === 1 ? { background: "var(--wine)", color: "#fff", borderColor: "var(--wine)" } : {}}>
              {i === 1 && "✓ "}{c}
            </span>
          ))}
        </div>

        <div className="ornament" style={{ marginTop: 22, justifyContent: "flex-start", gap: 10 }}>
          <span style={{ flex: "0 0 auto" }}>Para</span>
          <span style={{ flex: 1, borderTop: "1px solid var(--rule)", height: 0 }}/>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
          {["Cumpleaños", "Eventos", "Regalo", "Para casa"].map(c => (
            <span key={c} className="chip">{c}</span>
          ))}
        </div>

        <div className="ornament" style={{ marginTop: 22, justifyContent: "flex-start", gap: 10 }}>
          <span style={{ flex: "0 0 auto" }}>Porciones</span>
          <span style={{ flex: 1, borderTop: "1px solid var(--rule)", height: 0 }}/>
        </div>
        <div className="row gap-2" style={{ marginTop: 12 }}>
          <span className="chip">1–4</span>
          <span className="chip" style={{ background: "var(--bg-soft)", borderColor: "var(--ink)" }}>6–12</span>
          <span className="chip">12–24</span>
          <span className="chip">+24</span>
        </div>

        <button className="btn btn-wine btn-block" style={{ marginTop: 22 }}>
          Aplicar · 5 resultados
        </button>
      </div>
    </Screen>
  );
}

// — Producto detalle (Red Velvet)
function ScreenProduct() {
  return (
    <Screen scroll>
      {/* Foto bleed con back button flotante */}
      <div className="img wine" style={{ height: 360, margin: "0 0 0", borderRadius: 0, position: "relative" }}>
        <div style={{ position: "absolute", top: 12, left: 12, right: 12, display: "flex", justifyContent: "space-between" }}>
          <button style={{ width: 38, height: 38, borderRadius: 999, background: "rgba(255,255,255,.85)", border: 0, backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 3L5 8l5 5"/></svg>
          </button>
          <div className="row gap-2">
            <button style={{ width: 38, height: 38, borderRadius: 999, background: "rgba(255,255,255,.85)", border: 0, backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 14s-5-3-5-7a3 3 0 015-2 3 3 0 015 2c0 4-5 7-5 7z"/></svg>
            </button>
            <button style={{ width: 38, height: 38, borderRadius: 999, background: "rgba(255,255,255,.85)", border: 0, backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M11 5L5 11M5 5l6 6"/></svg>
            </button>
          </div>
        </div>
        {/* Indicadores foto */}
        <div style={{ position: "absolute", bottom: 14, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{ width: i === 0 ? 16 : 6, height: 6, borderRadius: 999, background: i === 0 ? "#fff" : "rgba(255,255,255,.5)" }}/>
          ))}
        </div>
        <span className="img-label">red-velvet-1.jpg</span>
      </div>

      <div style={{ padding: "20px 22px 100px" }}>
        <div className="row" style={{ gap: 8 }}>
          <span className="chip-tag">Destacado del mes</span>
          <span className="chip-tag gold">Pieza única</span>
        </div>
        <div className="h1 serif" style={{ marginTop: 12 }}>
          Red Velvet <span className="serif-i">de la casa</span>
        </div>
        <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 8 }}>
          Bizcocho aterciopelado con cacao y un toque de vinagre, frosting de
          queso crema batido a la cuchara. Hecha a pedido el día anterior.
        </p>

        {/* Selector tamaño */}
        <div className="ornament" style={{ marginTop: 22 }}>Tamaño</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 12 }}>
          {[
            { p: "12", price: "18.500", note: "" },
            { p: "16", price: "23.800", note: "Más pedido", sel: true },
            { p: "24", price: "33.500", note: "" },
          ].map(s => (
            <div key={s.p} style={{
              padding: "14px 8px",
              border: s.sel ? "1.5px solid var(--ink)" : "1px solid var(--rule)",
              background: s.sel ? "var(--bg-soft)" : "var(--paper)",
              borderRadius: 12, textAlign: "center", position: "relative"
            }}>
              {s.note && <span style={{ position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)", background: "var(--ink)", color: "#fff", fontSize: 9, padding: "2px 6px", borderRadius: 4, letterSpacing: ".08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{s.note}</span>}
              <div className="serif" style={{ fontSize: 22, lineHeight: 1 }}>{s.p}</div>
              <div className="caption" style={{ fontSize: 10, marginTop: 2 }}>porciones</div>
              <div className="serif num" style={{ fontSize: 14, marginTop: 6 }}>$ {s.price}</div>
            </div>
          ))}
        </div>

        {/* Para cuándo */}
        <div className="ornament" style={{ marginTop: 22 }}>Para cuándo</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 6, marginTop: 12 }}>
          {[
            { d: "vie", n: "20", off: false },
            { d: "sáb", n: "21", off: false, sel: true },
            { d: "dom", n: "22", off: false },
            { d: "lun", n: "23", off: true },
          ].map(s => (
            <div key={s.n} style={{
              padding: "10px 4px", textAlign: "center", borderRadius: 10,
              border: s.sel ? "1.5px solid var(--wine)" : "1px solid var(--rule)",
              background: s.off ? "transparent" : "var(--paper)",
              opacity: s.off ? .35 : 1,
            }}>
              <div className="caption" style={{ fontSize: 10, textTransform: "uppercase" }}>{s.d}</div>
              <div className="serif" style={{ fontSize: 19, lineHeight: 1.1, color: s.sel ? "var(--wine)" : "var(--ink)" }}>{s.n}</div>
            </div>
          ))}
        </div>
        <div className="caption" style={{ marginTop: 8, color: "var(--ink-3)" }}>
          Mínimo 48hs · entrega o retiro en La Plata
        </div>

        {/* Notas */}
        <div className="ornament" style={{ marginTop: 22 }}>Notas para Feli</div>
        <div className="caption" style={{ background: "var(--bg-soft)", padding: "12px 14px", borderRadius: 10, marginTop: 10, fontStyle: "italic", color: "var(--ink-2)" }}>
          Ej: "Es para el cumpleaños de mi hija, le encanta el chocolate…"
        </div>

        {/* Tabs info */}
        <div className="row gap-4" style={{ marginTop: 24, borderBottom: "1px solid var(--rule-soft)", paddingBottom: 0 }}>
          {["Ingredientes", "Alérgenos", "Entrega"].map((t, i) => (
            <div key={t} style={{
              padding: "10px 2px",
              borderBottom: i === 0 ? "2px solid var(--ink)" : "2px solid transparent",
              fontSize: 13, fontWeight: i === 0 ? 600 : 400,
              color: i === 0 ? "var(--ink)" : "var(--ink-3)"
            }}>{t}</div>
          ))}
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--ink-2)", marginTop: 12 }}>
          Harina, cacao orgánico, manteca, huevos de campo, queso crema,
          remolacha (color natural), azúcar mascabo. Sin colorantes artificiales.
        </p>
      </div>

      {/* Sticky CTA */}
      <div className="stickycta">
        <div className="label col" style={{ gap: 0 }}>
          <span style={{ fontSize: 10, opacity: .65, letterSpacing: ".1em", textTransform: "uppercase" }}>16 porciones</span>
          <span className="price num">$ 23.800</span>
        </div>
        <button className="btn btn-wine btn-sm" style={{ height: 40, padding: "0 18px" }}>
          Encargar por WhatsApp
        </button>
      </div>
    </Screen>
  );
}

Object.assign(window, { ScreenCatalog, ScreenCatalogFilters, ScreenProduct });
