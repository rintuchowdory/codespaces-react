import React, { useState } from "react";
import {
  ExternalLink, GitBranch, Star, GitFork, Eye, Filter,
  Layers, Globe, Smartphone, Server, Database, Cpu,
  ArrowUpRight, Play, Code2, Package
} from "lucide-react";

const categories = ["All", "Web App", "Mobile", "API", "Open Source", "Design"];

const projects = [
  {
    id: 1,
    title: "DevFolio Dashboard",
    description: "A professional developer portfolio dashboard built with React, Recharts, and Framer Motion. Features real-time analytics, project showcase, and design system.",
    category: "Web App",
    tags: ["React", "TypeScript", "Recharts", "Tailwind"],
    stars: 128,
    forks: 34,
    views: 2840,
    status: "Live",
    statusColor: "#10b981",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    icon: Layers,
    link: "#",
    github: "https://github.com/rintuchowdory/codespaces-react",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Next.js, Stripe payments, inventory management, and real-time order tracking.",
    category: "Web App",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    stars: 89,
    forks: 21,
    views: 1560,
    status: "Live",
    statusColor: "#10b981",
    gradient: "linear-gradient(135deg, #06b6d4, #6366f1)",
    icon: Globe,
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Task Manager App",
    description: "Cross-platform mobile task manager with offline sync, push notifications, and team collaboration features.",
    category: "Mobile",
    tags: ["React Native", "Expo", "Firebase", "Redux"],
    stars: 67,
    forks: 15,
    views: 980,
    status: "Beta",
    statusColor: "#f59e0b",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
    icon: Smartphone,
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "REST API Framework",
    description: "High-performance Node.js REST API with JWT auth, rate limiting, caching, and auto-generated Swagger docs.",
    category: "API",
    tags: ["Node.js", "Express", "MongoDB", "Redis"],
    stars: 203,
    forks: 58,
    views: 4200,
    status: "Stable",
    statusColor: "#6366f1",
    gradient: "linear-gradient(135deg, #f59e0b, #ec4899)",
    icon: Server,
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 5,
    title: "UI Component Library",
    description: "Open-source React component library with 50+ accessible components, dark mode support, and comprehensive Storybook documentation.",
    category: "Open Source",
    tags: ["React", "Storybook", "Radix UI", "CSS-in-JS"],
    stars: 445,
    forks: 92,
    views: 8900,
    status: "Active",
    statusColor: "#10b981",
    gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    icon: Package,
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Data Pipeline Tool",
    description: "Python-based ETL pipeline with visual workflow builder, scheduling, and support for 30+ data source connectors.",
    category: "API",
    tags: ["Python", "FastAPI", "Celery", "PostgreSQL"],
    stars: 156,
    forks: 43,
    views: 3100,
    status: "Live",
    statusColor: "#10b981",
    gradient: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
    icon: Database,
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Design System Kit",
    description: "Figma design system with 200+ components, design tokens, and developer handoff documentation for enterprise teams.",
    category: "Design",
    tags: ["Figma", "Design Tokens", "Storybook", "Zeroheight"],
    stars: 312,
    forks: 78,
    views: 6700,
    status: "Active",
    statusColor: "#10b981",
    gradient: "linear-gradient(135deg, #f59e0b, #6366f1)",
    icon: Cpu,
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 8,
    title: "AI Chat Interface",
    description: "Modern chat UI for AI assistants with streaming responses, code highlighting, conversation history, and multi-model support.",
    category: "Web App",
    tags: ["React", "OpenAI", "WebSockets", "Tailwind"],
    stars: 278,
    forks: 64,
    views: 5400,
    status: "Live",
    statusColor: "#10b981",
    gradient: "linear-gradient(135deg, #06b6d4, #10b981)",
    icon: Code2,
    link: "#",
    github: "#",
    featured: false,
  },
];

function ProjectCard({ project, featured }) {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--color-bg-card)",
        border: `1px solid ${hovered ? "rgba(99,102,241,0.4)" : "var(--color-border)"}`,
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.4)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Card Header with gradient */}
      <div style={{
        height: "120px",
        background: project.gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: "-20px", right: "-20px",
          width: "100px", height: "100px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
        }} />
        <div style={{
          position: "absolute", bottom: "-30px", left: "20px",
          width: "80px", height: "80px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.07)",
        }} />
        <div style={{
          width: "52px", height: "52px",
          borderRadius: "14px",
          background: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(10px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "1px solid rgba(255,255,255,0.3)",
        }}>
          <Icon size={24} color="white" />
        </div>
        {featured && (
          <div style={{
            position: "absolute", top: "12px", left: "12px",
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "6px",
            padding: "3px 8px",
            fontSize: "10px",
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}>
            ⭐ Featured
          </div>
        )}
        <div style={{
          position: "absolute", top: "12px", right: "12px",
          background: `${project.statusColor}30`,
          border: `1px solid ${project.statusColor}60`,
          borderRadius: "6px",
          padding: "3px 8px",
          fontSize: "10px",
          fontWeight: 700,
          color: project.statusColor,
        }}>
          {project.status}
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text-primary)" }}>
            {project.title}
          </h3>
          <span style={{ fontSize: "11px", color: "var(--color-text-muted)", background: "var(--color-bg-secondary)", padding: "2px 8px", borderRadius: "4px" }}>
            {project.category}
          </span>
        </div>

        <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "14px", flex: 1 }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
          {project.tags.map(tag => (
            <span key={tag} className="tag" style={{ fontSize: "11px", padding: "3px 8px" }}>{tag}</span>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: "flex",
          gap: "16px",
          paddingTop: "14px",
          borderTop: "1px solid var(--color-border)",
          marginBottom: "14px",
        }}>
          {[
            { icon: Star, value: project.stars, color: "#f59e0b" },
            { icon: GitFork, value: project.forks, color: "#6366f1" },
            { icon: Eye, value: project.views, color: "#06b6d4" },
          ].map(({ icon: StatIcon, value, color }) => (
            <div key={color} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <StatIcon size={12} color={color} />
              <span style={{ fontSize: "12px", color: "var(--color-text-secondary)", fontWeight: 600 }}>
                {value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value}
              </span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "8px" }}>
          <a href={project.link} className="btn-primary" style={{ flex: 1, justifyContent: "center", fontSize: "12px", padding: "8px 12px" }}>
            <Play size={12} /> Live Demo
          </a>
          <a href={project.github} className="btn-secondary" style={{ padding: "8px 12px" }}>
            <GitBranch size={14} />
          </a>
          <a href={project.link} className="btn-secondary" style={{ padding: "8px 12px" }}>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const featured = filtered.filter(p => p.featured);
  const regular = filtered.filter(p => !p.featured);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(6,182,212,0.08) 100%)",
        border: "1px solid rgba(99,102,241,0.2)",
        borderRadius: "20px",
        padding: "28px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "8px" }}>
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>
            {projects.length} projects · {projects.reduce((a, p) => a + p.stars, 0).toLocaleString()} total stars · {projects.reduce((a, p) => a + p.views, 0).toLocaleString()} total views
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button className="btn-primary"><GitBranch size={14} /> GitHub Profile</button>
          <button className="btn-secondary"><ArrowUpRight size={14} /> Resume</button>
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "7px 16px",
                borderRadius: "8px",
                border: `1px solid ${activeCategory === cat ? "rgba(99,102,241,0.5)" : "var(--color-border)"}`,
                background: activeCategory === cat ? "rgba(99,102,241,0.15)" : "var(--color-bg-card)",
                color: activeCategory === cat ? "#818cf8" : "var(--color-text-secondary)",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "var(--color-bg-card)",
          border: "1px solid var(--color-border)",
          borderRadius: "10px",
          padding: "8px 14px",
        }}>
          <Filter size={14} color="var(--color-text-muted)" />
          <input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--color-text-primary)",
              fontSize: "13px",
              width: "180px",
            }}
          />
        </div>
      </div>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <div>
          <div style={{ marginBottom: "16px" }}>
            <h3 className="section-title">Featured Projects</h3>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>Highlighted work and key achievements</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {featured.map(p => <ProjectCard key={p.id} project={p} featured={true} />)}
          </div>
        </div>
      )}

      {/* All Projects */}
      {regular.length > 0 && (
        <div>
          <div style={{ marginBottom: "16px" }}>
            <h3 className="section-title">All Projects</h3>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>Complete project history</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {regular.map(p => <ProjectCard key={p.id} project={p} featured={false} />)}
          </div>
        </div>
      )}

      {filtered.length === 0 && (
        <div style={{
          textAlign: "center",
          padding: "60px 20px",
          color: "var(--color-text-muted)",
          background: "var(--color-bg-card)",
          borderRadius: "16px",
          border: "1px solid var(--color-border)",
        }}>
          <p style={{ fontSize: "16px", marginBottom: "8px" }}>No projects found</p>
          <p style={{ fontSize: "13px" }}>Try adjusting your search or filter</p>
        </div>
      )}
    </div>
  );
}
