import { WhatsAppIcon } from "./WhatsAppIcon";
import { ShieldCheck } from "lucide-react";

export function Header() {
  const WHATSAPP_URL = "https://wa.me/8801639552119";

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#050811]/90 border-b border-cyan-500/15 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Brand & Subtitle */}
        <div id="header-brand-container" className="flex items-center gap-3">
          <div
            id="header-brand-logo-icon"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
          >
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span
                id="header-brand-name"
                className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase"
              >
                AGENTHUB
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                PRO
              </span>
            </div>
            <p
              id="header-brand-subtitle"
              className="text-[10px] sm:text-xs font-semibold tracking-widest text-cyan-400/90 uppercase"
            >
              VERIFIED GAMING AGENT
            </p>
          </div>
        </div>

        {/* Right: Contact James Khan (WhatsApp) */}
        <div id="header-cta-container">
          <a
            id="header-whatsapp-cta"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-[#050811] font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 glow-neon-green shadow-lg hover:shadow-emerald-500/30 active:scale-98"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" />
            <span className="whitespace-nowrap">CONTACT JAMES KHAN</span>
          </a>
        </div>
      </div>
    </header>
  );
}
