# AgentLock 🛡️
> **Know Your Agent — Task-Scoped API Token Scoper & Kill-Switch Dashboard**  
> *Task-scoped, ephemeral API key gateway with hard budget caps and autonomous infinite-loop kill-switches for multi-agent workflows.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Latency: Edge Proxy](https://img.shields.io/badge/Overhead-2.4ms_Edge_Gateway-cyan.svg)](#edge-proxy-architecture)
[![Compatibility: OpenAI & Anthropic](https://img.shields.io/badge/Compatibility-OpenAI_%7C_Anthropic_%7C_Gemini-purple.svg)](#sdk--framework-quickstart)
[![Security: Zero Master Keys](https://img.shields.io/badge/Security-Zero_Master_Key_Exposure-emerald.svg)](#security-comparison)

---

## 1. Executive Summary & Problem Thesis
- **Product Name:** AgentLock
- **One-Liner:** Task-scoped, ephemeral API key gateway with hard budget caps and autonomous infinite-loop kill-switches for multi-agent workflows.
- **Problem Thesis:** Enterprises and developers are actively deploying autonomous AI agents that run multi-step tool routines without human verification on every action. However, agents have no persistent identity, no task-scoped authority, and no native financial bounds. Builders plug master API keys (OpenAI, Anthropic, Gemini) directly into autonomous loops, creating vulnerabilities: prompt injections, recursive infinite tool execution, and unexpected multi-thousand-dollar API invoices overnight.

---

## 2. Market Sizing & Playbook Validation
- **Bottoms-Up TAM:**
  - Target Audience: 2,000,000 developers, automation agencies, and tech companies deploying autonomous agent scripts (LangChain, LlamaIndex, AutoGen, n8n, CrewAI).
  - Pricing: $100/month ($1,200/year) for agency teams and production agent infrastructure.
  - Calculated TAM: 2,000,000 × $1,200 = **$2.400 Billion** (exceeds $2B venture hurdle).
- **Early Disruption Indicator:** Observability and governance for autonomous systems are in their infancy ($278M raised across early players), while agents are already completing millions of enterprise tasks independently. As physical and digital AI agent fleets scale, dynamic task tokens and non-human identity rails become mandatory.
- **Desperation Filter:** 
  - One runaway agent loop can burn through an entire $5,000 monthly API budget in three hours.
  - A compromised agent with a master key exposes company-wide LLM services and system prompts.

---

## 3. Target Customer Persona
- **Primary ICP:** AI Engineer, Lead Automation Architect, or Agency Founder building and hosting custom agent pipelines for clients.
- **Core Value Proposition:** Drop-in proxy that prevents runaway token billing, enforces per-task budget ceilings, and cuts rogue agents in real time without altering agent codebases.

---

## 4. Black Car Scope (V1 MVP Features)

| Feature | Description | Status |
| :--- | :--- | :--- |
| **Drop-In Proxy Endpoint** | Route requests to `https://gateway.agentlock.dev/v1` in standard SDKs. | ✅ Active |
| **Hard Spend Ceilings** | Immediate `402 Payment Required` drop if task exceeds limit ($0.50 - $5.00). | ✅ Active |
| **Recursion Turn Guard** | Edge proxy terminates infinite loops after configured sequential turns (e.g. 20 turns). | ✅ Active |
| **TTL Token Expiration** | Auto-expiring ephemeral tokens (15m, 30m, 1h, 24h). | ✅ Active |
| **Emergency Kill-Switch** | One-click instant revocation in Redis ledger across all active requests. | ✅ Active |
| **Model Allow-Listing** | Lock tokens to execute only designated models (e.g., enforce `gpt-4o-mini`). | ✅ Active |
| **Live Simulator Sandbox** | Interactive sandbox to test runaway loop enforcement and mid-flight kill-switches. | ✅ Active |

---

## 5. Edge Proxy Architecture

```
┌────────────────────────────────────────────────────────┐
│                   AUTONOMOUS AGENT RUNTIME             │
│            (CrewAI, LangChain, AutoGen, Python)        │
└──────────────────────────┬─────────────────────────────┘
                           │
                           │  HTTP/2 POST Bearer alk_task_...
                           ▼
┌────────────────────────────────────────────────────────┐
│             AGENTLOCK ULTRA-LOW LATENCY GATEWAY        │
│          https://gateway.agentlock.dev/v1/chat/...      │
│                                                        │
│  [ Step 1: Decode Virtual Scoped Token ]               │
│  [ Step 2: Atomic Redis Check: Spend < Budget Cap ]    │
│  [ Step 3: Turn Recursion Check: Turns < Max Turn ]    │
│  [ Step 4: Model Allowlist Verification ]              │
│                                                        │
│      ├── IF CONSTRAINT BREACHED:                       │
│      │   └── DROP IMMEDIATELY (HTTP 402 / 429)         │
│      │                                                 │
│      └── IF VALID:                                     │
│          └── Forward to Encrypted Master Vault Key     │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│              UPSTREAM MODEL PROVIDERS                  │
│           (OpenAI, Anthropic Claude, Google Gemini)    │
└────────────────────────────────────────────────────────┘
```

---

## 6. Security Comparison

| Security Vector | Direct Master Key (Status Quo) | AgentLock Ephemeral Gateway |
| :--- | :--- | :--- |
| **Financial Exposure** | Entire account credit limit ($5,000 - $50,000) | Capped at exact task budget ($0.50 - $2.00) |
| **Prompt Injection Blast** | Master key leaked from system prompt memory | Virtual token expires in 15m with $2 cap |
| **Infinite Loop Defense** | None (burns until account budget depleted) | Automated turn cutoff (Max 20 turns) |
| **Emergency Revocation** | Revoking master key breaks ALL company apps | One-click single token kill (<1ms) |
| **Integration Friction** | Baseline default | 1 line change: set `base_url` in client SDK |

---

## 7. SDK & Framework Quickstart

### Python (OpenAI SDK)
```python
from openai import OpenAI

# 1. Point base_url to the AgentLock Gateway
# 2. Pass your task-scoped ephemeral token
client = OpenAI(
    base_url="https://gateway.agentlock.dev/v1",
    api_key="alk_task_leadgen_8841"  # Scoped to $2.00 max spend / 25 turns
)

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Extract prospect domains from CRM batch."}]
)
```

### LangChain & LangGraph
```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    openai_api_base="https://gateway.agentlock.dev/v1",
    openai_api_key="alk_task_leadgen_8841",
    model_name="gpt-4o-mini"
)
```

### CrewAI Multi-Agent
```python
from crewai import Agent, LLM

researcher_llm = LLM(
    model="gpt-4o-mini",
    api_base="https://gateway.agentlock.dev/v1",
    api_key="alk_task_leadgen_8841"
)

researcher = Agent(role="Researcher", goal="Lead Enrichment", llm=researcher_llm)
```

---

## 8. Pricing & Customer Advisory Board (CAB)

- **Community Dev ($0/mo):** 3 active ephemeral keys, $2.00 hard budget cap limit, 10-turn recursion loop guard.
- **Design Partner CAB ($29/mo - 70% Lifetime Discount):** 10 spots for AI agency builders, unlimited proxy routing, emergency kill-switch webhooks, direct founder hotline.
- **Agency Fleet ($100/mo - $1,200/year):** Unlimited ephemeral keys, sub-millisecond Upstash/Redis token ledger, automated Slack/PagerDuty loop alerts, custom domain gateway.

### Customer Advisory Board Outreach Script
> *"We are building AgentLock with a small group of 10 lead AI agency builders to eliminate rogue agent token burns forever. Joining our CAB gives you direct architecture input and a 70% lifetime rate ($29/mo) with unlimited proxy routing."*

---

## 9. Quickstart & Local Development

### Installation
```bash
# Clone the repository
git clone https://github.com/21cabbagee/agent-lock.git
cd agent-lock

# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build
```

---

## 10. License
Distributed under the MIT License. See `LICENSE` for details.
