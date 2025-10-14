"use client";
import { UserButton } from "@clerk/nextjs";
import {
  Shield, Activity, AlertTriangle, TrendingUp, Lock, Eye, Zap
} from 'lucide-react';

export default function DashboardContent({ user }: { user: any }) {
  const stats = [
    { label: "Threats Blocked", value: "1,234", change: "+12%", icon: Shield, color: "from-green-500 to-emerald-500" },
    { label: "Active Sessions", value: "89", change: "+5%", icon: Activity, color: "from-blue-500 to-cyan-500" },
    { label: "Alerts", value: "23", change: "-8%", icon: AlertTriangle, color: "from-orange-500 to-red-500" },
    { label: "Uptime", value: "99.9%", change: "0%", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
  ];

  const recentThreats = [
    { type: "Malware", severity: "High", source: "192.168.1.45", time: "2 min ago", blocked: true },
    { type: "DDoS Attempt", severity: "Critical", source: "External", time: "15 min ago", blocked: true },
    { type: "SQL Injection", severity: "Medium", source: "10.0.0.23", time: "1 hour ago", blocked: true },
    { type: "Port Scan", severity: "Low", source: "172.16.0.89", time: "2 hours ago", blocked: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white">ThreatBuster Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-300 hidden sm:block">Hi, {user.firstName}!</span>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>
      {/* Main content */}
      <main className="container mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-400' : stat.change.startsWith('-') ? 'text-red-400' : 'text-slate-400'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Threats */}
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                Recent Threats
              </h2>
              <button className="text-cyan-400 text-sm hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {recentThreats.map((threat, idx) => (
                <div key={idx} className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-white">{threat.type}</h3>
                      <p className="text-sm text-slate-400">{threat.source}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      threat.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                      threat.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                      threat.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {threat.severity}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">{threat.time}</span>
                    <span className="text-xs text-green-400 flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Blocked
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* System Status */}
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-400" />
                System Status
              </h2>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                All Systems Operational
              </span>
            </div>
            <div className="space-y-4">
              {[
                { name: "AI Threat Detection", status: "Operational", uptime: "99.9%" },
                { name: "Zero Trust Engine", status: "Operational", uptime: "100%" },
                { name: "Traffic Analysis", status: "Operational", uptime: "99.8%" },
                { name: "Automated Response", status: "Operational", uptime: "99.9%" },
              ].map((service, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">{service.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 text-sm font-semibold">{service.status}</p>
                    <p className="text-slate-500 text-xs">{service.uptime} uptime</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <button className="p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl hover:border-purple-500/50 transition text-left group">
            <Lock className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition" />
            <h3 className="text-lg font-bold text-white mb-2">Configure Policies</h3>
            <p className="text-slate-400 text-sm">Manage security rules and policies</p>
          </button>
          <button className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition text-left group">
            <Eye className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition" />
            <h3 className="text-lg font-bold text-white mb-2">View Analytics</h3>
            <p className="text-slate-400 text-sm">Deep dive into security metrics</p>
          </button>
          <button className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl hover:border-orange-500/50 transition text-left group">
            <Zap className="w-8 h-8 text-orange-400 mb-3 group-hover:scale-110 transition" />
            <h3 className="text-lg font-bold text-white mb-2">Generate Report</h3>
            <p className="text-slate-400 text-sm">Export security reports</p>
          </button>
        </div>
      </main>
    </div>
  );
}
