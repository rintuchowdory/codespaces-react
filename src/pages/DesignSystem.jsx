import React, { useState } from "react";
import {
  Copy, Check, Palette, Type, Square, Circle,
  ToggleLeft, ToggleRight, Bell, Star, Heart,
  ChevronDown, ChevronRight, X, Plus, Minus,
  AlertCircle, CheckCircle, Info, AlertTriangle,
  Loader, Zap, Layers, Grid
} from "lucide-react";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} style={{
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: copied ? "#34d399" : "var(--color-text-muted)",
      padding: "4px",
      borderRadius: "4px",
      display: "flex", alignItems: "center",
      transition: "color 0.2s",
    }}>
      {copied ? <Check size={12} /> : <Copy size={12} />}
    </button>
  );
}

const colorPalette = [
  { name: "Indigo", shades: [
    { shade: "50", hex: "#eef2ff" }, { shade: "100", hex: "#e0e7ff" },
    { shade: "300", hex: "#a5b4fc" }, { shade: "500", hex: "#6366f1" },
    { shade: "700", hex: "#4338ca" }, { shade: "900", hex: "#312e81" },
  ]},
  { name: "Violet", shades: [
    { shade: "50", hex: "#f5f3ff" }, { shade: "100", hex: "#ede9fe" },
    { shade: "300", hex: "#c4b5fd" }, { shade: "500", hex: "#8b5cf6" },
    { shade: "700", hex: "#6d28d9" }, { shade: "900", hex: "#4c1d95" },
  ]},
  { name: "Cyan", shades: [
    { shade: "50", hex: "#ecfeff" }, { shade: "100", hex: "#cffafe" },
    { shade: "300", hex: "#67e8f9" }, { shade: "500", hex: "#06b6d4" },
    { shade: "700", hex: "#0e7490" }, { shade: "900", hex: "#164e63" },
  ]},
  { name: "Pink", shades: [
    { shade: "50", hex: "#fdf2f8" }, { shade: "100", hex: "#fce7f3" },
    { shade: "300", hex: "#f9a8d4" }, { shade: "500", hex: "#ec4899" },
    { shade: "700", hex: "#be185d" }, { shade: "900", hex: "#831843" },
  ]},
  { name: "Emerald", shades: [
    { shade: "50", hex: "#ecfdf5" }, { shade: "100", hex: "#d1fae5" },
    { shade: "300", hex: "#6ee7b7" }, { shade: "500", hex: "#10b981" },
    { shade: "700", hex: "#047857" }, { shade: "900", hex: "#064e3b" },
  ]},
  { name: "Amber", shades: [
    { shade: "50", hex: "#fffbeb" }, { shade: "100", hex: "#fef3c7" },
    { shade: "300", hex: "#fcd34d" }, { shade: "500", hex: "#f59e0b" },
    { shade: "700", hex: "#b45309" }, { shade: "900", hex: "#78350f" },
  ]},
];

const semanticTokens = [
  { name: "--color-bg-primary", value: "#0f1117", desc: "Page background" },
  { name: "--color-bg-secondary", value: "#1a1d2e", desc: "Sidebar / header" },
  { name: "--color-bg-card", value: "#1e2235", desc: "Card surfaces" },
  { name: "--color-accent-primary", value: "#6366f1", desc: "Primary actions" },
  { name: "--color-accent-cyan", value: "#06b6d4", desc: "Info / secondary" },
  { name: "--color-accent-green", value: "#10b981", desc: "Success states" },
  { name: "--color-accent-pink", value: "#ec4899", desc: "Alerts / warnings" },
  { name: "--color-text-primary", value: "#f1f5f9", desc: "Primary text" },
  { name: "--color-text-secondary", value: "#94a3b8", desc: "Secondary text" },
  { name: "--color-border", value: "#2d3148", desc: "Default borders" },
];

const typographyScale = [
  { name: "Display", size: "48px", weight: "800", class: "text-5xl font-extrabold", sample: "The quick brown fox" },
  { name: "H1", size: "36px", weight: "700", class: "text-4xl font-bold", sample: "The quick brown fox" },
  { name: "H2", size: "28px", weight: "700", class: "text-3xl font-bold", sample: "The quick brown fox" },
  { name: "H3", size: "22px", weight: "600", class: "text-2xl font-semibold", sample: "The quick brown fox" },
  { name: "H4", size: "18px", weight: "600", class: "text-xl font-semibold", sample: "The quick brown fox" },
  { name: "Body LG", size: "16px", weight: "400", class: "text-base", sample: "The quick brown fox jumps over the lazy dog" },
  { name: "Body", size: "14px", weight: "400", class: "text-sm", sample: "The quick brown fox jumps over the lazy dog" },
  { name: "Caption", size: "12px", weight: "400", class: "text-xs", sample: "The quick brown fox jumps over the lazy dog" },
  { name: "Label", size: "11px", weight: "600", class: "text-xs font-semibold uppercase", sample: "SECTION LABEL" },
];

const spacingScale = [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64];

const shadowExamples = [
  { name: "sm", css: "0 1px 3px rgba(0,0,0,0.4)", desc: "Subtle elevation" },
  { name: "md", css: "0 4px 12px rgba(0,0,0,0.4)", desc: "Card elevation" },
  { name: "lg", css: "0 8px 24px rgba(0,0,0,0.4)", desc: "Modal elevation" },
  { name: "xl", css: "0 20px 40px rgba(0,0,0,0.5)", desc: "Overlay elevation" },
  { name: "glow-purple", css: "0 8px 25px rgba(99,102,241,0.4)", desc: "Accent glow" },
  { name: "glow-cyan", css: "0 8px 25px rgba(6,182,212,0.4)", desc: "Info glow" },
];

const borderRadii = [
  { name: "sm", value: "4px" }, { name: "md", value: "8px" },
  { name: "lg", value: "12px" }, { name: "xl", value: "16px" },
  { name: "2xl", value: "20px" }, { name: "full", value: "9999px" },
];

function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
      <div style={{
        width: "36px", height: "36px",
        borderRadius: "10px",
        background: "rgba(99,102,241,0.15)",
        border: "1px solid rgba(99,102,241,0.3)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon size={16} color="#818cf8" />
      </div>
      <div>
        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text-primary)" }}>{title}</h3>
        {subtitle && <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "1px" }}>{subtitle}</p>}
      </div>
    </div>
  );
}

export default function DesignSystem() {
  const [activeTab, setActiveTab] = useState("colors");
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [counter, setCounter] = useState(0);

  const tabs = [
    { id: "colors", label: "Colors", icon: Palette },
    { id: "typography", label: "Typography", icon: Type },
    { id: "spacing", label: "Spacing & Radius", icon: Grid },
    { id: "components", label: "Components", icon: Square },
    { id: "tokens", label: "Design Tokens", icon: Layers },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(236,72,153,0.08) 100%)",
        border: "1px solid rgba(139,92,246,0.2)",
        borderRadius: "20px",
        padding: "28px 32px",
      }}>
        <h2 style={{ fontSize: "24px", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "8px" }}>
          <span className="gradient-text-pink">Design System</span>
        </h2>
        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", maxWidth: "600px", lineHeight: 1.6 }}>
          A comprehensive collection of design tokens, components, and patterns that form the visual language of this application.
        </p>
      </div>

      {/* Tab Navigation */}
      <div style={{
        display: "flex",
        gap: "4px",
        background: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "12px",
        padding: "6px",
      }}>
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              background: activeTab === id ? "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.2))" : "transparent",
              color: activeTab === id ? "#818cf8" : "var(--color-text-secondary)",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.2s ease",
              outline: activeTab === id ? "1px solid rgba(99,102,241,0.3)" : "none",
            }}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      {/* Colors Tab */}
      {activeTab === "colors" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <SectionHeader icon={Palette} title="Color Palette" subtitle="Full spectrum of brand colors with all shades" />
          {colorPalette.map(({ name, shades }) => (
            <div key={name}>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "10px" }}>{name}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "8px" }}>
                {shades.map(({ shade, hex }) => (
                  <div key={shade} style={{
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  >
                    <div style={{ height: "52px", background: hex }} />
                    <div style={{ padding: "8px 10px" }}>
                      <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-primary)" }}>{shade}</div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "10px", color: "var(--color-text-muted)", fontFamily: "monospace" }}>{hex}</span>
                        <CopyButton text={hex} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Gradients */}
          <div>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "10px" }}>Gradients</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
              {[
                { name: "Primary", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)" },
                { name: "Cyan", gradient: "linear-gradient(135deg, #06b6d4, #6366f1)" },
                { name: "Sunset", gradient: "linear-gradient(135deg, #f59e0b, #ec4899)" },
                { name: "Forest", gradient: "linear-gradient(135deg, #10b981, #06b6d4)" },
                { name: "Aurora", gradient: "linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4)" },
                { name: "Dusk", gradient: "linear-gradient(135deg, #1a1d2e, #6366f1)" },
                { name: "Fire", gradient: "linear-gradient(135deg, #ff6a00, #ee0979)" },
                { name: "Ocean", gradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" },
              ].map(({ name, gradient }) => (
                <div key={name} style={{
                  height: "72px",
                  borderRadius: "12px",
                  background: gradient,
                  display: "flex", alignItems: "flex-end",
                  padding: "8px 12px",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  position: "relative",
                  overflow: "hidden",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                >
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "white", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Typography Tab */}
      {activeTab === "typography" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <SectionHeader icon={Type} title="Typography Scale" subtitle="Font sizes, weights, and line heights" />
          <div className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "0" }}>
            {typographyScale.map(({ name, size, weight, sample }, i) => (
              <div key={name} style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                padding: "16px 0",
                borderBottom: i < typographyScale.length - 1 ? "1px solid var(--color-border)" : "none",
              }}>
                <div style={{ width: "80px", flexShrink: 0 }}>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-primary)" }}>{name}</div>
                  <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{size} / {weight}</div>
                </div>
                <div style={{
                  fontSize: size,
                  fontWeight: weight,
                  color: "var(--color-text-primary)",
                  flex: 1,
                  lineHeight: 1.2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}>
                  {sample}
                </div>
              </div>
            ))}
          </div>

          {/* Font Families */}
          <div>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "12px" }}>Font Families</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              {[
                { name: "Inter", family: "'Inter', sans-serif", desc: "Primary UI font", sample: "Aa Bb Cc 123" },
                { name: "JetBrains Mono", family: "'JetBrains Mono', monospace", desc: "Code & data", sample: "const x = 42;" },
                { name: "Playfair Display", family: "'Playfair Display', serif", desc: "Display headings", sample: "Elegant Serif" },
              ].map(({ name, family, desc, sample }) => (
                <div key={name} className="glass-card" style={{ padding: "20px" }}>
                  <div style={{ fontSize: "32px", fontFamily: family, color: "var(--color-text-primary)", marginBottom: "8px" }}>
                    {sample}
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-primary)" }}>{name}</div>
                  <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Spacing Tab */}
      {activeTab === "spacing" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <SectionHeader icon={Grid} title="Spacing Scale" subtitle="Consistent spacing tokens based on 4px grid" />
          <div className="glass-card" style={{ padding: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {spacingScale.map(n => (
                <div key={n} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ width: "40px", fontSize: "12px", color: "var(--color-text-muted)", fontFamily: "monospace" }}>{n}</span>
                  <span style={{ width: "50px", fontSize: "12px", color: "var(--color-text-secondary)", fontFamily: "monospace" }}>{n * 4}px</span>
                  <div style={{
                    height: "20px",
                    width: `${n * 4}px`,
                    maxWidth: "400px",
                    background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                    borderRadius: "3px",
                  }} />
                </div>
              ))}
            </div>
          </div>

          {/* Border Radius */}
          <div>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "12px" }}>Border Radius</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "12px" }}>
              {borderRadii.map(({ name, value }) => (
                <div key={name} className="glass-card" style={{ padding: "16px", textAlign: "center" }}>
                  <div style={{
                    width: "48px", height: "48px",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    borderRadius: value,
                    margin: "0 auto 12px",
                  }} />
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-primary)" }}>{name}</div>
                  <div style={{ fontSize: "11px", color: "var(--color-text-muted)", fontFamily: "monospace" }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Shadows */}
          <div>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "12px" }}>Shadows</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              {shadowExamples.map(({ name, css, desc }) => (
                <div key={name} style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: css,
                }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "4px" }}>shadow-{name}</div>
                  <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Components Tab */}
      {activeTab === "components" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <SectionHeader icon={Square} title="UI Components" subtitle="Interactive component library" />

          {/* Buttons */}
          <div className="glass-card" style={{ padding: "24px" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "16px" }}>Buttons</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
              <button className="btn-primary"><Zap size={14} /> Primary</button>
              <button className="btn-secondary"><Star size={14} /> Secondary</button>
              {[
                { label: "Success", bg: "rgba(16,185,129,0.15)", color: "#34d399", border: "rgba(16,185,129,0.3)" },
                { label: "Warning", bg: "rgba(245,158,11,0.15)", color: "#fbbf24", border: "rgba(245,158,11,0.3)" },
                { label: "Danger", bg: "rgba(239,68,68,0.15)", color: "#f87171", border: "rgba(239,68,68,0.3)" },
                { label: "Info", bg: "rgba(6,182,212,0.15)", color: "#22d3ee", border: "rgba(6,182,212,0.3)" },
              ].map(({ label, bg, color, border }) => (
                <button key={label} style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: `1px solid ${border}`,
                  background: bg,
                  color,
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}>{label}</button>
              ))}
              <button style={{
                padding: "10px 20px",
                borderRadius: "10px",
                border: "1px solid var(--color-border)",
                background: "transparent",
                color: "var(--color-text-muted)",
                fontSize: "14px",
                cursor: "not-allowed",
                opacity: 0.5,
              }} disabled>Disabled</button>
            </div>
          </div>

          {/* Badges */}
          <div className="glass-card" style={{ padding: "24px" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "16px" }}>Badges & Tags</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
              <span className="badge badge-purple">Purple</span>
              <span className="badge badge-green">Success</span>
              <span className="badge badge-orange">Warning</span>
              <span className="badge badge-pink">Danger</span>
              <span className="badge badge-cyan">Info</span>
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Design System</span>
            </div>
          </div>

          {/* Alerts */}
          <div className="glass-card" style={{ padding: "24px" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "16px" }}>Alerts</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { icon: CheckCircle, color: "#10b981", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)", title: "Success", msg: "Your changes have been saved successfully." },
                { icon: Info, color: "#06b6d4", bg: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.3)", title: "Info", msg: "A new version is available. Please refresh." },
                { icon: AlertTriangle, color: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)", title: "Warning", msg: "Your session will expire in 5 minutes." },
                { icon: AlertCircle, color: "#ef4444", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.3)", title: "Error", msg: "Failed to connect to the server. Try again." },
              ].map(({ icon: Icon, color, bg, border, title, msg }) => (
                <div key={title} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  background: bg,
                  border: `1px solid ${border}`,
                }}>
                  <Icon size={16} color={color} style={{ flexShrink: 0, marginTop: "1px" }} />
                  <div>
                    <span style={{ fontSize: "13px", fontWeight: 600, color, marginRight: "8px" }}>{title}:</span>
                    <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{msg}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Toggles & Controls */}
          <div className="glass-card" style={{ padding: "24px" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "16px" }}>Controls</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center" }}>
              {/* Toggle */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button onClick={() => setToggle1(!toggle1)} style={{
                  width: "44px", height: "24px",
                  borderRadius: "12px",
                  background: toggle1 ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "var(--color-border)",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  transition: "all 0.3s ease",
                }}>
                  <div style={{
                    width: "18px", height: "18px",
                    borderRadius: "50%",
                    background: "white",
                    position: "absolute",
                    top: "3px",
                    left: toggle1 ? "23px" : "3px",
                    transition: "left 0.3s ease",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                  }} />
                </button>
                <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>Notifications {toggle1 ? "on" : "off"}</span>
              </div>

              {/* Counter */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button onClick={() => setCounter(c => c - 1)} style={{
                  width: "32px", height: "32px",
                  borderRadius: "8px",
                  background: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Minus size={14} />
                </button>
                <span style={{
                  width: "48px",
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                }}>{counter}</span>
                <button onClick={() => setCounter(c => c + 1)} style={{
                  width: "32px", height: "32px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Plus size={14} />
                </button>
              </div>

              {/* Input */}
              <input
                placeholder="Type something..."
                style={{
                  background: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "10px",
                  padding: "8px 14px",
                  color: "var(--color-text-primary)",
                  fontSize: "13px",
                  outline: "none",
                  width: "200px",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.5)"}
                onBlur={e => e.target.style.borderColor = "var(--color-border)"}
              />

              {/* Select */}
              <div style={{ position: "relative" }}>
                <select style={{
                  background: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "10px",
                  padding: "8px 36px 8px 14px",
                  color: "var(--color-text-primary)",
                  fontSize: "13px",
                  outline: "none",
                  cursor: "pointer",
                  appearance: "none",
                }}>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <ChevronDown size={14} color="var(--color-text-muted)" style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
              </div>
            </div>
          </div>

          {/* Loading States */}
          <div className="glass-card" style={{ padding: "24px" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: "16px" }}>Loading States</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
              {/* Spinner */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{
                  width: "20px", height: "20px",
                  borderRadius: "50%",
                  border: "2px solid rgba(99,102,241,0.2)",
                  borderTopColor: "#6366f1",
                  animation: "spin 0.8s linear infinite",
                }} />
                <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>Loading...</span>
              </div>

              {/* Skeleton */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "200px" }}>
                {[100, 80, 60].map(w => (
                  <div key={w} style={{
                    height: "12px",
                    borderRadius: "6px",
                    width: `${w}%`,
                    background: "linear-gradient(90deg, var(--color-border) 25%, rgba(99,102,241,0.1) 50%, var(--color-border) 75%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 1.5s infinite",
                  }} />
                ))}
              </div>

              {/* Progress */}
              <div style={{ width: "200px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>Uploading...</span>
                  <span style={{ fontSize: "12px", color: "#818cf8" }}>72%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "72%", background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Design Tokens Tab */}
      {activeTab === "tokens" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <SectionHeader icon={Layers} title="Design Tokens" subtitle="CSS custom properties for consistent theming" />
          <div className="glass-card" style={{ padding: "0", overflow: "hidden" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 2fr",
              padding: "12px 20px",
              background: "var(--color-bg-secondary)",
              borderBottom: "1px solid var(--color-border)",
            }}>
              {["Token", "Value", "Description"].map(h => (
                <span key={h} style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>{h}</span>
              ))}
            </div>
            {semanticTokens.map(({ name, value, desc }, i) => (
              <div key={name} style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 2fr",
                padding: "14px 20px",
                borderBottom: i < semanticTokens.length - 1 ? "1px solid var(--color-border)" : "none",
                alignItems: "center",
                transition: "background 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(99,102,241,0.05)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <code style={{ fontSize: "12px", color: "#a5b4fc", fontFamily: "monospace" }}>{name}</code>
                  <CopyButton text={`var(${name})`} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "16px", height: "16px", borderRadius: "4px", background: value, border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }} />
                  <code style={{ fontSize: "11px", color: "var(--color-text-muted)", fontFamily: "monospace" }}>{value}</code>
                </div>
                <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
