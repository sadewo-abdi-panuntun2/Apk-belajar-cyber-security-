
import React, { useState } from 'react';
import { Play, RotateCcw, AlertTriangle, CheckCircle } from 'lucide-react';

const SQLVisualizer: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAttacked, setIsAttacked] = useState(false);

  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`;
  
  const checkVulnerability = () => {
    if (username.includes("'") || password.includes("'")) {
      setIsAttacked(true);
    } else {
      setIsAttacked(false);
    }
  };

  const reset = () => {
    setUsername('');
    setPassword('');
    setIsAttacked(false);
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
      <div className="bg-slate-800 px-6 py-4 flex justify-between items-center border-b border-slate-700">
        <h3 className="font-semibold flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          Query Simulator
        </h3>
        <button onClick={reset} className="text-slate-400 hover:text-white transition-colors">
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Login Input</label>
            <div className="space-y-3">
              <input
                type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value); checkVulnerability(); }}
                placeholder="Username..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm focus:border-blue-500 outline-none transition-all"
              />
              <input
                type="text"
                value={password}
                onChange={(e) => { setPassword(e.target.value); checkVulnerability(); }}
                placeholder="Password..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-sm focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Execution Status</label>
            <div className={`h-24 rounded-lg flex items-center justify-center border-2 border-dashed ${isAttacked ? 'bg-red-500/10 border-red-500/50 text-red-400' : 'bg-green-500/10 border-green-500/50 text-green-400'}`}>
              <div className="text-center">
                {isAttacked ? (
                  <>
                    <AlertTriangle className="w-8 h-8 mx-auto mb-1 animate-pulse" />
                    <span className="text-xs font-bold">SQL INJECTION DETECTED</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-8 h-8 mx-auto mb-1" />
                    <span className="text-xs font-bold">QUERY SAFE</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase mb-2 text-center">Backend Resulting Query</label>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto">
            <code className="code-font text-blue-400 text-sm whitespace-pre">
              {query.split("'").map((part, i) => (
                <span key={i} className={i % 2 !== 0 ? 'text-amber-400' : ''}>
                  {i > 0 ? "'" : ""}{part}
                </span>
              ))}
            </code>
          </div>
          {isAttacked && (
            <div className="mt-4 p-3 bg-red-900/30 border border-red-900/50 rounded-lg text-xs text-red-200 leading-relaxed italic">
              "Input Anda mengandung tanda petik satu (') yang merusak struktur perintah SQL dasar. Hacker menggunakan ini untuk memanipulasi database!"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SQLVisualizer;
