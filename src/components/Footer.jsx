import React from 'react';
import { Lock, ShieldCheck, Zap, ExternalLink } from 'lucide-react';

export function Footer({ onScrollToTokens, onScrollToSimulator, onOpenCAB }) {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Lock className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white font-mono">Agent<span className="text-cyan-400">Lock</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Task-scoped, ephemeral API key gateway with hard budget caps and autonomous infinite-loop kill-switches for multi-agent workflows.
            </p>
            <div className="flex items-center space-x-1.5 text-[11px] font-mono text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Gateway Global Edge Operational</span>
            </div>
          </div>

          {/* High-Intent SEO Keywords & Workflows */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider">
              Agent Governance Solutions
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={onScrollToTokens} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Limit OpenAI API key spend per task
                </button>
              </li>
              <li>
                <button onClick={onScrollToTokens} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Ephemeral API keys for AI agents
                </button>
              </li>
              <li>
                <button onClick={onScrollToSimulator} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Kill switch dashboard for autonomous agents
                </button>
              </li>
              <li>
                <button onClick={onScrollToSimulator} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Prevent LangChain infinite loop runaway spend
                </button>
              </li>
            </ul>
          </div>

          {/* Supported Frameworks */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider">
              Framework Adapters
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#sdk" className="hover:text-cyan-400 transition-colors">CrewAI Multi-Agent Teams</a></li>
              <li><a href="#sdk" className="hover:text-cyan-400 transition-colors">LangChain & LangGraph</a></li>
              <li><a href="#sdk" className="hover:text-cyan-400 transition-colors">Microsoft AutoGen</a></li>
              <li><a href="#sdk" className="hover:text-cyan-400 transition-colors">LlamaIndex Workflows</a></li>
              <li><a href="#sdk" className="hover:text-cyan-400 transition-colors">n8n / Flowise Webhooks</a></li>
            </ul>
          </div>

          {/* Gateway & Advisory */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase font-mono tracking-wider">
              Platform & Access
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={onOpenCAB} className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer font-medium">
                  Apply for CAB ($29/mo Rate)
                </button>
              </li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing & Budget Calculators</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">Cloudflare Edge Architecture</a></li>
              <li><a href="#tokens" className="hover:text-cyan-400 transition-colors">Active Token Ledger</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} AgentLock Inc. Reverse proxy guards network payloads without storing model weights or hosting Python runtimes.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0 font-mono">
            <span className="text-cyan-400">Edge Gateway: gateway.agentlock.dev</span>
            <span>|</span>
            <span>Sub-3ms Overhead</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
