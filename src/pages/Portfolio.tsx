import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const projects = [
  { title: 'Pharma App', desc: 'A cutting-edge pharmaceutical management app.', img: '', testimonial: 'Suprix delivered beyond expectations!', details: 'This app streamlined pharmaceutical operations, improved compliance, and enhanced patient care with real-time analytics and secure data management.' },
  { title: 'E-commerce Platform', desc: 'A scalable platform for fashion retail.', img: '', testimonial: 'Our sales grew 2x after launch.', details: 'We built a robust, scalable e-commerce platform with seamless shopping experiences, integrated payment gateways, and advanced analytics.' },
  { title: 'IT Consulting for Enterprise', desc: 'Strategic transformation for a large enterprise.', img: '', testimonial: 'Professional and insightful team.', details: 'Our consulting team led a digital transformation initiative, optimizing IT infrastructure and enabling agile business processes.' },
];

export default function Portfolio() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main className="portfolio-main">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Portfolio & Case Studies
      </motion.h1>
      <div className="portfolio-list">
        {projects.map((proj, idx) => (
          <motion.div
            className={`portfolio-detail-card${openIdx === idx ? ' open' : ''}`}
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            style={{cursor: 'pointer'}}
          >
            <div className="portfolio-img-lg">📱</div>
            <h2>{proj.title}</h2>
            <p>{proj.desc}</p>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{overflow: 'hidden'}}
                >
                  <blockquote className="portfolio-testimonial">“{proj.testimonial}”</blockquote>
                  <div style={{marginTop: 12, color: '#333'}}>{proj.details}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </main>
  );
} 