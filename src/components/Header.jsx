import React from 'react';
import { ShieldAlert, Lock, Zap, Sparkles, Activity, Plus, AlertOctagon } from 'lucide-react';

export function Header({ onOpenCreateToken, onOpenCAB, onScrollToSimulator, onScrollToTokens }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-rose-500/10 border border-cyan-500/40 text-cyan-400">
            <Lock className="w-5 h-5 text-cyan-400" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold tracking-tight text-white font-mono">Agent<span className="text-cyan-400">Lock</span></span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 uppercase">
                v1.0 Proxy
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Task-Scoped Ephemeral Token Gateway & Kill-Switch</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
          <button 
            onClick={onScrollToTokens}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Active Tokens
          </button>
          <button 
            onClick={onScrollToSimulator}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Kill-Switch Simulator
          </button>
          <a href="#sdk" className="hover:text-cyan-400 transition-colors">
            SDK Quickstart
          </a>
          <a href="#pricing" className="hover:text-cyan-400 transition-colors">
            Pricing
          </a>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center space-x-3">
          <div className="hidden lg:flex items-center space-x-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Gateway 2.4ms Latency</span>
          </div>

          <button
            onClick={onOpenCreateToken}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-surface border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/40 transition-all flex items-center space-x-1.5 cursor-pointer font-mono"
          >
            <Plus className="w-3.5 h-3.5 text-cyan-400" />
            <span>New Scoped Token</span>
          </button>

          <button
            onClick={onOpenCAB}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-sm shadow-cyan-500/20 flex items-center space-x-1.5 cursor-pointer font-sans"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join CAB ($29/mo)</span>
          </button>
        </div>

      </div>
    </header>
  );
}
