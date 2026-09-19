import { WhatsAppIcon } from "./WhatsAppIcon";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  const WHATSAPP_URL = "https://wa.me/8801639552119";
  const PHONE_DISPLAY = "+880 1639-552119";

  return (
    <footer
      id="main-footer"
      className="w-full border-t border-slate-800/80 bg-[#04070f] py-8 sm:py-10 text-slate-400 text-xs sm:text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="font-display font-bold text-white tracking-wider">
              AGENTHUB
            </div>
            <div className="text-[10px] text-cyan-400 font-semibold tracking-wider uppercase">
              VERIFIED GAMING AGENT • JAMES KHAN
            </div>
          </div>
        </div>

        {/* Status verification and Bengali name */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
          <span className="font-bengali text-slate-300 font-medium">
            জেমস খান — অফিসিয়াল ভেরিফায়েড গেমিং এজেন্ট
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="text-emerald-400 font-mono text-xs">
            TIER-1 VERIFIED CERTIFICATE
          </span>
        </div>

        {/* WhatsApp direct contact */}
        <div>
          <a
            id="footer-whatsapp-link"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 text-xs font-semibold transition-all"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            <span>{PHONE_DISPLAY}</span>
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-900/80 text-center text-[11px] text-slate-500">
        &copy; {new Date().getFullYear()} AGENTHUB. Single-agent exclusive verified ledger for James Khan (জেমস খান).
      </div>
    </footer>
  );
}
