import React, { useState } from 'react';
import { 
  Lock, AlertOctagon, CheckCircle2, Clock, Copy, Check, ShieldAlert, 
  Terminal, Activity, Plus, Search, Filter, Trash2, ArrowUpRight, Zap
} from 'lucide-react';

export function TokenDashboard({ 
  tokens, 
  onKillToken, 
  onOpenCreateToken, 
  onSelectTokenTelemetry 
}) {
  const [copiedId, setCopiedId] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredTokens = tokens.filter(t => {
    if (filterStatus === 'active' && t.status !== 'active') return false;
    if (filterStatus === 'capped' && t.status !== 'capped') return false;
    if (filterStatus === 'killed' && t.status !== 'killed') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = t.name.toLowerCase().includes(q);
      const matchId = t.id.toLowerCase().includes(q);
      const matchFw = t.agentFramework.toLowerCase().includes(q);
      return matchName || matchId || matchFw;
    }

    return true;
  });

  return (
    <section id="tokens" className="py-12 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>LIVE TOKEN CONTROL PLANE</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
              Ephemeral Agent Tokens & Kill-Switch Console
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Active scoped credentials routing through <code>gateway.agentlock.dev/v1</code>. Hard caps drop execution at the network edge.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenCreateToken}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-xs font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all flex items-center space-x-1.5 cursor-pointer shadow-sm shadow-cyan-500/20 font-sans"
            >
              <Plus className="w-3.5 h-3.5 text-slate-950" />
              <span>Create Scoped Token</span>
            </button>
          </div>
        </div>

        {/* Global Protection Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 font-mono text-xs">
          <div className="p-4 rounded-xl bg-surface border border-border flex items-center justify-between">
            <div>
              <span className="text-slate-400 text-[10px] block">ACTIVE AGENT WORKERS</span>
              <span className="text-xl font-bold text-white mt-1 block">
                {tokens.filter(t => t.status === 'active').length} Protected Sessions
              </span>
            </div>
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Activity className="w-4 h-4" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-border flex items-center justify-between">
            <div>
              <span className="text-slate-400 text-[10px] block">TOTAL SPEND GUARDED</span>
              <span className="text-xl font-bold text-emerald-400 mt-1 block">
                ${tokens.reduce((acc, t) => acc + t.currentSpend, 0).toFixed(2)} / ${tokens.reduce((acc, t) => acc + t.budgetCap, 0).toFixed(2)}
              </span>
            </div>
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-border flex items-center justify-between">
            <div>
              <span className="text-slate-400 text-[10px] block">ROGUE LOOPS TERMINATED</span>
              <span className="text-xl font-bold text-rose-400 mt-1 block">
                {tokens.filter(t => t.status === 'capped' || t.status === 'killed').length} Stopped Loops
              </span>
            </div>
            <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400">
              <AlertOctagon className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="p-4 rounded-xl bg-surface border border-border mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filterStatus === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-surface-elevated text-slate-400 border border-border hover:text-white'
              }`}
            >
              All Tokens ({tokens.length})
            </button>
            <button
              onClick={() => setFilterStatus('active')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center space-x-1.5 ${
                filterStatus === 'active'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-surface-elevated text-slate-400 border border-border hover:text-white'
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Active Routing ({tokens.filter(t => t.status === 'active').length})</span>
            </button>
            <button
              onClick={() => setFilterStatus('capped')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filterStatus === 'capped'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-surface-elevated text-slate-400 border border-border hover:text-white'
              }`}
            >
              Budget Capped ({tokens.filter(t => t.status === 'capped').length})
            </button>
            <button
              onClick={() => setFilterStatus('killed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filterStatus === 'killed'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  : 'bg-surface-elevated text-slate-400 border border-border hover:text-white'
              }`}
            >
              Kill-Switched ({tokens.filter(t => t.status === 'killed').length})
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search token, task, framework..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-surface-elevated border border-border text-slate-200 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>

        {/* Tokens List Grid */}
        <div className="space-y-4">
          {filteredTokens.length === 0 ? (
            <div className="p-12 text-center rounded-xl bg-surface border border-border text-slate-400 italic text-xs">
              No scoped tokens matching the active filters.
            </div>
          ) : (
            filteredTokens.map((token) => {
              const spendPercent = Math.min(100, Math.round((token.currentSpend / token.budgetCap) * 100));
              const turnPercent = Math.min(100, Math.round((token.currentTurns / token.maxTurns) * 100));

              return (
                <div 
                  key={token.id}
                  className="p-5 rounded-2xl bg-surface border border-border hover:border-slate-600 transition-all space-y-4"
                >
                  {/* Top line: Name, Framework, Status, Kill Switch */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-xl bg-surface-elevated border border-border text-cyan-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-sm font-bold text-white font-sans">{token.name}</h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-slate-300 border border-border">
                            {token.agentFramework}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{token.taskSummary}</p>
                      </div>
                    </div>

                    {/* Status & Kill-Switch */}
                    <div className="flex items-center space-x-3">
                      {token.status === 'active' && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center space-x-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>ACTIVE ROUTING</span>
                        </span>
                      )}
                      {token.status === 'capped' && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                          BUDGET CEILING REACHED
                        </span>
                      )}
                      {token.status === 'killed' && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/30">
                          KILL-SWITCH REVOKED
                        </span>
                      )}

                      {/* Kill Switch Button */}
                      {token.status === 'active' ? (
                        <button
                          onClick={() => onKillToken(token.id)}
                          className="px-3 py-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/40 text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer font-mono"
                          title="Instant Emergency Cutoff: Drops active and future agent API requests"
                        >
                          <AlertOctagon className="w-3.5 h-3.5" />
                          <span>Emergency Kill</span>
                        </button>
                      ) : (
                        <button
                          disabled
                          className="px-3 py-1.5 rounded-lg bg-surface-elevated text-slate-500 border border-border text-xs font-mono cursor-not-allowed"
                        >
                          Revoked
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Token String & Allowlist */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-surface-elevated border border-border text-xs font-mono gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-400 text-[11px]">BEARER:</span>
                      <span className="text-cyan-300 font-bold select-all">{token.id}</span>
                      <button
                        onClick={() => handleCopy(token.id)}
                        className="p-1 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                        title="Copy Token"
                      >
                        {copiedId === token.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-slate-400 text-[11px]">ALLOWED:</span>
                      {token.allowedModels.map((m, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded bg-background border border-border text-slate-300 text-[10px]">
                          {m}
                        </span>
                      ))}
                      <span className="text-slate-500">|</span>
                      <span className="text-slate-400 text-[11px] flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{token.expiresAt}</span>
                      </span>
                    </div>
                  </div>

                  {/* Progress Bars: Spend & Turns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    {/* Budget progress */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">HARD SPEND CEILING:</span>
                        <span className={spendPercent >= 100 ? 'text-rose-400 font-bold' : spendPercent > 75 ? 'text-amber-400 font-bold' : 'text-slate-200'}>
                          ${token.currentSpend.toFixed(2)} / ${token.budgetCap.toFixed(2)} ({spendPercent}%)
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-surface-elevated overflow-hidden border border-border">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            spendPercent >= 100 ? 'bg-rose-500' : spendPercent > 75 ? 'bg-amber-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                          }`}
                          style={{ width: `${spendPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Turn limit progress */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">RECURSION LOOP LIMIT:</span>
                        <span className={turnPercent >= 100 ? 'text-rose-400 font-bold' : 'text-slate-200'}>
                          {token.currentTurns} / {token.maxTurns} Turns ({turnPercent}%)
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-surface-elevated overflow-hidden border border-border">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            turnPercent >= 100 ? 'bg-rose-500' : 'bg-gradient-to-r from-cyan-500 to-indigo-500'
                          }`}
                          style={{ width: `${turnPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Termination explanation note if capped/killed */}
                  {token.terminationReason && (
                    <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-800/30 text-rose-300 text-xs font-mono flex items-center space-x-2">
                      <AlertOctagon className="w-4 h-4 flex-shrink-0 text-rose-400" />
                      <span>{token.terminationReason}</span>
                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
