import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, AlertOctagon, RefreshCw, Terminal, CheckCircle2, 
  XCircle, Zap, ShieldAlert, Cpu, Activity, ArrowRight 
} from 'lucide-react';

export function LiveSimulator() {
  const [scenario, setScenario] = useState('runaway'); // 'healthy', 'runaway'
  const [isRunning, setIsRunning] = useState(false);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [accumulatedCost, setAccumulatedCost] = useState(0.00);
  const [accumulatedTokens, setAccumulatedTokens] = useState(0);
  const [logs, setLogs] = useState([]);
  const [killTriggered, setKillTriggered] = useState(false);
  const [outcomeStatus, setOutcomeStatus] = useState(null); // 'success', 'capped', 'killed'

  const timeoutRef = useRef(null);

  const resetSimulator = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsRunning(false);
    setCurrentTurn(0);
    setAccumulatedCost(0.00);
    setAccumulatedTokens(0);
    setKillTriggered(false);
    setOutcomeStatus(null);
    setLogs([
      { type: 'info', text: 'AgentLock Gateway proxy ready at https://gateway.agentlock.dev/v1' },
      { type: 'info', text: 'Enforcing token: alk_task_demo_test (Budget Cap: $1.00 | Max Turns: 12)' }
    ]);
  };

  useEffect(() => {
    resetSimulator();
  }, [scenario]);

  const addLog = (type, text) => {
    setLogs(prev => [...prev, { type, text, timestamp: new Date().toISOString().substring(11, 19) }]);
  };

  const handleStartRun = () => {
    resetSimulator();
    setIsRunning(true);
    setOutcomeStatus(null);

    addLog('system', `[POST /v1/chat/completions] Initiating autonomous session with ${scenario === 'healthy' ? 'Balanced Research Agent' : 'Recursive Web Scraper Agent'}...`);

    let turn = 0;
    let cost = 0;
    let tokens = 0;

    const runTurn = () => {
      turn++;
      setCurrentTurn(turn);

      // Determine step parameters
      const turnTokens = scenario === 'healthy' ? 950 + Math.floor(Math.random() * 400) : 1800 + Math.floor(Math.random() * 800);
      const turnCost = turnTokens * 0.00015; // ~$0.15-$0.35
      tokens += turnTokens;
      cost += turnCost;

      setAccumulatedTokens(tokens);
      setAccumulatedCost(parseFloat(cost.toFixed(2)));

      // Check constraints
      // Constraint 1: Hard Budget Cap breach ($1.00)
      if (cost >= 1.00) {
        addLog('danger', `[HTTP 402 PAYMENT REQUIRED] [AGENTLOCK_GOVERNOR] Request DROPPED! Hard budget ceiling of $1.00 reached.`);
        addLog('danger', `[PROTECTION] Master API key isolated. Execution loop terminated before runaway invoice.`);
        setIsRunning(false);
        setOutcomeStatus('capped');
        return;
      }

      // Constraint 2: Recursion Turn limit (12 turns)
      if (turn >= 12) {
        addLog('danger', `[HTTP 429 TOO MANY REQUESTS] [AGENTLOCK_GOVERNOR] Request DROPPED! Max recursion turn cap (12) reached without terminal state.`);
        addLog('danger', `[PROTECTION] Infinite tool execution severed at proxy edge.`);
        setIsRunning(false);
        setOutcomeStatus('capped');
        return;
      }

      // Normal turn execution
      if (scenario === 'healthy') {
        const stepDescriptions = [
          "Turn 1: Received user prompt -> Parsed 12 search sub-goals",
          "Turn 2: Dispatched tool call [web_search] -> Retrieved 8 articles",
          "Turn 3: Dispatched tool call [summarize_facts] -> Synthesizing key findings",
          "Turn 4: Formatted final executive briefing -> Terminated loop successfully"
        ];

        addLog('success', `Turn ${turn}: ${stepDescriptions[turn - 1]} (+${turnTokens} tokens, +$${turnCost.toFixed(2)})`);

        if (turn >= 4) {
          addLog('info', `[HTTP 200 OK] Autonomous task completed cleanly. Total spend: $${cost.toFixed(2)} (well under $1.00 cap).`);
          setIsRunning(false);
          setOutcomeStatus('success');
          return;
        }
      } else {
        // Runaway scenario
        addLog('warn', `Turn ${turn}: Agent stuck in recursive retry [search_leads_v2] -> Empty payload, re-trying tool... (+${turnTokens} tokens, +$${turnCost.toFixed(2)})`);
      }

      timeoutRef.current = setTimeout(runTurn, 900);
    };

    timeoutRef.current = setTimeout(runTurn, 500);
  };

  const handleEmergencyKill = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsRunning(false);
    setKillTriggered(true);
    setOutcomeStatus('killed');
    addLog('danger', `[EMERGENCY KILL-SWITCH INVOCATION] Admin pressed Kill Switch!`);
    addLog('danger', `[HTTP 403 FORBIDDEN] [AGENTLOCK_GATEWAY] Token alk_task_demo_test revoked in Redis (<1ms). All pending requests severed.`);
  };

  return (
    <section id="simulator" className="py-16 bg-surface/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono mb-3">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>INTERACTIVE RUNAWAY SPEND SIMULATOR</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            Live Gateway & Kill-Switch Sandbox
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Witness how AgentLock enforces hard spend ceilings and severs recursive infinite loops in real time without human intervention.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Controls Column */}
          <div className="lg:col-span-1 space-y-4">
            
            {/* Scenario Selector */}
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-4">
              <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                Select Simulation Routine
              </h3>

              <div className="space-y-2">
                <button
                  onClick={() => setScenario('runaway')}
                  className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    scenario === 'runaway'
                      ? 'bg-rose-500/10 border-rose-500/50 text-rose-200'
                      : 'bg-surface-elevated border-border text-slate-300 hover:bg-surface-hover'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-xs mb-1">
                    <span>Runaway Recursive Loop</span>
                    <span className="text-[10px] font-mono text-rose-400 bg-rose-950/60 px-1.5 py-0.5 rounded">High Risk</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Simulates a hallucinated tool loop that rapidly burns tokens until the $1.00 hard cap or 12-turn limit cuts it off.
                  </p>
                </button>

                <button
                  onClick={() => setScenario('healthy')}
                  className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    scenario === 'healthy'
                      ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-200'
                      : 'bg-surface-elevated border-border text-slate-300 hover:bg-surface-hover'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-xs mb-1">
                    <span>Healthy 4-Step Routine</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">Normal</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Normal multi-agent workflow that completes within bounds and under budget.
                  </p>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-border">
                {!isRunning ? (
                  <button
                    onClick={handleStartRun}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold text-xs hover:from-cyan-400 hover:to-blue-400 transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center space-x-2 cursor-pointer font-sans"
                  >
                    <Play className="w-4 h-4 fill-slate-950" />
                    <span>Run Agent Simulation</span>
                  </button>
                ) : (
                  <button
                    onClick={handleEmergencyKill}
                    className="w-full py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs shadow-lg shadow-rose-500/30 flex items-center justify-center space-x-2 transition-all cursor-pointer animate-pulse font-sans"
                  >
                    <AlertOctagon className="w-4 h-4" />
                    <span>TRIGGER EMERGENCY KILL-SWITCH</span>
                  </button>
                )}

                <button
                  onClick={resetSimulator}
                  className="w-full py-2 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-border text-slate-400 hover:text-white text-xs font-mono flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset Sandbox</span>
                </button>
              </div>
            </div>

            {/* Live Governor Metrics */}
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-3 font-mono text-xs">
              <h4 className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                Governor Constraint Monitor
              </h4>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-400">HARD BUDGET CAP:</span>
                  <span className={accumulatedCost >= 1.00 ? 'text-rose-400 font-bold' : 'text-cyan-300 font-bold'}>
                    ${accumulatedCost.toFixed(2)} / $1.00
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-elevated overflow-hidden border border-border">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${accumulatedCost >= 1.00 ? 'bg-rose-500' : 'bg-cyan-500'}`}
                    style={{ width: `${Math.min(100, (accumulatedCost / 1.00) * 100)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-400">TURN RECURSION CAP:</span>
                  <span className={currentTurn >= 12 ? 'text-rose-400 font-bold' : 'text-slate-200 font-bold'}>
                    {currentTurn} / 12 Turns
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-elevated overflow-hidden border border-border">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${currentTurn >= 12 ? 'bg-rose-500' : 'bg-blue-500'}`}
                    style={{ width: `${Math.min(100, (currentTurn / 12) * 100)}%` }}
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-border flex justify-between text-[11px]">
                <span className="text-slate-400">TOTAL TOKENS BURNED:</span>
                <span className="text-white font-bold">{accumulatedTokens.toLocaleString()} tokens</span>
              </div>
            </div>

          </div>

          {/* Terminal Console Column */}
          <div className="lg:col-span-2 flex flex-col h-[520px] rounded-2xl bg-[#05070c] border border-border overflow-hidden shadow-2xl">
            
            {/* Terminal Header */}
            <div className="px-4 py-3 bg-[#0a0e18] border-b border-border flex items-center justify-between font-mono text-xs">
              <div className="flex items-center space-x-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 text-slate-300 text-[11px]">gateway-proxy.agentlock.dev:stdout</span>
              </div>

              <div className="flex items-center space-x-2">
                {isRunning && (
                  <span className="flex items-center space-x-1.5 text-cyan-400 text-[11px]">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
                    <span>PROXY INTERCEPTING</span>
                  </span>
                )}
                {outcomeStatus === 'capped' && (
                  <span className="text-rose-400 text-[11px] font-bold">
                    [TERMINATED: HARD CAP]
                  </span>
                )}
                {outcomeStatus === 'killed' && (
                  <span className="text-rose-400 text-[11px] font-bold">
                    [REVOKED: KILL SWITCH]
                  </span>
                )}
                {outcomeStatus === 'success' && (
                  <span className="text-emerald-400 text-[11px] font-bold">
                    [COMPLETED: WITHIN BUDGET]
                  </span>
                )}
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 flex-1 overflow-y-auto font-mono text-xs space-y-2 selection:bg-cyan-900/40">
              {logs.map((log, idx) => (
                <div key={idx} className="flex items-start space-x-2 leading-relaxed">
                  <span className="text-slate-600 select-none text-[10px] pt-0.5">{log.timestamp || '00:00:00'}</span>
                  {log.type === 'info' && <span className="text-slate-400">{log.text}</span>}
                  {log.type === 'system' && <span className="text-cyan-300">{log.text}</span>}
                  {log.type === 'success' && <span className="text-emerald-400">{log.text}</span>}
                  {log.type === 'warn' && <span className="text-amber-400">{log.text}</span>}
                  {log.type === 'danger' && <span className="text-rose-400 font-bold">{log.text}</span>}
                </div>
              ))}
            </div>

            {/* Bottom Status Ribbon */}
            <div className="px-4 py-2 bg-[#0a0e18] border-t border-border flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Latency: 2.1ms (Edge Redis Check)</span>
              <span>Protocol: HTTP/2 Reverse Proxy</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
