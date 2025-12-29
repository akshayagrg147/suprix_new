import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services, type Service } from '../data/services';

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setSelectedService(service);
    } else {
      // Redirect to services page if service not found
      navigate('/services');
    }
  }, [serviceId, navigate]);

  if (!selectedService) {
    return (
      <main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1>Service not found</h1>
        <Link to="/services" className="cta-btn">Back to Services</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ marginBottom: '2rem' }}
      >
        <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 0.5rem', color: '#64748b' }}>/</span>
        <Link to="/services" style={{ color: '#64748b', textDecoration: 'none' }}>Services</Link>
        <span style={{ margin: '0 0.5rem', color: '#64748b' }}>/</span>
        <span style={{ color: '#1e293b', fontWeight: '600' }}>{selectedService.title}</span>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        {selectedService.image && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${selectedService.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            zIndex: 0
          }} />
        )}
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '3rem 2rem',
          color: 'white'
        }}>
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>{selectedService.icon}</div>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem' }}>
            {selectedService.title}
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            {selectedService.description}
          </p>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ marginBottom: '4rem' }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#1e293b'
        }}>
          Service Overview
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: selectedService.image ? '1fr 1fr' : '1fr',
          gap: '3rem',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#475569',
              textAlign: 'left'
            }}>
              {selectedService.detailedDescription}
            </p>
          </div>
          {selectedService.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                position: 'relative'
              }}
            >
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ marginBottom: '4rem' }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#1e293b'
        }}>
          Key Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {selectedService.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '2px solid #e2e8f0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                fontSize: '1.5rem',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '10px',
                color: 'white',
                flexShrink: 0
              }}>
                ✓
              </div>
              <span style={{
                fontSize: '1rem',
                fontWeight: '500',
                color: '#1e293b',
                lineHeight: '1.6'
              }}>
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ marginBottom: '4rem' }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#1e293b'
        }}>
          Benefits
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {selectedService.benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                padding: '2rem',
                borderRadius: '16px',
                border: '2px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  fontSize: '2rem',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '12px'
                }}>
                  ✨
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  margin: 0
                }}>
                  Benefit {idx + 1}
                </h3>
              </div>
              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: '1.7',
                margin: 0
              }}>
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Use Cases Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ marginBottom: '4rem' }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#1e293b'
        }}>
          Use Cases
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {selectedService.useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{
                  color: '#667eea',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}>
                  →
                </span>
                <span style={{
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: '#1e293b',
                  lineHeight: '1.5'
                }}>
                  {useCase}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technologies Section */}
      {selectedService.technologies && selectedService.technologies.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#1e293b'
          }}>
            Technologies & Tools
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center'
          }}>
            {selectedService.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.section>
      )}

      {/* Service Process/Workflow Diagram Section */}
      {selectedService.image && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#1e293b'
          }}>
            How We Deliver {selectedService.title}
          </h2>
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
            borderRadius: '24px',
            padding: '3rem 2rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              position: 'relative',
              zIndex: 1
            }}>
              {[
                { icon: '📋', title: 'Discovery', desc: 'Understanding your requirements and goals' },
                { icon: '🎯', title: 'Planning', desc: 'Strategic roadmap and solution design' },
                { icon: '⚙️', title: 'Development', desc: 'Implementation and deployment' },
                { icon: '✅', title: 'Support', desc: 'Ongoing maintenance and optimization' }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    textAlign: 'center',
                    position: 'relative'
                  }}
                >
                  {idx < 3 && (
                    <div style={{
                      position: 'absolute',
                      top: '40px',
                      right: '-1rem',
                      width: '2rem',
                      height: '2px',
                      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                      zIndex: 0,
                      display: 'none'
                    }}
                    className="process-arrow"
                    />
                  )}
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    background: 'white',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.2)',
                    position: 'relative',
                    zIndex: 1,
                    margin: '0 auto 1rem auto'
                  }}>
                    {step.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '0.5rem'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#64748b',
                    lineHeight: '1.6'
                  }}>
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            {selectedService.image && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${selectedService.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.03,
                zIndex: 0,
                pointerEvents: 'none'
              }} />
            )}
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
          padding: '4rem 2rem',
          borderRadius: '24px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '4rem'
        }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '1.5rem'
        }}>
          Ready to Get Started?
        </h2>
        <p style={{
          fontSize: '1.2rem',
          opacity: 0.95,
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Let's discuss how our {selectedService.title} can help transform your business. Get in touch with our experts today.
        </p>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link
            to="/contact"
            className="cta-btn"
            style={{
              background: 'white',
              color: '#667eea',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            }}
          >
            Contact Us
          </Link>
          <Link
            to="/services"
            style={{
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              border: '2px solid white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View All Services
          </Link>
        </div>
      </motion.section>
    </main>
  );
}

