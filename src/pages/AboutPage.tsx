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
  Sprout
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

export const AboutPage: React.FC = () => {
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
          {/* Logo */}
          <img
            src="/richmud-crest-logo.png"
            alt="richmud"
            className="h-24 sm:h-32 md:h-36 mx-auto w-auto object-contain filter drop-shadow-[0_6px_24px_rgba(0,0,0,0.7)] my-2 sm:my-3 transition-transform duration-300 hover:scale-[1.03]"
          />

          {/* Badge: ROM • Founded in 2025 */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold-400" />
            <span>ROM • Founded in 2025</span>
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

              {/* Heading */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
                Empowering the Farming Community <br className="hidden sm:inline" />
                <span className="text-gold-gradient">from the Agricultural Heartland</span>
              </h2>

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
                  Richmud India Pvt Ltd. (ROM) is a startup (Agriculture input) company in India. Richmud India was founded in 2025 with a deep-rooted commitment to empower the farming community. Operating from the agricultural heartland of Halsi, Lakhisarai, Bihar, we understand the real ground challenges that farmers face today. Under the visionary leadership of Director Mr. Vinit Kumar, we are dedicated to transforming modern agriculture by providing high-quality crop seeds, Agrochemicals, PGR’s, non-FCO fertilizer, Agri services and beyond.
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

                {/* Imagery */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-stone-900">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                    alt="Director Mr. Vinit Kumar — Richmud India Pvt Ltd."
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                  {/* Brand Crest Accent Overlay */}
                  <div className="absolute top-4 right-4 z-20">
                    <img
                      src="/richmud-crest-logo.png"
                      alt="richmud crest"
                      className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-xl opacity-95 transition-transform duration-300 hover:scale-105"
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
      {/* 5. SECTION 4: LEADERSHIP & TEAM                              */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-800/20">
              <Building2 className="w-3.5 h-3.5 text-gold-600" />
              <span>Corporate Governance</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Leadership & Management Team
            </h2>
            <p className="text-sm text-stone-600">
              The executive board and functional leaders guiding Richmud India Pvt Ltd. (ROM) toward agricultural excellence.
            </p>
          </div>

          {/* Part A: Board of Directors (2 Prominent Cards) */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-300/40">
                Board of Directors
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6 sm:gap-8">
              <LeadershipCard
                name="Vinit Kumar"
                designation="Director cum Founder"
                initials="VK"
                isBoard={true}
              />
              <LeadershipCard
                name="Kajal Kumari"
                designation="Director cum Co-Founder"
                initials="KK"
                isBoard={true}
              />
            </div>
          </div>

          {/* Part B: Management Team (4 Sleek Grid Cards) */}
          <div className="space-y-6 pt-4">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-800/20">
                Management Team
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
              <LeadershipCard
                name="Haresh Kumar"
                designation="Executive Director cum Head Sales & Marketing"
                initials="HK"
              />
              <LeadershipCard
                name="Gulshan Kumar"
                designation="Plant Operations & Logistics Head"
                initials="GK"
              />
              <LeadershipCard
                name="Sonu Kumar"
                designation="Customer Support & Admin Head"
                initials="SK"
              />
              <LeadershipCard
                name="HR & Finance Head"
                designation="Corporate Affairs & Finance"
                initials="HF"
              />
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
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs uppercase tracking-wider shadow-xs transition-colors"
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
                <a
                  href="mailto:richmudindia@gmail.com?subject=Job%20Application%20-%20Richmud%20India%20Pvt%20Ltd"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-black text-white font-semibold text-xs uppercase tracking-wider shadow-xs transition-colors group"
                >
                  <Mail className="w-4 h-4 text-gold-400" />
                  <span>Explore Openings</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-1 transition-transform" />
                </a>
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
                href="https://wa.me/919142950191?text=Hello%20Richmud%20India,%20I%20am%20interested%20in%20your%20products."
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
                  Contact Number
                </h4>
                <div className="mt-1.5 space-y-1">
                  <a
                    href="tel:+919142950191"
                    className="block text-xs sm:text-sm font-mono text-stone-200 hover:text-gold-400 transition-colors font-medium"
                  >
                    +91 91429 50191
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
              © {new Date().getFullYear()} Richmud India Pvt Ltd. (ROM). All rights reserved.
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
