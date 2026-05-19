// Pantallas: Cómo pedir, Nuestra historia, Testimonios, FAQ, Footer/CTA final

function ScreenHowTo() {
  const steps = [
    { n: "01", t: "Elegí", s: "Mirá el catálogo y decidí qué te llevás. Si querés algo personalizado, contame el detalle." },
    { n: "02", t: "Escribime", s: "Por WhatsApp o Instagram. Coordinamos sabor, fecha y entrega — siempre te respondo yo." },
    { n: "03", t: "Reservá", s: "Confirmás con una seña del 50%. Mínimo 48 hs de anticipación, eventos con más tiempo." },
    { n: "04", t: "Retirás", s: "Te aviso cuando esté listo. Retiro en La Plata o envío con cadetería al barrio." },
  ];
  return (
    <Screen scroll>
      <TopBar/>
      <div style={{ padding: "20px 22px 0" }}>
        <div className="eyebrow">— 02 · El proceso</div>
        <div className="h1 serif" style={{ marginTop: 6 }}>
          ¿Cómo <span className="serif-i">pedir</span>?
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 8 }}>
          Trabajamos sólo por encargo, así horneamos cada pieza el día anterior
          a la entrega.
        </p>
      </div>

      <div style={{ padding: "24px 22px 0", display: "flex", flexDirection: "column", gap: 0 }}>
        {steps.map((s, i) => (
          <div key={s.n} style={{ display: "flex", gap: 18, paddingBottom: 22 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 999,
                background: i === 0 ? "var(--wine)" : "var(--paper-2)",
                border: i === 0 ? "none" : "1px solid var(--rule)",
                color: i === 0 ? "#fff" : "var(--ink)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 18,
              }}>{s.n}</div>
              {i < steps.length - 1 && <div style={{ flex: 1, width: 1, background: "var(--rule)", marginTop: 4 }}/>}
            </div>
            <div style={{ flex: 1, paddingTop: 6 }}>
              <div className="h3 serif">{s.t}</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 6 }}>{s.s}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Notas tipo postit */}
      <div style={{ padding: "0 22px 24px" }}>
        <div className="ornament">Bueno saber</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 14 }}>
          {[
            { i: "⏱", t: "Pedidos con 48hs mínimo · eventos con 1 semana" },
            { i: "🤍", t: "Seña del 50% para reservar la fecha" },
            { i: "🚲", t: "Envío con cadetería (a tu cargo) o retiro en zona" },
            { i: "💳", t: "Transferencia, efectivo o Mercado Pago" },
          ].map((n, i) => (
            <div key={i} className="row gap-3" style={{ padding: "12px 14px", background: i === 0 ? "var(--bg-soft)" : "var(--paper-2)", borderRadius: 10, fontSize: 13 }}>
              <span style={{ fontSize: 16, opacity: .7 }}>{n.i}</span>
              <span style={{ color: "var(--ink-2)" }}>{n.t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA WP */}
      <div style={{ padding: "0 22px 32px" }}>
        <button className="btn btn-wine btn-block">
          Empezar mi pedido por WhatsApp
        </button>
      </div>
    </Screen>
  );
}

function ScreenAbout() {
  return (
    <Screen scroll dark>
      <TopBar dark/>
      <div style={{ padding: "20px 22px 0" }}>
        <div className="eyebrow" style={{ color: "var(--rose)" }}>— 03 · La historia</div>
        <div className="display" style={{ marginTop: 10, color: "var(--paper)" }}>
          Una receta <span className="serif-i" style={{ color: "var(--rose)" }}>de familia</span>, hecha en casa.
        </div>
      </div>

      <div className="img wine" style={{ height: 320, margin: "20px 22px", borderRadius: 4, position: "relative" }}>
        <span className="img-label">felicitas-cocina.jpg</span>
      </div>

      <div style={{ padding: "0 22px 30px" }}>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,.8)" }}>
          Empecé horneando para los míos. Hoy <strong style={{ color: "var(--paper)" }}>Feli Recetas</strong> sigue
          siendo eso — una cocina chica, todos los productos hechos a mano, con
          tiempo y con ingredientes que elijo uno por uno.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,.8)", marginTop: 14 }}>
          Nada se produce de antemano. Cada pedido se hornea sólo para vos.
        </p>

        {/* Firma */}
        <div className="row gap-3" style={{ marginTop: 26, alignItems: "center" }}>
          <div style={{
            width: 56, height: 56, borderRadius: 999,
            background: "var(--rose)", color: "var(--wine-deep)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 26,
          }}>F</div>
          <div>
            <div className="serif" style={{ fontSize: 18, color: "var(--paper)" }}>Felicitas</div>
            <div className="caption" style={{ color: "var(--rose)" }}>Pastelera · fundadora</div>
          </div>
        </div>

        {/* Stats sobre fondo oscuro */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 30, borderTop: "1px solid rgba(255,255,255,.12)", paddingTop: 22 }}>
          {[
            { n: "06+", t: "años horneando" },
            { n: "500+", t: "clientes felices" },
            { n: "100%", t: "artesanal" },
          ].map(s => (
            <div key={s.t}>
              <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 26, color: "var(--rose)", lineHeight: 1 }}>{s.n}</div>
              <div className="caption" style={{ marginTop: 6, color: "rgba(255,255,255,.55)", fontSize: 11 }}>{s.t}</div>
            </div>
          ))}
        </div>

        {/* Valores */}
        <div className="ornament" style={{ marginTop: 32, color: "rgba(255,255,255,.5)" }}>
          <span style={{ background: "var(--ink)", padding: "0 8px", color: "var(--rose)" }}>Cómo trabajamos</span>
        </div>
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            "Ingredientes elegidos uno por uno, no compramos al por mayor",
            "Cero polvos, cero atajos, todo a la cuchara",
            "Recetas propias, ninguna copiada de YouTube",
          ].map((v,i) => (
            <div key={i} className="row gap-3" style={{ alignItems: "flex-start" }}>
              <span style={{ color: "var(--rose)", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 18, lineHeight: 1 }}>—</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,.85)", lineHeight: 1.5 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

function ScreenReviews() {
  const reviews = [
    { name: "Sol Martínez", date: "Junio 2026", t: "Pedimos una Red Velvet para el cumple de mi vieja. Llegó impecable, con una atención divina de Feli. Todos preguntaban quién la había hecho.", rating: 5, photo: "wine" },
    { name: "Mati Pérez", date: "Mayo 2026", t: "Los macarons mejor logrados que probé fuera de París. Crocantitos por fuera, blanditos por dentro. Vuelvo a pedir seguro.", rating: 5, photo: "rose" },
    { name: "Caro Bianchi", date: "Mayo 2026", t: "Mesa dulce para 30 personas, todo coordinado con la paleta del casamiento. Tranquilísima de principio a fin.", rating: 5, photo: "gold" },
  ];
  return (
    <Screen scroll>
      <TopBar/>
      <div style={{ padding: "20px 22px 0" }}>
        <div className="eyebrow">— 04 · Clientes</div>
        <div className="h1 serif" style={{ marginTop: 6 }}>
          Lo que <span className="serif-i">nos cuentan</span>
        </div>
        <div className="row gap-3" style={{ marginTop: 14, alignItems: "baseline" }}>
          <div className="serif num" style={{ fontSize: 38, color: "var(--wine)", lineHeight: 1 }}>4.9</div>
          <div>
            <div style={{ display: "flex", gap: 2, color: "var(--gold)", fontSize: 16 }}>★★★★★</div>
            <div className="caption" style={{ fontSize: 11, marginTop: 2 }}>Sobre 137 pedidos · Instagram + Google</div>
          </div>
        </div>
      </div>

      {/* Quote destacada */}
      <div style={{ margin: "22px 22px 0", padding: "22px 22px 24px", background: "var(--rose-soft)", borderRadius: 14, position: "relative" }}>
        <span style={{ position: "absolute", top: 6, left: 14, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 64, color: "var(--wine)", opacity: .25, lineHeight: 1 }}>"</span>
        <p style={{ fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.25, color: "var(--ink)", margin: 0, position: "relative" }}>
          La <span className="serif-i" style={{ color: "var(--wine)" }}>mejor</span> torta que comí en mi vida. Y la atención, mejor todavía.
        </p>
        <div className="row gap-3" style={{ marginTop: 18 }}>
          <div className="img cream" style={{ width: 36, height: 36, borderRadius: 999 }}/>
          <div>
            <div className="caption" style={{ color: "var(--ink)", fontWeight: 600, fontSize: 12 }}>Lucía Romano</div>
            <div className="caption" style={{ fontSize: 11 }}>Cumple de su mamá · Junio 2026</div>
          </div>
        </div>
      </div>

      {/* Lista de reviews */}
      <div style={{ padding: "20px 22px 0", display: "flex", flexDirection: "column", gap: 16 }}>
        {reviews.map((r, i) => (
          <div key={i} style={{ paddingBottom: 16, borderBottom: i < reviews.length - 1 ? "1px solid var(--rule-soft)" : "none" }}>
            <div className="row gap-3">
              <div className={"img " + r.photo} style={{ width: 36, height: 36, borderRadius: 999, flexShrink: 0 }}/>
              <div style={{ flex: 1 }}>
                <div className="row" style={{ justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 600, fontSize: 13.5 }}>{r.name}</span>
                  <span style={{ color: "var(--gold)", fontSize: 12 }}>{"★".repeat(r.rating)}</span>
                </div>
                <div className="caption" style={{ fontSize: 11 }}>{r.date}</div>
              </div>
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 10 }}>{r.t}</p>
          </div>
        ))}
      </div>

      {/* Galería instagram */}
      <div style={{ padding: "20px 22px 0" }}>
        <div className="ornament">@felirecetas</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginTop: 14 }}>
          {["cream", "wine", "gold", "rose-soft", "choc", "sage"].map((tone, i) => (
            <div key={i} className={"img " + (tone === "rose-soft" ? "" : tone)} style={{ aspectRatio: "1", borderRadius: 4, background: tone === "rose-soft" ? "linear-gradient(160deg, #F4DDD0, #E8C9B8)" : undefined }}/>
          ))}
        </div>
      </div>

      <div style={{ padding: "22px 22px 30px" }}>
        <button className="btn btn-ghost btn-block">Ver todas en Instagram →</button>
      </div>
    </Screen>
  );
}

function ScreenFAQ() {
  const faqs = [
    { q: "¿Con cuánta anticipación tengo que pedir?", a: "Mínimo 48 hs para piezas del catálogo. Para tortas personalizadas y eventos, una semana ideal — así te dedico el tiempo que tu pedido necesita.", open: true },
    { q: "¿Hacen envíos?" },
    { q: "¿Cómo es el pago y la seña?" },
    { q: "¿Tienen opciones sin gluten o veganas?" },
    { q: "¿Puedo cancelar o modificar mi pedido?" },
    { q: "¿Cuánto duran los productos?" },
  ];
  return (
    <Screen scroll>
      <TopBar/>
      <div style={{ padding: "20px 22px 0" }}>
        <div className="eyebrow">— 05 · Dudas</div>
        <div className="h1 serif" style={{ marginTop: 6 }}>
          Preguntas <span className="serif-i">frecuentes</span>
        </div>
      </div>

      <div style={{ padding: "20px 22px 0", display: "flex", flexDirection: "column" }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: "1px solid var(--rule-soft)" }}>
            <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-start", padding: "16px 0", gap: 14 }}>
              <span style={{ fontFamily: "var(--serif)", fontSize: 16.5, lineHeight: 1.3, color: "var(--ink)", flex: 1 }}>{f.q}</span>
              <div style={{
                width: 24, height: 24, borderRadius: 999,
                background: f.open ? "var(--ink)" : "transparent",
                color: f.open ? "#fff" : "var(--ink)",
                border: f.open ? "none" : "1px solid var(--rule)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, flexShrink: 0, marginTop: 2,
              }}>{f.open ? "−" : "+"}</div>
            </div>
            {f.open && (
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--ink-2)", paddingBottom: 18, margin: 0 }}>
                {f.a}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Box ayuda */}
      <div style={{ margin: "26px 22px 30px", padding: 22, background: "var(--bg-soft)", borderRadius: 14, textAlign: "center" }}>
        <div className="h3 serif">¿No encontraste tu respuesta?</div>
        <p className="caption" style={{ marginTop: 6, fontSize: 13 }}>Escribime y te contesto yo, en serio.</p>
        <div className="row gap-2" style={{ marginTop: 14, justifyContent: "center" }}>
          <button className="btn btn-wine btn-sm">WhatsApp</button>
          <button className="btn btn-ghost btn-sm">Instagram DM</button>
        </div>
      </div>
    </Screen>
  );
}

function ScreenFooter() {
  return (
    <Screen scroll>
      {/* CTA grande */}
      <div style={{ background: "var(--wine)", color: "#fff", padding: "60px 22px 50px", position: "relative", overflow: "hidden" }}>
        <span style={{ position: "absolute", right: -50, top: -30, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 220, color: "rgba(255,255,255,.05)", lineHeight: 1 }}>R</span>
        <div className="eyebrow" style={{ color: "var(--rose)" }}>— Listo para pedir</div>
        <div className="display" style={{ marginTop: 12, color: "#fff" }}>
          ¿Hacemos <span className="serif-i" style={{ color: "var(--rose)" }}>esa</span> torta?
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.55, marginTop: 14, color: "rgba(255,255,255,.85)" }}>
          Escribime contándome qué celebrás. Te respondo siempre yo, no es un
          bot, y te ayudo a armar el pedido perfecto.
        </p>

        <div className="col gap-3" style={{ marginTop: 26 }}>
          <button className="btn btn-block" style={{ background: "#25D366", color: "#fff" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.92.55 3.79 1.6 5.41L2 22l4.79-1.26a9.9 9.9 0 005.25 1.5c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z"/></svg>
            Empezar por WhatsApp
          </button>
          <button className="btn btn-ghost btn-block" style={{ color: "#fff", borderColor: "rgba(255,255,255,.4)" }}>
            Personalizar una torta →
          </button>
        </div>
      </div>

      {/* Footer info */}
      <div style={{ padding: "30px 22px", background: "var(--ink)", color: "rgba(255,255,255,.7)" }}>
        <div className="logo" style={{ fontFamily: "var(--serif)", fontSize: 24, color: "#fff" }}>
          Feli <em style={{ color: "var(--rose)" }}>Recetas</em>
        </div>
        <p className="caption" style={{ marginTop: 8, color: "rgba(255,255,255,.5)" }}>
          Pastelería artesanal en La Plata. Desde 2019.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 28 }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--rose)" }}>Carta</div>
            <div className="col gap-2" style={{ marginTop: 10, fontSize: 13 }}>
              <span>Catálogo</span>
              <span>Personalizar</span>
              <span>Calculadora</span>
              <span>Galería</span>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "var(--rose)" }}>Marca</div>
            <div className="col gap-2" style={{ marginTop: 10, fontSize: 13 }}>
              <span>Nosotros</span>
              <span>Cómo pedir</span>
              <span>FAQ</span>
              <span>Eventos</span>
            </div>
          </div>
        </div>

        <hr className="rule" style={{ margin: "26px 0", borderColor: "rgba(255,255,255,.1)" }}/>

        <div className="col gap-2" style={{ fontSize: 13 }}>
          <div className="row gap-3" style={{ alignItems: "center" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="7" cy="5.5" r="2"/><path d="M7 11.5C5 9.5 3 7.5 3 5.5a4 4 0 018 0c0 2-2 4-4 6z"/></svg>
            <span>La Plata · Buenos Aires, AR</span>
          </div>
          <div className="row gap-3" style={{ alignItems: "center" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2.5" y="3" width="9" height="8" rx="1.5"/><circle cx="7" cy="7" r="2"/><circle cx="9.5" cy="4.5" r=".5" fill="currentColor"/></svg>
            <span>@felirecetas</span>
          </div>
          <div className="row gap-3" style={{ alignItems: "center" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 1.5a5.5 5.5 0 00-4.6 8.5L1.5 13l3.1-.9A5.5 5.5 0 107 1.5z"/></svg>
            <span>+54 9 221 602 3377</span>
          </div>
        </div>

        <p className="caption" style={{ marginTop: 26, color: "rgba(255,255,255,.35)", fontSize: 10.5 }}>
          © 2026 Feli Recetas · Hecho con tiempo en La Plata
        </p>
      </div>
    </Screen>
  );
}

Object.assign(window, { ScreenHowTo, ScreenAbout, ScreenReviews, ScreenFAQ, ScreenFooter });
