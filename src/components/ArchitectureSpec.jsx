import React from 'react';
import { Cpu, ShieldCheck, Zap, Lock, AlertTriangle, ArrowRight, Database } from 'lucide-react';

export function ArchitectureSpec() {
  return (
    <section id="architecture" className="py-20 bg-surface/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL ARCHITECTURE SPECIFICATION</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            Ultra-Low Latency Proxy at the Network Edge
          </h2>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            Engineered with Cloudflare Workers and Upstash Redis. Adds fewer than 3 milliseconds of overhead while enforcing real-time budget arithmetic before forwarding payloads to OpenAI or Anthropic.
          </p>
        </div>

        {/* 3 Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="p-6 rounded-2xl bg-surface border border-border">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Sub-3ms Edge Ledger</h3>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              Every request authorization header is decoded at the edge. Cumulative session spend and recursion turns are verified in atomic Redis pipelines before initiating model streaming.
            </p>
            <div className="mt-4 pt-3 border-t border-border text-[11px] font-mono text-cyan-400">
              Zero perceptible LLM streaming delay
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Zero Master Key Exposure</h3>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              Your actual provider API keys live inside an encrypted hardware security vault. Autonomous worker agents only ever hold virtual <code className="text-cyan-400">alk_task_...</code> tokens that self-destruct upon task completion.
            </p>
            <div className="mt-4 pt-3 border-t border-border text-[11px] font-mono text-rose-400">
              Prompt injection cannot leak master keys
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-border">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Autonomous Kill-Switches</h3>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              If an agent loop enters recursive tool retries or breaches session budgets, the edge gateway severs the TCP connection immediately with an HTTP 402 or 429 response, cutting rogue billing at the source.
            </p>
            <div className="mt-4 pt-3 border-t border-border text-[11px] font-mono text-emerald-400">
              Automated circuit-breaker protection
            </div>
          </div>

        </div>

        {/* Security Comparison Table */}
        <div className="p-8 rounded-2xl bg-surface border border-border-strong">
          <h3 className="text-lg font-bold text-white mb-6 text-center">
            Security Comparison: Direct Master Keys vs. AgentLock Proxy
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-border text-slate-400 font-mono text-[11px]">
                  <th className="pb-3 font-semibold">Security Vector</th>
                  <th className="pb-3 font-semibold text-rose-400">Direct Master Key in Script (Status Quo)</th>
                  <th className="pb-3 font-semibold text-cyan-400">AgentLock Ephemeral Gateway</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-slate-300 font-sans">
                <tr>
                  <td className="py-3 font-medium text-white">Financial Exposure Limit</td>
                  <td className="py-3 text-rose-300">Entire account credit limit ($5,000 - $50,000)</td>
                  <td className="py-3 text-cyan-300 font-semibold font-mono">Capped at exact task budget ($0.50 - $2.00)</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Prompt Injection Blast Radius</td>
                  <td className="py-3 text-rose-300">Catastrophic: Master key stolen from system prompt memory</td>
                  <td className="py-3 text-cyan-300 font-semibold font-mono">Zero: Stolen token expires in 15 mins with $2 cap</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Runaway Infinite Loop Defense</td>
                  <td className="py-3 text-rose-300">None: Loops until monthly budget or rate limit is hit</td>
                  <td className="py-3 text-cyan-300 font-semibold font-mono">Automated turn cutoff (Max 20 turns)</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Emergency Revocation Speed</td>
                  <td className="py-3 text-rose-300">Requires revoking master key (breaks ALL production apps)</td>
                  <td className="py-3 text-cyan-300 font-semibold font-mono">Single-click token kill without breaking other agents</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">Integration Friction</td>
                  <td className="py-3 text-slate-400">Baseline default</td>
                  <td className="py-3 text-cyan-300 font-semibold font-mono">1 line change: set base_url in SDK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
