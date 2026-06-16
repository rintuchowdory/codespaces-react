import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Briefcase, Palette, BarChart3, Code2,
  Settings, ChevronLeft, ChevronRight, Globe, MessageCircle,
  GitBranch, Sparkles, User, Bell, Search, Moon
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Briefcase, label: "Portfolio", path: "/portfolio" },
  { icon: Palette, label: "Design System", path: "/design" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Code2, label: "Tech Stack", path: "/techstack" },
];

export default function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();

  return (
    <aside
      style={{
        width: collapsed ? "72px" : "240px",
        minWidth: collapsed ? "72px" : "240px",
        background: "var(--color-bg-secondary)",
        borderRight: "1px solid var(--color-border)",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.3s ease, min-width 0.3s ease",
        position: "relative",
        zIndex: 10,
        overflow: "hidden",
      }}
    >
      {/* Logo */}
      <div style={{
        padding: collapsed ? "20px 0" : "20px 20px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        borderBottom: "1px solid var(--color-border)",
        justifyContent: collapsed ? "center" : "flex-start",
      }}>
        <div style={{
          width: "36px", height: "36px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          boxShadow: "0 4px 12px rgba(99,102,241,0.4)",
        }}>
          <Sparkles size={18} color="white" />
        </div>
        {!collapsed && (
          <div>
            <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text-primary)", lineHeight: 1.2 }}>
              DevFolio
            </div>
            <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>Pro Dashboard</div>
          </div>
        )}
      </div>

      {/* User Profile */}
      {!collapsed && (
        <div style={{
          padding: "16px 20px",
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}>
          <div style={{
            width: "38px", height: "38px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #06b6d4, #6366f1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            border: "2px solid rgba(99,102,241,0.4)",
          }}>
            <User size={16} color="white" />
          </div>
          <div style={{ overflow: "hidden" }}>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>
              Rintu Chowdory
            </div>
            <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>Full Stack Developer</div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav style={{ flex: 1, padding: collapsed ? "12px 8px" : "12px 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
        {!collapsed && (
          <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--color-text-muted)", letterSpacing: "1px", textTransform: "uppercase", padding: "8px 4px 4px" }}>
            Navigation
          </div>
        )}
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <NavLink
              key={path}
              to={path}
              className={`nav-link ${isActive ? "active" : ""}`}
              style={{
                justifyContent: collapsed ? "center" : "flex-start",
                padding: collapsed ? "12px" : "10px 16px",
                position: "relative",
              }}
              title={collapsed ? label : undefined}
            >
              <Icon size={18} style={{ flexShrink: 0 }} />
              {!collapsed && <span>{label}</span>}
              {isActive && !collapsed && (
                <div style={{
                  marginLeft: "auto",
                  width: "6px", height: "6px",
                  borderRadius: "50%",
                  background: "#818cf8",
                }} />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Social Links */}
      {!collapsed && (
        <div style={{
          padding: "12px 20px",
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          gap: "8px",
        }}>
          {[
            { icon: GitBranch, href: "https://github.com/rintuchowdory" },
            { icon: MessageCircle, href: "#" },
            { icon: Globe, href: "#" },
          ].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              style={{
                width: "32px", height: "32px",
                borderRadius: "8px",
                background: "rgba(99,102,241,0.1)",
                border: "1px solid var(--color-border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--color-text-secondary)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.2)"; e.currentTarget.style.color = "#818cf8"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(99,102,241,0.1)"; e.currentTarget.style.color = "var(--color-text-secondary)"; }}
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      )}

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        style={{
          position: "absolute",
          top: "22px",
          right: "-12px",
          width: "24px", height: "24px",
          borderRadius: "50%",
          background: "var(--color-bg-card)",
          border: "1px solid var(--color-border)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          color: "var(--color-text-secondary)",
          transition: "all 0.2s ease",
          zIndex: 20,
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "var(--color-accent-primary)"; e.currentTarget.style.color = "white"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "var(--color-bg-card)"; e.currentTarget.style.color = "var(--color-text-secondary)"; }}
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </aside>
  );
}
