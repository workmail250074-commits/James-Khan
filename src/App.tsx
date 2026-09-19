/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div id="agenthub-app" className="min-h-screen bg-[#050811] text-slate-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Sticky Compact Header */}
      <Header />

      {/* Main Single Page Hero & Content */}
      <main id="main-content" className="flex-1 flex flex-col">
        <Hero />
      </main>

      {/* Minimal Exclusive Footer */}
      <Footer />

      {/* Floating Quick WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
