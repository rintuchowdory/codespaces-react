import React, { useState } from "react";
import { Bell, Search, Moon, Sun, Settings, ChevronDown } from "lucide-react";

export default function Topbar({ title, subtitle }) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header style={{
      height: "64px",
      background: "var(--color-bg-secondary)",
      borderBottom: "1px solid var(--color-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 28px",
      flexShrink: 0,
      position: "sticky",
      top: 0,
      zIndex: 5,
    }}>
      {/* Left: Page Title */}
      <div>
        <h1 style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text-primary)", lineHeight: 1.2 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "1px" }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Right: Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Search */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: searchFocused ? "rgba(99,102,241,0.1)" : "var(--color-bg-card)",
          border: `1px solid ${searchFocused ? "rgba(99,102,241,0.5)" : "var(--color-border)"}`,
          borderRadius: "10px",
          padding: "7px 14px",
          transition: "all 0.2s ease",
          width: searchFocused ? "220px" : "180px",
        }}>
          <Search size={14} color="var(--color-text-muted)" />
          <input
            placeholder="Search..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--color-text-primary)",
              fontSize: "13px",
              width: "100%",
            }}
          />
        </div>

        {/* Notification Bell */}
        <button style={{
          width: "38px", height: "38px",
          borderRadius: "10px",
          background: "var(--color-bg-card)",
          border: "1px solid var(--color-border)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          color: "var(--color-text-secondary)",
          position: "relative",
          transition: "all 0.2s ease",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; e.currentTarget.style.color = "#818cf8"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-text-secondary)"; }}
        >
          <Bell size={16} />
          <span style={{
            position: "absolute",
            top: "8px", right: "8px",
            width: "7px", height: "7px",
            borderRadius: "50%",
            background: "#ec4899",
            border: "1.5px solid var(--color-bg-secondary)",
          }} />
        </button>

        {/* Settings */}
        <button style={{
          width: "38px", height: "38px",
          borderRadius: "10px",
          background: "var(--color-bg-card)",
          border: "1px solid var(--color-border)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          color: "var(--color-text-secondary)",
          transition: "all 0.2s ease",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; e.currentTarget.style.color = "#818cf8"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-text-secondary)"; }}
        >
          <Settings size={16} />
        </button>

        {/* Avatar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          padding: "4px 10px 4px 4px",
          borderRadius: "10px",
          border: "1px solid var(--color-border)",
          background: "var(--color-bg-card)",
          transition: "all 0.2s ease",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; }}
        >
          <div style={{
            width: "28px", height: "28px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #06b6d4, #6366f1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "12px", fontWeight: 700, color: "white",
          }}>
            RC
          </div>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-primary)" }}>Rintu</span>
          <ChevronDown size={12} color="var(--color-text-muted)" />
        </div>
      </div>
    </header>
  );
}
