import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './App.css';
import { useState } from 'react';
import logo from './assets/logo.svg';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { useEffect } from 'react';

const stats = [
  { label: 'Years of Experience', value: 3 },
  { label: 'Projects Completed', value: 100 },
  { label: 'Satisfied Clients', value: '99%' },
  { label: 'Team Members', value: 20 },
];

const clients = [
  'ClientOne', 'ClientTwo', 'ClientThree', 'ClientFour', 'ClientFive', 'ClientSix',
];

const caseStudies = [
  { title: 'Pharmaceutical App', desc: 'Empowering pharma with innovative IT solutions.', img: '', link: '#' },
  { title: 'E-commerce Web Design', desc: 'Seamless shopping experiences for fashion brands.', img: '', link: '#' },
  { title: 'IT Consulting', desc: 'Strategic business transformation for enterprises.', img: '', link: '#' },
];

const team = [
  { name: 'Akshay Kumar', role: 'CEO', img: '' },
  { name: 'Priya Sharma', role: 'Lead Developer', img: '' },
  { name: 'Rahul Verma', role: 'UI/UX Designer', img: '' },
];

const blogs = [
  { title: 'Why Digital Transformation Matters', date: 'July 2024', link: '#' },
  { title: 'Top 5 Cloud Migration Tips', date: 'June 2024', link: '#' },
];

const faqs = [
  { q: 'What services do you provide?', a: 'We offer web/app development, IT consulting, cloud, UI/UX, and more.' },
  { q: 'Do you offer custom solutions?', a: 'Yes, we tailor solutions for each client and industry.' },
  { q: 'How do I get started?', a: 'Contact us for a free consultation or fill out the inquiry form.' },
];

const awards = [
  'Best IT Company 2023',
  'Top 50 Tech Innovators',
  'ISO 9001 Certified',
];

function AnimatedCounter({ value }: { value: number | string }) {
  // Simple static for now; can be animated with useEffect and state
  return <span className="stat-value">{value}</span>;
}

function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '6rem 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>404</h1>
      <p style={{ fontSize: '1.2rem', color: '#444' }}>Page Not Found</p>
      <Link to="/" className="cta-btn">Go Home</Link>
    </main>
  );
}

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Suprix Solution - Empowering Business Futures</title>
          <meta name="description" content="Suprix Solution offers IT services including app development, web development, IT consulting, cloud, and UI/UX design. Empowering your business with innovative digital solutions." />
        </Helmet>
        <header>
          <nav className="navbar">
            <motion.div className="navbar-brand" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <img src={logo} alt="Suprix Solution Logo" className="logo-img" />
            </motion.div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer className="footer">
          <span>© 2024 Suprix Solution. All Rights Reserved.</span>
        </footer>
        {/* Floating Support/Chat Button */}
        <a href="mailto:hello@suprixsolution.in" className="support-chat-btn" title="Chat or Support">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="white"/>
            <path d="M7 10h10M7 14h6" stroke="#f58220" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="17" cy="14" r="1" fill="#f58220"/>
          </svg>
        </a>
      </>
    </HelmetProvider>
  );
}

export default App;
