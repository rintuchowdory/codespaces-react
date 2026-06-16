import React, { useState, useEffect } from "react";
import {
  Code2, Server, Database, Cloud, Smartphone, Wrench,
  Star, Zap, Shield, Globe, Layers, GitBranch, Terminal,
  Package, Cpu, Monitor, CheckCircle
} from "lucide-react";

const techCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Monitor,
    color: "#6366f1",
    techs: [
      { name: "React", level: 95, years: 4, badge: "Expert", icon: "⚛️", desc: "Component architecture, hooks, context, performance optimization" },
      { name: "Next.js", level: 88, years: 3, badge: "Advanced", icon: "▲", desc: "SSR, SSG, ISR, App Router, API routes" },
      { name: "TypeScript", level: 85, years: 3, badge: "Advanced", icon: "🔷", desc: "Type safety, generics, utility types, decorators" },
      { name: "Tailwind CSS", level: 92, years: 3, badge: "Expert", icon: "🎨", desc: "Utility-first styling, custom design systems" },
      { name: "Framer Motion", level: 78, years: 2, badge: "Proficient", icon: "🎭", desc: "Animations, gestures, layout transitions" },
      { name: "Redux / Zustand", level: 80, years: 3, badge: "Advanced", icon: "🔄", desc: "State management, middleware, devtools" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    color: "#06b6d4",
    techs: [
      { name: "Node.js", level: 88, years: 4, badge: "Advanced", icon: "🟢", desc: "REST APIs, microservices, event-driven architecture" },
      { name: "Express.js", level: 90, years: 4, badge: "Expert", icon: "🚂", desc: "Middleware, routing, authentication, rate limiting" },
      { name: "Python", level: 75, years: 3, badge: "Proficient", icon: "🐍", desc: "FastAPI, Django, data processing, automation" },
      { name: "GraphQL", level: 72, years: 2, badge: "Proficient", icon: "◈", desc: "Schema design, resolvers, subscriptions" },
      { name: "WebSockets", level: 70, years: 2, badge: "Proficient", icon: "🔌", desc: "Real-time communication, Socket.io" },
      { name: "REST API Design", level: 92, years: 4, badge: "Expert", icon: "🔗", desc: "OpenAPI, versioning, authentication patterns" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    color: "#10b981",
    techs: [
      { name: "PostgreSQL", level: 82, years: 3, badge: "Advanced", icon: "🐘", desc: "Complex queries, indexing, transactions, migrations" },
      { name: "MongoDB", level: 78, years: 3, badge: "Advanced", icon: "🍃", desc: "Aggregation pipeline, schema design, Atlas" },
      { name: "Redis", level: 72, years: 2, badge: "Proficient", icon: "🔴", desc: "Caching, pub/sub, session storage, queues" },
      { name: "MySQL", level: 75, years: 3, badge: "Proficient", icon: "🐬", desc: "Relational design, stored procedures, replication" },
      { name: "Prisma / Drizzle", level: 80, years: 2, badge: "Advanced", icon: "💎", desc: "Type-safe ORM, migrations, schema management" },
      { name: "Elasticsearch", level: 60, years: 1, badge: "Learning", icon: "🔍", desc: "Full-text search, aggregations, indexing" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    icon: Cloud,
    color: "#f59e0b",
    techs: [
      { name: "Docker", level: 78, years: 3, badge: "Advanced", icon: "🐳", desc: "Containerization, multi-stage builds, compose" },
      { name: "AWS", level: 68, years: 2, badge: "Proficient", icon: "☁️", desc: "EC2, S3, Lambda, RDS, CloudFront, IAM" },
      { name: "GitHub Actions", level: 82, years: 3, badge: "Advanced", icon: "⚙️", desc: "CI/CD pipelines, automated testing, deployments" },
      { name: "Vercel / Netlify", level: 88, years: 3, badge: "Advanced", icon: "🚀", desc: "Edge deployments, serverless functions, previews" },
      { name: "Nginx", level: 65, years: 2, badge: "Proficient", icon: "🌐", desc: "Reverse proxy, load balancing, SSL termination" },
      { name: "Kubernetes", level: 45, years: 1, badge: "Learning", icon: "☸️", desc: "Pod management, services, deployments, Helm" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    icon: Wrench,
    color: "#ec4899",
    techs: [
      { name: "Git / GitHub", level: 95, years: 5, badge: "Expert", icon: "🐙", desc: "Branching strategies, PR workflows, code review" },
      { name: "VS Code", level: 95, years: 5, badge: "Expert", icon: "💙", desc: "Extensions, debugging, workspace configuration" },
      { name: "Figma", level: 78, years: 3, badge: "Advanced", icon: "🎨", desc: "UI design, prototyping, design systems, handoff" },
      { name: "Postman / Insomnia", level: 88, years: 4, badge: "Advanced", icon: "📮", desc: "API testing, collections, environments, mocking" },
      { name: "Jest / Vitest", level: 75, years: 3, badge: "Proficient", icon: "🧪", desc: "Unit testing, integration tests, mocking, coverage" },
      { name: "Storybook", level: 70, years: 2, badge: "Proficient", icon: "📚", desc: "Component documentation, visual testing, addons" },
    ],
  },
];

const badgeConfig = {
  "Expert": { color: "#6366f1", bg: "rgba(99,102,241,0.15)", border: "rgba(99,102,241,0.3)" },
  "Advanced": { color: "#06b6d4", bg: "rgba(6,182,212,0.15)", border: "rgba(6,182,212,0.3)" },
  "Proficient": { color: "#10b981", bg: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.3)" },
  "Learning": { color: "#f59e0b", bg: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.3)" },
};

const timeline = [
  { year: "2019", title: "Started Web Development", desc: "HTML, CSS, JavaScript fundamentals. Built first static websites.", color: "#6366f1" },
  { year: "2020", title: "React & Node.js", desc: "Dived into React ecosystem, built full-stack apps with Express and MongoDB.", color: "#06b6d4" },
  { year: "2021", title: "TypeScript & Testing", desc: "Adopted TypeScript across all projects. Implemented comprehensive testing strategies.", color: "#10b981" },
  { year: "2022", title: "Cloud & DevOps", desc: "Deployed to AWS, set up CI/CD pipelines, containerized apps with Docker.", color: "#f59e0b" },
  { year: "2023", title: "Design Systems", desc: "Built component libraries, design tokens, and contributed to open source.", color: "#ec4899" },
  { year: "2024", title: "AI Integration", desc: "Integrated LLMs, built AI-powered features, explored edge computing.", color: "#8b5cf6" },
];

const certifications = [
  { name: "AWS Solutions Architect", issuer: "Amazon Web Services", date: "2023", icon: "☁️", color: "#f59e0b" },
  { name: "Meta Frontend Developer", issuer: "Meta (Coursera)", date: "2022", icon: "⚛️", color: "#6366f1" },
  { name: "Google UX Design", issuer: "Google (Coursera)", date: "2022", icon: "🎨", color: "#10b981" },
  { name: "MongoDB Developer", issuer: "MongoDB University", date: "2023", icon: "🍃", color: "#06b6d4" },
];

function TechCard({ tech, color, animate }) {
  const badge = badgeConfig[tech.badge] || badgeConfig["Proficient"];
  return (
    <div style={{
      background: "var(--color-bg-card)",
      border: "1px solid var(--color-border)",
      borderRadius: "14px",
      padding: "18px",
      transition: "all 0.3s ease",
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${color}20`; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "20px" }}>{tech.icon}</span>
          <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-text-primary)" }}>{tech.name}</span>
        </div>
        <span style={{
          fontSize: "10px",
          fontWeight: 700,
          color: badge.color,
          background: badge.bg,
          border: `1px solid ${badge.border}`,
          padding: "2px 8px",
          borderRadius: "4px",
          letterSpacing: "0.3px",
        }}>{tech.badge}</span>
      </div>
      <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.5, marginBottom: "12px" }}>
        {tech.desc}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
        <span style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{tech.years} yr{tech.years !== 1 ? "s" : ""} experience</span>
        <span style={{ fontSize: "12px", fontWeight: 700, color }}>
          {tech.level}%
        </span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{
          width: animate ? `${tech.level}%` : "0%",
          background: `linear-gradient(90deg, ${color}, ${color}aa)`,
        }} />
      </div>
    </div>
  );
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const currentCategory = techCategories.find(c => c.id === activeCategory);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(236,72,153,0.08) 100%)",
        border: "1px solid rgba(245,158,11,0.2)",
        borderRadius: "20px",
        padding: "28px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "8px" }}>
            <span style={{ background: "linear-gradient(135deg, #f59e0b, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Tech Stack</span> & Expertise
          </h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", maxWidth: "500px", lineHeight: 1.6 }}>
            A curated overview of technologies, tools, and frameworks I work with professionally.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
          {[
            { label: "Technologies", value: "30+", color: "#6366f1" },
            { label: "Years Coding", value: "5+", color: "#10b981" },
            { label: "Projects Built", value: "50+", color: "#f59e0b" },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>{label}:</span>
              <span style={{ fontSize: "14px", fontWeight: 800, color }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {techCategories.map(({ id, label, icon: Icon, color }) => (
          <button
            key={id}
            onClick={() => setActiveCategory(id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "10px",
              border: `1px solid ${activeCategory === id ? color + "60" : "var(--color-border)"}`,
              background: activeCategory === id ? `${color}15` : "var(--color-bg-card)",
              color: activeCategory === id ? color : "var(--color-text-secondary)",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      {currentCategory && (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{
              width: "32px", height: "32px",
              borderRadius: "8px",
              background: `${currentCategory.color}20`,
              border: `1px solid ${currentCategory.color}40`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <currentCategory.icon size={16} color={currentCategory.color} />
            </div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text-primary)" }}>{currentCategory.label} Technologies</h3>
            <span style={{
              fontSize: "11px",
              padding: "2px 8px",
              borderRadius: "4px",
              background: `${currentCategory.color}15`,
              color: currentCategory.color,
              border: `1px solid ${currentCategory.color}30`,
              fontWeight: 600,
            }}>{currentCategory.techs.length} tools</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {currentCategory.techs.map((tech, i) => (
              <div key={tech.name} style={{ animationDelay: `${i * 0.05}s` }}>
                <TechCard tech={tech} color={currentCategory.color} animate={animate} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Proficiency Legend */}
      <div className="glass-card" style={{ padding: "20px 24px" }}>
        <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-muted)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Proficiency Levels</p>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {Object.entries(badgeConfig).map(([level, { color, bg, border }]) => (
            <div key={level} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{
                fontSize: "11px", fontWeight: 700, color,
                background: bg, border: `1px solid ${border}`,
                padding: "3px 10px", borderRadius: "4px",
              }}>{level}</span>
              <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
                {level === "Expert" ? "90%+" : level === "Advanced" ? "75–89%" : level === "Proficient" ? "60–74%" : "< 60%"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Timeline */}
      <div>
        <h3 className="section-title">Learning Journey</h3>
        <p className="section-subtitle">How my skills evolved over the years</p>
        <div style={{ position: "relative", paddingLeft: "24px" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "7px",
            top: "8px",
            bottom: "8px",
            width: "2px",
            background: "linear-gradient(180deg, #6366f1, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ec4899)",
            borderRadius: "1px",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {timeline.map(({ year, title, desc, color }, i) => (
              <div key={year} style={{ display: "flex", gap: "20px", paddingBottom: "24px", position: "relative" }}>
                {/* Dot */}
                <div style={{
                  position: "absolute",
                  left: "-17px",
                  top: "6px",
                  width: "14px", height: "14px",
                  borderRadius: "50%",
                  background: color,
                  border: "2px solid var(--color-bg-primary)",
                  boxShadow: `0 0 0 3px ${color}30`,
                  zIndex: 1,
                }} />

                <div style={{
                  background: "var(--color-bg-card)",
                  border: `1px solid var(--color-border)`,
                  borderRadius: "12px",
                  padding: "16px 20px",
                  flex: 1,
                  transition: "all 0.3s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.transform = "translateX(0)"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                    <span style={{
                      fontSize: "11px", fontWeight: 700,
                      color, background: `${color}15`,
                      border: `1px solid ${color}30`,
                      padding: "2px 8px", borderRadius: "4px",
                    }}>{year}</span>
                    <h4 style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-text-primary)" }}>{title}</h4>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="section-title">Certifications</h3>
        <p className="section-subtitle">Professional credentials and achievements</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {certifications.map(({ name, issuer, date, icon, color }) => (
            <div key={name} style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "14px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              transition: "all 0.3s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{
                width: "44px", height: "44px",
                borderRadius: "12px",
                background: `${color}20`,
                border: `1px solid ${color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px",
              }}>
                {icon}
              </div>
              <div>
                <h4 style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "3px" }}>{name}</h4>
                <p style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>{issuer}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle size={12} color="#10b981" />
                <span style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>Issued {date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
