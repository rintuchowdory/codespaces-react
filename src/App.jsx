import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import DesignSystem from "./pages/DesignSystem";
import Analytics from "./pages/Analytics";
import TechStack from "./pages/TechStack";

const pageConfig = {
  "/": { title: "Dashboard", subtitle: "Welcome back, Rintu — here's your overview" },
  "/portfolio": { title: "Portfolio", subtitle: "Showcasing projects and creative work" },
  "/design": { title: "Design System", subtitle: "UI components, tokens, and patterns" },
  "/analytics": { title: "Analytics", subtitle: "Data visualizations and insights" },
  "/techstack": { title: "Tech Stack", subtitle: "Technologies, tools, and expertise" },
};

function Layout({ children, path }) {
  const [collapsed, setCollapsed] = useState(false);
  const config = pageConfig[path] || { title: "Page", subtitle: "" };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "var(--color-bg-primary)" }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Topbar title={config.title} subtitle={config.subtitle} />
        <main style={{
          flex: 1,
          overflowY: "auto",
          padding: "28px",
          background: "var(--color-bg-primary)",
        }}>
          {children}
        </main>
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout path="/"><Dashboard /></Layout>} />
      <Route path="/portfolio" element={<Layout path="/portfolio"><Portfolio /></Layout>} />
      <Route path="/design" element={<Layout path="/design"><DesignSystem /></Layout>} />
      <Route path="/analytics" element={<Layout path="/analytics"><Analytics /></Layout>} />
      <Route path="/techstack" element={<Layout path="/techstack"><TechStack /></Layout>} />
    </Routes>
  );
}

export default function App() {
  return (
    <HashRouter basename="/codespaces-react">
      <AppRoutes />
    </HashRouter>
  );
}
