export enum ComplianceSeverity {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  PASS = 'PASS'
}

export interface ContractRisk {
  clause: string;
  issue: string;
  severity: ComplianceSeverity;
  recommendation: string;
  articleReference?: string;
}

export interface ContractAuditResult {
  overallScore: number;
  risks: ContractRisk[];
  summary: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum PageView {
  DASHBOARD = 'DASHBOARD',
  AUDITOR = 'AUDITOR',
  SIMULATOR = 'SIMULATOR',
  LAW_CHAT = 'LAW_CHAT'
}

export interface EmiratisationSimulation {
  totalEmployees: number;
  skilledEmployees: number;
  currentEmiratis: number;
  sector: 'tech' | 'construction' | 'finance' | 'retail';
}