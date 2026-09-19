import { useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  const WHATSAPP_URL = "https://wa.me/8801639552119";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      id="floating-whatsapp-container"
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3"
    >
      {/* Tooltip visible on hover and on wide screens */}
      <div
        id="floating-whatsapp-tooltip"
        className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/95 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-2xl backdrop-blur-md transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-90 translate-x-1"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>Chat with James Khan</span>
      </div>

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-button"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with James Khan on WhatsApp"
        className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-[#050811] shadow-[0_4px_25px_rgba(16,185,129,0.5)] hover:shadow-[0_4px_35px_rgba(16,185,129,0.7)] transform hover:scale-108 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow" />

        {/* Live indicator pip */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-[#050811]" />
      </a>
    </aside>
  );
}
