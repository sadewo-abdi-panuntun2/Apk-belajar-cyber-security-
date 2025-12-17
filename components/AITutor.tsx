
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AITutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'assistant', 
      content: 'Selamat datang di **CyberShield Academy**! Saya adalah asisten AI Anda.\n\nSaya siap membantu Anda memahami:\n- **Dasar Cybersecurity**\n- **Berbagai Jenis Serangan**\n- **Keamanan SQL & Database**\n\nApa yang ingin Anda pelajari hari ini?' 
    }
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
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const { text, groundingChunks } = await getGeminiResponse(userMessage, messages);
    setMessages(prev => [...prev, { 
      role: 'assistant', 
      content: text, 
      groundingChunks: groundingChunks 
    }]);
    setIsLoading(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl flex flex-col h-[600px] shadow-2xl relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
            <Bot className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-bold text-slate-100 text-sm">CyberShield AI</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">System Online</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-3 shadow-lg shadow-blue-900/20' 
                : 'bg-slate-800/80 backdrop-blur-md text-slate-200 rounded-2xl rounded-tl-none border border-slate-700 p-4 shadow-xl'
            }`}>
              <div className={`flex items-center gap-2 mb-2 opacity-50 text-[10px] font-bold uppercase tracking-widest ${msg.role === 'user' ? 'justify-end text-blue-100' : 'text-slate-400'}`}>
                {msg.role === 'user' ? <><User className="w-3 h-3" /> Anda</> : <><Bot className="w-3 h-3" /> CyberShield AI</>}
              </div>
              
              <div className="prose-cyber">
                {msg.role === 'assistant' ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.content}
                  </ReactMarkdown>
                ) : (
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                )}
              </div>
              
              {msg.groundingChunks && msg.groundingChunks.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-700/50 space-y-2">
                  <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-2">
                    <ExternalLink className="w-3 h-3" /> Verifikasi Sumber:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {msg.groundingChunks.map((chunk, idx) => (
                      chunk.web && (
                        <a 
                          key={idx} 
                          href={chunk.web.uri} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-slate-950 border border-slate-700 px-3 py-1.5 rounded-lg flex items-center gap-2 text-[10px] text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                        >
                          <span className="truncate max-w-[150px] font-medium">{chunk.web.title}</span>
                        </a>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800/80 p-4 rounded-2xl rounded-tl-none border border-slate-700 flex items-center gap-3">
              <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
              <span className="text-xs text-slate-400 font-medium animate-pulse tracking-wide">AI sedang menganalisis...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-900 border-t border-slate-800">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Tanyakan hal teknis ke AI..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 pr-14 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all group-hover:border-slate-700"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 bottom-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-30 disabled:hover:bg-blue-600 transition-all flex items-center justify-center shadow-lg shadow-blue-900/40"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="mt-2 text-[9px] text-center text-slate-600 font-medium uppercase tracking-tighter">
          Didukung oleh Gemini 3 Pro Engine & Google Search Grounding
        </p>
      </div>
    </div>
  );
};

export default AITutor;
