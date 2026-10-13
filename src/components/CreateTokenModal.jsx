import React, { useState } from 'react';
import { X, Lock, CheckCircle2, DollarSign, Clock, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

export function CreateTokenModal({ isOpen, onClose, onCreateToken }) {
  const [name, setName] = useState('');
  const [framework, setFramework] = useState('CrewAI Multi-Agent');
  const [budgetCap, setBudgetCap] = useState('2.00');
  const [maxTurns, setMaxTurns] = useState('25');
  const [ttlMinutes, setTtlMinutes] = useState('15');
  const [selectedModels, setSelectedModels] = useState(['gpt-4o-mini']);
  const [taskSummary, setTaskSummary] = useState('');

  if (!isOpen) return null;

  const handleToggleModel = (model) => {
    if (selectedModels.includes(model)) {
      if (selectedModels.length > 1) {
        setSelectedModels(selectedModels.filter(m => m !== model));
      }
    } else {
      setSelectedModels([...selectedModels, model]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanId = name.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 15) || 'agent';
    const hash = Math.floor(1000 + Math.random() * 9000);
    const tokenId = `alk_task_${cleanId}_${hash}`;

    const newToken = {
      id: tokenId,
      name: name || 'Autonomous Agent Task',
      agentFramework: framework,
      allowedModels: selectedModels,
      budgetCap: parseFloat(budgetCap) || 2.00,
      currentSpend: 0.00,
      maxTurns: parseInt(maxTurns) || 25,
      currentTurns: 0,
      ttlMinutes: parseInt(ttlMinutes) || 15,
      expiresAt: `In ${ttlMinutes} minutes`,
      status: 'active',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC',
      taskSummary: taskSummary || 'Task-scoped execution routine with hard spend limits',
      telemetry: []
    };

    onCreateToken(newToken);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-surface border border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-border bg-surface-elevated flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono">
                Provision Ephemeral Scoped Token
              </h3>
              <p className="text-[11px] text-slate-400">
                Bound with hard budget ceiling & recursion infinite-loop kill-switches
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-surface-hover transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          
          {/* Agent Name */}
          <div>
            <label className="block text-slate-300 font-medium mb-1">
              Agent Routine / Task Name:
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Apollo Lead Enrichment Scraper"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-cyan-500/50"
            />
          </div>

          {/* Framework & TTL */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Agent Framework:
              </label>
              <select
                value={framework}
                onChange={(e) => setFramework(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-cyan-500/50"
              >
                <option>CrewAI Multi-Agent</option>
                <option>LangChain / LlamaIndex</option>
                <option>AutoGen Dynamic Group</option>
                <option>n8n AI Workflow</option>
                <option>Custom Python Loop</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                TTL Token Lifespan:
              </label>
              <select
                value={ttlMinutes}
                onChange={(e) => setTtlMinutes(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-cyan-500/50"
              >
                <option value="15">15 Minutes (1 Task)</option>
                <option value="30">30 Minutes</option>
                <option value="60">1 Hour</option>
                <option value="1440">24 Hours</option>
              </select>
            </div>
          </div>

          {/* Budget Cap & Max Turns */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-medium mb-1 flex items-center justify-between">
                <span>Hard Spend Ceiling:</span>
                <span className="text-cyan-400 font-mono font-bold">${budgetCap} max</span>
              </label>
              <select
                value={budgetCap}
                onChange={(e) => setBudgetCap(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-cyan-500/50"
              >
                <option value="0.50">$0.50 Hard Cap</option>
                <option value="1.00">$1.00 Hard Cap</option>
                <option value="2.00">$2.00 Standard Cap</option>
                <option value="5.00">$5.00 High Compute Cap</option>
                <option value="10.00">$10.00 Batch Cap</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1 flex items-center justify-between">
                <span>Recursion Loop Guard:</span>
                <span className="text-rose-400 font-mono font-bold">{maxTurns} turns</span>
              </label>
              <select
                value={maxTurns}
                onChange={(e) => setMaxTurns(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-cyan-500/50"
              >
                <option value="10">10 Turns Max</option>
                <option value="20">20 Turns Max</option>
                <option value="25">25 Turns Standard</option>
                <option value="50">50 Turns Deep Research</option>
              </select>
            </div>
          </div>

          {/* Allowed Models Multi-Select */}
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              Enforced Model Allowlist:
            </label>
            <div className="flex flex-wrap gap-2">
              {['gpt-4o-mini', 'gpt-4o', 'claude-3-5-sonnet', 'gemini-1.5-pro'].map((m) => {
                const isSelected = selectedModels.includes(m);
                return (
                  <button
                    type="button"
                    key={m}
                    onClick={() => handleToggleModel(m)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'bg-surface-elevated text-slate-400 border border-border hover:text-white'
                    }`}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Task Summary */}
          <div>
            <label className="block text-slate-300 font-medium mb-1">
              Task Context / Operational Purpose:
            </label>
            <input
              type="text"
              placeholder="e.g. Scrape and summarize 50 prospect websites"
              value={taskSummary}
              onChange={(e) => setTaskSummary(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-cyan-500/50"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 flex items-center justify-center space-x-2 transition-all cursor-pointer font-sans"
          >
            <span>Generate Scoped Token & Enforce Gateway</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <p className="text-center text-[10px] text-slate-400 font-mono">
            Zero master key exposure. Injected into Redis reverse proxy instantly.
          </p>

        </form>
      </div>
    </div>
  );
}
