import React, { useState } from 'react';
import { Users, AlertOctagon, CheckCircle, TrendingUp, DollarSign, Building, BarChart2, ArrowRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Simulator: React.FC = () => {
  const [totalEmployees, setTotalEmployees] = useState(150);
  const [currentEmiratis, setCurrentEmiratis] = useState(2);
  const [avgSalary, setAvgSalary] = useState(15000); // New input for better simulation
  const [sector, setSector] = useState('tech');

  // Logic for UAE Emiratisation (Simplified for MVP)
  const targetPercentage = 2.0; 
  const targetCount = Math.ceil(totalEmployees * (targetPercentage / 100));
  const deficit = Math.max(0, targetCount - currentEmiratis);
  
  // Financials
  const monthlyFinePerPerson = 6000;
  const yearlyFine = deficit * monthlyFinePerPerson * 12;
  
  // Hiring Cost Logic (Salary - Nafis Support)
  // Nafis typically supports ~5000-7000 AED/month depending on degree. 
  // Let's assume 5000 AED support per month.
  const nafisSupportPerMonth = 5000;
  const netMonthlyCostPerHire = Math.max(0, avgSalary - nafisSupportPerMonth);
  const yearlyHiringCost = deficit * netMonthlyCostPerHire * 12;

  const isCompliant = deficit === 0;

  const pieData = [
    { name: 'Emiratis', value: currentEmiratis, color: '#059669' },
    { name: 'Expat/Other', value: totalEmployees - currentEmiratis, color: '#e2e8f0' },
  ];

  const comparisonData = [
    { name: 'Cost of Fines', amount: yearlyFine, fill: '#ef4444' },
    { name: 'Net Hiring Cost', amount: yearlyHiringCost, fill: '#059669' }, // Green because it's an investment
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold text-slate-900">Emiratisation Simulator</h1>
            <p className="text-slate-500 mt-2">Calculate the financial impact of meeting vs. missing your Nafis targets.</p>
        </div>
        {isCompliant && (
            <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Compliant
            </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-8 h-fit">
          <div className="pb-4 border-b border-slate-100">
             <h3 className="font-bold text-slate-900 mb-1">Company Parameters</h3>
             <p className="text-xs text-slate-500">Configure your current workforce.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Company Sector</label>
            <div className="relative">
                <Building className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <select 
                    value={sector} 
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none appearance-none transition-shadow"
                >
                    <option value="tech">Technology & AI</option>
                    <option value="construction">Construction</option>
                    <option value="finance">Banking & Finance</option>
                    <option value="retail">Retail</option>
                </select>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-700">Total Workforce</label>
              <span className="text-sm font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{totalEmployees}</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="1000" 
              value={totalEmployees} 
              onChange={(e) => setTotalEmployees(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-700">Current Emiratis</label>
              <span className="text-sm font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">{currentEmiratis}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max={Math.floor(totalEmployees * 0.15)} 
              value={currentEmiratis} 
              onChange={(e) => setCurrentEmiratis(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
            />
            <div className="flex justify-between mt-2 text-xs text-slate-500">
                <span>0</span>
                <span>Target: {targetCount}</span>
            </div>
          </div>

          <div>
             <div className="flex justify-between mb-2">
               <label className="text-sm font-medium text-slate-700">Avg. Emirati Salary (AED)</label>
             </div>
             <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input 
                   type="number" 
                   value={avgSalary}
                   onChange={(e) => setAvgSalary(parseInt(e.target.value) || 0)}
                   className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                />
             </div>
             <p className="text-xs text-slate-400 mt-2">Used to calculate net hiring cost after Nafis support.</p>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Top KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl border shadow-sm flex flex-col justify-between ${isCompliant ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`}>
                 <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-slate-500 mb-1">Quota Status</p>
                        <h2 className={`text-2xl font-bold ${isCompliant ? 'text-emerald-700' : 'text-slate-900'}`}>
                            {isCompliant ? 'Target Met' : `${deficit} Short`}
                        </h2>
                    </div>
                    {isCompliant ? <CheckCircle className="w-8 h-8 text-emerald-500" /> : <AlertOctagon className="w-8 h-8 text-red-500" />}
                 </div>
                 <div className="mt-4">
                    <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                            className={`h-2 rounded-full transition-all duration-500 ${isCompliant ? 'bg-emerald-500' : 'bg-red-500'}`} 
                            style={{width: `${Math.min(100, (currentEmiratis/targetCount)*100)}%`}}
                        ></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 text-right">{currentEmiratis} / {targetCount} Required</p>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                 <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Est. Yearly Fines</p>
                    <h2 className={`text-3xl font-bold font-mono ${yearlyFine > 0 ? 'text-red-600' : 'text-slate-300'}`}>
                        AED {yearlyFine.toLocaleString()}
                    </h2>
                 </div>
                 <p className="text-xs text-slate-400 mt-2">Based on AED 6,000/mo per unfilled position</p>
              </div>
          </div>

          {/* Deep Dive Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[320px]">
             {/* Chart 1: Cost Comparison */}
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-slate-400" /> Financial Impact Analysis
                </h3>
                <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={comparisonData} layout="vertical" margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                           <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                           <XAxis type="number" hide />
                           <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12}} />
                           <Tooltip 
                                cursor={{fill: 'transparent'}} 
                                formatter={(value: number) => [`AED ${value.toLocaleString()}`, 'Amount']}
                                contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                           />
                           <Bar dataKey="amount" radius={[0, 4, 4, 0]} barSize={30}>
                                {comparisonData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                           </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
             </div>

             {/* Chart 2: Workforce Split */}
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-400" /> Workforce Distribution
                </h3>
                <div className="flex-1 w-full min-h-0 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                dataKey="value"
                                paddingAngle={5}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-3xl font-bold text-slate-900">{((currentEmiratis/totalEmployees)*100).toFixed(1)}%</span>
                        <span className="text-xs text-slate-500 uppercase">Emirati</span>
                    </div>
                </div>
                <div className="flex justify-center gap-6 mt-2">
                    {pieData.map((entry, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-3 h-3 rounded-full" style={{backgroundColor: entry.color}}></div>
                            <span className="text-slate-600">{entry.name}</span>
                        </div>
                    ))}
                </div>
             </div>
          </div>

          {/* Recommendation Box */}
          <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl flex gap-4">
            <div className="bg-white p-2 rounded-lg h-fit shadow-sm">
                <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
                <h4 className="font-bold text-blue-900">Strategic Insight</h4>
                <p className="text-blue-700 text-sm mt-1 leading-relaxed">
                    {deficit > 0 
                        ? `You are currently facing AED ${yearlyFine.toLocaleString()} in fines. By hiring ${deficit} more Emiratis, you avoid this fine. With Nafis support estimated at AED ${nafisSupportPerMonth.toLocaleString()}/mo, your actual cost to hire is significantly subsidized.`
                        : "Great work! You are compliant. Ensure you maintain this ratio as you hire more expats to avoid future penalties."
                    }
                </p>
                {deficit > 0 && (
                     <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-blue-800">
                        <span>Projected Net Variance:</span>
                        <span className={yearlyHiringCost < yearlyFine ? 'text-emerald-600' : 'text-slate-600'}>
                             {yearlyHiringCost < yearlyFine ? 'Cheaper to Hire' : 'Cheaper to Pay Fine'}
                        </span>
                     </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;