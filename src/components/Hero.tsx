import { Shield, CheckCircle2, Globe, Clock, Star, Award, Zap } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import avatarImg from "../assets/images/james_khan_avatar_1789840000847.jpg";

export function Hero() {
  const WHATSAPP_URL = "https://wa.me/8801639552119";
  const PHONE_DISPLAY = "+880 1639-552119";

  return (
    <section
      id="hero-section"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-10 lg:py-16 overflow-hidden cyber-grid"
    >
      {/* Ambient background glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= LEFT SIDE (7 COLS) ================= */}
          <div id="hero-left-col" className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7">
            
            {/* Badges row: Small badge & Status badge */}
            <div id="hero-badges-row" className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Small badge: ● VERIFIED GAMING AGENT */}
              <div
                id="badge-verified-gaming-agent"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 -ml-3.5" />
                <span>VERIFIED GAMING AGENT</span>
              </div>

              {/* Status badge: ● ONLINE • AVAILABLE NOW */}
              <div
                id="badge-online-status"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md glow-neon-green"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>ONLINE • AVAILABLE NOW</span>
              </div>
            </div>

            {/* Name Heading + Bengali Representation */}
            <div id="hero-name-container" className="space-y-1 sm:space-y-2">
              <h1
                id="agent-heading-name"
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display"
              >
                James Khan
              </h1>
              
              <div
                id="agent-heading-bengali"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-400/90 font-bengali tracking-normal"
              >
                (জেমস খান)
              </div>

              {/* Subtitle */}
              <p
                id="agent-heading-subtitle"
                className="text-base sm:text-xl font-medium text-slate-300 pt-1 flex items-center gap-2"
              >
                <span className="text-cyan-400">⚡</span>
                <span>Verified Gaming Agent &amp; Esports Specialist</span>
              </p>
            </div>

            {/* Description */}
            <div
              id="agent-description-box"
              className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm shadow-inner"
            >
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                &ldquo;Certified esports matchmaking arbiter, scrim coordinator, and dispute mediator.
                Facilitating structured tournaments, verified scrims, and secure gaming transactions.&rdquo;
              </p>
            </div>

            {/* Location & Platforms info */}
            <div
              id="agent-meta-info"
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-300"
            >
              <div
                id="meta-location"
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80"
              >
                <Globe className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Dhaka &amp; Global Esports Circuit</div>
                  <div className="text-slate-400 text-xs flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3 h-3 text-cyan-400/80" />
                    <span>GMT+6 • 24/7 Priority Coverage</span>
                  </div>
                </div>
              </div>

              <div
                id="meta-platforms"
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80"
              >
                <Award className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Verified Platforms
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-slate-200">
                    <span className="px-2 py-0.5 rounded bg-indigo-950/70 border border-indigo-500/30 text-indigo-300">
                      Discord
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-950/70 border border-blue-500/30 text-blue-300">
                      Steam
                    </span>
                    <span className="px-2 py-0.5 rounded bg-rose-950/70 border border-rose-500/30 text-rose-300">
                      Riot Games
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= STATS CARDS ================= */}
            <div id="stats-container" className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-1">
              {/* Stat 1 */}
              <div
                id="stat-card-rating"
                className="p-3 sm:p-4 rounded-xl bg-slate-900/70 border border-cyan-500/20 backdrop-blur-md hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center gap-1 text-cyan-400 font-display font-bold text-xl sm:text-2xl lg:text-3xl">
                  <span>4.9/5</span>
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-cyan-400 text-cyan-400" />
                </div>
                <div className="text-[10px] sm:text-xs tracking-wider uppercase font-semibold text-slate-400 mt-1">
                  AVERAGE RATING
                </div>
              </div>

              {/* Stat 2 */}
              <div
                id="stat-card-deals"
                className="p-3 sm:p-4 rounded-xl bg-slate-900/70 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/40 transition-colors"
              >
                <div className="text-emerald-400 font-display font-bold text-xl sm:text-2xl lg:text-3xl">
                  500+
                </div>
                <div className="text-[10px] sm:text-xs tracking-wider uppercase font-semibold text-slate-400 mt-1">
                  COMPLETED DEALS
                </div>
              </div>

              {/* Stat 3 */}
              <div
                id="stat-card-experience"
                className="p-3 sm:p-4 rounded-xl bg-slate-900/70 border border-purple-500/20 backdrop-blur-md hover:border-purple-500/40 transition-colors"
              >
                <div className="text-purple-300 font-display font-bold text-xl sm:text-2xl lg:text-3xl">
                  3+ YEARS
                </div>
                <div className="text-[10px] sm:text-xs tracking-wider uppercase font-semibold text-slate-400 mt-1">
                  EXPERIENCE
                </div>
              </div>
            </div>

            {/* ================= MAIN CTA ================= */}
            <div id="main-cta-container" className="pt-2 sm:pt-3">
              <a
                id="main-whatsapp-cta-button"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-[#050811] font-display font-bold text-base sm:text-lg tracking-wider transition-all duration-300 glow-neon-green glow-neon-green-hover active:scale-[0.99] shadow-xl"
              >
                <WhatsAppIcon className="w-6 h-6 fill-current transition-transform group-hover:scale-110" />
                <span>CHAT WITH JAMES KHAN</span>
              </a>
              <p className="text-[11px] sm:text-xs text-slate-400 pt-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant direct routing • End-to-end encrypted discussion</span>
              </p>
            </div>

          </div>

          {/* ================= RIGHT PROFILE CARD (5 COLS) ================= */}
          <div id="hero-right-col" className="lg:col-span-5 flex justify-center w-full">
            <div
              id="agent-glass-profile-card"
              className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-[#070b19]/90 border border-cyan-500/25 p-5 sm:p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] glow-cyan transition-transform duration-300 hover:border-cyan-400/40"
            >
              {/* Top Card Badges */}
              <div
                id="card-top-badges"
                className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10"
              >
                {/* Status */}
                <div
                  id="card-status-pill"
                  className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/30 text-emerald-300 text-[11px] font-bold uppercase tracking-wider"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE • AVAILABLE NOW</span>
                </div>

                {/* Tier Badge */}
                <div
                  id="card-tier-pill"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-400/30 text-purple-300 text-[11px] font-bold uppercase tracking-wider"
                >
                  <Shield className="w-3.5 h-3.5 text-purple-400" />
                  <span>TIER-1 VERIFIED</span>
                </div>
              </div>

              {/* Profile Image & Overlay */}
              <div
                id="profile-image-container"
                className="relative w-full aspect-square rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-950 group"
              >
                <img
                  id="james-khan-portrait"
                  src={avatarImg}
                  alt="James Khan - Tier-1 Verified Gaming Agent"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                {/* Esports subtle scanline / corner tech overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-80" />
                
                {/* Cyber tech corner accents */}
                <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

                {/* Small WhatsApp Quick Action on Image */}
                <a
                  id="card-image-whatsapp-quickbtn"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Direct WhatsApp Message to James Khan"
                  className="absolute bottom-3 right-3 p-3 rounded-full bg-emerald-500 text-[#050811] hover:bg-emerald-400 transition-all transform hover:scale-110 shadow-lg glow-neon-green flex items-center justify-center cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                </a>

                {/* Agent signature watermark tag */}
                <div className="absolute bottom-3 left-3 flex flex-col">
                  <span className="font-display text-xs font-bold text-white tracking-wider">
                    JAMES KHAN
                  </span>
                  <span className="text-[10px] font-bengali text-cyan-300 font-medium">
                    জেমস খান
                  </span>
                </div>
              </div>

              {/* Bottom Metrics on Profile Card */}
              <div
                id="card-bottom-metrics"
                className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10"
              >
                {/* Metric 1 */}
                <div
                  id="metric-response-rate"
                  className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    RESPONSE RATE
                  </div>
                  <div className="font-display text-lg sm:text-xl font-bold text-cyan-400 mt-0.5">
                    99.8%
                  </div>
                </div>

                {/* Metric 2 */}
                <div
                  id="metric-avg-response"
                  className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    AVG. RESPONSE
                  </div>
                  <div className="font-display text-lg sm:text-xl font-bold text-emerald-400 mt-0.5">
                    &lt;10 min
                  </div>
                </div>
              </div>

              {/* Explicit Card WhatsApp button */}
              <div className="mt-4 pt-1">
                <a
                  id="card-profile-whatsapp-button"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-bold text-xs sm:text-sm tracking-wide transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>DIRECT WHATSAPP INQUIRY</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ================= EXPLICIT CONTACT INFORMATION BLOCK ================= */}
        <div
          id="contact-information-block"
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-slate-900/80 border border-slate-800 backdrop-blur-md shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                  OFFICIAL CONTACT CHANNEL
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white font-display">
                  James Khan{" "}
                  <span className="font-bengali text-lg text-cyan-400 font-semibold">
                    (জেমস খান)
                  </span>
                </div>
              </div>
            </div>

            {/* Clickable WhatsApp & Phone */}
            <div
              id="contact-interactive-group"
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                id="contact-phone-link"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-950 border border-cyan-500/30 hover:border-cyan-400 text-slate-100 hover:text-cyan-300 font-mono text-sm sm:text-base font-semibold transition-all shadow-md active:scale-98"
              >
                <WhatsAppIcon className="w-5 h-5 fill-emerald-400" />
                <span>WhatsApp: {PHONE_DISPLAY}</span>
              </a>

              <a
                id="contact-chat-now-cta"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#050811] font-display font-bold text-sm tracking-wider transition-all glow-neon-green active:scale-98"
              >
                <span>OPEN CHAT NOW</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
