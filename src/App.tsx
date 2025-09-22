import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './App.css';
import { useState } from 'react';
import logo from './assets/logo.svg';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
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
  { title: 'Pharmaceutical App', desc: 'Empowering pharma with innovative IT solutions.', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', link: '#' },
  { title: 'E-commerce Web Design', desc: 'Seamless shopping experiences for fashion brands.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80', link: '#' },
  { title: 'IT Consulting', desc: 'Strategic business transformation for enterprises.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80', link: '#' },
];

const team = [
  { name: 'Akshay Kumar', role: 'CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
  { name: 'Priya Sharma', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80' },
  { name: 'Rahul Verma', role: 'UI/UX Designer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80' },
];

const blogs = [
  { title: 'Why Digital Transformation Matters', date: 'July 2025', link: '#' },
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
          <title>Suprix Solution - Leading IT Services & Digital Transformation Company | Software Development</title>
          <meta name="description" content="Suprix Solution is a premier IT consulting company specializing in custom software development, cloud migration, AI solutions, and digital transformation services. Expert developers delivering cutting-edge technology solutions for businesses across India and globally." />
          <meta name="keywords" content="IT consulting company, software development, digital transformation, cloud migration, AI solutions, custom software, web development, mobile app development, IT services India, technology consulting" />
          <meta name="author" content="Suprix Solution" />
          <meta property="og:title" content="Suprix Solution - Leading IT Services & Digital Transformation Company" />
          <meta property="og:description" content="Premier IT consulting company specializing in custom software development, cloud solutions, and digital transformation services. Expert technology solutions for businesses." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://suprixsolution.in" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Suprix Solution - IT Services & Digital Transformation" />
          <meta name="twitter:description" content="Leading IT consulting company delivering custom software development, cloud solutions, and digital transformation services." />
          <link rel="canonical" href="https://suprixsolution.in" />
        </Helmet>
        <header>
          <nav className="navbar">
            <motion.div className="navbar-brand" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link to="/">
                <img src={logo} alt="Suprix Solution Logo" className="logo-img" />
              </Link>
            </motion.div>
            <ul className="nav-links">
              <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
              <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
              <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
              <li><Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</Link></li>
              <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer className="footer">
          <span>© 2024 Suprix Solution. All Rights Reserved.</span>
        </footer>
        {/* Floating Support/Chat Button */}
        <a href="https://wa.me/919485563525?text=Hi%20Suprix%20Solution,%20I%20need%20help%20with%20your%20IT%20services" 
           className="support-chat-btn" 
           title="WhatsApp Support - Click to chat"
           target="_blank" 
           rel="noopener noreferrer">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="#25D366"/>
          </svg>
        </a>
      </>
    </HelmetProvider>
  );
}

export default App;
