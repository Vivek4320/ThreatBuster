"use client";
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Brain, Network, Zap, Eye, Activity, Cloud, Globe, ChevronRight, CheckCircle2, AlertTriangle, TrendingUp, Layers, Menu, X, ArrowUp } from 'lucide-react';
import SpaceBackground from './SpaceBackground';
import {
  SignInButton,
  SignUpButton,
  SignedOut,
} from '@clerk/nextjs'

// Type declaration for Spline viewer
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
        style?: React.CSSProperties;
        [key: string]: any;
      };
    }
  }
}

const NGFWLandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollY(scrolled);
      setShowScrollTop(scrolled > 500);

      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(el => observer.observe(el));

      return () => {
        elements.forEach(el => observer.unobserve(el));
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.0.11/build/spline-viewer.js';
    document.body.appendChild(script);

    script.onload = () => {
      setSplineLoaded(true);
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
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

  const teamMembers = [
    {
      name: "Malay Raval",
      role: "Lead Security Architect",
      expertise: "AI/ML Security, Zero Trust",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Malay",
      contribution: "Designed the AI-powered threat detection engine and federated learning framework"
    },
    {
      name: "Bhagirathsinh Rana",
      role: "Backend Developer",
      expertise: "System Architecture, APIs",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bhagirathsinh",
      contribution: "Built the scalable backend infrastructure and SOAR integration pipelines"
    },
    {
      name: "Vivek Pankhaniya",
      role: "Frontend Developer",
      expertise: "React, UI/UX Design",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vivek",
      contribution: "Created the responsive landing page with interactive animations and modern design"
    },
    {
      name: "Dev Patel",
      role: "ML Engineer",
      expertise: "Deep Learning, CNNs",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev",
      contribution: "Developed CNN models for encrypted traffic analysis and anomaly detection"
    },
    {
      name: "Tisha Daudra",
      role: "Security Researcher",
      expertise: "Threat Intelligence, MITRE ATT&CK",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tisha",
      contribution: "Integrated threat intelligence feeds and MITRE ATT&CK framework mapping"
    },
    {
      name: "Khushi Bosamiya",
      role: "DevOps Engineer",
      expertise: "Cloud Infrastructure, CI/CD",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Khushi",
      contribution: "Established multi-cloud deployment pipelines and edge computing support"
    }
  ];

  return (
  <SpaceBackground>
    <div className="min-h-screen text-gray-100 overflow-hidden">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scroll-animate.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(34, 211, 238, 0.4), 
                      0 0 20px rgba(168, 85, 247, 0.3);
        }

        .btn-secondary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-secondary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .btn-secondary:hover::after {
          opacity: 1;
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          border-color: rgba(34, 211, 238, 0.5);
          box-shadow: 0 8px 25px rgba(34, 211, 238, 0.2);
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
                      0 0 40px rgba(34, 211, 238, 0.2);
        }

        .metric-card {
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          transform: translateY(-5px) scale(1.05);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 15px 40px rgba(34, 211, 238, 0.3);
        }

        .team-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-card:hover {
          transform: translateY(-10px) rotate(1deg);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4),
                      0 0 30px rgba(168, 85, 247, 0.3);
        }

        .feature-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .arch-card {
          transition: all 0.3s ease;
        }

        .arch-card:hover {
          transform: translateX(10px);
          border-color: rgba(34, 211, 238, 0.5);
          box-shadow: -5px 0 30px rgba(34, 211, 238, 0.2);
        }

        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, -30px) scale(0.9); }
          66% { transform: translate(40px, 40px) scale(1.1); }
        }

        @keyframes blob3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          33% { transform: translate(-45%, -55%) scale(1.05); }
          66% { transform: translate(-55%, -45%) scale(0.95); }
        }

        .animate-blob1 {
          animation: blob1 20s ease-in-out infinite;
        }

        .animate-blob2 {
          animation: blob2 18s ease-in-out infinite;
        }

        .animate-blob3 {
          animation: blob3 22s ease-in-out infinite;
        }

        .spline-container {
          position: relative;
          width: 100%;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .spline-container spline-viewer {
          width: 80%;
          height: 80%;
          transform: scale(0.9);
        }

        @media (max-width: 1024px) {
          .spline-container {
            height: 400px;
          }
          
          .spline-container spline-viewer {
            width: 90%;
            height: 90%;
          }
        }

        @media (max-width: 768px) {
          .spline-container {
            height: 300px;
            margin: 2rem 0;
          }
        }

        html {
          scroll-behavior: smooth;
        }
        `}</style>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 " />

        <nav className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white">
              ThreatBuster
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="relative pb-1 text-gray-300 hover:text-white transition-all duration-300 group">
              Features
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></span>
            </a>
            <a href="#architecture" className="relative pb-1 text-gray-300 hover:text-white transition-all duration-300 group">
              Architecture
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></span>
            </a>
            <a href="#outcomes" className="relative pb-1 text-gray-300 hover:text-white transition-all duration-300 group">
              Outcomes
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></span>
            </a>
            <a href="#team" className="relative pb-1 text-gray-300 hover:text-white transition-all duration-300 group">
              Team
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></span>
            </a>
          </div>

          <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold btn-primary">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg z-50 border-b border-white/10 animate-fadeInUp">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <a href="#features" className="block py-2 text-gray-300 hover:text-cyan-400 transition" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#architecture" className="block py-2 text-gray-300 hover:text-cyan-400 transition" onClick={() => setMobileMenuOpen(false)}>
              Architecture
            </a>
            <a href="#outcomes" className="block py-2 text-gray-300 hover:text-cyan-400 transition" onClick={() => setMobileMenuOpen(false)}>
              Outcomes
            </a>
            <a href="#team" className="block py-2 text-gray-300 hover:text-cyan-400 transition" onClick={() => setMobileMenuOpen(false)}>
              Team
            </a>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold btn-primary">
              Get Started
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-8 backdrop-blur-sm scroll-animate">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">AI-Powered Threat Intelligence</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight scroll-animate" style={{ transitionDelay: '100ms' }}>
              Next-Generation Firewall
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400 scroll-animate" style={{ transitionDelay: '200ms' }}>
              AI-Driven Dynamic Threat Detection
            </h2>

            <p className="text-xl text-slate-300 mb-12 leading-relaxed scroll-animate" style={{ transitionDelay: '300ms' }}>
              Revolutionizing network security with deep learning, zero trust architecture, and federated intelligence to combat advanced persistent threats in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 scroll-animate" style={{ transitionDelay: '400ms' }}>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-lg shadow-2xl flex items-center justify-center btn-primary">
                View Demo <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-lg border border-white/20 btn-secondary">
                Technical Docs
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric, idx) => (
                <div key={idx} className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 scroll-animate metric-card" style={{ transitionDelay: `${500 + idx * 100}ms` }}>
                  <metric.icon className="w-6 h-6 text-cyan-400 mb-2" />
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{metric.value}</div>
                  <div className="text-xs text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Robot */}
          <div className="relative lg:block hidden mb-44">
            <div className="spline-container">
              {splineLoaded ? (
                <spline-viewer
                  url="https://prod.spline.design/gFgN9z32sWWamBJR/scene.splinecode"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                    <p className="text-slate-400">Loading 3D Model...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Problem Statement Section */}
  <section className="relative py-24">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            The Critical Challenge
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Traditional firewalls are failing against modern threat landscapes characterized by AI-driven attacks, encrypted malware, and sophisticated evasion techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20 backdrop-blur-sm scroll-animate card-hover">
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

          <div className="p-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm scroll-animate card-hover" style={{ transitionDelay: '200ms' }}>
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

  {/* Features Grid */ }
  <section id="features" className="relative py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 scroll-animate">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Revolutionary Capabilities</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Combining cutting-edge AI/ML with zero trust principles for adaptive, intelligent security enforcement.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 scroll-animate feature-card"
            style={{ transitionDelay: `${idx * 100}ms` }}
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

  {/* Architecture Section */ }
  <section id="architecture" className="relative py-24">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Architecture</h2>
          <p className="text-xl text-slate-300">
            Enterprise-grade components engineered for performance, scalability, and intelligence.
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-8 bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl border border-purple-500/20 backdrop-blur-sm scroll-animate arch-card">
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

          <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-2xl border border-cyan-500/20 backdrop-blur-sm scroll-animate arch-card" style={{ transitionDelay: '100ms' }}>
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

          <div className="p-8 bg-gradient-to-r from-green-500/10 to-transparent rounded-2xl border border-green-500/20 backdrop-blur-sm scroll-animate arch-card" style={{ transitionDelay: '200ms' }}>
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

          <div className="p-8 bg-gradient-to-r from-orange-500/10 to-transparent rounded-2xl border border-orange-500/20 backdrop-blur-sm scroll-animate arch-card" style={{ transitionDelay: '300ms' }}>
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

  {/* Expected Outcomes */ }
  <section id="outcomes" className="relative py-24">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Expected Outcomes
          </h2>
          <p className="text-xl text-slate-300">
            Production-ready prototype validated for enterprise-scale deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 scroll-animate">
            {[
              "Sub-second detection and mitigation of zero-day attacks and polymorphic malware",
              "Seamless Zero Trust enforcement with adaptive access controls",
              "Predictive threat modeling through continuous learning pipelines",
              "40+ Gbps inspection throughput with <1ms latency overhead"
            ].map((outcome, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-green-500/20 transition-all duration-300 hover:border-green-500/60 hover:bg-white/10 hover:transform hover:translate-x-2">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{outcome}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 scroll-animate" style={{ transitionDelay: '200ms' }}>
            {[
              "Multi-cloud, hybrid, and on-premise deployment compatibility",
              "Edge computing support for IoT/IIoT ecosystems",
              "NIST SP 800-207 and ISO/IEC 27001 compliance",
              "MITRE ATT&CK framework integration for TTP mapping"
            ].map((outcome, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-green-500/20 transition-all duration-300 hover:border-green-500/60 hover:bg-white/10 hover:transform hover:translate-x-2">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Team Section */ }
  <section id="team" className="relative py-24">
    <div className="container mx-auto px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expert Team</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Cybersecurity professionals and AI researchers collaborating to build the future of network security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 scroll-animate team-card"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full border-2 border-cyan-500/30 group-hover:border-cyan-500/60 transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Shield className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-purple-300 mb-3">{member.expertise}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{member.contribution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section */ }
  <section className="relative py-24">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            Ready to Transform Your Security?
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Join the next generation of cybersecurity with AI-driven threat detection and zero trust architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-lg shadow-2xl flex items-center justify-center btn-primary">
              Schedule Demo <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-10 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-lg border border-white/20 btn-secondary">
              Download Whitepaper
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */ }
  <footer className="relative py-20">
    <div className="container mx-auto px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl shadow-lg shadow-cyan-500/20">
                <Shield className="w-7 h-7" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                ThreatBuster
              </span>
            </div>
            <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
              Next-generation firewall with AI-powered threat detection, zero trust architecture, and federated intelligence for enterprise-grade security.
            </p>

            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500/50 text-white placeholder:text-slate-500 transition"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="group p-3 bg-white/5 rounded-lg hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-cyan-600/20 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <Globe className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition" />
                </a>
                <a href="#" className="group p-3 bg-white/5 rounded-lg hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-cyan-600/20 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <Cloud className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition" />
                </a>
                <a href="#" className="group p-3 bg-white/5 rounded-lg hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-cyan-600/20 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <Network className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full mr-3"></div>
              Product
            </h3>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#features" className="hover:text-cyan-400 transition flex items-center group">
                <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition" />
                Features
              </a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition flex items-center group">
                <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition" />
                Architecture
              </a></li>
              <li><a href="#outcomes" className="hover:text-cyan-400 transition flex items-center group">
                <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition" />
                Outcomes
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full mr-3"></div>
              Company
            </h3>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#team" className="hover:text-cyan-400 transition flex items-center group">
                <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition" />
                Team
              </a></li>
              <li><a href="#" className="hover:text-cyan-400 transition flex items-center group">
                <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition" />
                About Us
              </a></li>
              <li><a href="#" className="hover:text-cyan-400 transition flex items-center group">
                <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition" />
                Contact
              </a></li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-y border-white/10 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-xl mb-3 border border-white/10">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <p className="text-xs text-slate-400 font-semibold">ISO 27001</p>
              <p className="text-xs text-slate-500">Certified</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-xl mb-3 border border-white/10">
                <Lock className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-xs text-slate-400 font-semibold">SOC 2 Type II</p>
              <p className="text-xs text-slate-500">Compliant</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-xl mb-3 border border-white/10">
                <Brain className="w-8 h-8 text-green-400" />
              </div>
              <p className="text-xs text-slate-400 font-semibold">GDPR</p>
              <p className="text-xs text-slate-500">Ready</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-xl mb-3 border border-white/10">
                <Network className="w-8 h-8 text-orange-400" />
              </div>
              <p className="text-xs text-slate-400 font-semibold">NIST 800-207</p>
              <p className="text-xs text-slate-500">Aligned</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-slate-400">
            <p>© 2024 ThreatBuster. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">All Systems Operational</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition">Security</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  {/* Floating Scroll to Top Button */ }
  {
    showScrollTop && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    )
  }
  </SpaceBackground>
  );
};

export default NGFWLandingPage;
