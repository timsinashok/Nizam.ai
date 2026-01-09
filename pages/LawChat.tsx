import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, AlertCircle } from 'lucide-react';
import { chatWithLegalBot } from '../services/geminiService';

const LawChat: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Marhaba! I am Nizam.ai. I can answer questions regarding UAE Federal Decree-Law No. 33, employment contracts, and WPS regulations (2026 Edition). How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for Gemini
    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const responseText = await chatWithLegalBot(history, userMsg.text);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in duration-500">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900">Legal Assistant</h2>
            <p className="text-xs text-brand-600 font-medium flex items-center">
              <span className="w-2 h-2 bg-brand-500 rounded-full mr-1 animate-pulse"></span>
              Online • UAE Labour Law 2026 DB
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[80%] md:max-w-[70%] gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-200' : 'bg-brand-100'}`}>
                {msg.role === 'user' ? <User className="w-5 h-5 text-slate-600" /> : <Bot className="w-5 h-5 text-brand-700" />}
              </div>
              <div 
                className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-slate-800 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                }`}
              >
                {/* Simple markdown parser for demo purposes (bolding) */}
                {msg.text.split('**').map((part, i) => 
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
             <div className="flex max-w-[80%] gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex-shrink-0 flex items-center justify-center">
                   <Bot className="w-5 h-5 text-brand-700" />
                </div>
                <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                </div>
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-brand-500 focus-within:border-brand-500 transition-all">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about fines, visa rules, or contract clauses..."
            className="flex-1 bg-transparent border-none outline-none text-slate-900 placeholder-slate-400 px-2"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="p-2 bg-brand-600 text-white rounded-md hover:bg-brand-700 disabled:opacity-50 disabled:hover:bg-brand-600 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-2 flex items-center justify-center gap-1 text-xs text-slate-400">
            <AlertCircle className="w-3 h-3" />
            <span>AI responses are for informational purposes only and do not constitute legal advice.</span>
        </div>
      </div>
    </div>
  );
};

export default LawChat;