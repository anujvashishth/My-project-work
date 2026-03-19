import React, { useState } from 'react';
import { Home, User, Milk, BarChart2, Bell, Settings, Plus, Search, Filter, Save, Download, ArrowRight, Shield, Zap, TrendingUp, Mail, Phone, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AuthModal = ({ isOpen, onClose, onAuth }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="auth-overlay">
      <motion.div 
        className="glass-card auth-card"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
      >
        <button className="btn-secondary" onClick={onClose} style={{ position: 'absolute', right: '1.5rem', top: '1.5rem', padding: '0.5rem', borderRadius: '50%', border: 'none' }}>
          <X size={20} />
        </button>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          {isLogin ? 'Enter your credentials to access the dashboard.' : 'Join DairyPro and start managing with ease.'}
        </p>

        <form onSubmit={(e) => { e.preventDefault(); onAuth(); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {!isLogin && (
            <div>
              <label className="input-label">Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
          )}
          <div>
            <label className="input-label">Email Address</label>
            <input type="email" placeholder="admin@dairypro.com" required />
          </div>
          <div>
            <label className="input-label">Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" style={{ width: '100%', padding: '12px', marginTop: '1rem' }}>
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span 
            style={{ color: '#3b82f6', fontWeight: 600, cursor: 'pointer' }} 
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Register now' : 'Log in'}
          </span>
        </p>
      </motion.div>
    </div>
  );
};

const ContactSection = () => (
  <section className="contact-section">
    <div>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Get in Touch</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Have questions about DairyPro? We're here to help you modernize your business.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="feature-icon" style={{ marginBottom: 0, width: '40px', height: '40px' }}><Mail size={18} /></div>
          <span>support@dairypro.com</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="feature-icon" style={{ marginBottom: 0, width: '40px', height: '40px' }}><Phone size={18} /></div>
          <span>+91 98765 43210</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="feature-icon" style={{ marginBottom: 0, width: '40px', height: '40px' }}><MapPin size={18} /></div>
          <span>Dairy Center, Anand, Gujarat</span>
        </div>
      </div>
    </div>
    <div className="glass-card" style={{ padding: '2.5rem' }}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label className="input-label">First Name</label>
            <input type="text" />
          </div>
          <div style={{ flex: 1 }}>
            <label className="input-label">Last Name</label>
            <input type="text" />
          </div>
        </div>
        <div>
          <label className="input-label">Subject</label>
          <input type="text" />
        </div>
        <div>
          <label className="input-label">Message</label>
          <textarea rows="4" style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border-color)', padding: '10px' }}></textarea>
        </div>
        <button style={{ width: '100%' }}>Send Message</button>
      </form>
    </div>
  </section>
);

const LandingPage = ({ onEnter }) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const features = [
    { title: 'Secure Data', desc: 'Enterprise-grade encryption for all your records.', icon: <Shield size={24} /> },
    { title: 'Fast Entry', desc: 'Record sessions in under 10 seconds with smart defaults.', icon: <Zap size={24} /> },
    { title: 'Quality Tracking', desc: 'Detailed FAT/SNF quality analytics and history.', icon: <TrendingUp size={24} /> },
  ];

  return (
    <div className="landing-container">
      <nav style={{ width: '100%', padding: '1.5rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: '#3b82f6', padding: '6px', borderRadius: '10px', color: 'white' }}>
            <Milk size={20} />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>DairyPro</span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <button className="btn-secondary" onClick={() => setIsAuthOpen(true)}>Admin Panel</button>
          <button onClick={() => setIsAuthOpen(true)}>Sign Up</button>
        </div>
      </nav>

      <motion.section className="hero-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <span className="hero-badge">Now Powered by Cloud Intelligence ☁️</span>
        <h1 className="hero-title">Simplifying <br /> <span className="gradient-text">Dairy Management</span></h1>
        <p className="hero-subtitle">Optimize collection, automate billing, and provide total transparency to your farmers with our state-of-the-art dashboard.</p>
        <motion.button className="cta-button" onClick={() => setIsAuthOpen(true)} whileHover={{ scale: 1.05 }}>
          Get Started For Free <ArrowRight size={20} />
        </motion.button>
      </motion.section>

      <div className="features-grid">
        {features.map((f, i) => (
          <motion.div key={i} className="glass-card feature-card" whileHover={{ scale: 1.02 }}>
            <div className="feature-icon">{f.icon}</div>
            <h3 style={{ marginBottom: '0.75rem' }}>{f.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <ContactSection />

      <footer style={{ padding: '4rem 2rem', borderTop: '1px solid var(--border-color)', width: '100%', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>Developed with ❤️ for Students. © 2024 DairyPro Intelligence.</p>
      </footer>

      <AnimatePresence>
        {isAuthOpen && (
          <AuthModal 
            isOpen={isAuthOpen} 
            onClose={() => setIsAuthOpen(false)} 
            onAuth={() => { setIsAuthOpen(false); onEnter(); }} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const internalComponents = {
  Sidebar: ({ activeTab, setActiveTab, onLogout }) => {
    const items = [
      { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
      { id: 'collection', label: 'Milk Collection', icon: <Milk size={20} /> },
      { id: 'customers', label: 'Customers', icon: <User size={20} /> },
      { id: 'reports', label: 'Reports', icon: <BarChart2 size={20} /> },
    ];
    return (
      <div className="sidebar glass-card">
        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: '#3b82f6', padding: '8px', borderRadius: '12px', color: 'white' }}><Milk size={24} /></div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>DairyPro</h2>
        </div>
        <div style={{ flex: 1 }}>{items.map(i => (
          <div key={i.id} className={`nav-item ${activeTab === i.id ? 'active' : ''}`} onClick={() => setActiveTab(i.id)}>
            {i.icon}<span>{i.label}</span>
          </div>))}
        </div>
        <div className="nav-item" onClick={onLogout} style={{ marginTop: 'auto', color: '#ef4444' }}><ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} /><span>Exit System</span></div>
      </div>
    );
  },
  Header: () => (
    <header className="glass-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><Search size={20} color="#64748b" /><input type="text" placeholder="Search data..." style={{ border: 'none', background: 'transparent' }} /></div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}><Bell size={20} /><div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(45deg, #3b82f6, #10b981)' }} /><span>Admin</span></div></div>
    </header>
  ),
  Dashboard: () => (
    <div className="dashboard-grid">
      {[{ l: 'Total Liters', v: '1,240' }, { l: 'Farmers', v: '56' }, { l: 'Avg Quality', v: '4.8' }, { l: 'Revenue', v: '₹45,200' }].map((s, i) => (
        <div key={i} className="glass-card stat-card"><span style={{ color: '#64748b' }}>{s.l}</span><span className="stat-value">{s.v}</span></div>
      ))}
      <div className="glass-card" style={{ gridColumn: 'span 2', padding: '1.5rem' }}><h3>Weekly Analysis</h3><div style={{ height: '150px', background: 'rgba(59,130,246,0.05)', marginTop: '1rem', borderRadius: '12px' }} /></div>
    </div>
  ),
  MilkCollection: () => (
    <div className="glass-card" style={{ padding: '2rem', maxWidth: '500px' }}>
      <h2>New Entry</h2><form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        <div><label className="input-label">Farmer ID</label><input type="text" placeholder="e.g. 104" /></div>
        <div style={{ display: 'flex', gap: '1rem' }}><div style={{ flex: 1 }}><label className="input-label">Quantity</label><input type="number" /></div><div style={{ flex: 1 }}><label className="input-label">FAT %</label><input type="number" /></div></div>
        <button style={{ width: '100%' }}><Save size={18} /> Record</button>
      </form>
    </div>
  )
};

function App() {
  const [session, setSession] = useState(false);
  const [tab, setTab] = useState('dashboard');

  return (
    <AnimatePresence mode="wait">
      {!session ? (
        <LandingPage key="landing" onEnter={() => setSession(true)} />
      ) : (
        <motion.div key="app" className="animate-fade-in" style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
          <internalComponents.Sidebar activeTab={tab} setActiveTab={setTab} onLogout={() => setSession(false)} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <internalComponents.Header />
            <main className="main-content">
              {tab === 'dashboard' ? <internalComponents.Dashboard /> : <internalComponents.MilkCollection />}
            </main>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
