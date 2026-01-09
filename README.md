<div align="center">

# 🏛️ Nizam.ai

### *The Order in Compliance*

**The AI Agent that automates UAE & GCC Labor Law Compliance**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18.x-61dafb)](https://reactjs.org)

*Stop fearing the law. Start mastering it.*

</div>

---

## 🎯 The Problem

In the MENA region, **one administrative error can cost a company its operating license** or result in hundreds of thousands of dirhams in fines. From the intricate mandates of Emiratisation to the strict updates of the UAE Labor Law, businesses are drowning in bureaucracy that changes overnight.

### The Compliance Nightmare:

- **Complexity**: Constant updates to Labor Laws, WPS rules, and Visa regulations
- **Language Barrier**: Critical legal nuances lost in translation between Arabic and English contracts
- **The "Fines" Trap**: AED 20k+ monthly fines for missed Emiratisation targets; work permit bans for minor visa delays
- **Status Quo**: Companies rely on expensive lawyers or outdated Excel sheets

**Target Market**: 500k+ SMEs in the UAE alone, all facing government audits

---

## 💡 The Solution

**Nizam.ai** is the first AI-powered legal guardian for employment compliance in the GCC. Unlike traditional HR software that merely stores data, Nizam.ai acts as a **proactive agent** that:

- 📄 **Ingests complex labor contracts** to audit liability
- 🔔 **Monitors government gazettes** in real-time to alert clients of new laws
- 📊 **Simulates hiring strategies** to ensure Saudization and Emiratisation quotas are met before penalties hit

We turn the fear of non-compliance into a **competitive advantage**, allowing businesses to scale across the Middle East with absolute confidence.

---

## ✨ Core Features

### 1. 🔍 Contract Auditor
Instantly scans employment contracts to flag:
- Illegal non-compete clauses
- EOSB miscalculations
- Probation period violations
- Notice period compliance issues

### 2. 📈 Quota Simulator
"What-if" modeling for Emiratisation & Saudization targets:
- Predict potential fines before they happen
- Optimize hiring strategies
- Visualize compliance scenarios

### 3. 💬 Law Chat
Interactive AI assistant that:
- Answers questions about UAE & GCC Labor Law
- Provides real-time legal guidance
- Cites specific articles and regulations

### 4. 📊 Compliance Dashboard
Real-time monitoring of:
- Emiratisation/Saudization quotas
- Contract compliance status
- Regulatory changes and alerts
- Risk assessments

---

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Data visualization
- **Lucide React** - Icon system

### AI/Backend
- **Google Gemini API** - Large Language Model for legal analysis
- **RAG Architecture** - Retrieval-Augmented Generation for accurate legal references

### Development Tools
- **TypeScript** - Type safety
- **ESLint** - Code quality
- **npm** - Package management

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v20.0.0 or higher)
- **npm** (v10.0.0 or higher)
- **Gemini API Key** ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd nizam.ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Create a `.env.local` file in the root directory:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

---

## 📁 Project Structure

```
nizam.ai/
├── pages/
│   ├── LandingPage.tsx      # Marketing landing page
│   ├── Dashboard.tsx         # Main compliance dashboard
│   ├── Auditor.tsx          # Contract auditor interface
│   ├── Simulator.tsx        # Quota simulation tool
│   └── LawChat.tsx          # AI legal assistant
├── components/
│   └── Layout.tsx           # Shared layout components
├── services/
│   └── geminiService.ts     # AI integration layer
├── types.ts                 # TypeScript definitions
├── App.tsx                  # Main application component
└── index.tsx                # Application entry point
```

---

## 🎯 MVP Features (Current Build)

This MVP demonstrates the core value proposition:

### ✅ Implemented
- 🔍 **Contract Auditor**: Upload and analyze employment contracts
- 💬 **Law Chat**: Ask questions about UAE Labor Law
- 📊 **Quota Simulator**: Model Emiratisation scenarios
- 🎨 **Modern UI**: Clean, professional interface

### 🚧 Roadmap
- [ ] Real-time government gazette monitoring
- [ ] Multi-language support (Arabic/English)
- [ ] Integration with WPS and Muqeem systems
- [ ] Advanced analytics and reporting
- [ ] Team collaboration features
- [ ] API for third-party integrations

---

## 💼 Business Model

**B2B SaaS with a "Painkiller" Value Proposition**

- **SME Tier**: $499/month
  - Up to 50 employees
  - Core compliance features
  - Email support

- **Enterprise Tier**: Custom pricing
  - Unlimited employees
  - Advanced analytics
  - API access
  - Dedicated account manager

---

## 🎓 For Incubators & Investors

### Why Now?

- **Regulatory Boom**: Emiratisation targets extending to SMEs and new sectors
- **Digital Government**: UAE/KSA digitizing all compliance interfaces
- **Market Gap**: No AI-first solution for MENA compliance exists
- **Pain Point**: Every business needs this yesterday

### The Ask

Seed funding to:
1. Build out the full platform
2. Launch pilot programs with 5 Abu Dhabi-based firms
3. Expand legal knowledge base to cover all GCC countries

### Vision

To become the **single source of truth** for all MENA employment compliance.

---

## 🧪 Development

### Run in Development Mode
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

---

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Google Gemini API key for AI features | Yes |

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📧 Contact

**Nizam.ai Team**

- Website: [Coming Soon]
- Email: [contact@nizam.ai]
- LinkedIn: [Coming Soon]

---

## 🙏 Acknowledgments

- UAE Ministry of Human Resources and Emiratisation
- Google Gemini AI Team
- All the SMEs struggling with compliance in the MENA region

---

<div align="center">

**Built with ❤️ for the Middle East**

*Making compliance simple, one contract at a time.*

</div>
