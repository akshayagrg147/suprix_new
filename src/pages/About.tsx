import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const aboutSections = [
  { title: 'Our Story', content: 'Suprix Solution was founded to empower businesses with innovative IT solutions. Our journey is driven by a passion for technology and a commitment to client success.' },
  { title: 'Mission', content: 'To deliver high-quality, customized IT services that drive business growth and operational excellence.' },
  { title: 'Vision', content: 'To be a global leader in digital transformation, recognized for our creativity, reliability, and client-centric approach.' },
  { title: 'Values', content: 'Integrity, Innovation, Excellence, Collaboration, and Customer Focus.' },
];

export default function About() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main className="about-main">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        About Us
      </motion.h1>
      <div className="about-sections">
        {aboutSections.map((section, idx) => (
          <motion.section
            className={`about-section-card${openIdx === idx ? ' open' : ''}`}
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            style={{cursor: 'pointer'}}
          >
            <h2>{section.title}</h2>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{overflow: 'hidden', marginTop: 12, color: '#333'}}
                >
                  {section.content}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.section>
        ))}
      </div>
    </main>
  );
} 