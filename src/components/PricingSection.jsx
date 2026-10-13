import React from 'react';
import { Check, Sparkles, ShieldCheck, Zap, ArrowRight, Lock } from 'lucide-react';

export function PricingSection({ onOpenCAB, onOpenCreateToken }) {
  return (
    <section id="pricing" className="py-20 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>PREVENT OVERNIGHT INVOICE SHOCK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Guaranteed Spend Bounds for Autonomous Fleets
          </h2>
          <p className="mt-4 text-base text-slate-300">
            One rogue loop can burn through an entire $5,000 monthly budget in three hours. Lock down your tokens today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1: Free Dev */}
          <div className="rounded-2xl bg-surface border border-border p-8 flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-sans">Community Dev</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-slate-400 border border-border">
                  Sandbox
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                For individual engineers testing autonomous tool routines.
              </p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white font-mono">$0</span>
                <span className="text-xs text-slate-400 ml-2 font-mono">/ month</span>
              </div>

              <ul className="mt-8 space-y-3 text-xs text-slate-300">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>3 active ephemeral keys / month</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>$2.00 hard budget cap limit</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>10-turn recursion loop guard</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Standard edge proxy endpoint</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenCreateToken}
              className="mt-8 w-full py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-border text-slate-200 text-xs font-semibold transition-all cursor-pointer font-sans"
            >
              Start Free in Sandbox
            </button>
          </div>

          {/* Tier 2: Customer Advisory Board (Featured) */}
          <div className="rounded-2xl bg-surface border-2 border-cyan-500/50 p-8 flex flex-col justify-between shadow-xl shadow-cyan-500/10 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-[11px] font-bold font-mono uppercase tracking-wider shadow-md">
              70% Lifetime CAB Discount
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-sans flex items-center space-x-2">
                  <span>Design Partner CAB</span>
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  10 SPOTS OPEN
                </span>
              </div>
              <p className="text-xs text-cyan-300/80 mt-2">
                Join our 10-lead AI agency advisory board to eliminate rogue agent token burns forever.
              </p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white font-mono">$29</span>
                <span className="text-xs text-slate-400 ml-2 font-mono">/ mo (locked lifetime)</span>
              </div>
              <div className="text-[10px] text-slate-400 line-through font-mono mt-0.5">Regular: $100/mo</div>

              <ul className="mt-8 space-y-3 text-xs text-slate-200">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Unlimited proxy routing across all agents</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>One-click emergency kill-switch webhooks</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Direct founder hotline & roadmap input</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Custom TTLs & multi-agent turn limits</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Model allow-listing & routing policies</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenCAB}
              className="mt-8 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center space-x-1.5 cursor-pointer font-sans"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply for CAB Membership</span>
            </button>
          </div>

          {/* Tier 3: Agency Fleet */}
          <div className="rounded-2xl bg-surface border border-border p-8 flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white font-sans">Agency Fleet</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-slate-400 border border-border">
                  Production
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                For AI agencies and enterprises hosting multi-agent client fleets.
              </p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-white font-mono">$100</span>
                <span className="text-xs text-slate-400 ml-2 font-mono">/ mo ($1,200/yr)</span>
              </div>

              <ul className="mt-8 space-y-3 text-xs text-slate-300">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Unlimited ephemeral keys & workspaces</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Sub-millisecond Upstash/Redis token ledger</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Automated Slack/PagerDuty loop alerts</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Custom domain gateway (e.g. gateway.youragency.ai)</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>99.99% edge uptime SLA</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenCAB}
              className="mt-8 w-full py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-border text-slate-200 text-xs font-semibold transition-all cursor-pointer font-sans"
            >
              Get Started with Fleet
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
