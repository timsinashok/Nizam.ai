import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ShieldCheck, AlertTriangle, Users, FileText } from 'lucide-react';

const Dashboard: React.FC = () => {
  const complianceData = [
    { name: 'Compliant', value: 75, color: '#059669' },
    { name: 'At Risk', value: 15, color: '#f59e0b' },
    { name: 'Non-Compliant', value: 10, color: '#ef4444' },
  ];

  const finesData = [
    { month: 'Jan', amount: 5000 },
    { month: 'Feb', amount: 2000 },
    { month: 'Mar', amount: 0 },
    { month: 'Apr', amount: 0 },
    { month: 'May', amount: 0 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Labor Compliance Dashboard</h1>
          <p className="text-slate-500 mt-2">Overview of your workforce's legal standing against UAE Decree-Law No. 33.</p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-sm text-slate-400">Last Scan</p>
          <p className="text-slate-900 font-medium">Today, 09:41 AM</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Labor Compliance</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">87%</h3>
            </div>
            <div className="p-2 bg-brand-100 rounded-lg text-brand-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs text-brand-600 font-medium">+2.5% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Contract Risks</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">3</h3>
            </div>
            <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs text-amber-600 font-medium">1 High Severity</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Emiratisation</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">2.4%</h3>
            </div>
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs text-brand-600 font-medium">Target Met (2.0%)</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Active Contracts</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">142</h3>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
              <FileText className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs text-slate-400 font-medium">12 Expiring Soon</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Contract Health Distribution</h3>
          <div className="h-64 flex items-center justify-center">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={complianceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {complianceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
             </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            {complianceData.map((item) => (
              <div key={item.name} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-slate-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Labor Fine Exposure (AED)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={finesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px' }} />
                <Bar dataKey="amount" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">Projected savings of <span className="text-brand-600 font-bold">AED 45,000</span> this quarter via Nizam.ai alerts.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;