import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Auditor from './pages/Auditor';
import Simulator from './pages/Simulator';
import LawChat from './pages/LawChat';
import { LandingPage } from './pages/LandingPage';
import { PageView } from './types';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState<PageView>(PageView.DASHBOARD);

  if (!isAuthenticated) {
    return <LandingPage onLogin={() => setIsAuthenticated(true)} />;
  }

  const renderContent = () => {
    switch (activePage) {
      case PageView.DASHBOARD:
        return <Dashboard />;
      case PageView.AUDITOR:
        return <Auditor />;
      case PageView.SIMULATOR:
        return <Simulator />;
      case PageView.LAW_CHAT:
        return <LawChat />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout 
      activePage={activePage} 
      onNavigate={setActivePage}
      onLogout={() => setIsAuthenticated(false)}
    >
      {renderContent()}
    </Layout>
  );
}

export default App;