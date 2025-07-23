import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    icon: '💡',
    title: 'Digital Transformation',
    desc: 'End-to-end digital transformation services to modernize your business, streamline operations, and unlock new revenue streams.',
    features: [
      'Business process automation',
      'Legacy system modernization',
      'Digital strategy & roadmap',
      'Change management',
    ],
    details: 'Our digital transformation services help you reimagine your business for the digital age, leveraging the latest technologies and best practices to drive growth and efficiency.'
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence & Machine Learning',
    desc: 'AI-powered solutions to drive innovation, automate tasks, and gain actionable insights from your data.',
    features: [
      'Custom AI/ML model development',
      'Predictive analytics',
      'Natural language processing',
      'Computer vision',
    ],
    details: 'We build and deploy AI/ML solutions tailored to your business, from chatbots to advanced analytics, helping you stay ahead of the competition.'
  },
  {
    icon: '📱',
    title: 'Application Development',
    desc: 'Custom web and mobile app development for all platforms, tailored to your business needs.',
    features: [
      'iOS, Android, and cross-platform apps',
      'Enterprise web applications',
      'UI/UX design & prototyping',
      'API & backend integration',
    ],
    details: 'Our team delivers robust, scalable, and user-friendly applications that drive engagement and business results.'
  },
  {
    icon: '🌐',
    title: 'Website Development',
    desc: 'Modern, responsive, and SEO-friendly websites to boost your online presence and engagement.',
    features: [
      'Corporate & eCommerce websites',
      'CMS (WordPress, Headless, etc.)',
      'Performance optimization',
      'Accessibility & compliance',
    ],
    details: 'We create beautiful, high-performing websites that reflect your brand and convert visitors into customers.'
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    desc: 'Cloud migration, management, and optimization for AWS, Azure, and Google Cloud.',
    features: [
      'Cloud architecture & migration',
      'DevOps & automation',
      'Cost optimization',
      'Disaster recovery & backup',
    ],
    details: 'Our cloud experts help you leverage the power of the cloud for agility, scalability, and cost savings.'
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    desc: 'Comprehensive security services to protect your business from evolving threats.',
    features: [
      'Vulnerability assessment & penetration testing',
      'Security audits & compliance',
      'Identity & access management',
      '24/7 monitoring & incident response',
    ],
    details: 'We safeguard your digital assets with proactive security solutions and best-in-class practices.'
  },
  {
    icon: '🔗',
    title: 'IT Consulting & Strategy',
    desc: 'Expert IT consulting to align technology with your business goals and drive growth.',
    features: [
      'IT strategy & roadmap',
      'Technology assessment',
      'Project management',
      'Vendor selection & management',
    ],
    details: 'Our consultants provide strategic guidance and hands-on support to maximize your technology investments.'
  },
  {
    icon: '📊',
    title: 'Business Intelligence & Analytics',
    desc: 'Transform your data into actionable insights with advanced BI and analytics solutions.',
    features: [
      'Dashboard & reporting',
      'Data warehousing',
      'Data visualization',
      'Predictive analytics',
    ],
    details: 'We help you unlock the value of your data for smarter, faster decision-making.'
  },
  {
    icon: '🛠️',
    title: 'DevOps & Automation',
    desc: 'Accelerate your software delivery with DevOps best practices and automation tools.',
    features: [
      'CI/CD pipelines',
      'Infrastructure as code',
      'Containerization (Docker, Kubernetes)',
      'Monitoring & logging',
    ],
    details: 'Our DevOps team streamlines your development lifecycle for speed, quality, and reliability.'
  },
  {
    icon: '🧑‍💼',
    title: 'IT Support & Managed Services',
    desc: 'Proactive IT support and managed services to keep your business running smoothly.',
    features: [
      '24/7 helpdesk',
      'Remote & onsite support',
      'System monitoring',
      'Patch management',
    ],
    details: 'We provide reliable, round-the-clock support so you can focus on your core business.'
  },
];

export default function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main className="services-main">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Our IT Services
      </motion.h1>
      <div className="services-list">
        {services.map((service, idx) => (
          <motion.div
            className={`services-detail-card${openIdx === idx ? ' open' : ''}`}
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            style={{cursor: 'pointer'}}
          >
            <div className="service-icon-lg" style={{fontSize: 40}}>{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{overflow: 'hidden'}}
                >
                  <div style={{marginTop: '1rem', color: '#333'}}>{service.details}</div>
                  <ul style={{textAlign: 'left', margin: '1rem 0 0 0', padding: 0, listStyle: 'disc inside', color: '#444', fontSize: '1rem'}}>
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </main>
  );
} 