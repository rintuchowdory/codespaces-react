import React, { useState } from "react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter,
  XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell, ComposedChart
} from 'recharts';
import { TrendingUp, Globe, Clock, Users, BarChart3, Activity, Zap, Target } from "lucide-react";

const monthlyData = [
  { month: "Jan", views: 1200, visitors: 820, bounceRate: 42, sessions: 1050 },
  { month: "Feb", views: 1900, visitors: 1200, bounceRate: 38, sessions: 1650 },
  { month: "Mar", views: 1500, visitors: 980, bounceRate: 45, sessions: 1300 },
  { month: "Apr", views: 2400, visitors: 1600, bounceRate: 35, sessions: 2100 },
  { month: "May", views: 3200, visitors: 2100, bounceRate: 32, sessions: 2800 },
  { month: "Jun", views: 2800, visitors: 1850, bounceRate: 36, sessions: 2450 },
  { month: "Jul", views: 3800, visitors: 2500, bounceRate: 30, sessions: 3300 },
  { month: "Aug", views: 4200, visitors: 2800, bounceRate: 28, sessions: 3700 },
  { month: "Sep", views: 3600, visitors: 2400, bounceRate: 33, sessions: 3150 },
  { month: "Oct", views: 4800, visitors: 3200, bounceRate: 27, sessions: 4200 },
  { month: "Nov", views: 5200, visitors: 3500, bounceRate: 25, sessions: 4600 },
  { month: "Dec", views: 6100, visitors: 4100, bounceRate: 22, sessions: 5400 },
];

const weeklyData = [
  { day: "Mon", commits: 12, reviews: 5, issues: 3 },
  { day: "Tue", commits: 18, reviews: 8, issues: 6 },
  { day: "Wed", commits: 8, reviews: 3, issues: 2 },
  { day: "Thu", commits: 22, reviews: 12, issues: 8 },
  { day: "Fri", commits: 30, reviews: 15, issues: 10 },
  { day: "Sat", commits: 6, reviews: 2, issues: 1 },
  { day: "Sun", commits: 4, reviews: 1, issues: 0 },
];

const radarData = [
  { subject: "Frontend", A: 92, B: 70, fullMark: 100 },
  { subject: "Backend", A: 80, B: 65, fullMark: 100 },
  { subject: "DevOps", A: 65, B: 55, fullMark: 100 },
  { subject: "Design", A: 78, B: 60, fullMark: 100 },
  { subject: "Testing", A: 72, B: 68, fullMark: 100 },
  { subject: "Security", A: 68, B: 72, fullMark: 100 },
];

const scatterData = [
  { x: 10, y: 30, z: 200 }, { x: 30, y: 50, z: 400 }, { x: 50, y: 20, z: 150 },
  { x: 70, y: 80, z: 600 }, { x: 90, y: 60, z: 350 }, { x: 20, y: 70, z: 500 },
  { x: 60, y: 40, z: 250 }, { x: 80, y: 90, z: 700 }, { x: 40, y: 55, z: 300 },
  { x: 15, y: 45, z: 180 }, { x: 55, y: 75, z: 450 }, { x: 75, y: 35, z: 220 },
];

const trafficSources = [
  { name: "Organic Search", value: 38, color: "#6366f1" },
  { name: "Direct", value: 24, color: "#06b6d4" },
  { name: "Social Media", value: 18, color: "#ec4899" },
  { name: "Referral", value: 12, color: "#f59e0b" },
  { name: "Email", value: 8, color: "#10b981" },
];

const topPages = [
  { page: "/portfolio", views: 4820, change: "+18%", positive: true },
  { page: "/dashboard", views: 3240, change: "+32%", positive: true },
  { page: "/design", views: 2180, change: "+8%", positive: true },
  { page: "/analytics", views: 1960, change: "-4%", positive: false },
  { page: "/techstack", views: 1540, change: "+22%", positive: true },
];

const geoData = [
  { country: "United States", flag: "🇺🇸", visitors: 3240, percent: 38 },
  { country: "United Kingdom", flag: "🇬🇧", visitors: 1820, percent: 21 },
  { country: "Germany", flag: "🇩🇪", visitors: 1240, percent: 14 },
  { country: "India", flag: "🇮🇳", visitors: 980, percent: 11 },
  { country: "Canada", flag: "🇨🇦", visitors: 720, percent: 8 },
  { country: "Australia", flag: "🇦🇺", visitors: 540, percent: 6 },
  { country: "Other", flag: "🌍", visitors: 180, percent: 2 },
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
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color || p.fill }} />
            <span style={{ color: "var(--color-text-primary)" }}>{p.name}: <strong>{typeof p.value === "number" ? p.value.toLocaleString() : p.value}</strong></span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

function MetricCard({ icon: Icon, label, value, sub, color, trend }) {
  return (
    <div style={{
      background: "var(--color-bg-card)",
      border: "1px solid var(--color-border)",
      borderRadius: "14px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      transition: "all 0.3s ease",
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{
          width: "38px", height: "38px",
          borderRadius: "10px",
          background: `${color}20`,
          border: `1px solid ${color}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Icon size={18} color={color} />
        </div>
        {trend && (
          <span style={{
            fontSize: "11px",
            fontWeight: 700,
            color: trend.positive ? "#34d399" : "#f87171",
            background: trend.positive ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
            padding: "3px 8px",
            borderRadius: "6px",
          }}>
            {trend.positive ? "↑" : "↓"} {trend.value}
          </span>
        )}
      </div>
      <div>
        <div style={{ fontSize: "26px", fontWeight: 800, color: "var(--color-text-primary)", lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", marginTop: "4px" }}>{label}</div>
        {sub && <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginTop: "2px" }}>{sub}</div>}
      </div>
    </div>
  );
}

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("12m");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(99,102,241,0.08) 100%)",
        border: "1px solid rgba(6,182,212,0.2)",
        borderRadius: "20px",
        padding: "24px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "6px" }}>
            <span style={{ background: "linear-gradient(135deg, #06b6d4, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Analytics</span> Overview
          </h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>
            Portfolio performance metrics and developer activity insights
          </p>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          {["7d", "30d", "3m", "12m"].map(r => (
            <button key={r} onClick={() => setTimeRange(r)} style={{
              padding: "6px 14px",
              borderRadius: "8px",
              border: `1px solid ${timeRange === r ? "rgba(99,102,241,0.5)" : "var(--color-border)"}`,
              background: timeRange === r ? "rgba(99,102,241,0.15)" : "transparent",
              color: timeRange === r ? "#818cf8" : "var(--color-text-secondary)",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}>{r}</button>
          ))}
        </div>
      </div>

      {/* Metric Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        <MetricCard icon={Globe} label="Total Page Views" value="48.2K" sub="across all pages" color="#6366f1" trend={{ positive: true, value: "24%" }} />
        <MetricCard icon={Users} label="Unique Visitors" value="28.4K" sub="this period" color="#06b6d4" trend={{ positive: true, value: "18%" }} />
        <MetricCard icon={Clock} label="Avg. Session" value="3m 42s" sub="time on site" color="#10b981" trend={{ positive: true, value: "8%" }} />
        <MetricCard icon={Activity} label="Bounce Rate" value="22.4%" sub="industry avg: 38%" color="#f59e0b" trend={{ positive: true, value: "6%" }} />
      </div>

      {/* Main Chart */}
      <div className="glass-card" style={{ padding: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text-primary)" }}>Traffic Overview</h3>
            <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>Page views, visitors & sessions over time</p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            {[{ label: "Views", color: "#6366f1" }, { label: "Visitors", color: "#06b6d4" }, { label: "Sessions", color: "#10b981" }].map(({ label, color }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color }} />
                <span style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={monthlyData}>
            <defs>
              <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(45,49,72,0.8)" />
            <XAxis dataKey="month" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="views" stroke="#6366f1" strokeWidth={2} fill="url(#viewsGrad)" name="Views" />
            <Line type="monotone" dataKey="visitors" stroke="#06b6d4" strokeWidth={2} dot={false} name="Visitors" />
            <Bar dataKey="sessions" fill="rgba(16,185,129,0.3)" radius={[4,4,0,0]} name="Sessions" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Middle Row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>

        {/* Weekly Activity Bar Chart */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "4px" }}>Weekly Dev Activity</h3>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "20px" }}>Commits, reviews & issues by day</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData} barSize={8} barGap={2}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(45,49,72,0.8)" />
              <XAxis dataKey="day" tick={{ fill: "#475569", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#475569", fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="commits" fill="#6366f1" radius={[3,3,0,0]} name="Commits" />
              <Bar dataKey="reviews" fill="#06b6d4" radius={[3,3,0,0]} name="Reviews" />
              <Bar dataKey="issues" fill="#ec4899" radius={[3,3,0,0]} name="Issues" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Sources Pie */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "4px" }}>Traffic Sources</h3>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "12px" }}>Where visitors come from</p>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie data={trafficSources} cx="50%" cy="50%" innerRadius={40} outerRadius={65} paddingAngle={3} dataKey="value">
                {trafficSources.map((entry, i) => (
                  <Cell key={i} fill={entry.color} stroke="transparent" />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "8px", fontSize: "12px", color: "var(--color-text-primary)" }} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
            {trafficSources.map(({ name, value, color }) => (
              <div key={name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: color }} />
                  <span style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>{name}</span>
                </div>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-primary)" }}>{value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Radar Chart */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "4px" }}>Skills Radar</h3>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "12px" }}>Current vs target proficiency</p>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(45,49,72,0.8)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#475569", fontSize: 10 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#475569", fontSize: 9 }} />
              <Radar name="Current" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} strokeWidth={2} />
              <Radar name="Target" dataKey="B" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.15} strokeWidth={2} strokeDasharray="4 4" />
              <Tooltip contentStyle={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "8px", fontSize: "12px", color: "var(--color-text-primary)" }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

        {/* Top Pages */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "4px" }}>Top Pages</h3>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "20px" }}>Most visited pages this period</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {topPages.map(({ page, views, change, positive }, i) => (
              <div key={page}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{
                      width: "20px", height: "20px",
                      borderRadius: "6px",
                      background: i === 0 ? "rgba(99,102,241,0.2)" : "rgba(99,102,241,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "10px", fontWeight: 700,
                      color: i === 0 ? "#818cf8" : "var(--color-text-muted)",
                    }}>{i + 1}</span>
                    <code style={{ fontSize: "13px", color: "var(--color-text-primary)", fontFamily: "monospace" }}>{page}</code>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text-primary)" }}>{views.toLocaleString()}</span>
                    <span style={{
                      fontSize: "11px", fontWeight: 600,
                      color: positive ? "#34d399" : "#f87171",
                      background: positive ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
                      padding: "2px 6px", borderRadius: "4px",
                    }}>{change}</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{
                    width: `${(views / 4820) * 100}%`,
                    background: i === 0 ? "linear-gradient(90deg, #6366f1, #8b5cf6)" : "linear-gradient(90deg, rgba(99,102,241,0.6), rgba(139,92,246,0.4))",
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "4px" }}>Geographic Distribution</h3>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "20px" }}>Visitors by country</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {geoData.map(({ country, flag, visitors, percent }) => (
              <div key={country}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "16px" }}>{flag}</span>
                    <span style={{ fontSize: "13px", color: "var(--color-text-primary)" }}>{country}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{visitors.toLocaleString()}</span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#818cf8", width: "32px", textAlign: "right" }}>{percent}%</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{
                    width: `${percent}%`,
                    background: "linear-gradient(90deg, #6366f1, #06b6d4)",
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scatter Plot */}
      <div className="glass-card" style={{ padding: "24px" }}>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--color-text-primary)" }}>Engagement vs. Reach Scatter</h3>
          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "2px" }}>Bubble size represents impact score</p>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(45,49,72,0.8)" />
            <XAxis type="number" dataKey="x" name="Reach" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} label={{ value: "Reach", position: "insideBottom", offset: -5, fill: "#475569", fontSize: 11 }} />
            <YAxis type="number" dataKey="y" name="Engagement" tick={{ fill: "#475569", fontSize: 11 }} axisLine={false} tickLine={false} label={{ value: "Engagement", angle: -90, position: "insideLeft", fill: "#475569", fontSize: 11 }} />
            <ZAxis type="number" dataKey="z" range={[40, 400]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} contentStyle={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "8px", fontSize: "12px", color: "var(--color-text-primary)" }} />
            <Scatter name="Projects" data={scatterData} fill="#6366f1" fillOpacity={0.7} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
