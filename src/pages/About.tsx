import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const aboutSections = [
  { title: 'Our Company Story', content: 'Suprix Solution was founded as a premier IT consulting company to empower businesses with innovative technology solutions and digital transformation services. Our journey is driven by a passion for cutting-edge technology, a commitment to client success, and expertise in software development, cloud computing, and AI solutions.' },
  { title: 'Our Mission', content: 'To deliver high-quality, customized IT services and technology consulting that drive business growth, operational excellence, and digital transformation. We help businesses leverage technology to achieve their strategic objectives and competitive advantage.' },
  { title: 'Our Vision', content: 'To be a globally recognized leader in IT consulting and digital transformation services, known for our technical expertise, innovative solutions, reliability, and client-centric approach in delivering software development, cloud solutions, and AI-powered technology services.' },
  { title: 'Our Core Values', content: 'Integrity, Innovation, Technical Excellence, Collaborative Partnership, Customer Success, and Continuous Learning. These values guide our IT consulting services and ensure we deliver exceptional technology solutions that drive business results.' },
];

export default function About() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main className="about-main">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        About Suprix Solution - Leading IT Consulting Company
      </motion.h1>
      <div className="about-sections">
        {aboutSections.map((section, idx) => (
          <motion.section
            className={`about-section-card${openIdx === idx ? ' open' : ''}`}
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            style={{
              cursor: 'pointer',
              marginBottom: '1.5rem',
              padding: '2rem',
              border: '1px solid #e8ecf0',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: 'white',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
              }}>
                {idx === 0 ? '🏢' : idx === 1 ? '🎯' : idx === 2 ? '👁️' : '💎'}
              </div>
              <h2 style={{
                margin: 0,
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b',
                background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {section.title}
              </h2>
            </div>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{overflow: 'hidden'}}
                >
                  <div style={{
                    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    marginTop: '1rem'
                  }}>
                    <p style={{
                      margin: 0,
                      color: '#475569',
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      fontWeight: '500'
                    }}>
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        ))}
      </div>
    </main>
  );
} 