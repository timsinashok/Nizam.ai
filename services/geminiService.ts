import { GoogleGenAI, Type, Schema } from "@google/genai";
import { ContractAuditResult, ComplianceSeverity } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// -- Contract Auditor --

const auditSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    overallScore: { type: Type.NUMBER, description: "A score from 0 to 100 representing compliance safety." },
    summary: { type: Type.STRING, description: "A brief executive summary of the contract's legal standing." },
    risks: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          clause: { type: Type.STRING, description: "The specific text or section name from the contract." },
          issue: { type: Type.STRING, description: "Why this clause is problematic under UAE Labor Law." },
          severity: { type: Type.STRING, enum: [ComplianceSeverity.HIGH, ComplianceSeverity.MEDIUM, ComplianceSeverity.LOW, ComplianceSeverity.PASS] },
          recommendation: { type: Type.STRING, description: "Suggested legal rewording or action." },
          articleReference: { type: Type.STRING, description: "Reference to the specific UAE Labor Law article (e.g., Article 15)." }
        },
        required: ["clause", "issue", "severity", "recommendation"]
      }
    }
  },
  required: ["overallScore", "risks", "summary"]
};

export const auditContract = async (contractText: string): Promise<ContractAuditResult> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are Nizam.ai, a relentless and highly accurate UAE Labor Law Auditor. 
      Analyze the following employment contract text against UAE Federal Decree-Law No. 33 of 2021.
      Identify illegal clauses, non-compliant probation periods, notice period violations, and EOSB miscalculations.
      
      Contract Text:
      """
      ${contractText}
      """`,
      config: {
        responseMimeType: "application/json",
        responseSchema: auditSchema,
        temperature: 0.2, // Low temperature for factual legal analysis
      }
    });

    const result = JSON.parse(response.text || "{}") as ContractAuditResult;
    return result;
  } catch (error) {
    console.error("Audit failed", error);
    throw new Error("Failed to audit contract. Please ensure the API key is valid.");
  }
};

// -- Law Chat --

export const chatWithLegalBot = async (history: {role: string, parts: {text: string}[]}[], message: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are Nizam.ai, the AI Legal Officer for the Middle East. 
        You are an expert in GCC labor laws, specifically UAE Federal Decree-Law No. 33 of 2021.
        Answer questions concisely, professionally, and always cite the relevant Article number when possible.
        If you are unsure, state that this is for informational purposes and they should consult a human lawyer.
        Do not make up laws.`,
      },
      history: history
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I apologize, I could not generate a response.";
  } catch (error) {
    console.error("Chat failed", error);
    return "I am currently experiencing connection issues with the Ministry database (API Error). Please try again.";
  }
};