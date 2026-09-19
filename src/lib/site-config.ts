export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl && envUrl.length > 0) {
    return envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
  }

  const vercelUrl = (process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL)?.trim();
  if (vercelUrl && vercelUrl.length > 0) {
    return `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
}

export const siteConfig = {
  botName: "Fluorine",
  botLogo: "/Fluorine_deep_blue.gif",
  botPfp: "/Fluorine_deep_blue.gif",
  badge: "TRUSTED BY 14,025+ SERVERS",
  tagline: "The Ultimate Discord Bot",
  description:
    "Elevate your server with military-grade moderation, anti-nuke protection, and an arsenal of 300+ powerful commands.",
  developer: "Mohsin.Exe",
  teamName: "CodeX Development",
  links: {
    invite:
      process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ??
      "https://discord.com/oauth2/authorize?client_id=1479842310081482792&permissions=8&scope=bot+applications.commands",
    dashboard:
      process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "#dashboard",
    support:
      process.env.NEXT_PUBLIC_SUPPORT_SERVER_URL ??
      "https://discord.gg/codexdevs",
    docs: process.env.NEXT_PUBLIC_DOCUMENTATION_URL ?? "#documentation",
    github:
      process.env.NEXT_PUBLIC_GITHUB_URL ??
      "https://github.com/MohsinAli088",
    status: process.env.NEXT_PUBLIC_STATUS_URL ?? "#status",
    changelog: process.env.NEXT_PUBLIC_CHANGELOG_URL ?? "#changelog",
    discord: process.env.NEXT_PUBLIC_COMMUNITY_DISCORD_URL ?? "https://discord.gg/codexdevs",
    x: process.env.NEXT_PUBLIC_X_URL ?? "https://x.com",
  },
  stats: [
    { label: "Active Servers", value: 14000, suffix: "+", icon: "Server", formattedValue: "14,000+" },
    { label: "Uptime", value: 99.9, suffix: "%", icon: "CircleCheck", formattedValue: "99.9%" },
    { label: "Users Protected", value: 4000000, suffix: "+", icon: "Users", formattedValue: "4M+" },
    { label: "Commands Executed", value: 50000000, suffix: "+", icon: "MessageSquare", formattedValue: "50M+" },
  ],
  nav: [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Commands", href: "#commands" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],
  coreFeatures: [
    {
      id: "security",
      title: "Advanced Security",
      description: "Military-grade protection with real-time threat detection and automated response systems.",
      badge: "Real-time",
      icon: "ShieldAlert",
    },
    {
      id: "antinuke",
      title: "Anti-Nuke System",
      description: "Prevent server destruction with instant rollback, permission lockdowns, and audit logging.",
      badge: "Zero-Trust",
      icon: "Lock",
    },
    {
      id: "nightmode",
      title: "Night Mode",
      description: "Automated security lockdown during off-hours with customizable schedules and triggers.",
      badge: "Automated",
      icon: "Moon",
    },
    {
      id: "analytics",
      title: "Analytics",
      description: "Comprehensive insights into server activity, member growth, and moderation statistics.",
      badge: "Real-time",
      icon: "ChartNoAxesColumnIncreasing",
    },
  ],
  featureCards: [
    {
      title: "Moderation",
      icon: "Shield",
      points: ["Ban & Kick", "Warn & Timeout", "Mute & Slowmode", "Purge & AutoMod"],
    },
    {
      title: "Anti-Raid & Security",
      icon: "ShieldAlert",
      points: ["Join Burst Lockdown", "Anti-Mass Mention", "Anti-Bot Verification", "Audit Logging"],
    },
    {
      title: "Music & Audio",
      icon: "Disc",
      points: ["Spotify & YouTube", "SoundCloud Streams", "Equalizer Filters", "24/7 Voice Queue"],
    },
    {
      title: "Automation Engine",
      icon: "Sparkles",
      points: ["Dynamic Auto Roles", "Welcome Cards", "Scheduled Announcements", "Custom Triggers"],
    },
    {
      title: "Economy & Leveling",
      icon: "Zap",
      points: ["Rank Cards", "Global XP System", "Server Shop", "Daily Rewards"],
    },
    {
      title: "Tickets & Support",
      icon: "Ticket",
      points: ["Multi-Panel Setup", "Staff Role Claiming", "HTML Transcripts", "Auto-Close Inactive"],
    },
  ],
  showcases: [
    {
      title: "Protect Your Server",
      description:
        "Fluorine continuously monitors your community and blocks dangerous actions before they become incidents.",
      bullets: [
        "Raid protection with instant threat detection",
        "Anti-ban, anti-kick, anti-channel delete",
        "Configurable punishments and incident logs",
      ],
      cta: "Configure Security",
      panelTitle: "Anti-Nuke Control Center",
      metrics: [
        "Raid Protection: Active",
        "Suspicious Actions Blocked: 18",
        "Response Time: < 300ms",
      ],
    },
    {
      title: "Automate Community Growth",
      description:
        "Build retention with welcome flows, smart responses, and leveling incentives that keep members engaged.",
      bullets: [
        "Role-based onboarding journeys",
        "Event-triggered automations",
        "Reward loops with XP and economy sync",
      ],
      cta: "Build Automations",
      panelTitle: "Automation Builder",
      metrics: [
        "Automations Running: 24",
        "Welcome Completion: 87%",
        "Response Accuracy: 99.2%",
      ],
    },
    {
      title: "Run Everything From One Dashboard",
      description:
        "Manage moderation, music, tickets, and analytics without switching between disconnected bot panels.",
      bullets: [
        "Unified command and permission system",
        "Real-time logs and activity streams",
        "Server-wide settings sync in one click",
      ],
      cta: "Open Dashboard",
      panelTitle: "Unified Server Operations",
      metrics: ["Modules Enabled: 17", "Commands Today: 129,402", "System Uptime: 99.9%"],
    },
  ],
  testimonials: [
    {
      quote: "This bot replaced almost every single bot in our server with zero latency.",
      author: "Ari Khan",
      role: "CarryDepie Community Manager",
    },
    {
      quote: "Setup took less than two minutes and the anti-nuke system gives us complete peace of mind.",
      author: "Lena Ortiz",
      role: "Basu City Admin",
    },
    {
      quote: "The deep blue interface and dashboard are the most intuitive we've ever used.",
      author: "Mason Reed",
      role: "Esports Server Owner",
    },
  ],
  communityServers: [
    {
      name: "CarryDepie",
      description: "A premier Discord gaming and chill community protected by advanced bot moderation.",
      icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=256&h=256&fit=crop",
      banner: "https://images.unsplash.com/photo-1542751371000-adc38448a05e?w=800&h=300&fit=crop",
      online: "447",
      members: "2,980",
      verified: true,
      tags: ["Protected", "Gaming"],
    },
    {
      name: "Basu City",
      description: "🌟 Welcome to Basu Plays Discord! 🎮 Join for gaming fun, events, and community! 🌌",
      icon: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=256&h=256&fit=crop",
      banner: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=300&fit=crop",
      online: "5,524",
      members: "36,831",
      verified: true,
      tags: ["Boosted", "Protected"],
    },
    {
      name: "Mc Flame",
      description: "The official discord community of Mc Flame! Hangout, events, gaming and high energy.",
      icon: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=256&h=256&fit=crop",
      banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=300&fit=crop",
      online: "1,501",
      members: "10,010",
      verified: true,
      tags: ["Official", "Community"],
    },
    {
      name: "S Λ I Y Λ R Λ Λ",
      description: "Saiyaraaa | Hangout/Masti - Chill/Chat - Giveaways and weekly gaming tournaments.",
      icon: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=256&h=256&fit=crop",
      banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=300&fit=crop",
      online: "3,133",
      members: "20,887",
      verified: false,
      tags: ["Boosted", "Protected"],
    },
    {
      name: "PSD1 Gang [ Official ]",
      description: "Elite competitive esports and hangout discord community with verified anti-nuke security.",
      icon: "https://images.unsplash.com/photo-1563089145-599997674d42?w=256&h=256&fit=crop",
      banner: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&h=300&fit=crop",
      online: "250",
      members: "1,668",
      verified: false,
      tags: ["Esports", "Protected"],
    },
    {
      name: "PAHADI GAMING",
      description: "Welcome to Official Discord Server of Pahadi Gaming. Daily scrims, chat and giveaways!",
      icon: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=256&h=256&fit=crop",
      banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=300&fit=crop",
      online: "1,687",
      members: "11,248",
      verified: true,
      tags: ["Boosted", "Protected"],
    },
  ],
  commandCategories: [
    "All",
    "Moderation",
    "Security",
    "Music",
    "Automation",
    "Leveling",
    "Economy",
    "Tickets",
    "Utility",
  ],
  commands: [
    { name: "/ban", description: "Ban a member from the server with audit log reason.", category: "Moderation", usage: "/ban @user [reason] [delete_days]", permission: "Ban Members" },
    { name: "/warn", description: "Issue a tracked warning to a member with auto-punishment threshold.", category: "Moderation", usage: "/warn @user reason", permission: "Moderate Members" },
    { name: "/timeout", description: "Temporarily timeout a member from text & voice channels.", category: "Moderation", usage: "/timeout @user 10m [reason]", permission: "Moderate Members" },
    { name: "/antinuke", description: "Configure anti-nuke thresholds, whitelists, and lockdown actions.", category: "Security", usage: "/antinuke setup", permission: "Administrator" },
    { name: "/nightmode", description: "Schedule automated server lockdown during off-hours.", category: "Security", usage: "/nightmode enable 23:00 07:00", permission: "Manage Server" },
    { name: "/play", description: "Stream crystal clear audio from YouTube, Spotify, or SoundCloud.", category: "Music", usage: "/play [song or url]", permission: "Connect & Speak" },
    { name: "/queue", description: "View the live music queue with interactive skip & volume buttons.", category: "Music", usage: "/queue", permission: "Use Application Commands" },
    { name: "/autorole", description: "Set automated roles for new members and bot accounts.", category: "Automation", usage: "/autorole add @role", permission: "Manage Roles" },
    { name: "/level", description: "Check your current server rank card and leaderboard XP.", category: "Leveling", usage: "/level [@user]", permission: "Use Application Commands" },
    { name: "/balance", description: "View your server wallet and bank balance.", category: "Economy", usage: "/balance [@user]", permission: "Use Application Commands" },
    { name: "/ticket", description: "Spawn a customizable support ticket panel in the current channel.", category: "Tickets", usage: "/ticket panel", permission: "Manage Channels" },
    { name: "/audit", description: "Inspect recent security alerts and blocked actions.", category: "Utility", usage: "/audit logs [limit]", permission: "View Audit Log" },
  ],
  pricing: [
    {
      name: "FREE",
      price: "$0",
      period: "forever",
      description: "Essential moderation and utilities for growing community servers.",
      features: [
        "Core Moderation & AutoMod",
        "Standard Audit Logging",
        "Basic Leveling & Rank Cards",
        "Standard Music (720p audio)",
        "Up to 2 Ticket Panels",
        "Community Support",
      ],
      cta: "Add to Discord",
      highlighted: false,
    },
    {
      name: "PREMIUM",
      price: "$4.99",
      period: "/month",
      badge: "MOST POPULAR",
      description: "Complete security fortress with high-fidelity music & automation.",
      features: [
        "Military-Grade Anti-Nuke System",
        "Anti-Raid & Instant Rollback",
        "Night Mode Automated Lockdown",
        "Lossless 384kbps Hi-Fi Music",
        "Unlimited Tickets with HTML Logs",
        "Custom Bot Embed Color & Branding",
        "Priority 24/7 VIP Support",
      ],
      cta: "Upgrade to Premium",
      highlighted: true,
    },
    {
      name: "ENTERPRISE",
      price: "$12.99",
      period: "/month",
      description: "Maximum power and dedicated node for mega servers and networks.",
      features: [
        "Everything in Premium",
        "Dedicated Bot Instance & Custom Name",
        "Global Cross-Server Sync",
        "Real-Time Webhook Security Feeds",
        "Unlimited Custom Automations",
        "Custom Vanity URL Integration",
        "Dedicated Account Manager",
      ],
      cta: "Contact Enterprise",
      highlighted: false,
    },
  ],
  faqs: [
    {
      q: "Is the bot free to add to my Discord server?",
      a: "Yes! You can invite the bot for free with full access to core moderation, music, leveling, basic automod, and utility commands without entering a credit card.",
    },
    {
      q: "How does the Anti-Nuke system prevent server destruction?",
      a: "Our Anti-Nuke module continuously monitors administrative actions. If a compromised account or rogue admin deletes channels, kicks members, or modifies roles above configured thresholds, the bot immediately revokes permissions, restores deleted items via audit rollback, and notifies owners.",
    },
    {
      q: "How long does setup take?",
      a: "Setup takes less than 2 minutes. Once invited, run `/setup` in any channel or visit our web dashboard to enable security, autoroles, and logging in one click.",
    },
    {
      q: "Can I manage multiple Discord servers from one dashboard?",
      a: "Yes. Our web dashboard lets you seamlessly toggle between all servers where you have Manage Server or Administrator permissions, with isolated server configurations.",
    },
    {
      q: "Does music playback work 24/7 without lag?",
      a: "Yes. Our audio nodes run on low-latency European and North American cloud clusters supporting YouTube, Spotify, and SoundCloud with bass boost, nightcore, and 8D equalizer filters.",
    },
    {
      q: "How do I get help if I run into an issue?",
      a: "You can join our 24/7 Discord support community, read our comprehensive documentation, or open a support ticket directly from the dashboard.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
