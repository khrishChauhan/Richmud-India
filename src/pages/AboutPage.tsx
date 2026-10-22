import React from 'react';
import { 
  Eye, 
  Target, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Quote, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  MessageCircle,
  Sprout,
  User
} from 'lucide-react';

interface LeaderCardProps {
  name: string;
  designation: string;
  initials: string;
  isBoard?: boolean;
}

function LeadershipCard({ name, designation, initials, isBoard = false }: LeaderCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-2xl transition-all duration-300 ${
        isBoard
          ? 'p-6 sm:p-8 border border-gold-300/60 shadow-[0_10px_30px_rgba(212,175,55,0.08)] hover:shadow-[0_16px_36px_rgba(212,175,55,0.18)] hover:-translate-y-1'
          : 'p-5 sm:p-6 border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-700/30 hover:-translate-y-0.5'
      }`}
    >
      {/* Decorative Corner Gold Accent for Board */}
      {isBoard && (
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl pointer-events-none">
          <div className="absolute transform rotate-45 bg-gradient-to-r from-gold-400 to-amber-500 text-[9px] font-bold text-charcoal-950 uppercase tracking-widest py-0.5 right-[-35px] top-[18px] w-[120px] text-center shadow-xs">
            Board
          </div>
        </div>
      )}

      <div className="flex flex-col items-center text-center space-y-4">
        {/* Crisp White Framed Portrait with Initials / Silhouette */}
        <div
          className={`relative rounded-xl overflow-hidden bg-gradient-to-b from-stone-50 via-stone-100 to-stone-200 border flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
            isBoard
              ? 'w-24 h-24 sm:w-28 sm:h-28 border-gold-300/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)]'
              : 'w-20 h-20 sm:w-22 sm:h-22 border-stone-200 shadow-xs'
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/70 via-transparent to-transparent pointer-events-none" />
          <span
            className={`font-serif font-bold tracking-wider ${
              isBoard ? 'text-2xl sm:text-3xl text-gold-700' : 'text-xl sm:text-2xl text-stone-700'
            }`}
          >
            {initials}
          </span>
          <span className="absolute bottom-1.5 text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold text-stone-500 bg-white/90 px-1.5 py-0.5 rounded-xs shadow-2xs">
            {isBoard ? 'Director' : 'Executive'}
          </span>
        </div>

        {/* Name and Designation */}
        <div className="space-y-1">
          <h4
            className={`font-serif font-bold text-stone-900 group-hover:text-emerald-900 transition-colors ${
              isBoard ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
            }`}
          >
            {name}
          </h4>
          <p
            className={`font-medium leading-snug ${
              isBoard
                ? 'text-xs sm:text-sm text-gold-700 font-semibold'
                : 'text-xs text-stone-600'
            }`}
          >
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
}

interface AboutPageProps {
  setActivePage?: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActivePage }) => {
  return (
    <div className="bg-white text-stone-900 pb-16 sm:pb-24">
      {/* ============================================================ */}
      {/* 1. PAGE HERO                                                */}
      {/* ============================================================ */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-charcoal-950 text-white overflow-hidden">
        {/* Subtle radial gold & botanical gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/15 via-botanical-950/40 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-5">
          {/* Centered Logo & Badge Stack */}
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
            {/* Logo wrapped in solid black container */}
            <div className="bg-black rounded-2xl px-5 sm:px-6 py-2.5 sm:py-3.5 inline-flex items-center justify-center border border-white/10 shadow-xl my-2 sm:my-3">
              <img
                src="/richmud-crest-logo.png"
                alt="richmud"
                className="h-24 sm:h-32 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>

            {/* Badge: RM • Founded in 2025 */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:w-3.5 text-gold-400" />
              <span>RM • Founded in 2025</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            About <span className="text-gold-gradient">Richmud India</span>
          </h1>

          {/* Subheading */}
          <p className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            Empowering the Farming Community from the Agricultural Heartland of Bihar
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. SECTION 1: OUR STORY (2-COLUMN SPLIT)                     */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 lg:py-24 bg-stone-50/70 border-b border-stone-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Story Narrative & Feature Pills */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-500/10 px-3.5 py-1.5 rounded-full border border-gold-400/30">
                <Sprout className="w-3.5 h-3.5 text-gold-500" />
                <span>OUR STORY • FOUNDED 2025</span>
              </div>

              {/* Highlight Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-800/20 text-xs font-semibold shadow-2xs">
                  <span>🌾</span> Founded in 2025
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-800/20 text-xs font-semibold shadow-2xs">
                  <span>📍</span> Halsi, Lakhisarai, Bihar
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-800/20 text-xs font-semibold shadow-2xs">
                  <span>🌱</span> Complete Agri-Input Solutions
                </span>
              </div>

              {/* Exact Narrative Body Text */}
              <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                <p className="text-stone-900 font-medium">
                  Richmud India Pvt Ltd. (RM) is a startup (Agriculture input) company in India. Richmud India was founded in 2025 with a deep-rooted commitment to empower the farming community. Operating from the agricultural heartland of Halsi, Lakhisarai, Bihar, we understand the real ground challenges that farmers face today. Under the visionary leadership of Director Mr. Vinit Kumar, we are dedicated to transforming modern agriculture by providing high-quality crop seeds, Agrochemicals, PGR’s, non-FCO fertilizer, Agri services and beyond.
                </p>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Rooted in deep agronomic understanding, we bridge the lab-to-land gap to ensure that farmers across Bihar and Eastern India receive genuine, yield-enhancing crop inputs with dedicated ground support.
                </p>
              </div>

              {/* Core Offerings Horizontal Strip */}
              <div className="pt-2 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                  <span>Core Agri-Input Offerings</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'High-Quality Crop Seeds',
                    'Agrochemicals',
                    'PGR & Supplements',
                    'Non-FCO Fertilizers',
                    'Agri Services'
                  ].map((offering, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50/70 text-emerald-900 border border-emerald-800/20 text-xs font-medium shadow-2xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                      <span>{offering}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Hero Card with Gold Border */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-gold-400/40 shadow-xl group">
                {/* 1px Metallic Gold Border Ring */}
                <div className="absolute inset-0 border border-gold-300/30 rounded-2xl pointer-events-none z-10" />

                {/* Visual Placeholder Area */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-gradient-to-b from-stone-900 via-stone-950 to-black flex items-center justify-center">
                  {/* Subtle radial gold & botanical glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

                  {/* Neutral avatar silhouette with delicate gold border */}
                  <div className="flex flex-col items-center justify-center p-8 text-center space-y-3 relative z-10 -mt-10">
                    <div className="w-24 h-24 rounded-full bg-stone-900 border border-amber-300/40 shadow-inner flex items-center justify-center">
                      <User className="w-14 h-14 text-amber-400/40 stroke-[1.25]" />
                    </div>
                  </div>

                  {/* Brand Crest Accent Overlay wrapped in black container */}
                  <div className="absolute top-4 right-4 z-20 bg-black rounded-xl p-2 border border-white/10 shadow-lg">
                    <img
                      src="/richmud-crest-logo.png"
                      alt="richmud crest"
                      className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Overlay Badge */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 text-white space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500 text-charcoal-950 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      <Award className="w-3 h-3 text-charcoal-950" />
                      <span>Executive Leadership</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white tracking-wide">
                      Mr. Vinit Kumar
                    </h3>
                    <p className="text-xs text-gold-300 font-medium">
                      Director cum Founder, Richmud India Pvt Ltd.
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-300 pt-0.5">
                      <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                      <span>Halsi, Lakhisarai, Bihar</span>
                    </div>
                  </div>
                </div>

                {/* Sub-card snippet */}
                <div className="p-4 sm:p-5 bg-stone-900 text-stone-300 text-xs sm:text-sm border-t border-gold-400/20 flex items-center justify-between">
                  <span className="text-stone-400">Headquarters & Operations:</span>
                  <span className="font-semibold text-gold-300">Halsi, Lakhisarai (811306)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. SECTION 2: VISION, MISSION & VALUES (3-COLUMN LUXURY GRID)*/}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-800/20">
              <Sparkles className="w-3 h-3 text-gold-600" />
              <span>Guiding Principles</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Vision, Mission & Core Values
            </h2>
            <p className="text-sm text-stone-600">
              The foundational pillars steering Richmud India's pledge to farm families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1 — Vision */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-50 via-white to-white border border-amber-200/50 shadow-sm hover:shadow-md hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-800 text-gold-400 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Eye className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-900">
                  Our Vision
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  Rich Soil, Healthy Crops & Prosperous Farmers
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  "To become India’s most trusted agri input & agri services partner, where the name “Richmud” always stands for rich soil, healthy crops and prosperous farmers."
                </p>
              </div>
              <div className="pt-3 border-t border-amber-200/40 text-xs font-semibold text-emerald-900 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Pledge: Trusted Rural Partner</span>
              </div>
            </div>

            {/* Card 2 — Mission */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-50 via-white to-white border border-amber-200/50 shadow-sm hover:shadow-md hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-800 text-gold-400 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Target className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-900">
                  Our Mission
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  Maximize Net Farm Family Income
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  "To deliver high-quality, affordable Agri input & Agri services that maximize every farmer’s income."
                </p>
              </div>
              <div className="pt-3 border-t border-amber-200/40 text-xs font-semibold text-emerald-900 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Pledge: Affordable Agri-Solutions</span>
              </div>
            </div>

            {/* Card 3 — Values */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-50 via-white to-white border border-amber-200/50 shadow-sm hover:shadow-md hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-800 text-gold-400 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-900">
                  Our Values
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  Crop Security, High Yields & Innovation
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  "To empower farmers with high-quality seeds, crop protection, Agri solutions, and innovative technologies that secure crops, boost yields and elevate farmer prosperity."
                </p>
              </div>
              <div className="pt-3 border-t border-amber-200/40 text-xs font-semibold text-emerald-900 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Pledge: Lab-to-Land Integrity</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. SECTION 3: DIRECTOR'S JOURNEY (EDITORIAL QUOTE SHOWCASE)  */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 lg:py-24 bg-stone-50/80 border-b border-stone-200/80 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gold-300/50 shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden">
            {/* Delicate gold top border accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

            {/* Giant Gold Quotation Marks */}
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1.5 rounded-full border border-gold-300/40">
                <Award className="w-3.5 h-3.5 text-gold-600" />
                <span>Director's Journey & Statement</span>
              </div>
              <span className="text-5xl sm:text-7xl font-serif text-gold-400/30 leading-none select-none">
                “
              </span>
            </div>

            {/* Statement Narrative */}
            <div className="space-y-4">
              <blockquote className="font-serif italic text-base sm:text-xl lg:text-2xl text-stone-800 leading-relaxed">
                "As the director of company (Richmud India), my journey is driven by a vision to empower farmers with high-quality, affordable seeds, fertilizers, Agrochemicals and modern agricultural solutions. Overcoming the initial challenges of building a trusted distributor network and winning the confidence of farmers, I remain committed to promoting sustainable farming practices and introducing agri-tech innovation to boost crop yields. Looking ahead, my mission is to expand our reach and drive unexpected transformation growth across the agricultural community."
              </blockquote>
            </div>

            {/* Byline & Credentials Footer */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="font-serif font-bold text-lg sm:text-xl text-stone-900">
                  Mr. Vinit Kumar
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gold-700">
                  Director cum Founder, Richmud India Pvt Ltd.
                </div>
                <div className="text-[11px] text-stone-500 flex items-center gap-1.5 pt-0.5">
                  <MapPin className="w-3 h-3 text-emerald-700" />
                  <span>Halsi, Lakhisarai, Bihar</span>
                </div>
              </div>

              {/* Founder Signature Motif */}
              <div className="text-right">
                <div className="font-serif italic text-xl text-stone-800 tracking-wider">
                  Vinit Kumar
                </div>
                <div className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                  Founder Signature
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. SECTION 4: LEADERSHIP & MANAGEMENT ORG TREE               */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-stone-200/80 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-800/20 shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-gold-600" />
              <span>Hierarchical Corporate Structure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
              Leadership & Management <span className="text-gold-gradient">Org Tree</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
              The strategic governance board, executive bridge, and dedicated operational leadership guiding Richmud India Pvt Ltd. (RM).
            </p>
          </div>

          {/* Org Tree Structure Container */}
          <div className="max-w-5xl mx-auto">
            
            {/* -------------------------------------------------------- */}
            {/* TIER 1: BOARD OF DIRECTORS (TOP LEVEL GRID / HEADER)     */}
            {/* -------------------------------------------------------- */}
            <div className="space-y-4">
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-4 py-1.5 rounded-full border border-gold-300/60 shadow-xs">
                  <Sparkles className="w-3 h-3 text-gold-600" />
                  <span>Tier 1: Board of Directors</span>
                </span>
              </div>

              {/* 2 High-Profile Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
                {/* Director 1: Vinit Kumar */}
                <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-amber-300/60 shadow-[0_10px_30px_rgba(212,175,55,0.08)] hover:shadow-[0_16px_36px_rgba(212,175,55,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
                    <div className="absolute transform rotate-45 bg-gradient-to-r from-gold-400 to-amber-500 text-[9px] font-bold text-charcoal-950 uppercase tracking-widest py-0.5 right-[-32px] top-[18px] w-[120px] text-center shadow-xs">
                      Founder
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100/70 border-2 border-gold-400/60 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent pointer-events-none" />
                      <span className="font-serif font-bold text-2xl sm:text-3xl text-gold-700 tracking-wider">
                        VK
                      </span>
                      <span className="absolute bottom-1.5 text-[8px] sm:text-[9px] uppercase tracking-wider font-bold text-emerald-900 bg-white/95 px-2 py-0.5 rounded shadow-2xs border border-gold-300/40">
                        Director
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                        Vinit Kumar
                      </h3>
                      <div className="text-xs sm:text-sm font-bold text-gold-700 tracking-wide uppercase">
                        Director cum Founder
                      </div>
                      <p className="text-xs text-stone-500 leading-relaxed pt-1.5">
                        Pioneering Richmud India's founding vision, strategic governance, and ground-level farming community empowerment from Halsi, Lakhisarai, Bihar.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Director 2: Kajal Kumari */}
                <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-amber-300/60 shadow-[0_10px_30px_rgba(212,175,55,0.08)] hover:shadow-[0_16px_36px_rgba(212,175,55,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
                    <div className="absolute transform rotate-45 bg-gradient-to-r from-gold-400 to-amber-500 text-[9px] font-bold text-charcoal-950 uppercase tracking-widest py-0.5 right-[-32px] top-[18px] w-[120px] text-center shadow-xs">
                      Co-Founder
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100/70 border-2 border-gold-400/60 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent pointer-events-none" />
                      <span className="font-serif font-bold text-2xl sm:text-3xl text-gold-700 tracking-wider">
                        KK
                      </span>
                      <span className="absolute bottom-1.5 text-[8px] sm:text-[9px] uppercase tracking-wider font-bold text-emerald-900 bg-white/95 px-2 py-0.5 rounded shadow-2xs border border-gold-300/40">
                        Director
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                        Kajal Kumari
                      </h3>
                      <div className="text-xs sm:text-sm font-bold text-gold-700 tracking-wide uppercase">
                        Director cum Co-Founder
                      </div>
                      <p className="text-xs text-stone-500 leading-relaxed pt-1.5">
                        Guiding corporate compliance, institutional oversight, and strategic stakeholder alignment to foster long-term rural prosperity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* CONNECTOR: TIER 1 -> TIER 2 (CONNECTING BRIDGE)          */}
            {/* -------------------------------------------------------- */}
            <div className="relative py-4 flex flex-col items-center">
              {/* Desktop Tree Connector Lines */}
              <div className="hidden sm:block w-full max-w-lg mx-auto relative h-12">
                {/* Horizontal Bar connecting both Board card centers */}
                <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
                {/* Left stem up towards Vinit Kumar card */}
                <div className="absolute top-0 left-1/4 w-0.5 h-3 bg-amber-400 -translate-y-3" />
                {/* Right stem up towards Kajal Kumari card */}
                <div className="absolute top-0 right-1/4 w-0.5 h-3 bg-amber-400 -translate-y-3" />
                {/* Central downward stem to Tier 2 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-amber-400 via-emerald-700 to-emerald-800" />
                {/* Decorative Central Node */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold-400 border-2 border-white shadow-xs flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal-900" />
                </div>
              </div>

              {/* Mobile Tree Connector Stem */}
              <div className="sm:hidden flex flex-col items-center py-2">
                <div className="w-0.5 h-6 bg-gradient-to-b from-amber-400 to-emerald-800" />
                <div className="w-3 h-3 rounded-full bg-gold-400 border-2 border-white shadow-xs" />
                <div className="w-0.5 h-6 bg-emerald-800" />
              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* TIER 2: EXECUTIVE LEADERSHIP (CONNECTING BRIDGE NODE)    */}
            {/* -------------------------------------------------------- */}
            <div className="space-y-4">
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-800/30 shadow-xs">
                  <Briefcase className="w-3 h-3 text-gold-600" />
                  <span>Tier 2: Executive Leadership (Connecting Bridge Node)</span>
                </span>
              </div>

              {/* Centered Executive Bridge Card */}
              <div className="max-w-xl mx-auto">
                <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-emerald-800/40 hover:border-emerald-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-center">
                  {/* Subtle Top Gold Highlight */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 via-stone-50 to-emerald-100/70 border-2 border-emerald-800/30 w-22 h-22 sm:w-26 sm:h-26 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent pointer-events-none" />
                      <span className="font-serif font-bold text-2xl sm:text-3xl text-emerald-900 tracking-wider">
                        HK
                      </span>
                      <span className="absolute bottom-1.5 text-[8px] sm:text-[9px] uppercase tracking-wider font-bold text-white bg-emerald-800 px-2 py-0.5 rounded shadow-2xs border border-emerald-700">
                        Executive
                      </span>
                    </div>

                    <div className="space-y-1.5 max-w-md mx-auto">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                        Haresh Kumar
                      </h3>
                      <div className="text-xs sm:text-sm font-bold text-emerald-800 tracking-wide uppercase">
                        Executive Director cum Head Sales & Marketing
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed pt-1">
                        Serving as the central operational bridge with direct executive authority over Plant Operations, Logistics, Customer Support, and Corporate Administration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* CONNECTOR: TIER 2 -> TIER 3 (BRANCHING FLOW)             */}
            {/* -------------------------------------------------------- */}
            <div className="relative py-4 flex flex-col items-center">
              {/* Desktop Tree Branching Lines */}
              <div className="hidden sm:block w-full max-w-4xl mx-auto relative h-14">
                {/* Vertical Stem from Haresh Kumar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-emerald-800" />
                {/* Central Branching Junction Node */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-800 border-2 border-white shadow-xs flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                </div>
                {/* Horizontal Crossbar spanning across the 3 card columns */}
                <div className="absolute top-6 left-[16.6%] right-[16.6%] h-0.5 bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-700" />
                {/* 3 Vertical Drop Stems into Tier 3 cards */}
                <div className="absolute top-6 left-[16.6%] w-0.5 h-8 bg-emerald-800" />
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-emerald-800" />
                <div className="absolute top-6 right-[16.6%] w-0.5 h-8 bg-emerald-800" />
              </div>

              {/* Mobile Tree Connector Stem */}
              <div className="sm:hidden flex flex-col items-center py-2">
                <div className="w-0.5 h-6 bg-emerald-800" />
                <div className="w-3 h-3 rounded-full bg-emerald-800 border-2 border-white shadow-xs" />
                <div className="w-0.5 h-6 bg-emerald-800" />
              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* TIER 3: "OUR TEAM" SUB-TREE (OPERATIONAL HEADS GRID)     */}
            {/* -------------------------------------------------------- */}
            <div className="space-y-4">
              <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-900 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-800/30 shadow-xs">
                  <Sprout className="w-3 h-3 text-gold-600" />
                  <span>Our Team — Functional Operations Heads</span>
                </span>
              </div>

              {/* 3-Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Operational Head 1: Gulshan Kumar */}
                <div className="group relative bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-700/50 hover:-translate-y-0.5 transition-all duration-300 text-center flex flex-col justify-between">
                  <div className="flex flex-col items-center text-center space-y-3.5">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-200/90 w-20 h-20 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
                      <span className="font-serif font-bold text-xl text-stone-800 tracking-wider">
                        GK
                      </span>
                      <span className="absolute bottom-1 text-[8px] uppercase tracking-wider font-semibold text-stone-500 bg-white/90 px-1.5 py-0.2 rounded shadow-2xs">
                        Operations
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-serif text-lg font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                        Gulshan Kumar
                      </h4>
                      <p className="text-xs font-semibold text-emerald-800 leading-snug">
                        Plant Operations & Logistics Head
                      </p>
                      <p className="text-xs text-stone-500 pt-1 leading-relaxed">
                        Managing processing plants, warehouse storage safety protocols, and punctual rural input dispatch across regional distributor hubs.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 text-[10px] uppercase tracking-wider font-bold text-stone-400">
                    Production & Supply Chain
                  </div>
                </div>

                {/* Operational Head 2: Sonu Kumar */}
                <div className="group relative bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md hover:border-emerald-700/50 hover:-translate-y-0.5 transition-all duration-300 text-center flex flex-col justify-between">
                  <div className="flex flex-col items-center text-center space-y-3.5">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-200/90 w-20 h-20 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
                      <span className="font-serif font-bold text-xl text-stone-800 tracking-wider">
                        SK
                      </span>
                      <span className="absolute bottom-1 text-[8px] uppercase tracking-wider font-semibold text-stone-500 bg-white/90 px-1.5 py-0.2 rounded shadow-2xs">
                        Support
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-serif text-lg font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                        Sonu Kumar
                      </h4>
                      <p className="text-xs font-semibold text-emerald-800 leading-snug">
                        Customer Support & Admin Head
                      </p>
                      <p className="text-xs text-stone-500 pt-1 leading-relaxed">
                        Directing real-time dealer communication, farmer grievance resolution, advisory helpdesk operations, and internal administrative workflows.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 text-[10px] uppercase tracking-wider font-bold text-stone-400">
                    Farmer Care & Administration
                  </div>
                </div>

                {/* Operational Head 3: Corporate Affairs & Finance (Position Placeholder / Open) */}
                <div className="group relative bg-stone-50/60 rounded-2xl p-6 border border-dashed border-amber-300/80 hover:border-solid hover:border-gold-400 shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 text-center flex flex-col justify-between">
                  <div className="flex flex-col items-center text-center space-y-3.5">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-stone-100 border border-amber-200/80 w-20 h-20 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
                      <span className="font-serif font-bold text-xs text-amber-700 uppercase tracking-widest">
                        OPEN
                      </span>
                      <span className="absolute bottom-1 text-[8px] uppercase tracking-wider font-semibold text-amber-700 bg-amber-100/90 px-1.5 py-0.2 rounded shadow-2xs">
                        Hiring
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                        Corporate Affairs & Finance
                      </h4>
                      <p className="text-xs font-semibold text-gold-700 leading-snug">
                        Position Placeholder / Open (HR & Finance Head)
                      </p>
                      <p className="text-xs text-stone-500 pt-1 leading-relaxed">
                        Leading statutory accounting, fiscal audits, regulatory filings, corporate compliance, and strategic human capital talent acquisition.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-amber-200/40 text-[10px] uppercase tracking-wider font-bold text-amber-700 flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                    <span>Active Recruitment</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SECTION 5: CAREERS AT RICHMUD (DUAL-CARD PATHWAYS)       */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 lg:py-24 bg-stone-50/70 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-800/20">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Join Our Mission</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Careers at Richmud
            </h2>
            <p className="text-sm text-stone-600">
              Build your career at the forefront of modern agriculture and empower farming communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card A — Internship Program */}
            <div className="p-8 rounded-3xl bg-white border border-emerald-800/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-gold-400 flex items-center justify-center shadow-xs">
                  <GraduationCap className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
                    College Students & Graduates
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                    Internship Program
                  </h3>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Shape the future of agriculture with Richmud India internship program. Gain hands-on exposure to cutting-edge Agri input, Agri technology, bridge the gap from lab to land and work alongside industry experts to drive sustainable farming. Plant the seeds of your success today.
                </p>
                <div className="space-y-2 text-xs text-stone-600 pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Hands-on field & lab-to-land agri-input exposure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Mentorship by Director & Functional Operations Heads</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <a
                  href="mailto:richmudindia@gmail.com?subject=Application%20for%20Richmud%20India%20Internship%20Program"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs uppercase tracking-wider shadow-xs transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-400" />
                  <span>Apply via richmudindia@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Card B — Job Opportunities */}
            <div className="p-8 rounded-3xl bg-white border border-amber-300/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-900 text-gold-400 flex items-center justify-center shadow-xs">
                  <Briefcase className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-700">
                    Full-Time Openings
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                    Job Opportunities
                  </h3>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  At Richmud India we are committed to revolutionizing agriculture by providing farmers with high-quality agricultural inputs and modern solutions. If you have passion for innovation, continuous growth, and empowering agriculture, welcome to our dynamic team—take your careers to new heights here and build a better tomorrow.
                </p>
                <div className="space-y-2 text-xs text-stone-600 pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>Regional sales, dealer management & agronomy advisory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>Logistics, supply chain & administrative governance</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <button
                  onClick={() => {
                    if (setActivePage) {
                      setActivePage('careers');
                    } else {
                      window.location.hash = 'careers';
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-stone-900 hover:bg-black text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-gold-md hover:ring-2 hover:ring-gold-400/40 transition-all duration-300 group cursor-pointer"
                >
                  <Briefcase className="w-4 h-4 text-gold-400" />
                  <span>Explore Openings</span>
                  <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. SECTION 6: CORPORATE OFFICE & CONTACT DETAILS             */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 bg-stone-950 text-white relative overflow-hidden">
        {/* Subtle decorative gold line at top */}
        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-800">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-400">
                <Building2 className="w-3.5 h-3.5 text-gold-400" />
                <span>Headquarters & Inquiries</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Corporate Office & Contact Details
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
                Get in touch for dealership distribution, agricultural input procurement, or corporate inquiries.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/917888585478?text=Hello%20Richmud%20India,%20I%20am%20interested%20in%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:richmudindia@gmail.com"
                className="px-4 py-2.5 rounded-full border border-gold-400/50 hover:bg-gold-500/10 text-gold-300 hover:text-gold-200 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-gold-400" />
                <span>richmudindia@gmail.com</span>
              </a>
            </div>
          </div>

          {/* 3 Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Corporate Office */}
            <div className="p-6 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-gold-400/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Corporate Office
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 mt-1.5 leading-relaxed font-medium">
                  Richmud India Pvt Ltd. <br />
                  Halsi, Lakhisarai, Bihar, India
                </p>
                <p className="text-xs text-gold-400 font-semibold mt-1">
                  Pincode: 811306 / 811311
                </p>
              </div>
            </div>

            {/* 2. Direct Phone Lines */}
            <div className="p-6 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-gold-400/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Contact Numbers
                </h4>
                <div className="mt-1.5 space-y-1">
                  <a
                    href="tel:+917888585478"
                    className="block text-xs sm:text-sm font-mono text-stone-200 hover:text-gold-400 transition-colors font-medium"
                  >
                    +91-7888585478
                  </a>
                  <a
                    href="tel:+919572144270"
                    className="block text-xs sm:text-sm font-mono text-stone-200 hover:text-gold-400 transition-colors font-medium"
                  >
                    +91-9572144270
                  </a>
                </div>
                <p className="text-[11px] text-stone-400 mt-1">
                  Direct Helpline & Farmer Support
                </p>
              </div>
            </div>

            {/* 3. Official Email */}
            <div className="p-6 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-gold-400/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Email Bureau
                </h4>
                <a
                  href="mailto:richmudindia@gmail.com"
                  className="block text-xs sm:text-sm text-stone-200 hover:text-gold-400 transition-colors font-mono mt-1.5"
                >
                  richmudindia@gmail.com
                </a>
                <p className="text-[11px] text-stone-400 mt-2">
                  Operating Hours: Mon – Sat, 9:00 AM – 6:30 PM IST
                </p>
              </div>
            </div>

          </div>

          {/* Footer Copyright Strip */}
          <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <div>
              <span>Official Channels: </span>
              <span className="text-stone-300 font-medium">Facebook • Instagram • LinkedIn • WhatsApp</span>
            </div>
            <div className="text-[11px] text-stone-500">
              © {new Date().getFullYear()} Richmud India Pvt Ltd. (RM). All rights reserved.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
