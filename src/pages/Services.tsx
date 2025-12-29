import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services as servicesData } from '../data/services';

// Extended services list with additional services not in the detail pages
const additionalServices = [
  {
    icon: '💡',
    title: 'Digital Transformation Services',
    desc: 'Comprehensive digital transformation solutions to modernize your business operations, streamline workflows, and unlock new revenue streams through technology innovation.',
    features: [
      'Business process automation & optimization',
      'Legacy system modernization & migration',
      'Digital strategy development & roadmap planning',
      'Change management & digital adoption',
    ],
    details: 'Our digital transformation consulting services help businesses reimagine their operations for the digital age, leveraging cutting-edge technologies and industry best practices to drive growth, efficiency, and competitive advantage.'
  },
  {
    icon: '📱',
    title: 'Custom Software Development',
    desc: 'Professional custom software development services for web, mobile, and enterprise applications, designed to meet your specific business requirements.',
    features: [
      'Native iOS & Android mobile app development',
      'Cross-platform mobile applications (Flutter, React Native)',
      'Enterprise web application development',
      'UI/UX design & user experience optimization',
      'API development & backend integration',
    ],
    details: 'Our expert software development team delivers robust, scalable, and user-friendly applications that drive user engagement and deliver measurable business results across all platforms.'
  },
  {
    icon: '🔗',
    title: 'IT Consulting & Strategic Planning',
    desc: 'Expert IT consulting services to align technology strategy with your business objectives and drive sustainable growth.',
    features: [
      'IT strategy development & technology roadmap',
      'Technology assessment & digital readiness evaluation',
      'IT project management & implementation support',
      'Vendor selection & technology procurement',
    ],
    details: 'Our experienced IT consultants provide strategic guidance, technology assessment, and hands-on support to maximize your technology investments and ensure successful digital transformation initiatives.'
  },
  {
    icon: '🧑‍💼',
    title: 'Managed IT Services & Support',
    desc: 'Comprehensive managed IT services and proactive support solutions to ensure your business technology runs smoothly and securely.',
    features: [
      '24/7 IT helpdesk & technical support',
      'Remote & onsite IT support services',
      'System monitoring & performance management',
      'Security patch management & updates',
    ],
    details: 'Our managed IT services team provides reliable, round-the-clock support and proactive maintenance, allowing you to focus on your core business while we handle all your technology needs.'
  },
  {
    icon: '🏢',
    title: 'ERP System Development & Implementation',
    desc: 'Comprehensive Enterprise Resource Planning (ERP) solutions to integrate and streamline all your business processes, from finance and HR to supply chain and customer management.',
    features: [
      'Custom ERP system development & integration',
      'ERP implementation & migration services',
      'Finance, HR, inventory & supply chain modules',
      'ERP customization & third-party integrations',
      'ERP training & ongoing support services',
    ],
    details: 'Our ERP experts design and implement comprehensive enterprise resource planning systems that unify your business operations, improve efficiency, reduce costs, and provide real-time insights across all departments. We offer both custom ERP development and implementation of leading ERP platforms tailored to your industry needs.'
  },
];

// Combine services from data file with additional services
const allServices = [
  ...servicesData.map(service => ({
    ...service,
    desc: service.description,
    details: service.detailedDescription,
    hasDetailPage: true
  })),
  ...additionalServices.map(service => ({
    ...service,
    hasDetailPage: false
  }))
];

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main className="services-main">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Professional IT Services & Technology Solutions
      </motion.h1>
      <div className="services-list">
        {allServices.map((service, idx) => (
          <motion.div
            className={`services-detail-card${openIdx === idx ? ' open' : ''}`}
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            style={{
              cursor: 'pointer',
              marginBottom: '1.5rem',
              padding: '2rem',
              paddingBottom: '5.5rem',
              border: '1px solid #e8ecf0',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '200px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            }}
          >
            <div style={{ 
              marginBottom: '1.5rem'
            }}>
              <h2 style={{
                margin: '0 0 0.5rem 0',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b',
                background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {service.title}
              </h2>
              <p style={{
                margin: 0,
                color: '#64748b',
                fontSize: '1rem',
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
                {service.desc}
              </p>
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
                    padding: '2rem',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    marginTop: '1.5rem'
                  }}>
                    <div style={{
                      color: '#475569',
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      marginBottom: '1.5rem',
                      fontWeight: '500'
                    }}>
                      {service.details}
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <h4 style={{
                        color: '#1e293b',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        ✨ Key Features
                      </h4>
                      <ul style={{
                        textAlign: 'left',
                        margin: 0,
                        padding: 0,
                        listStyle: 'none',
                        color: '#64748b',
                        fontSize: '1rem'
                      }}>
                        {service.features.map((feature, i) => (
                          <li key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '0.75rem',
                            background: 'white',
                            borderRadius: '8px',
                            padding: '0.75rem 1rem',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                          }}>
                            <span style={{
                              color: '#10b981',
                              marginRight: '0.75rem',
                              fontSize: '1.2rem',
                              fontWeight: 'bold'
                            }}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {service.hasDetailPage && 'id' in service && (
                      <div style={{ marginTop: '1.5rem' }}>
                        <Link
                          to={`/service/${service.id}`}
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: 'inline-block',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            padding: '0.875rem 2rem',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
                          }}
                        >
                          Learn More →
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {service.hasDetailPage && 'id' in service ? (
              <Link
                to={`/service/${service.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIdx(null);
                }}
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  right: '2rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                  display: openIdx === idx ? 'none' : 'block',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
                }}
              >
                View Details →
              </Link>
            ) : (
              <Link
                to="/contact"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIdx(null);
                }}
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  right: '2rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                  display: openIdx === idx ? 'none' : 'block',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
                }}
              >
                View Details →
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </main>
  );
} 