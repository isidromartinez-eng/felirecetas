// Pantallas: Configurador de torta personalizada (4 pasos) + Calculadora de porciones

function Stepper({ step }) {
  return (
    <div className="row" style={{ padding: "16px 22px 8px", gap: 6 }}>
      {[1,2,3,4].map(n => (
        <React.Fragment key={n}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            opacity: n <= step ? 1 : .35,
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: 999,
              background: n === step ? "var(--ink)" : (n < step ? "var(--wine)" : "transparent"),
              border: n > step ? "1px solid var(--rule)" : "none",
              color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--serif)", fontSize: 12,
            }}>{n < step ? "✓" : n}</div>
          </div>
          {n < 4 && <div style={{ flex: 1, height: 1, background: n < step ? "var(--wine)" : "var(--rule)" }}/>}
        </React.Fragment>
      ))}
    </div>
  );
}

function ConfigHeader({ step, title, subtitle }) {
  return (
    <>
      <TopBar/>
      <Stepper step={step}/>
      <div style={{ padding: "8px 22px 0" }}>
        <div className="eyebrow">— Personalizá tu torta · paso {step}/4</div>
        <div className="h1 serif" style={{ marginTop: 6 }}>{title}</div>
        {subtitle && <p className="caption" style={{ marginTop: 6, fontSize: 13 }}>{subtitle}</p>}
      </div>
    </>
  );
}

// Paso 1 — Base
function ScreenConfig1() {
  const bases = [
    { n: "Red Velvet", note: "Aterciopelada · clásica", tone: "wine", sel: true },
    { n: "Chocolate intenso", note: "70% · semi-amargo", tone: "choc" },
    { n: "Vainilla bourbon", note: "Bizcocho liviano", tone: "cream" },
    { n: "Lemon poppy", note: "Cítrica · semillas amapola", tone: "gold" },
    { n: "Zanahoria y nuez", note: "Especiada · clásica", tone: "gold" },
    { n: "Pistacho", note: "Edición limitada", tone: "sage" },
  ];
  return (
    <Screen scroll>
      <ConfigHeader step={1} title={<>Elegí <span className="serif-i">la base</span></>} subtitle="El bizcocho que va a llevar tu torta. Después elegís sabor y decoración."/>
      <div style={{ padding: "16px 22px 100px", display: "flex", flexDirection: "column", gap: 10 }}>
        {bases.map(b => (
          <div key={b.n} style={{
            display: "flex", alignItems: "center", gap: 14,
            padding: 10, borderRadius: 14,
            border: b.sel ? "1.5px solid var(--ink)" : "1px solid var(--rule-soft)",
            background: b.sel ? "var(--bg-soft)" : "var(--paper)",
          }}>
            <div className={"img " + b.tone} style={{ width: 78, height: 78, borderRadius: 10, flexShrink: 0 }}/>
            <div style={{ flex: 1 }}>
              <div className="serif" style={{ fontSize: 19, lineHeight: 1.1 }}>{b.n}</div>
              <div className="caption" style={{ marginTop: 2 }}>{b.note}</div>
            </div>
            <div style={{
              width: 22, height: 22, borderRadius: 999,
              border: "1.5px solid " + (b.sel ? "var(--ink)" : "var(--rule)"),
              background: b.sel ? "var(--ink)" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 12,
            }}>{b.sel && "✓"}</div>
          </div>
        ))}
      </div>
      <div className="stickycta">
        <div className="label col" style={{ gap: 0 }}>
          <span style={{ fontSize: 10, opacity: .65, letterSpacing: ".1em", textTransform: "uppercase" }}>Paso 1/4 · Base</span>
          <span style={{ fontSize: 13, fontFamily: "var(--serif)" }}>Red Velvet seleccionada</span>
        </div>
        <button className="btn btn-wine btn-sm" style={{ height: 40, padding: "0 18px" }}>Siguiente →</button>
      </div>
    </Screen>
  );
}

// Paso 2 — Rellenos y sabores
function ScreenConfig2() {
  const fills = [
    { n: "Queso crema", picked: true },
    { n: "Dulce de leche" },
    { n: "Ganache chocolate" },
    { n: "Frutos rojos" },
    { n: "Crema de pistacho" },
    { n: "Lemon curd" },
    { n: "Crema de café" },
    { n: "Praliné de avellana" },
  ];
  return (
    <Screen scroll>
      <ConfigHeader step={2} title={<>Sabores y <span className="serif-i">rellenos</span></>} subtitle="Hasta 2 rellenos. Elegí los que más te gusten."/>
      <div style={{ padding: "16px 22px 100px" }}>
        <div className="ornament" style={{ justifyContent: "flex-start" }}>
          <span style={{ flex: "0 0 auto" }}>Rellenos (1/2)</span>
          <span style={{ flex: 1, borderTop: "1px solid var(--rule)", height: 0 }}/>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
          {fills.map(f => (
            <div key={f.n} style={{
              padding: "16px 14px", borderRadius: 12,
              border: f.picked ? "1.5px solid var(--wine)" : "1px solid var(--rule-soft)",
              background: f.picked ? "var(--rose-soft)" : "var(--paper)",
              position: "relative",
            }}>
              {f.picked && <div style={{ position: "absolute", top: 8, right: 8, width: 18, height: 18, background: "var(--wine)", borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11 }}>✓</div>}
              <div className="serif" style={{ fontSize: 15.5, lineHeight: 1.15 }}>{f.n}</div>
            </div>
          ))}
        </div>

        <div className="ornament" style={{ marginTop: 22, justifyContent: "flex-start" }}>
          <span style={{ flex: "0 0 auto" }}>Cobertura</span>
          <span style={{ flex: 1, borderTop: "1px solid var(--rule)", height: 0 }}/>
        </div>
        <div className="row gap-2" style={{ marginTop: 12, flexWrap: "wrap" }}>
          {["Frosting queso crema", "Crema chantilly", "Ganache", "Buttercream", "Drip de chocolate"].map((c, i) => (
            <span key={c} className="chip" style={i === 0 ? { background: "var(--ink)", color: "#fff", borderColor: "var(--ink)" } : {}}>{c}</span>
          ))}
        </div>

        <div className="ornament" style={{ marginTop: 22, justifyContent: "flex-start" }}>
          <span style={{ flex: "0 0 auto" }}>Restricciones</span>
          <span style={{ flex: 1, borderTop: "1px solid var(--rule)", height: 0 }}/>
        </div>
        <div className="row gap-2" style={{ marginTop: 12, flexWrap: "wrap" }}>
          {["Sin gluten", "Sin lactosa", "Vegano", "Sin frutos secos"].map(c => (
            <span key={c} className="chip">+ {c}</span>
          ))}
        </div>
      </div>
      <div className="stickycta">
        <div className="label col" style={{ gap: 0 }}>
          <span style={{ fontSize: 10, opacity: .65, letterSpacing: ".1em", textTransform: "uppercase" }}>Paso 2/4 · Sabor</span>
          <span style={{ fontSize: 13, fontFamily: "var(--serif)" }}>Queso crema · frosting</span>
        </div>
        <button className="btn btn-wine btn-sm" style={{ height: 40, padding: "0 18px" }}>Siguiente →</button>
      </div>
    </Screen>
  );
}

// Paso 3 — Tamaño con preview visual
function ScreenConfig3() {
  return (
    <Screen scroll>
      <ConfigHeader step={3} title={<>Tamaño y <span className="serif-i">porciones</span></>} subtitle="¿Cuántas personas vamos a hacer felices?"/>

      {/* Preview visual */}
      <div style={{ padding: "20px 22px 8px", display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 14, minHeight: 180 }}>
        {[
          { d: 70, h: 60, p: "12", o: .35 },
          { d: 100, h: 90, p: "16", o: 1, sel: true },
          { d: 130, h: 120, p: "24", o: .35 },
        ].map(t => (
          <div key={t.p} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: t.o }}>
            <div className="img wine" style={{ width: t.d, height: t.h, borderRadius: 6, boxShadow: t.sel ? "0 8px 24px rgba(110,42,42,.25)" : "none" }}/>
            <div className="serif" style={{ fontSize: 15, color: t.sel ? "var(--wine)" : "var(--ink-3)" }}>{t.p}p</div>
          </div>
        ))}
      </div>

      <div style={{ padding: "0 22px 100px" }}>
        {/* Selector porciones */}
        <div style={{ background: "var(--bg-soft)", borderRadius: 14, padding: 18 }}>
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
            <span className="caption">Porciones</span>
            <div className="stepper">
              <button>−</button>
              <span className="v">16</span>
              <button>+</button>
            </div>
          </div>
          <div className="caption" style={{ marginTop: 6, fontSize: 11 }}>Recomendado para 12–18 personas</div>
        </div>

        {/* Forma */}
        <div className="ornament" style={{ marginTop: 22, justifyContent: "flex-start" }}>
          <span style={{ flex: "0 0 auto" }}>Forma</span>
          <span style={{ flex: 1, borderTop: "1px solid var(--rule)", height: 0 }}/>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 12 }}>
          {[
            { n: "Redonda", sel: true, shape: <circle cx="20" cy="20" r="14"/> },
            { n: "Cuadrada", shape: <rect x="6" y="6" width="28" height="28" rx="2"/> },
            { n: "Corazón", shape: <path d="M20 32C8 23 8 13 14 11c3-1 5 1 6 3 1-2 3-4 6-3 6 2 6 12-6 21z"/> },
          ].map(f => (
            <div key={f.n} style={{
              padding: 14, textAlign: "center",
              border: f.sel ? "1.5px solid var(--ink)" : "1px solid var(--rule)",
              background: f.sel ? "var(--paper-2)" : "var(--paper)",
              borderRadius: 12,
            }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--ink)" strokeWidth="1.4">{f.shape}</svg>
              <div className="caption" style={{ marginTop: 6, fontSize: 11.5, color: "var(--ink)" }}>{f.n}</div>
            </div>
          ))}
        </div>

        {/* Pisos */}
        <div className="ornament" style={{ marginTop: 22, justifyContent: "flex-start" }}>
          <span style={{ flex: "0 0 auto" }}>Pisos</span>
          <span style={{ flex: 1, borderTop: "1px solid var(--rule)", height: 0 }}/>
        </div>
        <div className="row gap-2" style={{ marginTop: 12 }}>
          <span className="chip" style={{ background: "var(--ink)", color: "#fff", borderColor: "var(--ink)" }}>1 piso</span>
          <span className="chip">2 pisos · +$8.500</span>
          <span className="chip">3 pisos · +$18.000</span>
        </div>
      </div>

      <div className="stickycta">
        <div className="label col" style={{ gap: 0 }}>
          <span style={{ fontSize: 10, opacity: .65, letterSpacing: ".1em", textTransform: "uppercase" }}>Paso 3/4 · 16 porc.</span>
          <span style={{ fontSize: 13, fontFamily: "var(--serif)" }}>Redonda · 1 piso</span>
        </div>
        <button className="btn btn-wine btn-sm" style={{ height: 40, padding: "0 18px" }}>Siguiente →</button>
      </div>
    </Screen>
  );
}

// Paso 4 — Decoración + resumen
function ScreenConfig4() {
  return (
    <Screen scroll>
      <ConfigHeader step={4} title={<>El <span className="serif-i">detalle</span> final</>} subtitle="Decoración y mensaje. Después confirmamos por WhatsApp."/>

      <div style={{ padding: "16px 22px 100px" }}>
        {/* Decoración */}
        <div className="ornament" style={{ justifyContent: "flex-start" }}>
          <span style={{ flex: "0 0 auto" }}>Decoración</span>
          <span style={{ flex: 1, borderTop: "1px solid var(--rule)", height: 0 }}/>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
          {[
            { n: "Minimalista", note: "Frosting liso + flor seca", sel: true, tone: "cream" },
            { n: "Macarons arriba", note: "+ $3.500", tone: "rose" },
            { n: "Frutas frescas", note: "Según temporada", tone: "wine" },
            { n: "Drip de chocolate", note: "+ $2.500", tone: "choc" },
          ].map(d => (
            <div key={d.n} style={{
              borderRadius: 12, overflow: "hidden",
              border: d.sel ? "1.5px solid var(--ink)" : "1px solid var(--rule-soft)",
            }}>
              <div className={"img " + (d.tone === "rose" ? "" : d.tone)} style={{ height: 80, background: d.tone === "rose" ? "linear-gradient(160deg, #F4DDD0, #E8C9B8)" : undefined }}/>
              <div style={{ padding: "8px 10px 10px", background: d.sel ? "var(--bg-soft)" : "var(--paper)" }}>
                <div className="serif" style={{ fontSize: 14, lineHeight: 1.1 }}>{d.n}</div>
                <div className="caption" style={{ fontSize: 10.5, marginTop: 2 }}>{d.note}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje */}
        <div className="ornament" style={{ marginTop: 22, justifyContent: "flex-start" }}>
          <span style={{ flex: "0 0 auto" }}>Mensaje (opcional)</span>
          <span style={{ flex: 1, borderTop: "1px solid var(--rule)", height: 0 }}/>
        </div>
        <div className="input" style={{ marginTop: 12, height: 70, padding: 14, display: "flex", alignItems: "flex-start" }}>
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 16, color: "var(--ink)" }}>
            "Feliz cumple, Mati ♡"
          </span>
        </div>
        <div className="caption" style={{ marginTop: 6, color: "var(--ink-3)" }}>
          Lo escribimos a mano con cobertura. Máx 30 caracteres.
        </div>

        {/* Resumen */}
        <div style={{ marginTop: 24, padding: 18, background: "var(--paper-2)", borderRadius: 14, border: "1px solid var(--rule-soft)" }}>
          <div className="eyebrow">— Resumen de tu torta</div>
          <div className="h3 serif" style={{ marginTop: 6 }}>Red Velvet · 16 porciones</div>

          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              ["Base", "Red Velvet"],
              ["Relleno", "Queso crema"],
              ["Cobertura", "Frosting queso crema"],
              ["Forma", "Redonda · 1 piso"],
              ["Decoración", "Minimalista"],
              ["Mensaje", "“Feliz cumple, Mati ♡”"],
              ["Entrega", "Sábado 21 · La Plata"],
            ].map(([k,v]) => (
              <div key={k} className="row" style={{ justifyContent: "space-between", fontSize: 13 }}>
                <span style={{ color: "var(--ink-3)" }}>{k}</span>
                <span style={{ color: "var(--ink)", fontWeight: 500, textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>

          <hr className="rule-soft" style={{ margin: "14px 0" }}/>
          <div className="row" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
            <div>
              <div className="caption" style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: ".1em" }}>Estimado</div>
              <div className="serif num" style={{ fontSize: 26, color: "var(--ink)", marginTop: 2 }}>$ 26.300</div>
            </div>
            <span className="caption" style={{ color: "var(--ink-3)" }}>Reserva con seña</span>
          </div>
        </div>
      </div>

      <div className="stickycta" style={{ background: "#25D366" }}>
        <div className="label col" style={{ gap: 0 }}>
          <span style={{ fontSize: 10, opacity: .85, letterSpacing: ".1em", textTransform: "uppercase" }}>Paso 4/4 · Listo</span>
          <span style={{ fontSize: 13, fontFamily: "var(--serif)" }}>Te respondo en minutos</span>
        </div>
        <button className="btn btn-sm" style={{ height: 40, padding: "0 14px", background: "#fff", color: "var(--ink)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.92.55 3.79 1.6 5.41L2 22l4.79-1.26a9.9 9.9 0 005.25 1.5c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z"/></svg>
          Enviar pedido
        </button>
      </div>
    </Screen>
  );
}

// — Calculadora de porciones para eventos
function ScreenCalculator() {
  return (
    <Screen scroll>
      <TopBar/>
      <div style={{ padding: "20px 22px 8px" }}>
        <div className="eyebrow">— Herramienta · gratis</div>
        <div className="h1 serif" style={{ marginTop: 6 }}>
          ¿Cuánto <span className="serif-i">pedir</span>?
        </div>
        <p className="caption" style={{ marginTop: 6, fontSize: 13 }}>
          Decinos cómo es el evento y te decimos qué pedir, sin sobras y sin
          quedar corta.
        </p>
      </div>

      <div style={{ padding: "16px 22px 0" }}>
        {/* Personas */}
        <div className="card" style={{ padding: 18 }}>
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div className="caption" style={{ textTransform: "uppercase", letterSpacing: ".1em", fontSize: 10.5 }}>Invitados</div>
              <div className="serif num" style={{ fontSize: 30, marginTop: 2 }}>24</div>
            </div>
            <div className="stepper" style={{ height: 44 }}>
              <button>−</button>
              <span className="v">24</span>
              <button>+</button>
            </div>
          </div>
          <input type="range" min="2" max="120" defaultValue="24" style={{ width: "100%", marginTop: 14, accentColor: "var(--wine)" }}/>
          <div className="row" style={{ justifyContent: "space-between", marginTop: 4 }}>
            <span className="caption" style={{ fontSize: 10 }}>2</span>
            <span className="caption" style={{ fontSize: 10 }}>120</span>
          </div>
        </div>

        {/* Tipo evento */}
        <div className="ornament" style={{ marginTop: 22, justifyContent: "flex-start" }}>
          <span style={{ flex: "0 0 auto" }}>Tipo de evento</span>
          <span style={{ flex: 1, borderTop: "1px solid var(--rule)", height: 0 }}/>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
          {[
            { n: "Cumpleaños", sub: "Postre + algo dulce", sel: true, e: "○" },
            { n: "Casamiento", sub: "Mesa dulce completa" },
            { n: "Té / merienda", sub: "Variedad pequeña" },
            { n: "Corporativo", sub: "Coffee break" },
          ].map(t => (
            <div key={t.n} style={{
              padding: 14, borderRadius: 12,
              border: t.sel ? "1.5px solid var(--ink)" : "1px solid var(--rule-soft)",
              background: t.sel ? "var(--bg-soft)" : "var(--paper)",
            }}>
              <div className="serif" style={{ fontSize: 15.5, lineHeight: 1.1 }}>{t.n}</div>
              <div className="caption" style={{ fontSize: 11, marginTop: 4 }}>{t.sub}</div>
            </div>
          ))}
        </div>

        {/* Tipo paladar */}
        <div className="ornament" style={{ marginTop: 22, justifyContent: "flex-start" }}>
          <span style={{ flex: "0 0 auto" }}>Apetito</span>
          <span style={{ flex: 1, borderTop: "1px solid var(--rule)", height: 0 }}/>
        </div>
        <div className="row gap-2" style={{ marginTop: 12 }}>
          {["Liviano", "Medio", "Goloso"].map((a, i) => (
            <span key={a} className="chip" style={i === 1 ? { background: "var(--wine)", color: "#fff", borderColor: "var(--wine)", flex: 1, justifyContent: "center" } : { flex: 1, justifyContent: "center" }}>{a}</span>
          ))}
        </div>
      </div>

      {/* Resultado */}
      <div style={{ background: "var(--ink)", color: "var(--paper)", padding: 22, margin: "24px 0 0", borderRadius: 0 }}>
        <div className="eyebrow" style={{ color: "var(--rose)" }}>— Tu mesa dulce sugerida</div>
        <div className="h2 serif" style={{ marginTop: 6, color: "var(--paper)" }}>
          Para 24 personas
        </div>

        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { q: "1 torta", t: "Red Velvet · 16 porc.", p: "23.800" },
            { q: "2 cajas", t: "Macarons surtidos · 12 c/u", p: "9.600" },
            { q: "1 bandeja", t: "Brownies · 9 porciones", p: "5.400" },
            { q: "1 caja", t: "Alfajores · 12 unidades", p: "8.800" },
          ].map(i => (
            <div key={i.t} className="row" style={{ justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(255,255,255,.1)", paddingBottom: 10 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: 11, color: "var(--rose)", letterSpacing: ".1em", textTransform: "uppercase" }}>{i.q}</div>
                <div className="serif" style={{ fontSize: 16, color: "var(--paper)", marginTop: 2 }}>{i.t}</div>
              </div>
              <span className="serif num" style={{ fontSize: 14, color: "var(--paper)" }}>$ {i.p}</span>
            </div>
          ))}
        </div>

        <div className="row" style={{ justifyContent: "space-between", marginTop: 16, alignItems: "baseline" }}>
          <span className="caption" style={{ color: "var(--rose)", fontSize: 11 }}>Total estimado</span>
          <span className="serif num" style={{ fontSize: 26, color: "var(--paper)" }}>$ 47.600</span>
        </div>

        <button className="btn btn-block" style={{ background: "#25D366", color: "#fff", marginTop: 16 }}>
          Pedir esta mesa por WhatsApp
        </button>
        <div className="caption" style={{ marginTop: 8, color: "rgba(255,255,255,.5)", textAlign: "center", fontSize: 11 }}>
          O ajustá las cantidades a mano →
        </div>
      </div>

      <div style={{ height: 60 }}/>
    </Screen>
  );
}

Object.assign(window, { ScreenConfig1, ScreenConfig2, ScreenConfig3, ScreenConfig4, ScreenCalculator });
