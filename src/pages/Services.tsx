import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const services = [
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
    icon: '🤖',
    title: 'AI & Machine Learning Solutions',
    desc: 'Advanced artificial intelligence and machine learning services to drive innovation, automate business processes, and extract actionable insights from your data.',
    features: [
      'Custom AI/ML model development & deployment',
      'Predictive analytics & business intelligence',
      'Natural language processing & chatbots',
      'Computer vision & image recognition',
    ],
    details: 'Our AI consulting team builds and deploys cutting-edge machine learning solutions tailored to your business needs, from intelligent chatbots to advanced predictive analytics, helping you stay ahead of the competition in the digital age.'
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
    icon: '🌐',
    title: 'Web Development Services',
    desc: 'Professional web development services creating modern, responsive, and SEO-optimized websites to enhance your online presence and drive business growth.',
    features: [
      'Corporate & e-commerce website development',
      'Content management systems (WordPress, Headless CMS)',
      'Website performance optimization & speed enhancement',
      'Web accessibility compliance & SEO optimization',
    ],
    details: 'Our web development team creates beautiful, high-performing websites that effectively represent your brand, improve user experience, and convert visitors into customers while maintaining optimal search engine visibility.'
  },
  {
    icon: '☁️',
    title: 'Cloud Computing Solutions',
    desc: 'Comprehensive cloud migration, management, and optimization services for AWS, Azure, and Google Cloud platforms.',
    features: [
      'Cloud architecture design & migration services',
      'DevOps automation & cloud deployment',
      'Cloud cost optimization & resource management',
      'Disaster recovery & backup solutions',
    ],
    details: 'Our cloud computing experts help businesses leverage the full power of cloud technology for enhanced agility, scalability, cost efficiency, and improved business performance.'
  },
  {
    icon: '🔒',
    title: 'Cybersecurity Services',
    desc: 'Comprehensive cybersecurity solutions to protect your business from evolving cyber threats and ensure regulatory compliance.',
    features: [
      'Vulnerability assessment & penetration testing',
      'Security audits & compliance management',
      'Identity & access management solutions',
      '24/7 security monitoring & incident response',
    ],
    details: 'Our cybersecurity experts safeguard your digital assets with proactive security solutions, industry best practices, and comprehensive threat protection strategies.'
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
    icon: '📊',
    title: 'Business Intelligence & Data Analytics',
    desc: 'Transform your business data into actionable insights with advanced business intelligence and analytics solutions.',
    features: [
      'Interactive dashboards & business reporting',
      'Data warehousing & data lake solutions',
      'Advanced data visualization & reporting',
      'Predictive analytics & machine learning insights',
    ],
    details: 'Our data analytics experts help businesses unlock the full value of their data through comprehensive business intelligence solutions, enabling smarter, data-driven decision-making and improved business performance.'
  },
  {
    icon: '🛠️',
    title: 'DevOps & IT Automation Services',
    desc: 'Accelerate software delivery and improve operational efficiency with DevOps best practices and advanced automation solutions.',
    features: [
      'CI/CD pipeline development & optimization',
      'Infrastructure as code & cloud automation',
      'Containerization (Docker, Kubernetes)',
      'Application monitoring & logging solutions',
    ],
    details: 'Our DevOps engineering team streamlines your software development lifecycle, implementing automation tools and best practices for faster delivery, improved quality, and enhanced system reliability.'
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
];

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main className="services-main">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Professional IT Services & Technology Solutions
      </motion.h1>
      <div className="services-list">
        {services.map((service, idx) => (
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
              border: '1px solid #e8ecf0',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
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
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '1.5rem',
              gap: '1rem'
            }}>
              <div 
                className="service-icon-lg" 
                style={{
                  fontSize: 48,
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                  color: 'white'
                }}
              >
                {service.icon}
              </div>
              <div style={{ flex: 1 }}>
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
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </main>
  );
} 