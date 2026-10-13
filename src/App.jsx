import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TokenDashboard } from './components/TokenDashboard';
import { LiveSimulator } from './components/LiveSimulator';
import { SDKQuickstart } from './components/SDKQuickstart';
import { ArchitectureSpec } from './components/ArchitectureSpec';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { CreateTokenModal } from './components/CreateTokenModal';
import { CABModal } from './components/CABModal';
import { MOCK_TOKENS } from './data/mockTokens';

function App() {
  const [tokens, setTokens] = useState(MOCK_TOKENS);
  const [isCreateTokenOpen, setIsCreateTokenOpen] = useState(false);
  const [isCABOpen, setIsCABOpen] = useState(false);

  // Kill token handler
  const handleKillToken = (tokenId) => {
    setTokens(prev => prev.map(t => {
      if (t.id === tokenId) {
        return {
          ...t,
          status: 'killed',
          expiresAt: 'Killed by Admin',
          terminationReason: 'Revoked via Emergency Dashboard Kill-Switch'
        };
      }
      return t;
    }));
  };

  // Add new token handler
  const handleCreateToken = (newToken) => {
    setTokens(prev => [newToken, ...prev]);
  };

  const handleScrollToTokens = () => {
    const el = document.getElementById('tokens');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Header */}
      <Header 
        onOpenCreateToken={() => setIsCreateTokenOpen(true)}
        onOpenCAB={() => setIsCABOpen(true)}
        onScrollToSimulator={handleScrollToSimulator}
        onScrollToTokens={handleScrollToTokens}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero */}
        <Hero 
          onOpenCreateToken={() => setIsCreateTokenOpen(true)}
          onScrollToSimulator={handleScrollToSimulator}
          onOpenCAB={() => setIsCABOpen(true)}
        />

        {/* Live Ephemeral Tokens Dashboard & Kill-Switches */}
        <TokenDashboard 
          tokens={tokens}
          onKillToken={handleKillToken}
          onOpenCreateToken={() => setIsCreateTokenOpen(true)}
        />

        {/* Live Runaway Spend & Kill-Switch Simulator */}
        <LiveSimulator />

        {/* Drop-In SDK Quickstart */}
        <SDKQuickstart />

        {/* Architecture & Security Matrix */}
        <ArchitectureSpec />

        {/* Pricing & Customer Advisory Board */}
        <PricingSection 
          onOpenCAB={() => setIsCABOpen(true)}
          onOpenCreateToken={() => setIsCreateTokenOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer 
        onScrollToTokens={handleScrollToTokens}
        onScrollToSimulator={handleScrollToSimulator}
        onOpenCAB={() => setIsCABOpen(true)}
      />

      {/* Modals */}
      <CreateTokenModal 
        isOpen={isCreateTokenOpen}
        onClose={() => setIsCreateTokenOpen(false)}
        onCreateToken={handleCreateToken}
      />

      <CABModal 
        isOpen={isCABOpen}
        onClose={() => setIsCABOpen(false)}
      />

    </div>
  );
}

export default App;
