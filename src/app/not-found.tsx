import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 flex items-center justify-center p-6 relative overflow-hidden font-inter">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-md w-full text-center p-8 rounded-3xl border border-blue-500/20 bg-[#060e1d]/80 backdrop-blur-2xl shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mx-auto mb-6">
          <ShieldAlert className="w-7 h-7" />
        </div>

        <span className="text-xs font-orbitron font-semibold uppercase tracking-widest text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-3">
          Error 404
        </span>

        <h1 className="text-2xl sm:text-3xl font-orbitron font-bold text-white mb-3">
          Page Not Found
        </h1>

        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          The coordinates you entered do not exist on the {siteConfig.botName} network. Return to the main command deck.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-orbitron font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Safety
        </Link>
      </div>
    </main>
  );
}
