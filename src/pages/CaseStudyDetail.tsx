import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { caseStudies, type CaseStudy } from '../data/caseStudies';
import { Helmet } from 'react-helmet-async';

export default function CaseStudyDetail() {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const navigate = useNavigate();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const caseStudy = caseStudies.find(cs => cs.id === caseStudyId);
    if (caseStudy) {
      setSelectedCaseStudy(caseStudy);
    } else {
      navigate('/');
    }
  }, [caseStudyId, navigate]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    if (lightboxImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxImage]);

  if (!selectedCaseStudy) {
    return (
      <main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1>Case Study not found</h1>
        <Link to="/" className="cta-btn">Go Home</Link>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{selectedCaseStudy.title} - Suprix Solution Case Study</title>
        <meta name="description" content={selectedCaseStudy.shortDesc} />
        <meta property="og:title" content={selectedCaseStudy.title} />
        <meta property="og:description" content={selectedCaseStudy.shortDesc} />
        <meta property="og:image" content={selectedCaseStudy.img} />
      </Helmet>
      <main style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginBottom: '2rem' }}
        >
          <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem', color: '#64748b' }}>/</span>
          <Link to="/#portfolio" style={{ color: '#64748b', textDecoration: 'none' }}>Portfolio</Link>
          <span style={{ margin: '0 0.5rem', color: '#64748b' }}>/</span>
          <span style={{ color: '#1e293b', fontWeight: '600' }}>{selectedCaseStudy.title}</span>
        </motion.nav>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            marginBottom: '3rem',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{
            position: 'relative',
            height: '400px',
            backgroundImage: `url(${selectedCaseStudy.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '3rem'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
            }}></div>
            <div style={{ position: 'relative', zIndex: 2, color: 'white', width: '100%' }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(245, 130, 32, 0.9)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                marginBottom: '1rem',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                {selectedCaseStudy.industry}
              </div>
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '700',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                {selectedCaseStudy.title}
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '800px', lineHeight: '1.6' }}>
                {selectedCaseStudy.shortDesc}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            background: '#f8f9fa',
            padding: '2.5rem',
            borderRadius: '20px',
            marginBottom: '3rem'
          }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#222' }}>Project Overview</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '600' }}>CLIENT</div>
              <div style={{ color: '#222', fontSize: '1.2rem', fontWeight: '600' }}>{selectedCaseStudy.client}</div>
            </div>
            <div>
              <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '600' }}>INDUSTRY</div>
              <div style={{ color: '#222', fontSize: '1.2rem', fontWeight: '600' }}>{selectedCaseStudy.industry}</div>
            </div>
            <div>
              <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '600' }}>DURATION</div>
              <div style={{ color: '#222', fontSize: '1.2rem', fontWeight: '600' }}>{selectedCaseStudy.duration}</div>
            </div>
          </div>
          <div style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8', 
            color: '#444',
            whiteSpace: 'pre-line'
          }}>
            {selectedCaseStudy.description}
          </div>
        </motion.section>

        {/* Challenge & Solution */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: '#fff',
              padding: '2.5rem',
              borderRadius: '20px',
              border: '2px solid #e5e7eb',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#222' }}>The Challenge</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555' }}>
                {selectedCaseStudy.challenge}
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #f58220 0%, #ff6b35 100%)',
              padding: '2.5rem',
              borderRadius: '20px',
              color: 'white',
              boxShadow: '0 4px 15px rgba(245, 130, 32, 0.3)'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>💡</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Solution</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', opacity: 0.95 }}>
                {selectedCaseStudy.solution}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            background: '#000',
            padding: '3rem',
            borderRadius: '20px',
            marginBottom: '3rem',
            color: 'white'
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Results & Impact</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {selectedCaseStudy.results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#f58220',
                  marginBottom: '0.5rem'
                }}>
                  {result.value}
                </div>
                <div style={{
                  fontSize: '1rem',
                  opacity: 0.9
                }}>
                  {result.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Screenshots Gallery */}
        {selectedCaseStudy.screenshots && selectedCaseStudy.screenshots.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#222' }}>Application Screenshots</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {selectedCaseStudy.screenshots.map((screenshot, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    position: 'relative'
                  }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setLightboxImage(screenshot)}
                >
                  <img 
                    src={screenshot} 
                    alt={`Screenshot ${idx + 1} - Click to view full size`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    background: 'rgba(245, 130, 32, 0.9)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                  }}>
                    🔍
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#222' }}>Technologies Used</h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            {selectedCaseStudy.technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                style={{
                  background: '#f8f9fa',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  border: '2px solid #e5e7eb',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#222',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f58220';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = '#f58220';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8f9fa';
                  e.currentTarget.style.color = '#222';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Architecture Diagram */}
        {selectedCaseStudy.architectureDiagram && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#222' }}>System Architecture</h2>
            <div 
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                background: '#fff',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onClick={() => setLightboxImage(selectedCaseStudy.architectureDiagram!)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img 
                src={selectedCaseStudy.architectureDiagram} 
                alt="System Architecture Diagram"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '15px'
                }}
              />
            </div>
          </motion.section>
        )}

        {/* Flow Diagram */}
        {selectedCaseStudy.flowDiagram && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#222' }}>Process Flow</h2>
            <div 
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                background: '#fff',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onClick={() => setLightboxImage(selectedCaseStudy.flowDiagram!)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img 
                src={selectedCaseStudy.flowDiagram} 
                alt="Process Flow Diagram"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '15px'
                }}
              />
            </div>
          </motion.section>
        )}

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            background: '#f8f9fa',
            padding: '2.5rem',
            borderRadius: '20px',
            marginBottom: '3rem'
          }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#222' }}>Key Features</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {selectedCaseStudy.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{
                  fontSize: '1.5rem',
                  color: '#f58220',
                  flexShrink: 0
                }}>✓</div>
                <div style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#444'
                }}>{feature}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Image Gallery */}
        {selectedCaseStudy.gallery && selectedCaseStudy.gallery.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ marginBottom: '3rem' }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#222', textAlign: 'center' }}>Project Gallery</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {selectedCaseStudy.gallery.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    background: '#fff',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => setLightboxImage(item.image)}
                >
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '75%',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={item.image} 
                      alt={item.caption}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                  <div style={{
                    padding: '1.5rem',
                    background: '#fff'
                  }}>
                    <p style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#222',
                      margin: 0,
                      textAlign: 'center'
                    }}>
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '3rem',
            borderRadius: '20px',
            textAlign: 'center',
            color: 'white',
            marginBottom: '3rem'
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Start Your Project?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              className="cta-btn"
              style={{
                background: '#f58220',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '700',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(245, 130, 32, 0.4)',
                transition: 'all 0.3s ease'
              }}
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/#portfolio"
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '700',
                display: 'inline-block',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              View More Case Studies
            </Link>
          </div>
        </motion.section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.95)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                cursor: 'pointer'
              }}
              onClick={() => setLightboxImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                style={{
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={lightboxImage} 
                  alt="Full size view"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '90vh',
                    objectFit: 'contain',
                    borderRadius: '10px'
                  }}
                />
                <button
                  onClick={() => setLightboxImage(null)}
                  style={{
                    position: 'absolute',
                    top: '-2rem',
                    right: '-2rem',
                    background: '#f58220',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                  }}
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

