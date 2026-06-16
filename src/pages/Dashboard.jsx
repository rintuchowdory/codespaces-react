import React, { useState, useEffect } from "react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import {
  TrendingUp, TrendingDown, Users, Eye, Star, GitBranch,
  ArrowUpRight, ArrowDownRight, Code2, Coffee, Zap, Award,
  Calendar, Clock, Target, Activity
} from "lucide-react";

const activityData = [
  { month: "Jan", commits: 42, prs: 8, reviews: 15 },
  { month: "Feb", commits: 58, prs: 12, reviews: 22 },
  { month: "Mar", commits: 35, prs: 6, reviews: 18 },
  { month: "Apr", commits: 72, prs: 15, reviews: 30 },
  { month: "May", commits: 88, prs: 20, reviews: 38 },
  { month: "Jun", commits: 65, prs: 14, reviews: 25 },
  { month: "Jul", commits: 95, prs: 22, reviews: 42 },
  { month: "Aug", commits: 110, prs: 28, reviews: 50 },
  { month: "Sep", commits: 78, prs: 18, reviews: 35 },
  { month: "Oct", commits: 120, prs: 30, reviews: 55 },
  { month: "Nov", commits: 98, prs: 24, reviews: 45 },
  { month: "Dec", commits: 135, prs: 35, reviews: 60 },
];

const projectData = [
  { name: "React", value: 35, color: "#06b6d4" },
  { name: "Python", value: 25, color: "#6366f1" },
  { name: "JavaScript", value: 20, color: "#8b5cf6" },
  { name: "Kubernetes", value: 15, color: "#ec4899" },
  { name: "Other", value: 5, color: "#f59e0b" },
];

const recentActivity = [
  { type: "commit", text: "feat: Deploy Aura-AI interview coach with Groq LLaMA3", time: "3h ago", repo: "aura-ai", color: "#6366f1" },
  { type: "pr", text: "Merge: GrundgesetzGPT — German Basic Law AI app", time: "8h ago", repo: "grundgesetz-gpt", color: "#10b981" },
  { type: "star", text: "Starred: Kubernetes k3s home lab setup", time: "1d ago", repo: "k8s-project", color: "#f59e0b" },
  { type: "commit", text: "fix: Cloudflare Worker CORS proxy for APIs", time: "1d ago", repo: "api-proxy", color: "#ec4899" },
  { type: "commit", text: "feat: Deploy WerRiefAn.de reverse phone lookup", time: "2d ago", repo: "werriefen", color: "#06b6d4" },
];

const skills = [
  { name: "React + Vite", level: 90, color: "#06b6d4" },
  { name: "Docker & Kubernetes", level: 88, color: "#6366f1" },
  { name: "AWS (EC2, S3, Lambda)", level: 82, color: "#8b5cf6" },
  { name: "FastAPI (Python)", level: 80, color: "#ec4899" },
  { name: "Groq / LLaMA3-70b", level: 85, color: "#f59e0b" },
  { name: "Linux / WSL2", level: 90, color: "#10b981" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "10px",
        padding: "12px 16px",
        fontSize: "12px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
      }}>
        <p style={{ color: "var(--color-text-secondary)", marginBottom: "6px", fontWeight: 600 }}>{label}</p>
        {payload.map((p, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color }} />
            <span style={{ color: "var(--color-text-primary)" }}>{p.name}: <strong>{p.value}</strong></span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

function StatCard({ icon: Icon, label, value, change, positive, color, accent }) {
  return (
    <div className="stat-card" style={{ "--card-accent": accent || color }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
        <div style={{
          width: "44px", height: "44px",
          borderRadius: "12px",
          background: `${color}20`,
          border: `1px solid ${color}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Icon size={20} color={color} />
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "4px 8px",
          borderRadius: "6px",
          background: positive ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
          color: positive ? "#34d399" : "#f87171",
          fontSize: "12px",
          fontWeight: 600,
        }}>
          {positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {change}
        </div>
      </div>
      <div style={{ fontSize: "28px", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "4px" }}>
        {value}
      </div>
      <div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{label}</div>
    </div>
  );
}

export default function Dashboard() {
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedSkills(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

      {/* Hero Welcome Banner */}
      <div style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 50%, rgba(6,182,212,0.08) 100%)",
        border: "1px solid rgba(99,102,241,0.25)",
        borderRadius: "20px",
        padding: "28px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background decoration */}
        <div style={{
          position: "absolute", top: "-40px", right: "-40px",
          width: "200px", height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-30px", left: "30%",
          width: "150px", height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
            <span className="badge badge-purple">Available for work</span>
            <span className="badge badge-green">Open Source</span>
          </div>
          <h2 style={{ fontSize: "26px", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "8px" }}>
            Good morning, <span className="gradient-text">Rintu</span> 👋
          </h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", maxWidth: "480px", lineHeight: 1.6 }}>
            You have <strong style={{ color: "#818cf8" }}>85+ GitHub projects</strong>, <strong style={{ color: "#34d399" }}>30+ deployed apps</strong>, and your portfolio received <strong style={{ color: "#22d3ee" }}>1,200+ views</strong> this month.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
            <button className="btn-primary">
              <Zap size={14} /> View Projects
            </button>
            <button className="btn-secondary">
              <Calendar size={14} /> Schedule
            </button>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-end" }}>
          {[
            { icon: Code2, label: "GitHub Projects", value: "85+", color: "#6366f1" },
            { icon: Coffee, label: "Years Experience", value: "5+", color: "#f59e0b" },
            { icon: Award, label: "Deployed Apps", value: "30+", color: "#10b981" },
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(30,34,53,0.6)",
              border: "1px solid var(--color-border)",
              borderRadius: "10px",
              padding: "8px 14px",
            }}>
              <Icon size={14} color={color} />
              <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{label}:</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text-primary)" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        <StatCard icon={GitBranch} label="GitHub Projects" value="85+" change="+12%" positive={true} color="#6366f1" />
        <StatCard icon={Eye} label="Portfolio Views" value="1,200+" change="+28%" positive={true} color="#06b6d4" />
        <StatCard icon={Star} label="Deployed Apps" value="30+" change="+15%" positive={true} color="#f59e0b" />
        <StatCard icon={Users} label="Years Exp." value="5+" change="+2%" positive={true} color="#ec4899" />
      </div>

      {/* Charts Row */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}>
        {/* Activity Chart */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text-primary)" }}>
                Development Activity
              </h3>
              <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>Commits, PRs & reviews over 12 months</p>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                { label: "Commits", color: "#6366f1" },
                { label: "PRs", color: "#06b6d4" },
                { label: "Reviews", color: "#8b5cf6" },
              ].map(({ label, color }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color }} />
                  <span style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={activityData}>
              <defs>
                <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPrs" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(45,49,72,0.8)" />
              <XAxis dataKey="month" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="commits" stroke="#6366f1" strokeWidth={2} fill="url(#colorCommits)" name="Commits" />
              <Area type="monotone" dataKey="prs" stroke="#06b6d4" strokeWidth={2} fill="url(#colorPrs)" name="PRs" />
              <Line type="monotone" dataKey="reviews" stroke="#8b5cf6" strokeWidth={2} dot={false} name="Reviews" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Language Distribution */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "4px" }}>
            Language Split
          </h3>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "20px" }}>Code distribution by language</p>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie
                data={projectData}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={70}
                paddingAngle={3}
                dataKey="value"
              >
                {projectData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} stroke="transparent" />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  fontSize: "12px",
                  color: "var(--color-text-primary)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
            {projectData.map(({ name, value, color }) => (
              <div key={name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color }} />
                  <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{name}</span>
                </div>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-primary)" }}>{value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Activity Feed + Skills */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {/* Recent Activity */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text-primary)" }}>Recent Activity</h3>
              <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>Latest commits & interactions</p>
            </div>
            <span className="badge badge-purple">Live</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {recentActivity.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <div style={{
                  width: "32px", height: "32px",
                  borderRadius: "8px",
                  background: `${item.color}20`,
                  border: `1px solid ${item.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Activity size={14} color={item.color} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: "13px", color: "var(--color-text-primary)", marginBottom: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {item.text}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{item.repo}</span>
                    <span style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>·</span>
                    <span style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text-primary)" }}>Skill Proficiency</h3>
            <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>Self-assessed expertise levels</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {skills.map(({ name, level, color }) => (
              <div key={name}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "13px", color: "var(--color-text-primary)", fontWeight: 500 }}>{name}</span>
                  <span style={{ fontSize: "12px", color: color, fontWeight: 600 }}>{level}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: animatedSkills ? `${level}%` : "0%",
                      background: `linear-gradient(90deg, ${color}, ${color}aa)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        {[
          { icon: Target, label: "Goals Completed", value: "8/10", sub: "this quarter", color: "#10b981" },
          { icon: Clock, label: "Avg. PR Review", value: "4.2h", sub: "response time", color: "#6366f1" },
          { icon: GitBranch, label: "Open Issues", value: "23", sub: "across all repos", color: "#f59e0b" },
          { icon: Zap, label: "Build Success", value: "97.3%", sub: "CI/CD pipeline", color: "#06b6d4" },
        ].map(({ icon: Icon, label, value, sub, color }) => (
          <div key={label} style={{
            background: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "14px",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            transition: "all 0.3s ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{
              width: "40px", height: "40px",
              borderRadius: "10px",
              background: `${color}20`,
              border: `1px solid ${color}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Icon size={18} color={color} />
            </div>
            <div>
              <div style={{ fontSize: "18px", fontWeight: 800, color: "var(--color-text-primary)" }}>{value}</div>
              <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", fontWeight: 500 }}>{label}</div>
              <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{sub}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
