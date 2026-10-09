import React from 'react';
import { 
  Eye, 
  Target, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Quote, 
  Building2,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  GraduationCap,
  Briefcase
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  initials: string;
  role: string;
  bio: string;
  isExecutive?: boolean;
  isOpenRole?: boolean;
}

const completeTeam: TeamMember[] = [
  {
    id: 'vinit-kumar',
    name: 'Mr. Vinit Kumar',
    designation: 'Director cum Founder',
    initials: 'VK',
    role: 'Leadership & Strategy',
    bio: "Pioneering the startup's vision to empower Indian growers with accessible, lab-tested agri inputs, bridging the lab-to-land gap.",
    isExecutive: true,
  },
  {
    id: 'kajal-kumari',
    name: 'Kajal Kumari',
    designation: 'Director cum Co-Founder',
    initials: 'KK',
    role: 'Governance & Strategic Direction',
    bio: 'Guiding institutional compliance, ethical sourcing, and farmer-centric expansion strategies across Eastern India.',
    isExecutive: true,
  },
  {
    id: 'haresh-kumar',
    name: 'Haresh Kumar',
    designation: 'Executive Director cum Head Sales & Marketing',
    initials: 'HK',
    role: 'Sales & Distributor Channels',
    bio: 'Spearheading regional dealer networks, farmer-connect campaigns, and marketing across district distribution hubs.',
    isExecutive: true,
  },
  {
    id: 'gulshan-kumar',
    name: 'Gulshan Kumar',
    designation: 'Plant Operations and Logistic Head',
    initials: 'GK',
    role: 'Plant Operations & Logistics',
    bio: 'Overseeing manufacturing protocols, seed processing standards, warehousing safety, and punctual rural dispatch.',
  },
  {
    id: 'sonu-kumar',
    name: 'Sonu Kumar',
    designation: 'Customer Support & Admin',
    initials: 'SK',
    role: 'Support & Corporate Admin',
    bio: 'Managing seamless dealer support, farmer grievance redressal, administrative operations, and CRM documentation.',
  },
  {
    id: 'hra-finance-head',
    name: 'HRA Finance Head',
    designation: 'Finance & Corporate Governance',
    initials: 'FH',
    role: 'Financial Governance',
    bio: 'Position Opening Soon. Seeking senior leadership to lead treasury management, tax compliance, and growth capitalization.',
    isOpenRole: true,
  },
];

const offeringsList = [
  'High-Yield Hybrid Crop Seeds',
  'Certified Agrochemicals',
  "PGR's (Plant Growth Regulators)",
  'Non-FCO Bio-Fertilizers',
  'Agronomic Farm Advisory',
  'Lab-to-Land Agri-Tech Innovation',
];

interface MemberPortraitProps {
  id: string;
  name: string;
  designation: string;
  initials: string;
  isPrimary?: boolean;
  isOpenRole?: boolean;
}

function MemberPortraitCard({
  id,
  name,
  designation,
  initials,
  isPrimary = false,
  isOpenRole = false,
}: MemberPortraitProps) {
  return (
    <div className={`flex flex-col items-center group ${isPrimary ? 'w-44 sm:w-56' : 'w-36 sm:w-44'}`}>
      {/* Crisp White Photo Frame with Elevation Shadow */}
      <div
        data-person-id={id}
        className={`w-full aspect-square bg-white p-2 sm:p-2.5 rounded-sm sm:rounded shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-stone-200/70 relative transition-transform duration-300 group-hover:-translate-y-1 ${
          isOpenRole ? 'border-dashed border-amber-300' : ''
        }`}
      >
        <div className="w-full h-full bg-gradient-to-b from-stone-100 to-stone-200 flex flex-col items-center justify-center relative overflow-hidden rounded-xs">
          {/* Silhouette/Initials Placeholder (Ready for real image replacement) */}
          <span className="font-bold text-stone-700 text-lg sm:text-2xl tracking-wider">
            {initials}
          </span>
          <span className="absolute bottom-1.5 text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold text-stone-500 bg-white/80 px-1.5 py-0.5 rounded-xs">
            {isOpenRole ? 'Position Open' : 'Official Portrait'}
          </span>
        </div>
      </div>

      {/* Centered Typography Directly Underneath */}
      <div className="mt-2.5 sm:mt-3 text-center px-1">
        <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors leading-snug">
          {name}
        </h4>
        <p className="text-[10px] sm:text-xs font-medium text-stone-600 mt-0.5 leading-tight">
          {designation}
        </p>
      </div>
    </div>
  );
}

export const AboutPage: React.FC = () => {
  return (
    <div className="pb-20">
      {/* 1. HERO HEADER */}
      <section className="relative py-12 sm:py-20 bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3 sm:space-y-4">
          <img
            src="/richmud-crest-logo.png"
            alt="richmud"
            className="h-16 sm:h-20 md:h-24 mx-auto w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] mb-2 transition-transform duration-300 hover:scale-[1.03]"
          />
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold-400" />
            <span>Richmud India Pvt Ltd. (ROM) • Founded 2025</span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Empowering Farmers, <br />
            <span className="text-gold-gradient">Transforming Agriculture</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-base lg:text-lg font-light leading-relaxed">
            Headquartered in Halsi, Lakhisarai (Bihar), Richmud India Pvt Ltd. is an agile agricultural startup delivering elite hybrid seeds, crop protection, non-FCO bio-fertilizers, and lab-to-land agri-tech innovation to elevate farmer prosperity.
          </p>
        </div>
      </section>

      {/* 2. INSTITUTIONAL SPLIT SHOWCASE (INSPIRED BY BIHAR GOVT / DBT PORTAL) */}
      <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: EXACT SCREENSHOT REPLICATION */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800">
                  Institutional Leadership Bench
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  Official Leadership Portraits
                </h3>
                <p className="text-xs text-stone-500">
                  Prestige institutional framing: crisp white elevated frames with clean unboxed designations.
                </p>
              </div>

              {/* Founder on far left + Staggered Leadership Cohort */}
              <div className="pt-2 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-5 sm:gap-6">
                {/* Prominent Large Founder Portrait on far left */}
                <MemberPortraitCard
                  id="vinit-kumar"
                  name="Mr. Vinit Kumar"
                  designation="Director cum Founder"
                  initials="VK"
                  isPrimary={true}
                />

                {/* Staggered Cohort: Top Offset, Bottom Left, Bottom Right */}
                <div className="grid grid-cols-2 gap-3.5 sm:gap-4 sm:pt-4">
                  <MemberPortraitCard
                    id="kajal-kumari"
                    name="Kajal Kumari"
                    designation="Director cum Co-Founder"
                    initials="KK"
                  />
                  <MemberPortraitCard
                    id="haresh-kumar"
                    name="Haresh Kumar"
                    designation="Executive Director cum Head Sales & Marketing"
                    initials="HK"
                  />
                  <div className="col-span-2 flex justify-center pt-1">
                    <MemberPortraitCard
                      id="gulshan-kumar"
                      name="Gulshan Kumar"
                      designation="Plant Operations and Logistic Head"
                      initials="GK"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-stone-500 flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                <span>Executive Command • Halsi, Lakhisarai, Bihar</span>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTENT CONTAINER WITH DELICATE GREEN CORNER BRACKET BORDER */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl bg-white p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-stone-200/90 overflow-hidden">
                {/* Delicate green corner/bracket border (border-t-2 border-r-2 border-emerald-700/60) */}
                <div className="absolute top-0 right-0 w-20 sm:w-28 h-20 sm:h-28 border-t-2 border-r-2 border-emerald-700/60 rounded-tr-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-14 sm:w-20 h-14 sm:h-20 border-b-2 border-l-2 border-emerald-700/30 rounded-bl-2xl pointer-events-none" />

                <div className="flex gap-4 sm:gap-6 relative z-10">
                  <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-emerald-50 border-l-3 border-emerald-700 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                      <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Founding Profile & Vision</span>
                    </div>

                    <h2 className="text-xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight leading-snug">
                      Richmud India Pvt Ltd. (ROM)
                    </h2>

                    <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <p>
                        Established in <strong className="text-stone-900">2025</strong> in <strong className="text-stone-900">Halsi, Lakhisarai (Bihar)</strong>, Richmud India Pvt Ltd. (ROM) is an agile agri-input startup committed to revolutionizing modern farming. We bridge scientific laboratories directly to local farmer lands, making high-quality seeds, crop protection, and non-FCO fertilizers accessible to every grower.
                      </p>
                      <p>
                        Our mission is to maximize every farmer's net income through certified genetics, plant growth regulators (PGRs), modern bio-inputs, and lab-to-land agronomic services.
                      </p>
                    </div>

                    {/* Director's Personal Message Block */}
                    <div className="p-4 rounded-xl bg-stone-50 border-l-3 border-emerald-600 space-y-2 mt-2">
                      <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                        <Quote className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Director's Message • Mr. Vinit Kumar</span>
                      </div>
                      <blockquote className="text-stone-800 text-xs sm:text-sm italic leading-relaxed">
                        "As the director of Richmud India, my journey is driven by a vision to empower farmers with high-quality, affordable seeds, fertilizers, agrochemicals, and modern agricultural solutions. Overcoming initial challenges of building a trusted distributor network and winning farmer confidence, we remain committed to sustainable farming and introducing agri-tech innovation from lab to land to elevate farmer prosperity."
                      </blockquote>
                      <div className="pt-1.5 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-500">
                        <span className="font-semibold text-stone-800">Mr. Vinit Kumar</span>
                        <span>Halsi, Lakhisarai</span>
                      </div>
                    </div>

                    {/* Offerings Pills */}
                    <div className="pt-1 space-y-1.5">
                      <div className="text-[11px] font-bold text-stone-900 uppercase tracking-wider">
                        Core Agri Portfolio:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {offeringsList.map((offering, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-sm bg-stone-100 border border-stone-200/80 text-stone-700 text-[11px] font-medium"
                          >
                            ✓ {offering}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Vertical Crop / Plant Visual Accent on far right */}
                  <div className="hidden sm:flex flex-col items-center justify-between w-12 py-2 border-l border-emerald-900/10 pl-3 shrink-0 text-emerald-800/40 select-none pointer-events-none">
                    <Sparkles className="w-4 h-4 text-emerald-600/70" />
                    <div className="w-[1px] flex-1 bg-gradient-to-b from-emerald-600/30 via-emerald-700/60 to-emerald-600/30 my-2" />
                    <div className="[writing-mode:vertical-rl] text-[9px] uppercase font-bold tracking-widest text-emerald-800/60 py-2">
                      Rich Soil • Healthy Crops
                    </div>
                    <div className="w-[1px] flex-1 bg-gradient-to-b from-emerald-600/30 via-emerald-700/60 to-emerald-600/30 my-2" />
                    <ShieldCheck className="w-4 h-4 text-emerald-600/70" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VISION, MISSION & VALUES (3-CARD GRID) */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Vision, Mission & Core Values
            </h2>
            <p className="text-sm text-stone-600">
              The foundational pillars steering Richmud India's pledge to farm families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Vision */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-emerald-50/60 to-white border border-emerald-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                  <Eye className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                  Our Vision
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  Rich Soil, Healthy Crops & Prosperous Farmers
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  "To become India's most trusted agri input & agri services partner, where the name 'Richmud' always stands for rich soil, healthy crops and prosperous farmers."
                </p>
              </div>
              <div className="pt-3 border-t border-emerald-100 text-xs font-semibold text-emerald-800">
                Pledge: Trusted Rural Partner
              </div>
            </div>

            {/* Mission */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-amber-50/60 to-white border border-amber-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                  <Target className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-amber-800">
                  Our Mission
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  Maximize Net Farm Family Income
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  "To deliver high-quality affordable, Agri input & Agri services that maximize every farmer's income."
                </p>
              </div>
              <div className="pt-3 border-t border-amber-100 text-xs font-semibold text-amber-800">
                Pledge: Affordable Agri-Solutions
              </div>
            </div>

            {/* Values */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-teal-50/60 to-white border border-teal-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                  Our Core Values
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  Crop Security, High Yields & Innovation
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  "To empower farmers with high quality seeds, crop protection, Agri solutions, and innovative technologies that secure crops, boost yields and elevate farmer prosperity."
                </p>
              </div>
              <div className="pt-3 border-t border-teal-100 text-xs font-semibold text-teal-800">
                Pledge: Integrity from Lab to Land
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. COMPLETE MANAGEMENT TEAM & GOVERNANCE */}
      <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800">
              Institutional Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Management Team & Department Heads
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Official institutional portrait gallery of executive leaders and departmental commanders at Richmud India Pvt Ltd. (ROM).
            </p>
          </div>

          {/* Institutional Gallery Grid of Framed Portraits - All 6 Team Members */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
            {completeTeam.map((member) => (
              <MemberPortraitCard
                key={member.id}
                id={member.id}
                name={member.name}
                designation={member.designation}
                initials={member.initials}
                isOpenRole={member.isOpenRole}
              />
            ))}
          </div>

          {/* Departmental Command & Contact Banner */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white border border-stone-200/80 text-xs text-stone-600">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
              <span>
                <strong>Corporate Office:</strong> Halsi, Lakhisarai, Bihar (811306 / 811311) • Direct Helpline:{' '}
                <a href="tel:+917888585478" className="text-stone-900 font-semibold hover:text-emerald-800">
                  +91-7888585478
                </a>
              </span>
            </div>
            <a
              href="mailto:richmudindia@gmail.com"
              className="px-4 py-2 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs tracking-wider uppercase shadow-xs transition-colors shrink-0"
            >
              Contact Bureau →
            </a>
          </div>

        </div>
      </section>

      {/* 5. CAREERS & INTERNSHIP (LAB TO LAND) */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800">
              Join Our Mission
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Careers & Internship Programs
            </h2>
            <p className="text-sm text-stone-600">
              Be a catalyst in India's rural agricultural renaissance. Build your career with Richmud India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* INTERNSHIP CARD */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 border border-emerald-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                  <GraduationCap className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
                    College Students & Graduates
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                    Richmud India Internship Program
                  </h3>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  Gain hands-on field exposure to cutting-edge Agri input supply chains, lab-to-land seed trial observation, farmer-connect workshops, and digital agri-distribution. Mentored directly by seasoned agronomy heads.
                </p>
                <div className="space-y-1.5 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real-world agricultural technology exposure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Mentorship by Director & Operations Leads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Certificate of Completion & Pre-Placement Opportunities</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-100">
                <a
                  href="mailto:richmudindia@gmail.com?subject=Application%20for%20Richmud%20India%20Internship%20Program"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Apply for Internship (richmudindia@gmail.com)</span>
                </a>
              </div>
            </div>

            {/* CAREER OPPORTUNITIES CARD */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-amber-50/30 border border-amber-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                  <Briefcase className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800">
                    Full-Time Positions
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                    Job Opportunities in Agri-Transformation
                  </h3>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  We are actively assembling a high-caliber team across Bihar and Eastern India. Explore rewarding careers in regional sales & marketing, supply chain operations, agronomy advisory, and administrative governance.
                </p>
                <div className="space-y-1.5 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Regional Sales & Field Agronomy Executives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Warehouse & Logistics Supervisors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Finance, Accounts & Administration Openings</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-amber-100">
                <a
                  href="mailto:richmudindia@gmail.com?subject=Job%20Application%20-%20Richmud%20India%20Pvt%20Ltd"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-stone-900 hover:bg-black text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Resume (richmudindia@gmail.com)</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CORPORATE OFFICE & CONTACT STRIP */}
      <section className="py-16 sm:py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-800">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
                Direct Contact & Showroom
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Connect with Richmud India Pvt Ltd.
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
                Reach out for dealership inquiries, bulk seed distribution, farmer advisory visits, or institutional partnerships.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917888585478?text=Hello%20Richmud%20India,%20I%20am%20interested%20in%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:richmudindia@gmail.com"
                className="px-4 py-2 rounded-full border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Bureau</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Headquarters Card */}
            <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Corporate Headquarters</h4>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  Halsi, Lakhisarai, Bihar, India
                </p>
                <p className="text-xs text-amber-400 font-semibold mt-0.5">
                  Postal Pincode: 811306 / 811311
                </p>
              </div>
            </div>

            {/* Direct Phone Lines */}
            <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Direct Helpline & Inquiries</h4>
                <div className="mt-1 space-y-1">
                  <a
                    href="tel:+917888585478"
                    className="block text-xs font-mono font-medium text-stone-200 hover:text-emerald-400 transition-colors"
                  >
                    +91-7888585478 (Primary Contact)
                  </a>
                  <a
                    href="tel:+919572144270"
                    className="block text-xs font-mono font-medium text-stone-200 hover:text-emerald-400 transition-colors"
                  >
                    +91-9572144270 (Support Line)
                  </a>
                </div>
              </div>
            </div>

            {/* Email Bureau & Hours */}
            <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Official Correspondence</h4>
                <a
                  href="mailto:richmudindia@gmail.com"
                  className="block text-xs text-amber-300 hover:underline font-medium mt-1"
                >
                  richmudindia@gmail.com
                </a>
                <p className="text-[11px] text-stone-400 mt-1">
                  Mon – Sat: 9:00 AM – 6:30 PM IST
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <div>
              <span>Official Channels: </span>
              <span className="text-stone-300 font-medium">Facebook • Instagram • LinkedIn • YouTube • X (Twitter) • WhatsApp</span>
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
