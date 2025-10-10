import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const aboutSections = [
  { 
    title: 'Our Company Story', 
    content: 'Suprix Solution was founded as a premier AI solution company and leading IT consulting firm dedicated to empowering businesses with cutting-edge artificial intelligence solutions, machine learning technologies, and comprehensive digital transformation services. Our journey is driven by a passion for advanced AI technologies, including natural language processing, computer vision, predictive analytics, and intelligent automation. As a specialized AI solution provider, we combine deep expertise in software development, cloud computing, AI implementation, and data science to deliver transformative technology solutions that drive business innovation and competitive advantage. Our team of AI experts and technology consultants work tirelessly to help organizations harness the power of artificial intelligence, automation, and smart technologies to optimize operations, enhance customer experiences, and achieve unprecedented growth in the digital era.' 
  },
  { 
    title: 'Our Mission', 
    content: 'To deliver high-quality, customized AI solutions, intelligent automation services, and comprehensive technology consulting that drive business growth, operational excellence, and digital transformation. As a leading AI solution company, we help businesses leverage artificial intelligence, machine learning algorithms, predictive analytics, and smart automation technologies to achieve their strategic objectives and competitive advantage. Our mission encompasses implementing AI-powered solutions, developing intelligent systems, optimizing business processes through automation, and providing strategic guidance on AI adoption and digital transformation initiatives. We are committed to making advanced AI technologies accessible and practical for businesses of all sizes, ensuring that every client can benefit from the transformative power of artificial intelligence and intelligent automation.' 
  },
  { 
    title: 'Our Vision', 
    content: 'To be a globally recognized leader in AI solution development, intelligent automation consulting, and digital transformation services, known for our technical expertise in artificial intelligence, machine learning, and innovative AI-powered technology solutions. Our vision encompasses becoming the go-to AI solution company for businesses seeking to implement cutting-edge artificial intelligence technologies, including natural language processing, computer vision, predictive analytics, and intelligent automation systems. We strive to be at the forefront of AI innovation, delivering reliable, scalable, and client-centric AI solutions that transform how businesses operate, make decisions, and serve their customers. Our goal is to democratize access to advanced AI technologies while maintaining the highest standards of technical excellence, innovation, and client satisfaction in every AI implementation and digital transformation project.' 
  },
  { 
    title: 'Our Core Values', 
    content: 'Integrity, Innovation, Technical Excellence, Collaborative Partnership, Customer Success, and Continuous Learning in AI and technology. These core values guide our AI solution services and ensure we deliver exceptional artificial intelligence implementations, machine learning solutions, and digital transformation services that drive measurable business results. Our commitment to innovation drives us to explore emerging AI technologies, develop cutting-edge machine learning models, and implement intelligent automation solutions that provide real business value. We believe in collaborative partnerships with our clients, working closely to understand their unique challenges and develop tailored AI solutions that address their specific needs. Our focus on continuous learning ensures our team stays current with the latest AI advancements, machine learning techniques, and technology trends, enabling us to deliver state-of-the-art AI solutions and maintain our position as a leading AI solution company in the rapidly evolving technology landscape.' 
  },
];

export default function About() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  
  // Auto-expand first section by default
  useEffect(() => {
    setOpenIdx(0);
  }, []);
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
              position: 'relative',
              cursor: 'pointer',
              marginBottom: '1.2rem',
              padding: '1.5rem',
              border: openIdx === idx ? '2px solid #667eea' : '1px solid #e8ecf0',
              borderRadius: '20px',
              background: openIdx === idx 
                ? 'linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%)'
                : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: openIdx === idx 
                ? '0 8px 30px rgba(102, 126, 234, 0.15)'
                : '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              overflow: 'visible',
              minHeight: 'auto',
              width: '100%',
              maxWidth: '100%',
              transform: openIdx === idx ? 'scale(1.02)' : 'scale(1)'
            }}
            onMouseEnter={(e) => {
              if (openIdx !== idx) {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
              }
            }}
            onMouseLeave={(e) => {
              if (openIdx !== idx) {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
              }
            }}
          >
            {/* Floating badge for first section */}
            {idx === 0 && openIdx !== idx && (
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                  color: 'white',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '15px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
                  zIndex: 10,
                  border: '2px solid white'
                }}
              >
                🔥 NEW
              </motion.div>
            )}
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
              <motion.div 
                animate={openIdx !== idx ? { 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 8px 25px rgba(102, 126, 234, 0.3)',
                    '0 12px 35px rgba(102, 126, 234, 0.4)',
                    '0 8px 25px rgba(102, 126, 234, 0.3)'
                  ]
                } : {}}
                transition={{ duration: 3, repeat: openIdx !== idx ? Infinity : 0, ease: "easeInOut" }}
                style={{
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
                }}
              >
                {idx === 0 ? '🏢' : idx === 1 ? '🎯' : idx === 2 ? '👁️' : '💎'}
              </motion.div>
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
            
            {/* Show preview text when collapsed */}
            {openIdx !== idx && (
              <div style={{ position: 'relative' }}>
                <p style={{
                  margin: '0.5rem 0 0 0',
                  color: '#64748b',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  fontWeight: '400',
                  opacity: 0.8
                }}>
                  {section.content.substring(0, 100)}...
                </p>
                
                {/* Click to expand indicator */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1rem',
                  padding: '0.8rem 1.5rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '25px',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }}>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ marginRight: '0.5rem' }}
                  >
                    👆
                  </motion.span>
                  Click to view full content
                  <motion.span
                    animate={{ rotate: [0, 90, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ marginLeft: '0.5rem', fontSize: '1rem' }}
                  >
                    ↗️
                  </motion.span>
                </div>
              </div>
            )}
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
                    marginTop: '0.8rem',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    maxWidth: '100%'
                  }}>
                    <p style={{
                      margin: 0,
                      color: '#475569',
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      fontWeight: '500',
                      textAlign: 'left',
                      wordBreak: 'break-word',
                      hyphens: 'auto'
                    }}>
                      {section.content}
                    </p>
                  </div>
                  
                  {/* Collapse indicator */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '1rem',
                    padding: '0.6rem 1.2rem',
                    background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                    borderRadius: '20px',
                    color: '#64748b',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '1px solid #cbd5e1'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    <motion.span
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      style={{ marginRight: '0.4rem' }}
                    >
                      👇
                    </motion.span>
                    Click to collapse
                    <motion.span
                      animate={{ rotate: [0, -90, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      style={{ marginLeft: '0.4rem', fontSize: '0.9rem' }}
                    >
                      ↙️
                    </motion.span>
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