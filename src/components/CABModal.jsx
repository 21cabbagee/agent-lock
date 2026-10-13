import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Lock, ArrowRight, Building2, User, Cpu } from 'lucide-react';

export function CABModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'AI Engineer / Lead Architect',
    framework: 'CrewAI / LangChain',
    monthlySpend: '$1k - $5k/mo'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-sans">
                Customer Advisory Board (CAB)
              </h3>
              <p className="text-[11px] text-cyan-300 font-mono">
                10 Agency Builder Seats — 70% Lifetime Rate ($29/mo)
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

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Application Received!</h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you for applying to the AgentLock Design Partner CAB. Our founding engineering team will contact <strong className="text-white font-mono">{formData.email}</strong> within 24 hours to provision your private proxy namespace and lock in your $29/mo lifetime rate.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2 rounded-xl bg-surface-elevated border border-border text-xs font-semibold text-white hover:bg-surface-hover cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Official CAB Outreach Script Quote */}
              <div className="p-3.5 rounded-xl bg-surface-elevated border border-border text-xs text-slate-300 italic leading-relaxed">
                "We are building AgentLock with a small group of 10 lead AI agency builders to eliminate rogue agent token burns forever. Joining our CAB gives you direct architecture input and a 70% lifetime rate ($29/mo) with unlimited proxy routing."
              </div>

              {/* Form Fields */}
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Work Email:</label>
                  <input
                    type="email"
                    required
                    placeholder="liam@automationagency.io"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Agency / Company:</label>
                    <input
                      type="text"
                      required
                      placeholder="OmniAgents AI"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Role / Title:</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-cyan-500/50"
                    >
                      <option>AI Engineer / Lead Architect</option>
                      <option>Agency Founder / CEO</option>
                      <option>CTO / Head of Engineering</option>
                      <option>Automation Consultant</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Primary Framework:</label>
                    <select
                      value={formData.framework}
                      onChange={(e) => setFormData({ ...formData, framework: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-cyan-500/50"
                    >
                      <option>CrewAI Multi-Agent</option>
                      <option>LangChain / LangGraph</option>
                      <option>AutoGen / Semantic Kernel</option>
                      <option>n8n / Flowise</option>
                      <option>Custom Python / Node.js</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Monthly LLM Spend:</label>
                    <select
                      value={formData.monthlySpend}
                      onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-surface-elevated border border-border text-white focus:outline-none focus:border-cyan-500/50"
                    >
                      <option>$500 - $1,000/mo</option>
                      <option>$1,000 - $5,000/mo</option>
                      <option>$5,000 - $15,000/mo</option>
                      <option>$15,000+/mo</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 flex items-center justify-center space-x-2 transition-all cursor-pointer font-sans"
              >
                <span>Submit CAB Application ($29/mo Rate)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-center text-[10px] text-slate-400 font-mono">
                No credit card required upfront. 14-day evaluation period.
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
