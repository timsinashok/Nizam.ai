import React, { useState } from 'react';
import { Upload, FileText, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Loader2 } from 'lucide-react';
import { auditContract } from '../services/geminiService';
import { ContractAuditResult, ComplianceSeverity } from '../types';

const SAMPLE_CONTRACT = `
EMPLOYMENT CONTRACT
BETWEEN: Global Tech Solutions (Employer) AND John Doe (Employee)

1. PROBATION PERIOD
The Employee shall serve a probation period of 9 months, during which the Employer may terminate the contract without notice.

2. NOTICE PERIOD
Either party may terminate this contract by giving 14 days written notice.

3. NON-COMPETE
Upon termination, the Employee is banned from working for any competitor in the UAE for a period of 5 years.

4. END OF SERVICE BENEFIT
No End of Service Benefit shall be paid if the employee resigns before completing 5 years of service.
`;

const Auditor: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<ContractAuditResult | null>(null);

  const handleAnalyze = async (text: string) => {
    setAnalyzing(true);
    try {
      const data = await auditContract(text);
      setResult(data);
    } catch (e) {
      alert("Analysis failed. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // In a real app, we'd parse the PDF file here. 
    // For MVP, we simulate parsing by just using the sample text if they drop anything.
    handleAnalyze(SAMPLE_CONTRACT);
  };

  const getSeverityColor = (severity: ComplianceSeverity) => {
    switch (severity) {
      case ComplianceSeverity.HIGH: return 'bg-red-50 border-red-200 text-red-700';
      case ComplianceSeverity.MEDIUM: return 'bg-amber-50 border-amber-200 text-amber-700';
      case ComplianceSeverity.LOW: return 'bg-yellow-50 border-yellow-200 text-yellow-700';
      case ComplianceSeverity.PASS: return 'bg-emerald-50 border-emerald-200 text-emerald-700';
      default: return 'bg-slate-50 border-slate-200 text-slate-700';
    }
  };

  const getSeverityIcon = (severity: ComplianceSeverity) => {
    switch (severity) {
      case ComplianceSeverity.HIGH: return <XCircle className="w-5 h-5 text-red-500" />;
      case ComplianceSeverity.MEDIUM: return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case ComplianceSeverity.LOW: return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case ComplianceSeverity.PASS: return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Labor Contract Auditor</h1>
        <p className="text-slate-500 mt-2">Upload an employment contract to identify risks against UAE Labour Law (Decree-Law No. 33).</p>
      </div>

      {!result && (
        <div className="space-y-6">
          <div 
            className={`border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center transition-colors cursor-pointer ${isDragging ? 'border-brand-500 bg-brand-50' : 'border-slate-300 hover:border-brand-400 hover:bg-slate-50'}`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={onDrop}
          >
            <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Upload Contract PDF</h3>
            <p className="text-slate-500 mt-2 text-center">Drag & drop your file here, or click to browse.<br/>Supports PDF, DOCX (Max 10MB)</p>
            <input type="file" className="hidden" />
          </div>

          <div className="flex items-center justify-center">
             <span className="text-slate-400 text-sm uppercase tracking-wide">Or test with a sample</span>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => handleAnalyze(SAMPLE_CONTRACT)}
              disabled={analyzing}
              className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              {analyzing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Analyzing with Nizam AI...</span>
                </>
              ) : (
                <>
                  <FileText className="w-5 h-5" />
                  <span>Load Sample Contract</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {result && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Audit Results</h2>
                <p className="text-slate-500 text-sm mt-1">Ref: {new Date().toLocaleDateString()} • Policy: UAE Labour Law (2026)</p>
              </div>
              <div className="text-right">
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-lg font-bold ${result.overallScore > 80 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                  Score: {result.overallScore}/100
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Executive Summary</h3>
              <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                {result.summary}
              </p>
            </div>

            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">Identified Risks & Recommendations</h3>
            <div className="space-y-4">
              {result.risks.map((risk, idx) => (
                <div key={idx} className={`p-5 rounded-lg border ${getSeverityColor(risk.severity)}`}>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      {getSeverityIcon(risk.severity)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg">{risk.issue}</h4>
                        <span className="text-xs font-bold uppercase border border-current px-2 py-0.5 rounded opacity-70">
                          {risk.severity} Risk
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                         <div className="bg-white/50 p-3 rounded">
                            <p className="text-xs font-bold uppercase opacity-60 mb-1">Contract Clause</p>
                            <p className="font-mono text-sm italic">"{risk.clause}"</p>
                         </div>
                         <div className="bg-white/80 p-3 rounded shadow-sm">
                            <p className="text-xs font-bold uppercase opacity-60 mb-1">Nizam Recommendation</p>
                            <p className="text-sm font-medium flex items-center gap-2">
                               <ArrowRight className="w-4 h-4" /> {risk.recommendation}
                            </p>
                            {risk.articleReference && (
                                <p className="text-xs mt-2 opacity-70">Ref: {risk.articleReference}</p>
                            )}
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
                <button onClick={() => setResult(null)} className="text-slate-500 hover:text-slate-900 text-sm font-medium underline decoration-slate-300 underline-offset-4">
                    Audit Another Contract
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auditor;