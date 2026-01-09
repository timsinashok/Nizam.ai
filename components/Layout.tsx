import React from 'react';
import { PageView } from '../types';
import { LayoutDashboard, FileText, Scale, MessageSquareText, Menu, Settings, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activePage: PageView;
  onNavigate: (page: PageView) => void;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: PageView.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: PageView.AUDITOR, label: 'Contract Auditor', icon: FileText },
    { id: PageView.SIMULATOR, label: 'Quota Simulator', icon: Scale },
    { id: PageView.LAW_CHAT, label: 'Legal Assistant', icon: MessageSquareText },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Nizam.ai</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-slate-400 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                activePage === item.id 
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-900/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800 space-y-2">
          <button className="flex items-center w-full px-4 py-2 text-slate-400 hover:text-white transition-colors">
            <Settings className="w-5 h-5 mr-3" />
            <span className="font-medium">Settings</span>
          </button>
          <button 
            onClick={onLogout}
            className="flex items-center w-full px-4 py-2 text-slate-400 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Sign Out</span>
          </button>
          
          <div className="mt-4 px-4 py-2 bg-slate-800 rounded-lg">
            <p className="text-xs text-slate-400">Compliance Status</p>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 rounded-full bg-brand-500 mr-2 animate-pulse"></div>
              <span className="text-sm font-semibold text-brand-400">Secure</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 md:hidden">
          <div className="flex items-center">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-slate-600 mr-4">
              <Menu className="w-6 h-6" />
            </button>
            <span className="font-bold text-lg">Nizam.ai</span>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto h-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;