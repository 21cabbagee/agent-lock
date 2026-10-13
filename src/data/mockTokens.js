export const MOCK_TOKENS = [
  {
    id: "alk_task_leadgen_8841",
    name: "Apollo Lead Enrichment Scraper",
    agentFramework: "CrewAI Multi-Agent",
    allowedModels: ["gpt-4o-mini"],
    budgetCap: 2.00,
    currentSpend: 1.42,
    maxTurns: 25,
    currentTurns: 18,
    ttlMinutes: 15,
    expiresAt: "In 8 minutes",
    status: "active", // 'active', 'capped', 'killed', 'expired'
    createdAt: "2026-10-13 14:20:00 UTC",
    taskSummary: "Enrich 50 prospect domains and synthesize B2B signals",
    telemetry: [
      { turn: 1, model: "gpt-4o-mini", tokens: 840, cost: 0.08, latencyMs: 312, status: "OK" },
      { turn: 2, model: "gpt-4o-mini", tokens: 1240, cost: 0.12, latencyMs: 290, status: "OK" },
      { turn: 3, model: "gpt-4o-mini", tokens: 2100, cost: 0.19, latencyMs: 345, status: "OK" }
    ]
  },

  {
    id: "alk_task_sqlcoder_9912",
    name: "Autonomous Snowflake Index Optimizer",
    agentFramework: "LangChain Tool Loop",
    allowedModels: ["claude-3-5-sonnet", "gpt-4o"],
    budgetCap: 5.00,
    currentSpend: 0.88,
    maxTurns: 15,
    currentTurns: 4,
    ttlMinutes: 30,
    expiresAt: "In 24 minutes",
    status: "active",
    createdAt: "2026-10-13 14:26:00 UTC",
    taskSummary: "Analyze slow query execution plans and propose index migrations",
    telemetry: [
      { turn: 1, model: "claude-3-5-sonnet", tokens: 3400, cost: 0.42, latencyMs: 620, status: "OK" },
      { turn: 2, model: "claude-3-5-sonnet", tokens: 3600, cost: 0.46, latencyMs: 580, status: "OK" }
    ]
  },

  {
    id: "alk_task_runaway_loop_4421",
    name: "GitHub PR Reviewer & Linter",
    agentFramework: "AutoGen Dynamic Group",
    allowedModels: ["gpt-4o-mini"],
    budgetCap: 1.00,
    currentSpend: 1.00,
    maxTurns: 20,
    currentTurns: 20,
    ttlMinutes: 10,
    expiresAt: "Terminated",
    status: "capped",
    terminationReason: "Hard Recursion Cap Exceeded: 20 turns reached without terminal output",
    createdAt: "2026-10-13 13:45:00 UTC",
    taskSummary: "Recursive linter triggered endless re-formatting loop",
    telemetry: [
      { turn: 18, model: "gpt-4o-mini", tokens: 1800, cost: 0.15, latencyMs: 290, status: "OK" },
      { turn: 19, model: "gpt-4o-mini", tokens: 1950, cost: 0.16, latencyMs: 310, status: "OK" },
      { turn: 20, model: "gpt-4o-mini", tokens: 2200, cost: 0.18, latencyMs: 280, status: "TERMINATED_RECURSION_LIMIT" }
    ]
  },

  {
    id: "alk_task_customer_triage_3301",
    name: "Zendesk Auto-Escalation Worker",
    agentFramework: "n8n AI Workflow",
    allowedModels: ["gpt-4o"],
    budgetCap: 10.00,
    currentSpend: 9.85,
    maxTurns: 50,
    currentTurns: 48,
    ttlMinutes: 60,
    expiresAt: "Killed by Admin",
    status: "killed",
    terminationReason: "Emergency Kill-Switch Triggered by Administrator",
    createdAt: "2026-10-13 12:10:00 UTC",
    taskSummary: "Triage inbound enterprise support tickets with auto-refund privileges",
    telemetry: [
      { turn: 46, model: "gpt-4o", tokens: 4100, cost: 0.65, latencyMs: 710, status: "OK" },
      { turn: 47, model: "gpt-4o", tokens: 4200, cost: 0.68, latencyMs: 740, status: "OK" },
      { turn: 48, model: "gpt-4o", tokens: 0, cost: 0.00, latencyMs: 2, status: "KILLED_BY_ADMIN" }
    ]
  }
];
