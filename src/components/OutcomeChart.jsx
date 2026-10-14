import React, { useState } from 'react';
import { TrendingUp, Lock, ShieldCheck, Zap, DollarSign, AlertOctagon, Terminal } from 'lucide-react';

/**
 * OutcomeChart for AgentLock (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $18,500/mo SRE on-call firefighting & infinite loop credit card burn ($6 layer)
 * with Task-Scoped Ephemeral Token Proxy Autopilot ($1 software layer).
 */
export default function OutcomeChart({
  serviceName = "Autonomous Agent API Gateway & Infinite Loop Kill-Switch",
  defaultMonthlyAgents = 25, // active agent swarms in production
  onCtaClick
}) {
  const [agents, setAgents] = useState(defaultMonthlyAgents);

  // Legacy costs: Runaway recursive loops ($4,500/mo avg risk) + Dedicated SRE on-call hours + Security audits (~$380/agent/mo)
  const legacyServicesCost = agents * 380;
  // AgentLock software fee: $99/mo base + $4/agent
  const autoSoftwareCost = 99 + (agents * 4);
  const netCloudSavings = legacyServicesCost - autoSoftwareCost;
  const savingsPercent = Math.round(((legacyServicesCost - autoSoftwareCost) / legacyServicesCost) * 100);

  const maxCost = Math.max(legacyServicesCost, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((autoSoftwareCost / maxCost) * 100), 8);

  return (
    <div className="relative rounded-2xl border border-cyan-500/30 bg-slate-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-slate-900 border-cyan-500/40 text-cyan-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs $15k/mo SRE Firefighting ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Agent Gateway Economics: <span className="text-cyan-400">{savingsPercent}% Token Blowout Risk Slashed</span>
          </h3>
          <p className="text-sm text-slate-300 mt-1 max-w-xl">
            Never hand an autonomous agent master API keys. An unmonitored LangChain or CrewAI recursive loop can burn $4,000 on OpenAI or Anthropic in 90 minutes. AgentLock guarantees hard mathematical spend limits per task.
          </p>
        </div>

        <div className="text-right bg-slate-900/80 border border-cyan-500/30 rounded-xl p-3 px-4 min-w-[200px]">
          <span className="text-[11px] text-slate-400 block font-medium">Monthly Cloud Risk Slashed</span>
          <span className="text-2xl md:text-3xl font-black text-cyan-400">
            ${netCloudSavings.toLocaleString()}
          </span>
          <span className="text-[10px] text-cyan-300/80 flex items-center justify-end gap-1 font-semibold font-mono">
            <TrendingUp className="w-3 h-3" /> Hard Cap Circuit Breaker
          </span>
        </div>
      </div>

      {/* Interactive Volume Slider */}
      <div className="py-6 border-b border-white/10">
        <div className="flex items-center justify-between text-sm mb-3">
          <label className="text-slate-300 font-semibold flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            Active Production Agent Swarms / Workers:
          </label>
          <span className="text-base font-bold text-white bg-slate-900 px-3 py-1 rounded-lg border border-cyan-500/30 font-mono">
            {agents} Agents (${(legacyServicesCost * 12).toLocaleString()}/yr Exposure)
          </span>
        </div>
        <input 
          type="range" 
          min={5} 
          max={100} 
          step={5}
          value={agents}
          onChange={(e) => setAgents(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
        />
        <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
          <span>5 Agents (Pilot Swarm)</span>
          <span>25 Agents (Mid-Market Autonomous Stack)</span>
          <span>100+ Agents (Enterprise Autonomous Swarm)</span>
        </div>
      </div>

      {/* Bklit UI Visual Comparison Chart & Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
        {/* SVG Visual Bars */}
        <div className="md:col-span-5 bg-slate-900 rounded-xl p-5 border border-white/10">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between font-mono">
            <span>Monthly Runaway Spend Risk</span>
            <span className="text-[10px] text-slate-500">Live Mathematical Proof</span>
          </div>

          <div className="space-y-4">
            {/* Legacy Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Uncapped Keys & SRE Firefighting ($6 Layer)
                </span>
                <span className="font-mono font-bold text-rose-300">${legacyServicesCost.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden border border-rose-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-rose-600 to-rose-400 transition-all duration-300 rounded-lg"
                  style={{ width: `${legacyBarHeight}%` }}
                />
              </div>
            </div>

            {/* Autonomous Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  AgentLock Ephemeral Gateway ($1 Layer)
                </span>
                <span className="font-mono font-bold text-cyan-300">${autoSoftwareCost.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden border border-cyan-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 rounded-lg shadow-lg shadow-cyan-500/30"
                  style={{ width: `${autoBarHeight}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Annual Net Cloud Spend Protected:</span>
            <span className="text-sm font-bold text-cyan-400">+${(netCloudSavings * 12).toLocaleString()}</span>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Ephemeral Single-Task Sub-Keys</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Each agent gets a throwaway token with a strict $1.50 hard cap and 20-minute lifespan. If leaked or compromised, exposure is zero.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
              <AlertOctagon className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Recursive Infinite Loop Circuit Breaker</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Detects semantic looping and identical tool-call repetitions in real-time, severing the connection before token bills balloon.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Drop-in Base URL Proxy (Zero Code Changes)</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Compatible with any OpenAI, Anthropic, LangChain, or LlamaIndex app. Simply change `base_url` to `https://proxy.agentlock.dev/v1`.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
