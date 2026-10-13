import React, { useState } from 'react';
import { Terminal, Copy, Check, Code, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { CODE_SNIPPETS } from '../data/codeSnippets';

export function SDKQuickstart() {
  const [activeTab, setActiveTab] = useState('python');
  const [copied, setCopied] = useState(false);

  const snippet = CODE_SNIPPETS[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sdk" className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>DROP-IN REVERSE PROXY INTEGRATION</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            3-Line Code Integration
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            No proprietary libraries or agent rewrites. Just change the base URL to our edge gateway and pass an ephemeral task token.
          </p>
        </div>

        {/* Code Box Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-surface border border-border overflow-hidden shadow-2xl">
          
          {/* Top Bar with Language Tabs & Copy */}
          <div className="px-4 py-3 bg-surface-elevated border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Tabs */}
            <div className="flex items-center space-x-1 overflow-x-auto text-xs font-mono">
              {Object.entries(CODE_SNIPPETS).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === key
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-surface-hover'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Copy CTA */}
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-hover border border-border text-slate-300 text-xs font-mono flex items-center space-x-1.5 transition-colors cursor-pointer self-end sm:self-auto"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'Copied Snippet!' : 'Copy Code'}</span>
            </button>
          </div>

          {/* Description line */}
          <div className="px-6 py-2.5 bg-background/50 border-b border-border text-xs text-slate-400 flex items-center space-x-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            <span>{snippet.description}</span>
          </div>

          {/* Code Viewer */}
          <div className="p-6 bg-[#06080e] overflow-x-auto font-mono text-xs leading-relaxed text-slate-200 selection:bg-cyan-900/40">
            <pre>
              <code>{snippet.code}</code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
}
