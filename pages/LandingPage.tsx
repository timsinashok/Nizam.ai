import React, { useState } from 'react';
import { Scale, ShieldCheck, FileText, ArrowRight, X, Lock, PlayCircle, Zap, LayoutDashboard, AlertTriangle, CheckCircle2, TrendingUp, Bell, AlertOctagon } from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('demo@nizam.ai');
  const [password, setPassword] = useState('password');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-600 selection:text-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-700 rounded-xl flex items-center justify-center shadow-lg shadow-brand-900/20">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">Nizam.ai</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <a href="#problem" className="hover:text-brand-700 transition-colors">The Problem</a>
            <a href="#how-it-works" className="hover:text-brand-700 transition-colors">How it Works</a>
            <a href="#simulator" className="hover:text-brand-700 transition-colors">Simulator</a>
            <a href="#philosophy" className="hover:text-brand-700 transition-colors">Our Mission</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowLogin(true)}
              className="text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors"
            >
              Log in
            </button>
            <button 
              onClick={() => setShowLogin(true)}
              className="text-sm font-bold text-white bg-slate-900 px-6 py-3 rounded-lg hover:bg-slate-800 transition-all hover:shadow-xl active:scale-95 border border-slate-900"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 overflow-hidden relative bg-gradient-to-b from-white to-slate-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
             <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-100 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-blob"></div>
             <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-brand-300 text-brand-800 text-xs font-extrabold uppercase tracking-wide mb-8 shadow-lg shadow-brand-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-600"></span>
            </span>
            <span>Updated for UAE Labor Law Decree-Law No. 33 (2026)</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.05]">
            Master UAE Labor Law.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-emerald-500">Stop Fines.</span>
          </h1>
          <p className="text-2xl font-medium text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            The AI-powered platform that audits contracts against UAE laws and automates Emiratisation compliance. Protect your business from <span className="text-slate-900 font-bold decoration-brand-300 underline underline-offset-4 decoration-4">AED 100k+ penalties</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button 
              onClick={() => setShowLogin(true)}
              className="w-full sm:w-auto px-10 py-5 bg-brand-700 text-white font-bold text-lg rounded-xl hover:bg-brand-800 transition-all shadow-xl shadow-brand-900/20 flex items-center justify-center gap-2 group ring-4 ring-transparent hover:ring-brand-200"
            >
              Start Free Compliance Check 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setShowLogin(true)}
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-800 border-2 border-slate-200 font-bold text-lg rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <PlayCircle className="w-5 h-5 text-slate-400" /> Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Realistic Dashboard Preview */}
      <section className="px-4 md:px-6 pt-20 pb-28 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Browser Frame */}
          <div className="rounded-2xl bg-slate-900 p-2 shadow-2xl shadow-slate-900/40 ring-1 ring-slate-900/10 transform-gpu perspective-1000">
             <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 rounded-t-xl">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex-1 text-center">
                    <div className="inline-flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-md text-[10px] text-slate-400 font-mono border border-slate-700">
                        <Lock className="w-3 h-3" /> app.nizam.ai/dashboard
                    </div>
                </div>
                <div className="w-12"></div>
             </div>
             
             {/* Mock App Interface */}
             <div className="bg-slate-50 rounded-b-xl overflow-hidden border-t border-slate-800/50 flex h-[450px] md:h-[650px] relative font-sans">
                
                {/* Mock Sidebar */}
                <div className="w-64 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col p-4 gap-1">
                   <div className="flex items-center gap-2 mb-8 px-2">
                      <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center"><Scale className="w-4 h-4 text-white" /></div>
                      <div className="text-white font-bold text-lg">Nizam.ai</div>
                   </div>
                   
                   <div className="flex items-center gap-3 px-3 py-3 bg-brand-700 rounded-lg text-white text-sm font-bold shadow-lg shadow-brand-900/40 border border-brand-600 mb-1">
                      <LayoutDashboard className="w-4 h-4" /> Dashboard
                   </div>
                   <div className="flex items-center gap-3 px-3 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-sm font-medium">
                      <FileText className="w-4 h-4" /> Contract Auditor
                   </div>
                   <div className="flex items-center gap-3 px-3 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-sm font-medium">
                      <Scale className="w-4 h-4" /> Emiratisation Simulator
                   </div>
                   <div className="flex items-center gap-3 px-3 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-sm font-medium">
                      <Zap className="w-4 h-4" /> Labor Law Chat
                   </div>
                </div>
                
                {/* Mock Content */}
                <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
                   {/* Top Bar */}
                   <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
                      <div>
                        <h2 className="text-lg font-bold text-slate-900">Compliance Health Overview</h2>
                        <p className="text-xs text-slate-500 font-medium">Last Audit: Today 09:42 AM</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-100">
                           System Active
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300"></div>
                      </div>
                   </div>

                   <div className="flex-1 p-8 overflow-y-auto">
                       {/* KPI Row */}
                       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-50 rounded-bl-full -mr-2 -mt-2"></div>
                             <div className="flex justify-between items-start mb-2 relative z-10">
                                <span className="text-xs font-bold text-slate-500 uppercase">Compliance Score</span>
                                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                             </div>
                             <div className="text-3xl font-bold text-slate-900 relative z-10">94/100</div>
                             <div className="text-xs text-emerald-600 mt-2 font-bold bg-emerald-50 inline-block px-2 py-1 rounded">Excellent</div>
                          </div>
                          
                          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                             <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold text-slate-500 uppercase">Risk Status</span>
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                             </div>
                             <div className="text-2xl font-bold text-slate-900">No Active</div>
                             <div className="text-xs text-slate-400 mt-2 font-medium">Violations Detected</div>
                          </div>

                          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                             <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold text-slate-500 uppercase">Emiratisation</span>
                                <Scale className="w-5 h-5 text-blue-500" />
                             </div>
                             <div className="text-3xl font-bold text-slate-900">2.1%</div>
                             <div className="text-xs text-blue-600 mt-2 font-bold bg-blue-50 inline-block px-2 py-1 rounded">Target Met (2.0%)</div>
                          </div>

                          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                             <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold text-slate-500 uppercase">Est. Savings</span>
                                <TrendingUp className="w-5 h-5 text-purple-500" />
                             </div>
                             <div className="text-3xl font-bold text-slate-900">AED 14k</div>
                             <div className="text-xs text-purple-600 mt-2 font-bold bg-purple-50 inline-block px-2 py-1 rounded">Saved YTD</div>
                          </div>
                       </div>

                       {/* Main Content Area */}
                       <div className="grid grid-cols-3 gap-6 h-full">
                          {/* Main Chart Card */}
                          <div className="col-span-3 md:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                             <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-slate-900 text-sm">Labor Fine Exposure Forecast (2026)</h3>
                                <div className="flex gap-2">
                                    <div className="px-2 py-1 rounded bg-slate-100 text-[10px] font-bold text-slate-600">Q1</div>
                                    <div className="px-2 py-1 rounded text-[10px] font-bold text-slate-400">Q2</div>
                                </div>
                             </div>
                             <div className="h-48 flex items-end justify-between gap-4 px-2">
                                {/* Fake Bars */}
                                <div className="w-full bg-slate-100 rounded-t h-[30%] relative group"></div>
                                <div className="w-full bg-slate-100 rounded-t h-[45%] relative group"></div>
                                <div className="w-full bg-emerald-500/10 rounded-t h-[15%] relative group border-t-4 border-emerald-500">
                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-1 rounded shadow-sm whitespace-nowrap">Risk Minimized</div>
                                </div>
                                <div className="w-full bg-slate-100 rounded-t h-[15%]"></div>
                                <div className="w-full bg-slate-100 rounded-t h-[20%]"></div>
                             </div>
                             <div className="border-t border-slate-100 mt-6 pt-4 flex items-center gap-3">
                                <div className="p-2 bg-emerald-100 rounded-full text-emerald-700">
                                    <TrendingUp className="w-4 h-4" />
                                </div>
                                <p className="text-xs text-slate-600 font-medium">Workforce risk reduced by <span className="font-bold text-emerald-700">85%</span> following new hiring strategy.</p>
                             </div>
                          </div>

                          {/* Recent Audits List */}
                          <div className="col-span-3 md:col-span-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                              <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                                  <h3 className="font-bold text-slate-900 text-sm">Recent Activity</h3>
                                  <span className="text-[10px] font-bold text-slate-400 uppercase">Live Feed</span>
                              </div>
                              <div className="flex-1 p-2 space-y-2">
                                  <div className="flex items-center gap-3 p-3 bg-red-50/50 border border-red-100 rounded-lg">
                                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0"><AlertTriangle className="w-4 h-4" /></div>
                                      <div className="flex-1 min-w-0">
                                          <div className="text-xs font-bold text-slate-900 truncate">Senior Dev Offer.pdf</div>
                                          <div className="text-[10px] text-red-600 font-bold">Non-Compete Violation</div>
                                      </div>
                                  </div>
                                  <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-lg">
                                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0"><CheckCircle2 className="w-4 h-4" /></div>
                                      <div className="flex-1 min-w-0">
                                          <div className="text-xs font-bold text-slate-900 truncate">Marketing Manager.docx</div>
                                          <div className="text-[10px] text-emerald-600 font-bold">Fully Compliant</div>
                                      </div>
                                  </div>
                                  <div className="flex items-center gap-3 p-3 bg-amber-50/50 border border-amber-100 rounded-lg">
                                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0"><Zap className="w-4 h-4" /></div>
                                      <div className="flex-1 min-w-0">
                                          <div className="text-xs font-bold text-slate-900 truncate">Sales Assoc.pdf</div>
                                          <div className="text-[10px] text-amber-600 font-bold">Probation Period Warning</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                       </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wide">
                 <AlertOctagon className="w-3 h-3" /> The Liability
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Navigating UAE Labor Laws<br/>is a liability.</h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
                One misinterpreted clause in Decree-Law No. 33 or a missed Emiratisation target can result in heavy fines, visa bans, and operational freezes. Spreadsheets and manual reviews are no longer enough.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
                    <div className="text-red-500 font-bold text-lg mb-2">AED 50k+</div>
                    <p className="text-sm text-slate-400">Average fine for non-compliant contracts per employee.</p>
                </div>
                <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
                    <div className="text-red-500 font-bold text-lg mb-2">Visa Bans</div>
                    <p className="text-sm text-slate-400">Automatic block on new visas for missing Nafis targets.</p>
                </div>
                <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
                    <div className="text-red-500 font-bold text-lg mb-2">Audit Risk</div>
                    <p className="text-sm text-slate-400">Random MOHRE inspections increasing by 40% in 2026.</p>
                </div>
            </div>
        </div>
      </section>

      {/* How it Works / The Solution */}
      <section id="how-it-works" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide">
                 The Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Labor Compliance on Autopilot.</h2>
            <p className="text-xl text-slate-500 font-medium">
                Nizam.ai replaces your manual HR checks with an AI Legal Officer. We scan your contracts, predict your quota risks, and ensure you are always ready for a MOHRE audit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
             {/* Connector Line */}
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

             <div className="text-center group">
                <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-slate-200/50 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                   <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6" />
                   </div>
                   <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold border-4 border-white shadow-md">1</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Upload Contracts</h3>
                <p className="text-slate-500 leading-relaxed px-4">
                   Drag and drop employment contracts. We OCR and parse labor terms instantly.
                </p>
             </div>

             <div className="text-center group">
                <div className="w-24 h-24 bg-white border-2 border-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-brand-100/50 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                   <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6" />
                   </div>
                   <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-600 text-white rounded-lg flex items-center justify-center font-bold border-4 border-white shadow-md">2</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Check Laws</h3>
                <p className="text-slate-500 leading-relaxed px-4">
                   Nizam.ai compares every clause against the latest UAE Decree-Law No. 33.
                </p>
             </div>

             <div className="text-center group">
                <div className="w-24 h-24 bg-white border-2 border-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-purple-100/50 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                   <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                   </div>
                   <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold border-4 border-white shadow-md">3</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Secure Workforce</h3>
                <p className="text-slate-500 leading-relaxed px-4">
                   Get AI-suggested rewrites, detailed audit reports, and a bulletproof workforce.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section - PERFECT PLACEMENT */}
      <section id="philosophy" className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100 rounded-full blur-[150px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
           <div>
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wide">
                 Our Name & Mission
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none text-slate-900">
                 "Nizam" <span className="text-brand-600 font-serif mx-2"> (نظام) </span> <br/>
                 Means Order.
              </h2>
              <p className="text-slate-600 text-xl font-medium leading-relaxed mb-10 border-l-4 border-brand-500 pl-6">
                 In Arabic, <em>Nizam</em> stands for System, Order, and Regulation. 
                 We built this platform to bring order to the chaos of compliance.
              </p>
              
              <div className="space-y-8">
                 <div className="flex gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center flex-shrink-0">
                       <ShieldCheck className="w-7 h-7 text-brand-600" />
                    </div>
                    <div>
                       <h4 className="text-slate-900 font-bold text-xl">Legal Guardian</h4>
                       <p className="text-slate-500 text-sm mt-1 leading-relaxed">Protecting UAE & GCC businesses from unseen legal risks and regulatory changes.</p>
                    </div>
                 </div>
                 <div className="flex gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center flex-shrink-0">
                       <LayoutDashboard className="w-7 h-7 text-purple-600" />
                    </div>
                    <div>
                       <h4 className="text-slate-900 font-bold text-xl">Systematic Compliance</h4>
                       <p className="text-slate-500 text-sm mt-1 leading-relaxed">Turning manual, chaotic HR processes into a streamlined, error-free system.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="relative">
               {/* Abstract visual of chaos turning into order */}
               <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm opacity-50 transform rotate-6 scale-90 translate-x-4">
                      <div className="flex items-center gap-2 mb-2"><AlertTriangle className="w-4 h-4 text-amber-500"/> <div className="h-2 w-20 bg-slate-200 rounded"></div></div>
                      <div className="h-2 w-full bg-slate-200 rounded mb-2"></div>
                   </div>
                   <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm opacity-60 transform -rotate-3 translate-y-8 -translate-x-4">
                      <div className="flex items-center gap-2 mb-2"><X className="w-4 h-4 text-red-500"/> <div className="h-2 w-16 bg-slate-200 rounded"></div></div>
                      <div className="h-2 w-full bg-slate-200 rounded mb-2"></div>
                   </div>
                   <div className="col-span-2 bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-800 transform -translate-y-4 z-10 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500 blur-[60px] opacity-20 rounded-full"></div>
                      <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30">
                              <Scale className="w-7 h-7 text-white" />
                          </div>
                          <div>
                              <h3 className="text-2xl font-bold text-white">Nizam.ai</h3>
                              <p className="text-brand-400 text-xs font-bold uppercase tracking-wider">System Active</p>
                          </div>
                      </div>
                      <div className="space-y-3">
                          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-xl border border-slate-700">
                              <span className="text-sm font-medium text-slate-300">Contract Analysis</span>
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                                <span className="text-xs font-bold text-white">100% Compliant</span>
                              </div>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-slate-800 rounded-xl border border-slate-700">
                              <span className="text-sm font-medium text-slate-300">Emiratisation</span>
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                                <span className="text-xs font-bold text-white">Target Met</span>
                              </div>
                          </div>
                      </div>
                   </div>
               </div>
           </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section id="simulator" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide border border-blue-100">
                   Feature Highlight
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">The Emiratisation Simulator.</h2>
                <p className="text-xl text-slate-500 mb-8 font-medium">
                    Stop guessing. Visualize how every hire impacts your Nafis score and quota compliance in real-time.
                </p>
                
                <div className="space-y-6">
                   <div className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="mt-1 bg-white p-2.5 rounded-lg h-fit text-brand-600 border border-slate-100 shadow-sm"><TrendingUp className="w-5 h-5"/></div>
                      <div>
                         <h4 className="font-bold text-slate-900 text-lg">Live Modeling</h4>
                         <p className="text-slate-500 text-sm mt-1">See the impact of Expat vs. Local hires instantly.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="mt-1 bg-white p-2.5 rounded-lg h-fit text-brand-600 border border-slate-100 shadow-sm"><AlertTriangle className="w-5 h-5"/></div>
                      <div>
                         <h4 className="font-bold text-slate-900 text-lg">Fine Forecast</h4>
                         <p className="text-slate-500 text-sm mt-1">Get alerted 3 months before you miss a target.</p>
                      </div>
                   </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="text-4xl font-black text-emerald-600">+ AED 144,000</div>
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-wide leading-tight">Projected Savings<br/>(Q1-Q2 2026)</div>
                    </div>
                </div>

                <button onClick={() => setShowLogin(true)} className="mt-8 text-white bg-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 flex items-center gap-2 group text-lg transition-all">
                   Explore Simulator <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
             <div className="order-1 md:order-2">
                <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[80px] opacity-20 -mr-16 -mt-16"></div>
                    {/* Simplified Chart Visual */}
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-white font-bold">Nafis Quota Projection</h3>
                            <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">Target Met</div>
                        </div>
                        <div className="flex items-end gap-4 h-64 border-b border-slate-700 pb-4">
                            <div className="w-full bg-slate-800 rounded-t-lg h-[40%] relative group">
                                <div className="absolute top-2 w-full text-center text-[10px] text-slate-500 font-bold">JAN</div>
                            </div>
                            <div className="w-full bg-slate-800 rounded-t-lg h-[60%] relative group">
                                <div className="absolute top-2 w-full text-center text-[10px] text-slate-500 font-bold">FEB</div>
                            </div>
                            <div className="w-full bg-gradient-to-t from-brand-600 to-brand-400 rounded-t-lg h-[85%] relative shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold py-1 px-3 rounded shadow-lg whitespace-nowrap">
                                    Hired 3 Locals
                                </div>
                                <div className="absolute top-2 w-full text-center text-[10px] text-white/50 font-bold">MAR</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                             <div className="bg-slate-800 p-4 rounded-xl">
                                <div className="text-slate-400 text-xs font-bold uppercase mb-1">Fine Avoided</div>
                                <div className="text-white font-bold text-xl">AED 50,000</div>
                             </div>
                             <div className="bg-slate-800 p-4 rounded-xl">
                                <div className="text-slate-400 text-xs font-bold uppercase mb-1">Compliance</div>
                                <div className="text-emerald-400 font-bold text-xl">100%</div>
                             </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[100px] opacity-30 -mr-20 -mt-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-30 -ml-20 -mb-20 animate-pulse animation-delay-1000"></div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 tracking-tight">Stop worrying about<br/>Labor Law.</h2>
            <p className="text-slate-300 mb-12 max-w-xl mx-auto relative z-10 text-xl font-medium">Join the fastest-growing compliance network in the GCC. Secure your operations today.</p>
            <button 
              onClick={() => setShowLogin(true)}
              className="px-12 py-6 bg-white text-slate-900 font-bold text-lg rounded-xl hover:bg-slate-100 hover:scale-105 transition-all relative z-10 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Get Started for Free
            </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <Scale className="w-4 h-4 text-white" />
                </div>
                <span className="text-2xl font-black text-slate-900 tracking-tight">Nizam.ai</span>
            </div>
           </div>
           <div className="text-slate-500 font-medium text-sm text-center md:text-right">
             © 2026 Nizam AI Technologies. <span className="text-slate-900 font-bold">Built with pride in Abu Dhabi, UAE.</span>
           </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setShowLogin(false)}></div>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-200">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Welcome back</h3>
                <button onClick={() => setShowLogin(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Work Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Password</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all font-medium"
                  />
                </div>
                
                <div className="flex items-center justify-between text-sm">
                   <label className="flex items-center gap-2 text-slate-600 cursor-pointer font-medium">
                      <input type="checkbox" className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                      Remember me
                   </label>
                   <a href="#" className="text-brand-600 font-bold hover:underline">Forgot password?</a>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 text-lg shadow-lg"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" /> Sign In
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-slate-500">
                Don't have an account? <a href="#" className="text-brand-600 font-bold hover:underline">Book a demo</a>
              </div>
            </div>
            <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 text-xs text-center text-slate-400 font-medium">
               Protected by 256-bit encryption. SOC2 Compliant.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};