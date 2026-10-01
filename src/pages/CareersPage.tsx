import React, { useState, useMemo } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Clock, 
  Search, 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Send,
  Building2,
  Users2,
  HeartHandshake
} from 'lucide-react';
import { careerOpportunities } from '../data/careers';
import { CareerOpportunity } from '../types';

export const CareersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jobs' | 'internships'>('jobs');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedOpportunity, setSelectedOpportunity] = useState<CareerOpportunity | null>(null);

  // Application form state
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantQualification, setApplicantQualification] = useState('');
  const [applicantCoverNote, setApplicantCoverNote] = useState('');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const departments = useMemo(() => {
    const deps = careerOpportunities.map((c) => c.department);
    return ['All', ...Array.from(new Set(deps))];
  }, []);

  const filteredOpportunities = useMemo(() => {
    return careerOpportunities.filter((opp) => {
      // Tab filter
      if (activeTab === 'jobs' && opp.isInternship) return false;
      if (activeTab === 'internships' && !opp.isInternship) return false;

      // Department filter
      if (selectedDepartment !== 'All' && opp.department !== selectedDepartment) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          opp.title.toLowerCase().includes(q) ||
          opp.location.toLowerCase().includes(q) ||
          opp.department.toLowerCase().includes(q) ||
          opp.description.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [activeTab, selectedDepartment, searchQuery]);

  const handleApplyClick = (opp: CareerOpportunity) => {
    setSelectedOpportunity(opp);
    setApplicationSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (applicantName && applicantEmail && applicantPhone) {
      setApplicationSubmitted(true);
      setTimeout(() => {
        setApplicantName('');
        setApplicantEmail('');
        setApplicantPhone('');
        setApplicantQualification('');
        setApplicantCoverNote('');
        setSelectedOpportunity(null);
        setApplicationSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="pt-20 sm:pt-24 pb-20">
      {/* 1. HERO HEADER */}
      <section className="relative py-12 sm:py-20 bg-charcoal-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-botanical-900/90 backdrop-blur-md border border-botanical-500/60 text-botanical-100 text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:w-3.5 text-gold-400" />
            <span>Careers at PAN Seeds</span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Grow Your Career <br />
            <span className="text-gold-gradient">With Scientific Purpose</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-base lg:text-lg font-light leading-relaxed">
            Join a mission-driven assembly of plant geneticists, agronomists, and business leaders shaping the future of agriculture across South Asia.
          </p>
        </div>
      </section>

      {/* 2. CULTURE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white border border-gold-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-300 mx-auto flex items-center justify-center text-gold-700">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900">
              World-Class Facilities
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Work with automated photoperiod chambers, robotic DNA sequencers, and NABL-certified laboratories.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gold-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-300 mx-auto flex items-center justify-center text-gold-700">
              <Users2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900">
              Farmer Impact
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Your research directly enhances crop yield and livelihoods for more than 10 million smallholder farm households.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gold-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-300 mx-auto flex items-center justify-center text-gold-700">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal-900">
              Mentorship & Growth
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Accelerate your leadership with continuous guidance from senior seed scientists and ICAR-affiliated veterans.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEGMENTED TABS: JOBS VS INTERNSHIPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-gray-200">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 bg-ivory-200 p-1.5 rounded-2xl">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'jobs'
                  ? 'bg-botanical-800 text-white font-bold shadow-md'
                  : 'text-gray-600 hover:text-charcoal-900'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Professional Openings</span>
            </button>
            <button
              onClick={() => setActiveTab('internships')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'internships'
                  ? 'bg-botanical-800 text-white font-bold shadow-md'
                  : 'text-gray-600 hover:text-charcoal-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Internship Programs</span>
            </button>
          </div>

          {/* Department Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
              Department:
            </span>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-charcoal-900 focus:outline-none focus:border-gold-500 font-medium"
            >
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

        </div>
      </section>

      {/* 4. LISTINGS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOpportunities.map((opp) => (
            <div
              key={opp.id}
              className="bg-white rounded-2xl p-6 border border-gold-300/40 hover:border-botanical-600 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-botanical-800 text-white border border-botanical-600 text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    {opp.department}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">
                    {opp.openings} {opp.openings === 1 ? 'Opening' : 'Openings'}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-charcoal-900 group-hover:text-botanical-800 transition-colors">
                  {opp.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {opp.description}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-gray-500 pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-600" />
                    <span>{opp.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-600" />
                    <span>{opp.experience}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-gold-600" />
                    <span>{opp.type}</span>
                  </div>
                </div>

                {/* Key Qualifications */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-gray-700">
                    Key Prerequisites:
                  </div>
                  {opp.qualifications.slice(0, 2).map((q, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-botanical-700 shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  Full Benefits & Relocation
                </span>
                <button
                  onClick={() => handleApplyClick(opp)}
                  className="px-5 py-2 rounded-full bg-botanical-800 hover:bg-botanical-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-105 border border-gold-400/40 transition-all flex items-center gap-1.5"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE APPLICATION MODAL FORM */}
      {selectedOpportunity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gold-400/40 relative">
            <button
              onClick={() => setSelectedOpportunity(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              aria-label="Close Application Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {applicationSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold-100 border border-gold-400 text-gold-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-charcoal-900">
                  Application Received
                </h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  Thank you for applying for <span className="font-semibold text-charcoal-900">{selectedOpportunity.title}</span>. Our Human Resources and Talent Acquisition team will review your credentials and get back to you shortly.
                </p>
              </div>
            ) : (
              <div>
                <div className="space-y-1 pb-4 border-b border-gray-100">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-700">
                    Application Form
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                    {selectedOpportunity.title}
                  </h3>
                  <div className="text-xs text-gray-500">
                    {selectedOpportunity.department} • {selectedOpportunity.location}
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 pt-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar Patel"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Highest Academic Degree / Specialization *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantQualification}
                      onChange={(e) => setApplicantQualification(e.target.value)}
                      placeholder="e.g. M.Sc. Plant Breeding & Genetics / MBA Agribusiness"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Resume Link / Portfolio (Google Drive / LinkedIn)
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Brief Statement of Purpose / Cover Note
                    </label>
                    <textarea
                      rows={3}
                      value={applicantCoverNote}
                      onChange={(e) => setApplicantCoverNote(e.target.value)}
                      placeholder="Explain your relevant field or laboratory experience..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-400 text-xs sm:text-sm bg-white"
                    />
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedOpportunity(null)}
                      className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-7 py-2.5 rounded-full bg-gold-gradient text-charcoal-950 text-xs font-bold uppercase tracking-wider shadow-gold-sm hover:scale-105 transition-all flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
