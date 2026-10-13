export const CODE_SNIPPETS = {
  python: {
    language: "python",
    title: "Python (OpenAI / Anthropic SDK)",
    description: "Drop in the AgentLock proxy endpoint and replace your master key with the task token.",
    code: `import os
from openai import OpenAI

# 1. Point base_url to the AgentLock Ephemeral Gateway
# 2. Pass your task-scoped token (hard spend cap & turn limits enforced)
client = OpenAI(
    base_url="https://gateway.agentlock.dev/v1",
    api_key="alk_task_leadgen_8841"  # Scoped to $2.00 max spend / 25 turns
)

# Executes normally until budget cap or turn limit is reached
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Extract prospect domains from CRM batch."}]
)`
  },

  typescript: {
    language: "typescript",
    title: "TypeScript / Node.js",
    description: "Initialize standard OpenAI client with AgentLock reverse proxy base URL.",
    code: `import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://gateway.agentlock.dev/v1',
  apiKey: 'alk_task_sqlcoder_9912' // Ephemeral token: 30m TTL, $5.00 limit
});

async function runAutonomousStep() {
  const completion = await openai.chat.completions.create({
    model: 'claude-3-5-sonnet',
    messages: [{ role: 'user', content: 'Audit database execution query plan.' }]
  });
  console.log(completion.choices[0].message.content);
}`
  },

  langchain: {
    language: "python",
    title: "LangChain & LlamaIndex",
    description: "Set gateway endpoint across custom agent chains to prevent recursive infinite loops.",
    code: `from langchain_openai import ChatOpenAI

# LangChain automatically routes all tool turns through AgentLock
llm = ChatOpenAI(
    openai_api_base="https://gateway.agentlock.dev/v1",
    openai_api_key="alk_task_leadgen_8841",
    model_name="gpt-4o-mini",
    temperature=0
)

# If an agent loop exceeds 20 turns, AgentLock terminates execution with 429
# preventing runaway overnight API bills.`
  },

  crewai: {
    language: "python",
    title: "CrewAI Multi-Agent Fleet",
    description: "Assign isolated budget caps and kill-switches to individual worker agents in a crew.",
    code: `from crewai import Agent, Task, Crew, LLM

# Each worker agent gets its own ephemeral token and isolated budget
researcher_llm = LLM(
    model="gpt-4o-mini",
    api_base="https://gateway.agentlock.dev/v1",
    api_key="alk_task_leadgen_8841" # Max $2.00
)

researcher = Agent(
    role="B2B Research Specialist",
    goal="Enrich company records",
    llm=researcher_llm
)`
  },

  curl: {
    language: "bash",
    title: "cURL / Raw HTTP",
    description: "Forward raw HTTP payloads to the low-latency gateway proxy.",
    code: `curl https://gateway.agentlock.dev/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer alk_task_leadgen_8841" \\
  -d '{
    "model": "gpt-4o-mini",
    "messages": [{"role": "user", "content": "Execute scheduled automation"}],
    "temperature": 0.2
  }'`
  }
};
