import React from 'react';
import { Lock, Zap, ShieldAlert, ArrowRight, CheckCircle2, AlertOctagon, Terminal } from 'lucide-react';

export function Hero({ onOpenCreateToken, onScrollToSimulator, onOpenCAB }) {
  return (
    <section className="relative pt-12 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[380px] h-[260px] bg-rose-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Compliance & Proxy Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-surface border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Zero Code Refactoring: Drop-in Base URL Proxy</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">Hard Cap Enforcer</span>
        </div>

        {/* Mandatory SEO H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
          Task-Scoped API Keys & Kill Switches for Autonomous AI Agents
        </h1>

        {/* Subhead with Problem Thesis & Long-tail keywords */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Task-scoped, ephemeral API key gateway with hard budget caps and autonomous infinite-loop kill-switches for multi-agent workflows.
          Easily <strong className="text-white font-semibold">limit OpenAI API key spend per task</strong>, generate <strong className="text-white font-semibold">ephemeral API keys for AI agents</strong>, and <strong className="text-white font-semibold">prevent LangChain infinite loop runaway spend</strong> before overnight invoices explode.
        </p>

        {/* Feature Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-300">
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Hard Session Spend Ceilings ($0.50 - $5.00)</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
            <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
            <span>Recursion Loop Guard (Max Turn Cutoff)</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            <span>One-Click Emergency Kill-Switch</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Model Allow-Listing (Enforce gpt-4o-mini)</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenCreateToken}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-semibold text-sm hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2 cursor-pointer font-sans"
          >
            <Lock className="w-4 h-4 text-slate-950" />
            <span>Generate Ephemeral Token</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={onScrollToSimulator}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-surface border border-rose-500/40 text-rose-300 font-medium text-sm hover:bg-rose-950/40 transition-all flex items-center justify-center space-x-2 cursor-pointer font-sans"
          >
            <AlertOctagon className="w-4 h-4 text-rose-400" />
            <span>Kill-Switch Simulator</span>
          </button>

          <button
            onClick={onOpenCAB}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-surface-elevated border border-border-strong text-slate-200 font-medium text-sm hover:bg-surface-hover transition-all flex items-center justify-center space-x-2 cursor-pointer font-sans"
          >
            <span>Design Partner CAB ($29/mo)</span>
          </button>
        </div>

        {/* Desperation Filter & Runaway Spend Stats */}
        <div className="mt-14 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-xl bg-surface/50 border border-border">
            <div className="text-2xl font-bold font-mono text-rose-400">$5,000</div>
            <div className="text-xs text-slate-400 mt-1">Runaway Loop Exposure Avoided</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Average overnight rogue billing burn</div>
          </div>
          <div className="p-4 rounded-xl bg-surface/50 border border-border">
            <div className="text-2xl font-bold font-mono text-cyan-400">2.4ms</div>
            <div className="text-xs text-slate-400 mt-1">Reverse Proxy Overhead</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Ultra-low latency edge gateway</div>
          </div>
          <div className="p-4 rounded-xl bg-surface/50 border border-border">
            <div className="text-2xl font-bold font-mono text-emerald-400">0 Master Keys</div>
            <div className="text-xs text-slate-400 mt-1">Exposed to Agent Runtimes</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Prompt injection immunity</div>
          </div>
          <div className="p-4 rounded-xl bg-surface/50 border border-border">
            <div className="text-2xl font-bold font-mono text-amber-400">100%</div>
            <div className="text-xs text-slate-400 mt-1">Hard Spend Enforcement</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Immediate 402 drop upon ceiling breach</div>
          </div>
        </div>

      </div>
    </section>
  );
}
