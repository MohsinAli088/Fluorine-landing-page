"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUp,
  Award,
  Check,
  ChevronDown,
  CircleCheck,
  Copy,
  Crown,
  Disc,
  Flame,
  Globe,
  Headphones,
  Lock,
  Menu,
  MessageSquare,
  Moon,
  Play,
  Radio,
  RotateCcw,
  Search,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  Star,
  Terminal,
  Ticket,
  Users,
  Volume2,
  X,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Interactive Cyber Particle Constellation Canvas
function CyberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 32), 48);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.18;
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw & update particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(96, 165, 250, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-35"
    />
  );
}

// Background Atmospheric Glow & Cyber Grids
function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <CyberCanvas />
      {/* Deep blue radial glow meshes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.22),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.15),transparent_45%),radial-gradient(circle_at_50%_70%,rgba(29,78,216,0.18),transparent_50%),linear-gradient(180deg,#030712_0%,#040a18_50%,#020612_100%)]" />

      {/* Cyber Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />

      {/* Atmospheric glowing orbs */}
      <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px] animate-pulse-slow" />
      <div
        className="absolute -right-32 top-1/3 h-[450px] w-[450px] rounded-full bg-sky-500/10 blur-[140px] animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute left-1/3 bottom-1/4 h-80 w-80 rounded-full bg-indigo-600/12 blur-[120px] animate-pulse-slow"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}

// Top Scroll Progress Line
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setProgress((window.scrollY / total) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{ width: `${progress}%` }}
      className="fixed top-0 left-0 h-[2.5px] z-[120] bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300 transition-all duration-75 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
    />
  );
}

// Back To Top Floating Action Button
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600/90 text-white shadow-lg shadow-blue-600/40 border border-blue-400/40 backdrop-blur-md hover:bg-blue-500 hover:scale-110 active:scale-95 transition-all"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

// Spotlight Interactive Mouse-Following Card
function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#060e1e] to-[#0a162b] transition-all duration-300 hover:border-blue-400/60 ${className}`}
    >
      {/* Mouse follow radial glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(320px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.22), transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Floating Pill Glass Navbar
function Navbar({
  onOpenCommands,
  onOpenPricing,
  onOpenFAQ,
}: {
  onOpenCommands: () => void;
  onOpenPricing: () => void;
  onOpenFAQ: () => void;
}) {
  const [open, setOpen] = useState(false);

  const handleNavAction = (name: string) => {
    if (name === "Commands") onOpenCommands();
    else if (name === "Pricing" || name === "Premium") onOpenPricing();
    else if (name === "FAQ") onOpenFAQ();
  };

  return (
    <header className="fixed top-4 left-0 w-full z-[100] px-4 transition-all duration-500 ease-out">
      <div className="max-w-7xl mx-auto relative">
        <nav
          className="
            relative transition-all duration-500 rounded-full h-16 md:h-20 px-3 md:px-6 flex items-center justify-between
            backdrop-blur-2xl border border-white/10 shadow-2xl
            bg-[#050b18]/80
            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none
          "
        >
          {/* Logo & Brand with Bot Image */}
          <div className="flex items-center gap-3 relative z-10">
            <Link
              href="#home"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-blue-600/30 border border-blue-400/40 bg-black shrink-0"
            >
              <Image
                src={siteConfig.botLogo}
                alt={siteConfig.botName}
                width={48}
                height={48}
                priority
                unoptimized
                className="w-full h-full object-cover"
              />
            </Link>
            <Link href="#home" className="hidden lg:block font-orbitron font-bold text-xl text-white tracking-wider uppercase">
              {siteConfig.botName}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-9 relative z-10">
            {siteConfig.nav.map((item) => {
              const isModal =
                item.name === "Commands" ||
                item.name === "Pricing" ||
                item.name === "Premium" ||
                item.name === "FAQ";
              return (
                <li key={item.name}>
                  {isModal ? (
                    <button
                      type="button"
                      onClick={() => handleNavAction(item.name)}
                      className="font-orbitron text-[11px] lg:text-xs font-semibold transition-all tracking-[0.2em] relative group uppercase text-white/70 hover:text-white cursor-pointer"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 w-0 opacity-0 group-hover:w-full group-hover:opacity-100 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-orbitron text-[11px] lg:text-xs font-semibold transition-all tracking-[0.2em] relative group uppercase text-white/70 hover:text-white"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 w-0 opacity-0 group-hover:w-full group-hover:opacity-100 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 relative z-10">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={siteConfig.links.invite}
              className="bg-white/90 backdrop-blur-md text-slate-950 px-5 lg:px-6 py-2.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase hover:bg-white transition-all active:scale-95 shadow-lg border border-white/20"
            >
              Invite Bot
            </Link>
            <Link
              href={siteConfig.links.dashboard}
              className="px-5 lg:px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-orbitron text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_24px_rgba(37,99,235,0.7)] active:scale-95"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3 relative z-10">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {open && (
          <div className="mt-3 w-full rounded-2xl border border-blue-500/20 bg-[#060e1d]/95 p-5 backdrop-blur-2xl md:hidden shadow-2xl animate-fade-in-up">
            <div className="flex flex-col space-y-3">
              {siteConfig.nav.map((item) => {
                const isModal =
                  item.name === "Commands" ||
                  item.name === "Pricing" ||
                  item.name === "Premium" ||
                  item.name === "FAQ";
                return isModal ? (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      handleNavAction(item.name);
                    }}
                    className="w-full text-left font-orbitron text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 hover:text-blue-400 py-2 border-b border-white/5 cursor-pointer"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-orbitron text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 hover:text-blue-400 py-2 border-b border-white/5"
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-3 flex flex-col gap-3">
                <Link
                  href={siteConfig.links.invite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-white text-slate-950 font-orbitron font-bold text-xs uppercase tracking-wider py-3 rounded-xl"
                >
                  Invite Bot
                </Link>
                <Link
                  href={siteConfig.links.dashboard}
                  className="w-full text-center bg-blue-600 text-white font-orbitron font-bold text-xs uppercase tracking-wider py-3 rounded-xl"
                >
                  Open Dashboard
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Hero Section with Orbiting Cyber Radar Visual
function Hero({ onOpenCommands }: { onOpenCommands: () => void }) {
  return (
    <section id="home" className="relative z-20 pt-28 md:pt-36 pb-6 md:pb-8 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in-up">
            {/* Badges row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 font-orbitron font-medium text-xs md:text-sm tracking-wider uppercase">
                  {siteConfig.badge}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-inter">
                  Developed by <span className="text-blue-400 font-bold font-orbitron">{siteConfig.developer}</span> · <span className="text-sky-300 font-bold font-orbitron">{siteConfig.teamName}</span>
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-white">
              The Ultimate
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 animate-gradient">
                Discord Bot
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-inter">
              {siteConfig.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 md:mb-10">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={siteConfig.links.invite}
                className="group relative inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 md:py-5 rounded-xl font-orbitron font-bold tracking-wider text-sm md:text-base overflow-hidden shadow-lg shadow-blue-600/35 active:scale-95 transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ADD TO DISCORD
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity animate-gradient" />
              </Link>

              <Link
                href={siteConfig.links.dashboard}
                className="inline-flex items-center justify-center gap-2 border border-blue-500/30 hover:border-blue-400/60 bg-white/[0.04] hover:bg-blue-600/10 text-white px-8 py-4 md:py-5 rounded-xl font-orbitron font-bold tracking-wider text-sm md:text-base backdrop-blur-md transition-all active:scale-95 shadow-sm"
              >
                OPEN DASHBOARD
              </Link>
            </div>

            {/* Trust Checkmarks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs md:text-sm text-slate-400 font-inter">
              <div className="flex items-center gap-2">
                <CircleCheck className="w-4 h-4 text-emerald-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Military-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-sky-400" />
                <span>Blazing Fast Latency</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Rotating Cyber Orbit Rings & Floating Bot Emblem */}
          <div className="w-full lg:w-1/2 relative animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative max-w-lg mx-auto aspect-square flex items-center justify-center">
              {/* Rotating Concentric Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Outermost Radar Ring */}
                <div className="w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-full border border-blue-500/20 animate-[spin_24s_linear_infinite]" />
                {/* Middle Dashed Ring */}
                <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border border-dashed border-sky-400/30 animate-[spin_16s_linear_infinite_reverse]" />
                {/* Inner Glowing Ring */}
                <div className="absolute w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border border-blue-400/40 animate-[spin_10s_linear_infinite]" />
              </div>

              {/* Center Floating Core Orb with Bot Logo */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-blue-600/30 via-sky-500/15 to-blue-900/40 backdrop-blur-xl border border-blue-400/40 flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.4)] animate-float">
                <div className="relative flex flex-col items-center justify-center text-center p-2">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-blue-400/60 shadow-[0_0_35px_rgba(59,130,246,0.6)] bg-black">
                    <Image
                      src={siteConfig.botLogo}
                      alt={siteConfig.botName}
                      width={140}
                      height={140}
                      priority
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-2 font-orbitron font-extrabold text-xs sm:text-sm tracking-widest text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {siteConfig.botName}
                  </span>
                </div>
              </div>

              {/* Floating Status Pill 1: Top Right */}
              <div className="absolute -top-2 right-4 sm:right-10 px-4 py-2.5 rounded-xl bg-[#081226]/90 border border-blue-500/30 shadow-xl shadow-black/40 backdrop-blur-md flex items-center gap-2.5 animate-float">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-xs sm:text-sm font-medium text-white font-orbitron">Anti-Nuke Active</span>
              </div>

              {/* Floating Status Pill 2: Middle Right */}
              <button
                type="button"
                onClick={onOpenCommands}
                className="absolute top-1/2 -right-4 sm:-right-8 px-4 py-2.5 rounded-xl bg-[#081226]/90 border border-blue-500/30 shadow-xl shadow-black/40 backdrop-blur-md flex items-center gap-2.5 animate-float hover:border-blue-400 hover:bg-blue-950/70 transition-all cursor-pointer text-left"
                style={{ animationDelay: "1.5s" }}
              >
                <Zap className="w-4 h-4 text-sky-400" />
                <span className="text-xs sm:text-sm font-medium text-white font-orbitron">300+ Commands →</span>
              </button>

              {/* Floating Status Pill 3: Bottom Left */}
              <div
                className="absolute -bottom-2 left-4 sm:left-8 px-4 py-2.5 rounded-xl bg-[#081226]/90 border border-blue-500/30 shadow-xl shadow-black/40 backdrop-blur-md flex items-center gap-2.5 animate-float"
                style={{ animationDelay: "2.5s" }}
              >
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm font-medium text-white font-orbitron">&lt; 300ms Ping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Counter Grid Section with SpotlightCards
function Stats() {
  const statsList = [
    { label: "Active Servers", value: "14,000+", icon: Server },
    { label: "Uptime", value: "99.9%", icon: CircleCheck },
    { label: "Users Protected", value: "4M+", icon: Users },
    { label: "Commands Executed", value: "50M+", icon: MessageSquare },
  ];

  return (
    <section className="pt-2 pb-14 md:pb-16 relative z-20">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((item) => (
            <SpotlightCard key={item.label} className="p-8 cursor-pointer shadow-lg shadow-black/30 group">
              {/* Icon box */}
              <div className="w-14 h-14 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(37,99,235,0.35)] transition-all duration-300">
                <item.icon className="h-7 w-7 text-blue-400 group-hover:text-sky-300 transition-colors" />
              </div>

              {/* Number */}
              <div className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white mb-2 break-words">
                {item.value}
              </div>

              {/* Label */}
              <div className="text-slate-400 uppercase text-xs sm:text-sm tracking-widest font-inter font-medium">
                {item.label}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// "Why Choose" Premium Features Section
function Features() {
  const coreFeatures = [
    {
      title: "Advanced Security",
      text: "Military-grade protection with real-time threat detection and automated response systems.",
      icon: ShieldAlert,
    },
    {
      title: "Anti-Nuke System",
      text: "Prevent server destruction with instant rollback, permission lockdowns, and audit logging.",
      icon: Lock,
    },
    {
      title: "Night Mode",
      text: "Automated security lockdown during off-hours with customizable schedules and triggers.",
      icon: Moon,
    },
    {
      title: "Analytics",
      text: "Comprehensive insights into server activity, member growth, and moderation statistics.",
      icon: Activity,
    },
  ];

  return (
    <section id="features" className="py-24 relative z-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 mb-6 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <Crown className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-orbitron font-medium text-xs md:text-sm tracking-wide uppercase">
              PREMIUM FEATURES
            </span>
          </div>

          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              {siteConfig.botName}
            </span>
          </h2>

          <p className="text-slate-300 text-base md:text-lg font-inter leading-relaxed">
            Built for server owners who demand excellence. {siteConfig.botName} combines powerful security, seamless
            automation, and premium features in one comprehensive bot.
          </p>
        </div>

        {/* 4 Flagship Feature Cards with Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((item) => (
            <SpotlightCard key={item.title} className="p-8 cursor-pointer shadow-xl shadow-black/40 group">
              <div className="w-14 h-14 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(37,99,235,0.4)] transition-all duration-300">
                <item.icon className="h-7 w-7 text-blue-400 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="font-orbitron text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed font-inter text-sm">{item.text}</p>
            </SpotlightCard>
          ))}
        </div>

        {/* Secondary Modules Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.featureCards.map((feature) => (
            <div
              key={feature.title}
              className="p-5 rounded-xl border border-blue-500/15 bg-[#071122]/70 backdrop-blur-sm hover:border-blue-400/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </span>
                <h4 className="font-orbitron font-semibold text-white text-base">{feature.title}</h4>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-inter">
                {feature.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "Loved by Communities" Infinite Scrolling Carousel (Authentic Discord Server Cards)
function CommunityShowcase() {
  const guilds = siteConfig.communityServers;

  return (
    <section className="py-24 relative z-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-blue-300 font-orbitron font-medium text-xs md:text-sm tracking-wide uppercase">
              COMMUNITY SERVERS
            </span>
          </div>

          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Loved by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Communities
            </span>
          </h2>

          <p className="text-slate-300 text-base md:text-lg font-inter">
            Join thousands of active servers protected by {siteConfig.botName}
          </p>
        </div>

        {/* Infinite Scrolling Track */}
        <div className="relative w-full overflow-hidden py-6">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-l from-[#030712] via-[#030712]/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Row */}
          <div className="flex gap-6 w-max animate-server-scroll hover:pause-animation">
            {[...guilds, ...guilds].map((guild, idx) => (
              <div
                key={`${guild.name}-${idx}`}
                className="relative w-[320px] sm:w-[350px] bg-[#091325] rounded-2xl overflow-hidden flex-shrink-0 border border-blue-500/20 hover:border-blue-400 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 ease-out cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(37,99,235,0.3)] group"
              >
                {/* Banner image */}
                <div className="relative h-[135px] overflow-hidden bg-gradient-to-br from-blue-950 to-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={guild.banner}
                    alt={guild.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091325] via-transparent to-transparent opacity-80" />
                </div>

                {/* Server Avatar overlapping */}
                <div className="absolute top-[95px] left-5 w-18 h-18 rounded-full border-[4px] border-[#091325] overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.6)] z-20 bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={guild.icon} alt={guild.name} className="w-full h-full object-cover" />
                </div>

                {/* Verified Badge */}
                {guild.verified && (
                  <div className="absolute top-[98px] left-[70px] w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-[3px] border-[#091325] z-30 shadow-md">
                    ✓
                  </div>
                )}

                {/* Card Body */}
                <div className="pt-[46px] px-5 pb-5">
                  <h3 className="text-white text-xl font-bold mb-2 font-orbitron truncate">{guild.name}</h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4 h-9 overflow-hidden line-clamp-2 font-inter">
                    {guild.description}
                  </p>

                  {/* Online & Members count */}
                  <div className="flex gap-6 mb-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-slate-500 text-[10px] uppercase font-semibold tracking-wider font-orbitron">
                        Online
                      </span>
                      <span className="text-white text-sm font-semibold flex items-center gap-1.5 font-inter">
                        <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-pulse-glow" />
                        {guild.online}
                      </span>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <span className="text-slate-500 text-[10px] uppercase font-semibold tracking-wider font-orbitron">
                        Members
                      </span>
                      <span className="text-white text-sm font-semibold font-inter">{guild.members}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {guild.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-600/15 text-blue-300 border border-blue-500/25 px-2.5 py-1 rounded-lg text-[10px] font-semibold font-orbitron"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Senior-Dev Level Interactive System Operations & Bot Simulator
function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"security" | "music" | "console" | "telemetry">("security");
  const [consoleCommand, setConsoleCommand] = useState("/antinuke status");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simLogs, setSimLogs] = useState([
    { type: "ok", time: "14:45:10", msg: "Anti-Raid Sentinel: Armed and scanning 14,025 guilds" },
    { type: "info", time: "14:44:52", msg: "Hi-Fi Audio Node #3 connected to European cluster (18ms)" },
    { type: "ok", time: "14:42:01", msg: "Raid burst blocked: 18 rogue accounts quarantined instantly" },
  ]);

  const runSimulation = (cmd: string) => {
    setConsoleCommand(cmd);
    setIsSimulating(true);
    setTimeout(() => {
      setSimLogs((prev) => [
        {
          type: "cmd",
          time: new Date().toLocaleTimeString(),
          msg: `Executed: ${cmd} -> Result: Success [status code 200 OK]`,
        },
        ...prev.slice(0, 4),
      ]);
      setIsSimulating(false);
    }, 450);
  };

  return (
    <section id="dashboard" className="py-24 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 mb-4 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <Activity className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-orbitron font-medium text-xs tracking-wider uppercase">
              NEXT-GEN ENGINE DEMO
            </span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Interactive Bot Operations Center
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-inter">
            Test the live telemetry, simulated slash commands, and audio visualizer in real time.
          </p>
        </div>

        {/* Console Hub Shell */}
        <div className="max-w-6xl mx-auto rounded-3xl border border-blue-500/25 bg-[#060e1d]/90 p-5 md:p-8 shadow-[0_20px_60px_rgba(37,99,235,0.2)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
            {/* Sidebar Navigation */}
            <aside className="rounded-2xl border border-blue-500/15 bg-[#081326] p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 px-3 py-2 text-slate-300 font-inter font-semibold text-xs tracking-wider uppercase border-b border-blue-500/20 pb-3 mb-3">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Operations Matrix</span>
                </div>
                <ul className="space-y-1.5">
                  {[
                    { id: "security", label: "Anti-Nuke Sentinel", icon: ShieldAlert },
                    { id: "music", label: "384k Audio Node", icon: Headphones },
                    { id: "console", label: "Slash Simulator", icon: Terminal },
                    { id: "telemetry", label: "Node Telemetry", icon: Activity },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <li key={tab.id}>
                        <button
                          type="button"
                          onClick={() => setActiveTab(tab.id as typeof activeTab)}
                          className={`group w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-inter text-xs sm:text-[13px] font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40"
                              : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 shrink-0 transition-colors ${
                              isActive ? "text-white" : "text-slate-400 group-hover:text-blue-400"
                            }`}
                          />
                          <span>{tab.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="pt-4 border-t border-blue-500/15 mt-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-inter">
                  <span className="font-medium">Cluster Ping</span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" /> 19ms
                  </span>
                </div>
              </div>
            </aside>

            {/* Dynamic Console View */}
            <div className="rounded-2xl border border-blue-500/15 bg-[#081326] p-5 md:p-6 min-h-[380px] flex flex-col justify-between">
              {/* Tab 1: Anti-Nuke Sentinel */}
              {activeTab === "security" && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-500/15 pb-4">
                    <div>
                      <h4 className="font-orbitron font-bold text-base text-white flex items-center gap-2">
                        <Shield className="w-5 h-5 text-blue-400" />
                        Anti-Nuke Threat Defense Matrix
                      </h4>
                      <p className="text-xs text-slate-400">Continuous audit verification with instant rollback</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-orbitron font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" /> DEFENSE ACTIVE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/20">
                      <p className="text-xs text-slate-400">Mass Channel Deletion</p>
                      <p className="text-base font-orbitron font-bold text-white mt-1">Blocked &lt; 80ms</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/20">
                      <p className="text-xs text-slate-400">Rogue Bot Kick Wave</p>
                      <p className="text-base font-orbitron font-bold text-white mt-1">Zero-Trust Quarantine</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/20">
                      <p className="text-xs text-slate-400">Admin Permission Revocation</p>
                      <p className="text-base font-orbitron font-bold text-emerald-400 mt-1">Instant Rollback</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-blue-500/20 font-mono text-xs text-slate-300 space-y-1.5">
                    <p className="text-blue-400 font-bold">▶ REAL-TIME SECURITY TELEMETRY FEED</p>
                    {simLogs.map((log, i) => (
                      <p key={i} className="flex gap-2">
                        <span className="text-slate-500">[{log.time}]</span>
                        <span className={log.type === "ok" ? "text-emerald-400" : log.type === "cmd" ? "text-sky-300" : "text-blue-400"}>
                          {log.msg}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Lossless Hi-Fi Audio Node */}
              {activeTab === "music" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-blue-500/15 pb-4">
                    <div>
                      <h4 className="font-orbitron font-bold text-base text-white flex items-center gap-2">
                        <Headphones className="w-5 h-5 text-blue-400" />
                        Lossless 384kbps Hi-Fi Audio Engine
                      </h4>
                      <p className="text-xs text-slate-400">Low-latency bufferless streaming with 8D Equalizer</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-orbitron font-bold">
                      STEREO 384 KBPS
                    </span>
                  </div>

                  {/* Player Simulation Widget */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/50 to-[#0b1b36] border border-blue-500/25 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/40 shrink-0">
                        <Disc className="w-8 h-8 text-white animate-[spin_8s_linear_infinite]" />
                      </div>
                      <div>
                        <p className="text-xs text-blue-400 font-orbitron font-semibold uppercase">Currently Playing</p>
                        <p className="text-sm font-bold text-white">Cyber City - Night Drive (Synthwave Mix)</p>
                        <p className="text-xs text-slate-400">Queued by @Mohsin.Exe · 24/7 Node Active</p>
                      </div>
                    </div>

                    {/* Animated Soundwave Bars */}
                    <div className="flex items-end gap-1.5 h-8 px-4">
                      {[12, 24, 18, 28, 16, 26, 14, 28, 22, 16, 25, 18].map((h, idx) => (
                        <div
                          key={idx}
                          style={{
                            height: `${h}px`,
                            animationDelay: `${idx * 0.1}s`,
                          }}
                          className="w-1.5 bg-gradient-to-t from-blue-600 to-sky-400 rounded-full animate-soundwave"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Audio Controls */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <button
                      type="button"
                      onClick={() => runSimulation("/volume 100%")}
                      className="p-3 rounded-xl bg-blue-950/30 hover:bg-blue-900/40 border border-blue-500/20 text-xs font-orbitron font-bold text-white transition-all flex items-center justify-center gap-2"
                    >
                      <Volume2 className="w-4 h-4 text-blue-400" /> Bass Boost: ON
                    </button>
                    <button
                      type="button"
                      onClick={() => runSimulation("/filter 8d")}
                      className="p-3 rounded-xl bg-blue-950/30 hover:bg-blue-900/40 border border-blue-500/20 text-xs font-orbitron font-bold text-white transition-all flex items-center justify-center gap-2"
                    >
                      <Sliders className="w-4 h-4 text-sky-400" /> 8D Surround
                    </button>
                    <button
                      type="button"
                      onClick={() => runSimulation("/loop queue")}
                      className="p-3 rounded-xl bg-blue-950/30 hover:bg-blue-900/40 border border-blue-500/20 text-xs font-orbitron font-bold text-white transition-all flex items-center justify-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4 text-indigo-400" /> 24/7 Loop
                    </button>
                    <button
                      type="button"
                      onClick={() => runSimulation("/play lofi")}
                      className="p-3 rounded-xl bg-blue-600 hover:bg-blue-500 border border-blue-400/40 text-xs font-orbitron font-bold text-white transition-all flex items-center justify-center gap-2 shadow-md"
                    >
                      <Play className="w-4 h-4 text-white" /> Play Sample
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 3: Interactive Slash Command Console */}
              {activeTab === "console" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-blue-500/15 pb-4">
                    <div>
                      <h4 className="font-orbitron font-bold text-base text-white flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-blue-400" />
                        Live Slash Command Terminal
                      </h4>
                      <p className="text-xs text-slate-400">Click a preset command to simulate instant response</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400">latency: 18ms</span>
                  </div>

                  {/* Preset command pills */}
                  <div className="flex flex-wrap gap-2">
                    {["/antinuke setup", "/ban @spammer raid", "/play synthwave", "/autorole config", "/level rank"].map((cmd) => (
                      <button
                        key={cmd}
                        type="button"
                        onClick={() => runSimulation(cmd)}
                        className="px-3 py-1.5 rounded-lg bg-blue-950/60 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-mono transition-all"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>

                  {/* Terminal Window */}
                  <div className="p-4 rounded-xl bg-black/60 border border-blue-500/30 font-mono text-xs min-h-[160px] text-slate-200">
                    <p className="text-slate-500">▶ Terminal connected: discord.gateway.v10</p>
                    <p className="text-blue-400 mt-2 font-bold flex items-center gap-1.5">
                      <span>$</span> {consoleCommand}
                      {isSimulating && <span className="animate-pulse">_</span>}
                    </p>
                    <div className="mt-3 p-3 rounded-lg bg-[#0b162c] border-l-4 border-blue-500 text-xs text-slate-300 space-y-1">
                      <p className="text-white font-bold font-orbitron">{siteConfig.botName} Security Engine</p>
                      <p className="text-emerald-400">✓ Command verified and dispatched across guild cluster</p>
                      <p className="text-slate-400">Latency: 18ms · Audit action recorded · Channel locked</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Node Telemetry & Activity Wave */}
              {activeTab === "telemetry" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-blue-500/15 pb-4">
                    <div>
                      <h4 className="font-orbitron font-bold text-base text-white flex items-center gap-2">
                        <Activity className="w-5 h-5 text-blue-400" />
                        Cluster Telemetry & Traffic Stream
                      </h4>
                      <p className="text-xs text-slate-400">Real-time throughput across global Discord shards</p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-bold">+18.4% Peak Load</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Shard Health", val: "100% OK", col: "text-emerald-400" },
                      { label: "Active Nodes", val: "16 Dedicated", col: "text-blue-400" },
                      { label: "Events/sec", val: "4,920/s", col: "text-sky-300" },
                      { label: "CPU Usage", val: "12.4%", col: "text-indigo-300" },
                    ].map((item) => (
                      <div key={item.label} className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/20">
                        <p className="text-[11px] text-slate-400 font-inter">{item.label}</p>
                        <p className={`font-orbitron font-bold text-sm sm:text-base mt-1 ${item.col}`}>{item.val}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-orbitron font-semibold text-slate-300">Throughput (Last 24h)</span>
                      <span className="text-xs text-slate-400 font-mono">50M+ commands handled</span>
                    </div>
                    <div className="flex h-24 items-end gap-2 pt-2">
                      {[35, 48, 42, 65, 82, 70, 94, 88, 76, 92, 100, 85].map((val, idx) => (
                        <div
                          key={idx}
                          style={{ height: `${val}%` }}
                          className="flex-1 rounded-sm bg-gradient-to-t from-blue-600/40 via-blue-500/80 to-sky-400 hover:brightness-125 transition-all"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Quick Action */}
              <div className="pt-4 mt-4 border-t border-blue-500/15 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-400 font-inter">Ready to deploy these modules to your community?</span>
                <Link
                  href={siteConfig.links.invite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-orbitron text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-blue-600/30"
                >
                  Deploy to Discord →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sleek Teaser Banner on Main Page for 300+ Commands Library
function CommandsTeaser({ onOpenCommands }: { onOpenCommands: () => void }) {
  return (
    <section className="py-6 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto rounded-2xl border border-blue-500/25 bg-gradient-to-r from-blue-950/40 via-[#09152b] to-blue-950/40 p-5 md:p-6 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl hover:border-blue-400/50 transition-all">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-base text-white">300+ Slash Commands Arsenal</h3>
              <p className="text-xs text-slate-300 font-inter">Explore moderation, security, audio, and utility syntaxes in our library.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenCommands}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-orbitron text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 shrink-0 flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            Explore Commands <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Full-Featured Command Explorer Modal Overlay (Opens on click)
function CommandsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedCmd(name);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const filteredCommands = useMemo(() => {
    return siteConfig.commands.filter((cmd) => {
      const matchCat = activeCategory === "All" || cmd.category === activeCategory;
      const matchText =
        cmd.name.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.usage.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchText;
    });
  }, [query, activeCategory]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in-up"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-3xl border border-blue-500/30 bg-[#060e1f] shadow-[0_0_80px_rgba(37,99,235,0.35)] flex flex-col"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-blue-500/20 flex items-center justify-between bg-[#081328]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-lg text-white">Command Explorer</h3>
              <p className="text-xs text-slate-400 font-inter">Click any command to copy its syntax</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close command explorer"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-blue-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 300+ slash commands (e.g. /ban, /antinuke, /play)..."
              className="w-full bg-[#081326] border border-blue-500/30 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 transition-colors outline-none"
              autoFocus
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {siteConfig.commandCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-orbitron font-semibold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-blue-950/40 text-slate-400 hover:text-white hover:bg-blue-900/30 border border-blue-500/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Commands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredCommands.map((cmd) => {
              const isCopied = copiedCmd === cmd.name;
              return (
                <div
                  key={cmd.name}
                  onClick={() => handleCopy(cmd.name)}
                  className="p-4 rounded-xl border border-blue-500/15 bg-[#081328] hover:border-blue-400/50 hover:bg-[#0c1c38] transition-all cursor-pointer group relative"
                  title="Click to copy command"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-orbitron font-bold text-sm text-blue-300 group-hover:text-white transition-colors flex items-center gap-1.5">
                      {cmd.name}
                      {isCopied ? (
                        <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/20 px-1.5 py-0.5 rounded">
                          Copied! ✓
                        </span>
                      ) : (
                        <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-slate-400 transition-opacity" />
                      )}
                    </span>
                    <span className="text-[9px] font-orbitron uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-600/20 text-blue-300 border border-blue-500/30">
                      {cmd.category}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2 font-inter">
                    {cmd.description}
                  </p>
                  <div className="space-y-0.5 font-mono text-[10px] pt-2 border-t border-white/5">
                    <p className="text-slate-500 truncate">
                      Usage: <span className="text-slate-300">{cmd.usage}</span>
                    </p>
                    <p className="text-slate-500 truncate">
                      Permission: <span className="text-sky-400">{cmd.permission}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-blue-500/20 bg-[#081328] flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Showing {filteredCommands.length} commands</span>
          <span className="text-slate-500">Press Esc to close</span>
        </div>
      </div>
    </div>
  );
}

// Pricing Plans Modal Dialog
function PricingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in-up"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border border-blue-500/30 bg-[#060e1f] shadow-[0_0_80px_rgba(37,99,235,0.35)] flex flex-col"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-blue-500/20 flex items-center justify-between bg-[#081328]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-orbitron font-bold text-lg text-white">Premium Plans & Upgrades</h3>
                <span className="text-[10px] font-orbitron uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Instant Activation
                </span>
              </div>
              <p className="text-xs text-slate-400 font-inter">
                Fair, transparent pricing for Discord communities of any scale
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close pricing modal"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 transition-all flex flex-col justify-between ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-[#0c1f44] to-[#07132a] border-2 border-blue-400 shadow-[0_0_40px_rgba(37,99,235,0.35)]"
                    : "bg-[#070f22]/90 border border-blue-500/20 hover:border-blue-500/40"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-blue-600 text-white font-orbitron text-[10px] font-bold tracking-widest uppercase shadow-md border border-blue-300/40">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h4 className="font-orbitron text-lg font-bold text-white mb-1">{plan.name}</h4>
                  <p className="text-slate-400 text-xs mb-5 font-inter min-h-[32px]">{plan.description}</p>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                    <span className="font-orbitron text-3xl sm:text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-slate-400 text-xs font-inter">{plan.period}</span>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs text-slate-300 font-inter">
                        <Check className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={siteConfig.links.invite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-orbitron font-bold text-center text-xs tracking-wider uppercase transition-all ${
                    plan.highlighted
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-blue-950/30 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
              <p className="text-xs text-slate-300 font-inter">
                Need a custom enterprise SLA or multi-guild bulk license? Contact our founders directly on Discord.
              </p>
            </div>
            <Link
              href={siteConfig.links.support}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-4 py-2 rounded-xl bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 text-blue-300 text-xs font-orbitron font-bold uppercase tracking-wider transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-blue-500/20 bg-[#081328] flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>7-Day Money Back Guarantee</span>
          <span className="text-slate-500">Press Esc to close</span>
        </div>
      </div>
    </div>
  );
}

// Ready to Transform Call-To-Action Banner
function FinalCTA() {
  return (
    <section className="py-28 relative overflow-hidden z-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 mb-8 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-orbitron font-medium text-xs md:text-sm tracking-wide uppercase">
              GET STARTED TODAY
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Ready to Transform
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
              Your Server?
            </span>
          </h2>

          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
            Join thousands of communities that trust {siteConfig.botName} for their moderation, security, and
            entertainment needs. Setup takes less than 2 minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={siteConfig.links.invite}
              className="group relative inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl font-orbitron font-bold tracking-wide text-base md:text-lg overflow-hidden shadow-xl shadow-blue-600/30 active:scale-95 transition-all"
            >
              <span className="relative z-10 flex items-center gap-3">
                ADD TO DISCORD
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity animate-gradient" />
            </Link>

            <Link
              href={siteConfig.links.support}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-blue-500/30 hover:border-blue-400/60 bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-xl font-orbitron font-bold tracking-wide text-base md:text-lg backdrop-blur-sm transition-all active:scale-95"
            >
              JOIN SUPPORT SERVER
            </Link>
          </div>

          {/* 4 Feature Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs sm:text-sm text-slate-400 font-inter">
            <div className="flex items-center gap-2">
              <CircleCheck className="w-5 h-5 text-emerald-400" />
              <span>Free to use</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-sky-400" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>2-minute setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Frequently Asked Questions Modal Dialog
function FAQModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const filteredFaqs = useMemo(() => {
    if (!query.trim()) return siteConfig.faqs;
    const q = query.toLowerCase();
    return siteConfig.faqs.filter(
      (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in-up"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-3xl border border-blue-500/30 bg-[#060e1f] shadow-[0_0_80px_rgba(37,99,235,0.35)] flex flex-col"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-blue-500/20 flex items-center justify-between bg-[#081328]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-lg text-white">Help Center & FAQ</h3>
              <p className="text-xs text-slate-400 font-inter">Answers to frequently asked questions about {siteConfig.botName}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close FAQ modal"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {/* Search bar */}
          <div className="relative mb-2">
            <Search className="w-4 h-4 text-blue-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions (e.g. invite, commands, prefix, pricing)..."
              className="w-full bg-[#081326] border border-blue-500/30 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 transition-colors outline-none"
              autoFocus
            />
          </div>

          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-slate-400 text-sm font-inter">No questions found matching &ldquo;{query}&rdquo;</p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-2xl border border-blue-500/20 bg-[#071124]/80 backdrop-blur-md transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-slate-100 hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      <span className="font-orbitron text-sm">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-blue-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180 text-white" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-blue-500/15 px-5 py-3.5 text-xs sm:text-sm text-slate-300 font-inter leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Support callout */}
          <div className="mt-6 p-4 rounded-2xl bg-blue-950/20 border border-blue-500/20 flex items-center justify-between">
            <div>
              <h5 className="font-orbitron text-xs font-bold text-white">Can&apos;t find what you need?</h5>
              <p className="text-xs text-slate-400 font-inter">Our support team is online 24/7 on Discord</p>
            </div>
            <Link
              href={siteConfig.links.support}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-orbitron font-semibold uppercase tracking-wider transition-colors"
            >
              Ask Support
            </Link>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-blue-500/20 bg-[#081328] flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>{filteredFaqs.length} questions available</span>
          <span className="text-slate-500">Press Esc to close</span>
        </div>
      </div>
    </div>
  );
}

// High-Tech Cyber Footer
function Footer({
  onOpenCommands,
  onOpenPricing,
  onOpenFAQ,
}: {
  onOpenCommands: () => void;
  onOpenPricing: () => void;
  onOpenFAQ: () => void;
}) {
  return (
    <footer className="bg-[#040916] py-12 border-t border-blue-500/20 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-400/40 mr-3 shadow-md bg-black shrink-0">
                <Image
                  src={siteConfig.botLogo}
                  alt={siteConfig.botName}
                  width={40}
                  height={40}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-orbitron font-bold text-xl text-white tracking-wider uppercase">
                {siteConfig.botName}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-inter">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={siteConfig.links.discord}
                className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-all"
                aria-label="Discord Community"
              >
                <Disc className="w-4 h-4" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={siteConfig.links.github}
                className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-all"
                aria-label="GitHub Repository"
              >
                <Globe className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-orbitron font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-slate-400 font-inter">
              <li>
                <Link href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-blue-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCommands}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Commands
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPricing}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  Premium
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenFAQ}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-orbitron font-bold text-white text-sm uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2.5 text-sm text-slate-400 font-inter">
              <li>
                <Link href={siteConfig.links.docs} className="hover:text-blue-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href={siteConfig.links.status} className="hover:text-blue-400 transition-colors">
                  System Status
                </Link>
              </li>
              <li>
                <Link href={siteConfig.links.support} className="hover:text-blue-400 transition-colors">
                  Support Server
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Engineering & Team */}
          <div>
            <h3 className="font-orbitron font-bold text-white text-sm uppercase tracking-wider mb-4">Engineering</h3>
            <ul className="space-y-3 text-sm text-slate-400 font-inter">
              <li>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider font-mono block mb-1">
                  Lead Developer
                </span>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-orbitron font-bold text-sm hover:text-blue-300 transition-colors inline-flex items-center gap-2 group"
                >
                  <span>{siteConfig.developer}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    Author
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider font-mono block mb-1">
                  Development Team
                </span>
                <span className="text-white font-orbitron font-semibold text-xs tracking-wide">
                  {siteConfig.teamName}
                </span>
              </li>
              <li className="pt-2 border-t border-white/5 flex gap-3 text-xs">
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Terms
                </Link>
                <span>·</span>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line with prominent Developer & Team credits */}
        <div className="border-t border-blue-500/15 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p>© 2026 {siteConfig.botName}. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <p className="font-mono text-slate-300">
              Developed by{" "}
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-bold hover:text-blue-300 font-orbitron transition-colors"
              >
                {siteConfig.developer}
              </Link>
              {" · "}
              Development Team{" "}
              <span className="text-sky-300 font-bold font-orbitron">
                {siteConfig.teamName}
              </span>
            </p>
          </div>
          <div className="flex gap-6 font-orbitron text-xs">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Landing Page Root Component
export function FluorineLanding() {
  const [commandsOpen, setCommandsOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030712] text-slate-100">
      <ScrollProgress />
      <Background />
      <Navbar
        onOpenCommands={() => setCommandsOpen(true)}
        onOpenPricing={() => setPricingOpen(true)}
        onOpenFAQ={() => setFaqOpen(true)}
      />
      <Hero onOpenCommands={() => setCommandsOpen(true)} />
      <Stats />
      <Features />
      <CommunityShowcase />
      <DashboardPreview />
      <CommandsTeaser onOpenCommands={() => setCommandsOpen(true)} />
      <FinalCTA />
      <Footer
        onOpenCommands={() => setCommandsOpen(true)}
        onOpenPricing={() => setPricingOpen(true)}
        onOpenFAQ={() => setFaqOpen(true)}
      />
      <CommandsModal isOpen={commandsOpen} onClose={() => setCommandsOpen(false)} />
      <PricingModal isOpen={pricingOpen} onClose={() => setPricingOpen(false)} />
      <FAQModal isOpen={faqOpen} onClose={() => setFaqOpen(false)} />
      <BackToTop />
    </main>
  );
}

