"use client";
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Brain, Network, Zap, Eye, Activity, Cloud, Globe, ChevronRight, CheckCircle2, AlertTriangle, TrendingUp, Layers } from 'lucide-react';

const NGFWLandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Deep learning models with CNN architecture for sub-second threat identification and zero-day exploit detection.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description: "Continuous verification with micro-segmentation and risk-based authentication for comprehensive security.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      title: "Encrypted Traffic Analysis",
      description: "TLS 1.3 and QUIC protocol inspection with minimal latency impact on network performance.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Network,
      title: "Federated Learning",
      description: "Privacy-preserving collaborative intelligence across distributed deployments for enhanced threat detection.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "SOAR integration with reinforcement learning for dynamic policy optimization and instant mitigation.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Activity,
      title: "Real-Time Analytics",
      description: "Advanced visualization with attack graphs, anomaly heatmaps, and threat correlation matrices.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const metrics = [
    { value: "<1ms", label: "Detection Latency", icon: Zap },
    { value: "40+ Gbps", label: "Throughput", icon: TrendingUp },
    { value: "80%", label: "Traffic Encrypted", icon: Lock },
    { value: "100%", label: "Zero Trust Coverage", icon: Shield }
  ];

  const challenges = [
    "Polymorphic malware and zero-day exploits bypassing signature-based detection",
    "Encrypted C2 channels hiding in TLS/SSL traffic streams",
    "Static policies unable to adapt to emerging MITRE ATT&CK TTPs",
    "Insider threats and credential abuse in distributed environments",
    "Limited AI/ML integration for predictive threat analytics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Animated Blobs */}
        <div className="absolute top-[-10%] left-[10%] w-[32rem] h-[32rem] bg-blue-600 opacity-20 rounded-full blur-3xl animate-blob1" />
        <div className="absolute bottom-[-10%] right-[10%] w-[28rem] h-[28rem] bg-fuchsia-500 opacity-20 rounded-full blur-3xl animate-blob2" />
        <div className="absolute top-1/2 left-1/2 w-[36rem] h-[36rem] bg-green-500 opacity-20 rounded-full blur-3xl animate-blob3" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-950" />
        
        <nav className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white bg-clip-text text-transparent">
              ThreatBuster
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="animated-underline hover:text-purple-600 transition"
            >
              Features
            </a>
            <a
              href="#architecture"
              className="animated-underline hover:text-purple-600 transition"
            >
              Architecture
            </a>
            <a
              href="#outcomes"
              className="animated-underline hover:text-purple-600 transition"
            >
              Outcomes
            </a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:scale-105 transition transform">
            Get Started
          </button>
        </nav>

        <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-8 backdrop-blur-sm">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">AI-Powered Threat Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight">
              Next-Generation Firewall
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
              AI-Driven Dynamic Threat Detection
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Revolutionizing network security with deep learning, zero trust architecture, and federated intelligence to combat advanced persistent threats in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-lg shadow-2xl flex items-center justify-center
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_8px_32px_0_rgba(34,211,238,0.35)]">
                View Demo <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-lg hover:bg-white/20 transition border border-white/20">
                Technical Docs
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {metrics.map((metric, idx) => (
                <div key={idx} className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/50 transition">
                  <metric.icon className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                The Critical Challenge
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Traditional firewalls are failing against modern threat landscapes characterized by AI-driven attacks, encrypted malware, and sophisticated evasion techniques.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20 backdrop-blur-sm">
                <AlertTriangle className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-red-400">Current Limitations</h3>
                <ul className="space-y-3">
                  {challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-slate-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Industry Context</h3>
                <div className="space-y-4 text-slate-300">
                  <p>Cloud-native infrastructures and remote workforces have expanded attack surfaces exponentially.</p>
                  <p>Over 80% of network traffic is now encrypted, creating massive blind spots for legacy inspection systems.</p>
                  <p>Attackers leverage adversarial machine learning and living-off-the-land techniques to evade detection.</p>
                  <p>Zero Trust Architecture demands continuous verification and context-aware enforcement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="relative py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Revolutionary Capabilities</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Combining cutting-edge AI/ML with zero trust principles for adaptive, intelligent security enforcement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  animationDelay: `${idx * 100}ms`
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Architecture</h2>
              <p className="text-xl text-slate-300">
                Enterprise-grade components engineered for performance, scalability, and intelligence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Layers className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-purple-400">Deep Packet Inspection Layer</h3>
                    <p className="text-slate-300">Lightweight CNNs for encrypted traffic classification with SSL/TLS inspection. DBSCAN and Isolation Forest algorithms for real-time anomaly detection in data streams.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Lock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-cyan-400">Zero Trust Enforcement Engine</h3>
                    <p className="text-slate-300">Risk-based authentication with behavioral biometrics. Software-defined perimeter micro-segmentation to prevent lateral movement and contain breaches.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-r from-green-500/10 to-transparent rounded-2xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-400">Federated Intelligence Network</h3>
                    <p className="text-slate-300">TensorFlow Federated and PySyft frameworks for privacy-preserving collaborative learning. STIX/TAXII integration for external threat intelligence correlation.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-r from-orange-500/10 to-transparent rounded-2xl border border-orange-500/20 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-500/20 rounded-lg">
                    <Zap className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-orange-400">Automated Response System</h3>
                    <p className="text-slate-300">SOAR workflows for instant containment and sandboxing. Reinforcement learning models dynamically optimize firewall rules based on evolving attack patterns.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section id="outcomes" className="relative py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Expected Outcomes
              </h2>
              <p className="text-xl text-slate-300">
                Production-ready prototype validated for enterprise-scale deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  "Sub-second detection and mitigation of zero-day attacks and polymorphic malware",
                  "Seamless Zero Trust enforcement with adaptive access controls",
                  "Predictive threat modeling through continuous learning pipelines",
                  "40+ Gbps inspection throughput with <1ms latency overhead"
                ].map((outcome, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-green-500/20 hover:border-green-500/50 transition">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{outcome}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  "Multi-cloud, hybrid, and on-premise deployment compatibility",
                  "Edge computing support for IoT/IIoT ecosystems",
                  "NIST SP 800-207 and ISO/IEC 27001 compliance",
                  "MITRE ATT&CK framework integration for TTP mapping"
                ].map((outcome, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-green-500/20 hover:border-green-500/50 transition">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-green-500/10 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Integration & Standards</h3>
                  <p className="text-slate-300">SIEM/SOAR platform compatibility with Splunk, ELK Stack, and Azure Sentinel via REST APIs</p>
                </div>
                <div className="flex space-x-4">
                  <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                    <Cloud className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
                    <div className="text-xs text-slate-400">Multi-Cloud</div>
                  </div>
                  <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                    <Shield className="w-6 h-6 text-green-400 mx-auto mb-1" />
                    <div className="text-xs text-slate-400">NIST 800-207</div>
                  </div>
                  <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                    <Network className="w-6 h-6 text-purple-400 mx-auto mb-1" />
                    <div className="text-xs text-slate-400">ATT&CK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-green-500/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Security Posture?
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Join the next generation of intelligent, adaptive cybersecurity solutions designed for the modern threat landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-lg shadow-2xl flex items-center justify-center
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_8px_32px_0_rgba(34,211,238,0.35)]
                  focus:outline-none focus:ring-4 focus:ring-cyan-400/40"
              >
                Request Demo
              </button>
              <button
                className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold text-lg
                  transition-all duration-300 border-white/30 hover:bg-white/20 hover:border-white/30"
              >
                Download Whitepaper
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-gray-950 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold">ThreatBuster</div>
                <div className="text-sm text-slate-400">AICTE Cyber Security Initiative</div>
              </div>
            </div>
            <div className="text-slate-400 text-sm text-center">
              <p>Problem Statement ID: 25160</p>
              <p className="mt-1">© 2025 AICTE. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NGFWLandingPage;