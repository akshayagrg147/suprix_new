import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies as caseStudiesData } from '../data/caseStudies';
import hclLogo from '../assets/hcl.png';
import vyleeLogo from '../assets/vylee.png';
import mafatlalLogo from '../assets/mafatlal.png';
import vridheeLogo from '../assets/vridhee.png';
import schoolnetLogo from '../assets/schoolnet.png';

const serviceImgs = [
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=fill&w=240&h=240&q=90', // AI/ML
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=fill&w=240&h=240&q=90', // Software Development
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=fill&w=240&h=240&q=90', // Web Development
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=fill&w=240&h=240&q=90', // Cloud Computing
  'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=fill&w=240&h=240&q=90', // DevOps
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=fill&w=240&h=240&q=90', // IT Consulting
];
const capabilityImgs = [
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=96&q=80', // AI/ML
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=96&q=80', // Cloud Computing
  'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=96&q=80', // DevOps
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=96&q=80', // Web Development
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=96&q=80', // Mobile Development
  'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=96&q=80', // Database
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=96&q=80', // Security
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=96&q=80', // Analytics
];
// @ts-expect-error - Reserved for future use
const _portfolioImgs = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
];
// Team images currently commented out in team section
// const teamImgs = [
//   'https://api.dicebear.com/7.x/avataaars/svg?seed=Vishal&style=circle&backgroundColor=4285f4&clothingColor=262e33&skinColor=fdbcb4&hairColor=2c1b18&facialHairColor=2c1b18&facialHairProbability=80&topType=shortHair&accessoriesType=prescription02&facialHairType=beardMedium&gender=male',
//   'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&style=circle&backgroundColor=34a853&clothingColor=262e33&skinColor=fdbcb4&hairColor=8b4513&topType=longHair&accessoriesType=prescription01&facialHairType=blank&gender=female',
//   'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&style=circle&backgroundColor=ea4335&clothingColor=262e33&skinColor=fdbcb4&hairColor=2c1b18&topType=shortHair&accessoriesType=prescription01&facialHairType=blank&gender=male',
// ];

const stats = [
  { label: 'IT Solutions Delivered', value: 50, suffix: '+' },
  { label: 'Enterprise Clients', value: 15, suffix: '+' },
  { label: 'Mobile Apps with 1L+ Downloads', value: 30, suffix: '+' },
  { label: 'Client Retention Rate', value: 80, suffix: '%' },
  { label: 'Expert IT Professionals', value: 30, suffix: '+' },
];

const processSteps = [
  { icon: '🔍', title: 'IT Assessment', desc: 'We analyze your current IT infrastructure, business goals, and technology challenges.' },
  { icon: '📝', title: 'Strategic Planning', desc: 'We develop a comprehensive IT strategy and digital transformation roadmap.' },
  { icon: '⚙️', title: 'Solution Development', desc: 'Our expert developers build, test, and deploy your custom IT solutions.' },
  { icon: '🤝', title: 'Managed IT Support', desc: 'We provide ongoing IT support, maintenance, and continuous optimization.' },
];

// Service ID mapping for capabilities and services
// @ts-expect-error - Reserved for future use
const _serviceIdMap: Record<string, string> = {
  'AI & Machine Learning': 'ai-machine-learning',
  'AI & Machine Learning Solutions': 'ai-machine-learning',
  'Cloud Computing': 'cloud-computing',
  'Cloud Computing Solutions': 'cloud-computing',
  'DevOps & Automation': 'devops-automation',
  'DevOps & IT Automation': 'devops-automation',
  'Web Development': 'web-development',
  'Web Development Services': 'web-development',
  'Mobile App Development': 'mobile-app-development',
  'Mobile App Development Services': 'mobile-app-development',
  'Data Management': 'data-management',
  'Data Management Services': 'data-management',
  'Cybersecurity': 'cybersecurity',
  'Cybersecurity Services': 'cybersecurity',
  'Business Intelligence': 'business-intelligence',
  'Business Intelligence Services': 'business-intelligence',
};

const capabilities = [
  { icon: capabilityImgs[0], title: 'AI & Machine Learning', desc: 'Custom AI solutions, predictive analytics, and intelligent automation for business growth.' },
  { icon: capabilityImgs[1], title: 'Cloud Computing', desc: 'AWS, Azure, Google Cloud migration, management, and optimization services.' },
  { icon: capabilityImgs[2], title: 'DevOps & Automation', desc: 'CI/CD pipelines, infrastructure automation, and deployment optimization.' },
  { icon: capabilityImgs[3], title: 'Web Development', desc: 'Custom web applications, e-commerce platforms, and responsive website design.' },
  { icon: capabilityImgs[4], title: 'Mobile App Development', desc: 'Native iOS, Android, and cross-platform mobile applications.' },
  { icon: capabilityImgs[5], title: 'Data Management', desc: 'Big data solutions, database design, and data analytics services.' },
  { icon: capabilityImgs[6], title: 'Cybersecurity', desc: 'Security audits, compliance management, and comprehensive threat protection.' },
  { icon: capabilityImgs[7], title: 'Business Intelligence', desc: 'Data visualization, reporting dashboards, and business analytics solutions.' },
];

const clients = [
  { name: 'HCL Healthcare', logo: hclLogo },
  { name: 'Vylee', logo: vyleeLogo },
  { name: 'Mafatlal Industries', logo: mafatlalLogo },
  { name: 'Vridhee', logo: vridheeLogo },
  { name: 'Schoolnet', logo: schoolnetLogo },
  { name: 'Chopsy Tracking', logo: null }, // No logo available
];

const industries = [
  'Healthcare IT', 'Financial Technology', 'E-Commerce Solutions', 'Educational Technology', 'Supply Chain Management', 'Electric Vehicle Technology', 'Travel & Hospitality', 'Food & Beverage', 'Energy & Utilities',
];

const services = [
  { title: 'Digital Transformation Services', desc: 'Complete digital transformation solutions to modernize your business operations and drive growth.', img: serviceImgs[0], link: '/services' },
  { title: 'AI & Machine Learning Solutions', desc: 'Custom artificial intelligence and machine learning solutions for intelligent business automation.', img: serviceImgs[1], link: '/service/ai-machine-learning' },
  { title: 'Custom Software Development', desc: 'Bespoke software development services for web, mobile, and enterprise applications.', img: serviceImgs[2], link: '/services' },
  { title: 'Web Development Services', desc: 'Professional website development with modern design and optimal performance.', img: serviceImgs[3], link: '/service/web-development' },
  { title: 'Cloud Computing Solutions', desc: 'Comprehensive cloud migration, management, and optimization services for scalability.', img: serviceImgs[4], link: '/service/cloud-computing' },
  { title: 'DevOps & IT Automation', desc: 'Streamlined DevOps practices and IT automation for faster, reliable deployments.', img: serviceImgs[5], link: '/service/devops-automation' },
  { title: 'Mobile App Development', desc: 'Native iOS, Android, and cross-platform mobile applications.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=fill&w=240&h=240&q=90', link: '/service/mobile-app-development' },
  { title: 'Data Management', desc: 'Big data solutions, database design, and data analytics services.', img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=fill&w=240&h=240&q=90', link: '/service/data-management' },
  { title: 'Cybersecurity', desc: 'Security audits, compliance management, and comprehensive threat protection.', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=fill&w=240&h=240&q=90', link: '/service/cybersecurity' },
  { title: 'Business Intelligence', desc: 'Data visualization, reporting dashboards, and business analytics solutions.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=fill&w=240&h=240&q=90', link: '/service/business-intelligence' },
  { title: 'IT Consulting & Strategy', desc: 'Expert IT consulting services to align technology with your business objectives.', img: serviceImgs[5], link: '/services' },
  { title: 'ERP System Development', desc: 'Comprehensive ERP solutions to integrate and streamline all your business processes.', img: serviceImgs[0], link: '/services' },
];

// Use case studies from data file
const caseStudies = caseStudiesData.map(cs => ({
  title: cs.title,
  desc: cs.shortDesc,
  img: cs.img,
  id: cs.id
}));

// @ts-expect-error - Reserved for future use
const _team = [
  { name: 'Vishal Bansal', role: 'Chief Executive Officer & Director of IT Strategy', img: '/1.png' },
  // { name: 'Vishal Bansal', role: 'Chief Technology Officer', img: teamImgs[1] },
  { name: 'Poonam Garg', role: 'Business Development Executive', img: '/2.png' },
];

const testimonials = [
  { 
    text: '"The engagement led to significant numbers of users and 4.8 ratings in the app store, exceeding our business goals. Suprix Solution executed a smooth workflow through regular standups and effective communication. The team was hard-working, dedicated, and professional."',
    company: 'Mafatlal Industries',
    link: 'https://www.mafatlals.com/'
  },
  { 
    text: '"We are extremely satisfied with Suprix Solution\'s work, high quality, and flexibility. They were very process-oriented and skillful. Their team was very adaptable and cooperative throughout the partnership."',
    company: 'Kelps Healthcare',
    link: 'https://www.kelpshealthcare.in/'
  },
  { 
    text: '"Suprix Solution has consistently delivered high-quality outputs on time. Their team impressed us with their development skills, capability to handle complex UI design, and ability to produce the features we requested."',
    company: 'Schoolnet India',
    link: 'https://www.schoolnetindia.com/'
  },
  { 
    text: '"Ever since we onboarded Suprix Solution, we\'ve witnessed an increase in engagement metrics, a significant reduction in app crashes, and a surge in positive reviews. Their timeliness, responsiveness, and excellence have positively impacted the project."',
    company: 'Vylee',
    link: 'https://vylee.in/'
  },
];

const awards = [
  'Microsoft Certified Partner',
  'AWS Advanced Consulting Partner',
  'Google Cloud Partner',
  'GoodFirms Top Software Development Company',
  'Top Rated Plus on Upwork',
  '5-Star Rating on Google Reviews',
  'Best IT Services Provider 2024',
];

// @ts-expect-error - Reserved for future use
const _blogPosts = [
  { title: 'AI & Machine Learning in Business: A Complete Guide', date: 'July 2024', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', summary: 'Discover how artificial intelligence and machine learning are revolutionizing business operations and driving digital transformation.' },
  { title: 'Cloud Migration Strategies for Enterprise IT', date: 'June 2024', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', summary: 'Comprehensive guide to successful cloud migration, including security, cost optimization, and performance best practices.' },
  { title: 'Modern Web Development Trends 2024', date: 'May 2024', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', summary: 'Explore the latest web development technologies, frameworks, and design trends shaping the future of digital experiences.' },
];

const faqs = [
  { q: 'What IT services does Suprix Solution provide?', a: 'We offer comprehensive IT services including custom software development, web development, mobile app development, cloud computing solutions, AI & machine learning, cybersecurity, DevOps automation, and IT consulting services for businesses of all sizes.' },
  { q: 'How can your IT consulting services help my business grow?', a: 'Our IT consulting and digital transformation services enhance operational efficiency, streamline business processes, and improve customer engagement. We provide custom software solutions, cloud migration, and technology strategy that directly drive business growth and competitive advantage.' },
  { q: 'Do you provide industry-specific IT solutions?', a: 'Yes, we specialize in delivering customized IT solutions for healthcare IT, financial technology, e-commerce, educational technology, supply chain management, and other industries. Our team understands sector-specific requirements and compliance needs.' },
  { q: 'What technologies and platforms do you work with?', a: 'Our expert developers work with modern technologies including React, Flutter, Node.js, Python, AWS, Azure, Google Cloud, Docker, Kubernetes, and various AI/ML frameworks. We stay current with the latest technology trends and best practices.' },
  { q: 'Can you help with ongoing IT support and maintenance?', a: 'Absolutely! We provide comprehensive managed IT services including 24/7 support, system monitoring, security updates, performance optimization, and ongoing maintenance to ensure your IT infrastructure runs smoothly and securely.' },
  { q: 'How do I get started with your IT services?', a: 'Contact us for a free IT consultation and assessment. We\'ll analyze your current technology needs and provide a customized solution roadmap for your business.' },
  { q: 'What makes Suprix Solution the best IT consulting company?', a: 'Our combination of deep technical expertise, industry experience, client-focused approach, and proven track record of successful IT projects makes us a trusted partner for digital transformation and technology consulting.' },
];

function AnimatedCounter({ value, suffix = '' }: { value: number | string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const numericValue = typeof value === 'string' ? parseInt(value) : value;
            
            if (isNaN(numericValue)) {
              setCount(value as any);
              return;
            }

            let start = 1;
            const end = numericValue;
            const duration = 2000; // 2 seconds
            const increment = Math.ceil((end - start) / (duration / 16));
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(start);
              }
            }, 16);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={counterRef} className="stat-value">{count}{suffix}</span>;
}

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [_currentCapability, setCurrentCapability] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);


  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate capabilities
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCapability((prev) => (prev + 1) % capabilities.length);
    }, 4000); // Change capability every 4 seconds

    return () => clearInterval(interval);
  }, []);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Suprix Solution",
    "description": "Premier IT consulting company specializing in custom software development, cloud migration, AI solutions, and digital transformation services.",
    "url": "https://suprixsolution.in",
    "logo": "https://suprixsolution.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-94855-63525",
      "contactType": "customer service",
      "email": "hello@suprixsolution.in"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/suprixsolution/posts/?feedView=all",
      "https://twitter.com/suprixsolution"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Custom Software Development",
        "description": "Bespoke software development services for web, mobile, and enterprise applications."
      },
      {
        "@type": "Service", 
        "name": "Cloud Migration Services",
        "description": "AWS, Azure, Google Cloud migration, management, and optimization services."
      },
      {
        "@type": "Service",
        "name": "AI & Machine Learning Solutions", 
        "description": "Custom AI solutions, predictive analytics, and intelligent automation for business growth."
      },
      {
        "@type": "Service",
        "name": "Digital Transformation Consulting",
        "description": "Complete digital transformation solutions to modernize business operations and drive growth."
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      {/* Hero Section */}
      <section className="hero-section" style={{background: '#fff', padding: '10.5rem 1rem 0 1rem', maxWidth: '1150px', margin: '0 auto', overflow: 'visible', paddingBottom: '0', minHeight: 'auto'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', position: 'relative', marginBottom: '0'}}>
          {/* Left Side - Main Content */}
          <motion.div style={{flex: '1', minWidth: '300px', paddingRight: '1rem', paddingLeft: '0', marginLeft: '0', paddingTop: '0', paddingBottom: '0', position: 'relative', left: '0'}} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div style={{color: '#666', fontSize: '1rem', marginBottom: '0.8rem', fontWeight: '500', letterSpacing: '0.3px', textAlign: 'left'}}>For Startups & Growing Businesses</div>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap'}}>
              <h1 style={{
                boxDecorationBreak: 'clone',
                boxSizing: 'border-box',
                color: '#222',
                display: 'block',
                fontFamily: 'Figtree, sans-serif',
                fontSize: 'clamp(20px, 3.5vw, 32px)',
                fontWeight: '500',
                height: 'auto',
                letterSpacing: '0.5px',
                lineHeight: '1.4',
                marginBlockEnd: '16px',
                marginBlockStart: '8px',
                marginInlineEnd: '0px',
                marginInlineStart: '0px',
                textAlign: 'left',
                textSizeAdjust: '100%',
                unicodeBidi: 'isolate',
                width: '100%',
                WebkitFontSmoothing: 'antialiased',
                marginLeft: '0',
                paddingLeft: '0',
                position: 'relative',
                left: '0',
                top: '0',
                maxWidth: '600px'
              }}>
                Custom IT Solutions for Growing Businesses That Need Scalable, Secure <span style={{color: '#f58220', fontWeight: '500', }}>Systems. </span>
                <a href="/contact" className="cta-btn" style={{
                backgroundColor: '#f58220', 
                color: 'white', 
                marginTop: '1rem',
                padding: '0.8rem 2rem', 
                borderRadius: '50px', 
                textDecoration: 'none', 
                fontSize: '1rem', 
                fontWeight: '700', 
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(245, 130, 32, 0.3)',
                transition: 'all 0.3s ease',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                whiteSpace: 'nowrap'
              }}>Get a Free Consultation</a>
              </h1>
            </div>
          </motion.div>
          
          {/* Right Side - Rating Content */}
          <motion.div style={{flex: '1', minWidth: '300px', maxWidth: '500px', marginBottom: '0'}} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1 }}>
            <div style={{background: '#fff', padding: '2.5rem 2.5rem 0 2.5rem', borderRadius: '12px', marginBottom: '0'}}>
              <p style={{
                color: '#444', 
                fontSize: '1.1rem', 
                lineHeight: '1.6', 
                marginBottom: '0',
                paddingBottom: '0',
                fontWeight: '400',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                textAlign: 'left'
              }}>
We help companies reduce costs, streamline operations, and scale faster with secure, scalable technology. Our solutions are built to improve efficiency, enhance performance, and support long-term growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Clients/Industries Section */}
      <section className="clients-section" style={{
        paddingTop: '0', 
        marginTop: '5rem', 
        paddingBottom: '1rem', 
        marginBottom: '5px',
        background: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        width: '100%'
      }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} style={{marginTop: '0', marginBottom: '0.5rem', paddingTop: '0'}}>Trusted by Leading Companies Across Industries</motion.h2>
        <div style={{
          overflow: 'hidden',
          width: '100%',
          maxWidth: '1150px',
          margin: '0.5rem auto',
          padding: '1rem',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          minHeight: '120px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            animation: 'scroll 30s linear infinite',
            width: 'fit-content',
            height: '100px'
          }}>
            {/* First set of clients */}
            {clients.map((client, idx) => (
              <div
                key={`client-1-${idx}`}
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '1.5rem 2rem',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  flexShrink: 0,
                  minWidth: '180px',
                  height: '100px',
                  margin: 0,
                  verticalAlign: 'middle'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
              >
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    style={{
                      maxWidth: '160px',
                      maxHeight: '80px',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto',
                      verticalAlign: 'middle'
                    }}
                  />
                ) : (
                  <span style={{ fontWeight: '600', fontSize: '1rem', color: 'black' }}>{client.name}</span>
                )}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, idx) => (
              <div
                key={`client-2-${idx}`}
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '1.5rem 2rem',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  flexShrink: 0,
                  minWidth: '180px',
                  height: '100px',
                  margin: 0,
                  verticalAlign: 'middle'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
              >
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    style={{
                      maxWidth: '160px',
                      maxHeight: '80px',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto',
                      verticalAlign: 'middle'
                    }}
                  />
                ) : (
                  <span style={{ fontWeight: '600', fontSize: '1rem', color: 'black' }}>{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div style={{marginTop: 24, color: '#888', fontSize: 15, maxWidth: '1150px', margin: '24px auto 0 auto', padding: '0 1rem', textAlign: 'left'}}>
          <b>Industries:</b> {industries.join(', ')}
        </div>
      </section>
      
      {/* Feature Cards Section */}
      <section style={{background: '#fff', padding: '2rem 1rem', maxWidth: '1400px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'stretch'}}>
          {/* Video Card */}
          <motion.div 
            style={{
              background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
              borderRadius: '20px',
              padding: '2.5rem',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{position: 'relative', zIndex: 2, flexShrink: 0}}>
              <h3 style={{fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'}}>How Does It Work?</h3>
            </div>
            <div style={{position: 'relative', zIndex: 2, width: '100%', flex: 1, display: 'flex', alignItems: 'stretch', minHeight: 0, overflow: 'hidden'}}>
              <video 
                ref={videoRef}
                controls 
                style={{
                  borderRadius: '12px', 
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)', 
                  cursor: 'pointer', 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  display: 'block'
                }}
                onClick={(e) => {
                  const video = e.currentTarget;
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }}
              >
                <source src="/suprx.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Suprix Potential Card */}
          <motion.div 
            style={{
              background: '#000',
              borderRadius: '20px',
              padding: '2.5rem',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <div style={{fontSize: '3.5rem', fontWeight: '700', color: '#f58220', marginBottom: '1rem', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'}}>
                <AnimatedCounter value={95} suffix="+" />
              </div>
              <p style={{fontSize: '1rem', opacity: '0.8', marginBottom: '1.5rem', fontWeight: '500', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'}}>Unlock your business potential with Suprix</p>
              <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
                <li style={{marginBottom: '0.8rem', fontSize: '1rem', fontWeight: '500', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'}}>• We Will Make Your Business Growth</li>
              </ul>
              <p style={{fontSize: '0.95rem', opacity: '0.9', lineHeight: '1.6', fontWeight: '400', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'}}>
                Join with us to take advantage of technology's potential and prepare for a digital future
              </p>
            </div>
          </motion.div>

          {/* Services Card */}
          <motion.div 
            style={{
              borderRadius: '20px',
              padding: '2.5rem',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              backgroundImage: 'url("https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=400&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.15) 100%)'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              backdropFilter: 'blur(10px)'
            }}>
              👩‍💼
            </div>
            <div style={{marginBottom: '1.5rem', position: 'relative', zIndex: 2}}>
              <div style={{display: 'flex', gap: '0.8rem', marginBottom: '1.5rem', flexWrap: 'wrap'}}>
                <span style={{
                  background: 'rgba(255,255,255,0.25)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.4)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onClick={() => window.location.href = '/services'}>App development</span>
                <span style={{
                  background: 'rgba(255,255,255,0.25)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.4)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onClick={() => window.location.href = '/services'}>Web development</span>
                <span style={{
                  background: 'rgba(255,255,255,0.25)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.4)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onClick={() => window.location.href = '/services'}>It consulting</span>
              </div>
              <a href="/services" style={{
                background: '#f58220',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(245, 130, 32, 0.3)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
              }}>More Services...</a>
            </div>
        </motion.div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="seo-content-section" style={{background: '#f8f9fa', padding: '3rem 1rem', textAlign: 'center'}}>
        <div style={{maxWidth: 1000, margin: '0 auto'}}>
          <h2 style={{color: '#222', marginBottom: '1.5rem', fontSize: '2rem'}}>Why Choose Suprix Solution for Your IT Needs?</h2>
          <p style={{color: '#555', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
            As a leading IT consulting company in India, Suprix Solution specializes in delivering 
            custom software development, cloud migration services, 
            AI and machine learning solutions, and digital transformation consulting. 
            Our expert team of developers, cloud architects, and IT consultants helps businesses across 
            healthcare, fintech, e-commerce, education, and manufacturing sectors achieve 
            their digital goals with cutting-edge technology solutions.
          </p>
        </div>
      </section>
      {/* Stats Section */}
      <section className="stats-section" style={{background: '#f5f5f5'}}>
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div
              className="stat-card"
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Process Section */}
      <section className="process-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Our Proven IT Service Process | Digital Transformation Methodology</motion.h2>
        <div className="process-timeline">
          {processSteps.map((step, idx) => (
            <motion.div
              className={`process-timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              key={step.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="process-timeline-card">
                <div className="process-timeline-icon">
                  <span style={{fontSize: 36}}>{step.icon}</span>
                </div>
                <div className="process-timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                <div className="process-timeline-number">{idx + 1}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
   
    
      {/* Services Section */}
      <section id="services" className="services-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Comprehensive IT Services & Digital Solutions | Software Development Company</motion.h2>
        <div className="services-slideshow-container">
          <div 
            className="services-slideshow"
            style={{
              width: `${services.length * 100}%`,
              transform: `translateX(-${currentSlide * (100 / services.length)}%)`,
              transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {services.map((service) => (
              <motion.div
                className="service-slide"
                key={service.title}
                initial={{ opacity: 0, scale: 1.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  width: `calc(100% / ${services.length})`,
                  minWidth: `calc(100% / ${services.length})`
                }}
              >
                <Link 
                  to={service.link}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    width: '100%',
                    height: '100%'
                  }}
                >
                  <div className="service-slide-content" style={{ cursor: 'pointer' }}>
                    <div className="service-icon-container">
                      <img src={service.img} alt={service.title + ' icon'} className="service-slide-icon" />
                      <div className="service-icon-glow"></div>
                    </div>
                    <h3 className="service-slide-title">{service.title}</h3>
                    <p className="service-slide-desc">{service.desc}</p>
                    <div className="service-slide-features">
                      <span className="service-feature-tag">Expert Team</span>
                      <span className="service-feature-tag">24/7 Support</span>
                      <span className="service-feature-tag">Custom Solutions</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Portfolio/Case Studies Section */}
      <section id="portfolio" className="portfolio-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>IT Project Portfolio & Success Stories</motion.h2>
        <div className="portfolio-grid">
          {caseStudies.map((cs, idx) => (
            <motion.div
              className="portfolio-card"
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              style={{ cursor: 'pointer' }}
            >
              <Link 
                to={`/case-study/${cs.id}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <img src={cs.img} alt={cs.title + ' project'} style={{width: '100%', maxWidth: 220, borderRadius: 12, marginBottom: 16, boxShadow: 'var(--shadow)'}} />
                <h3>{cs.title}</h3>
                <p>{cs.desc}</p>
                <div style={{
                  marginTop: '1rem',
                  color: '#f58220',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  Read Case Study →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Client Testimonials & Success Stories</motion.h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <motion.blockquote
              key={idx}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <p style={{ marginBottom: '1.5rem' }}>{testimonial.text}</p>
              <div style={{ 
                marginTop: 'auto', 
                paddingTop: '1rem', 
                borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                textAlign: 'right'
              }}>
                <a 
                  href={testimonial.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    color: '#f58220',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#e26c0a'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#f58220'}
                >
                  — {testimonial.company}
                </a>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </section>
      {/* Awards Section */}
      <section className="awards-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Awards & Recognitions</motion.h2>
        <div className="awards-list">
          {awards.map((award, idx) => (
            <motion.div
              className="award-card"
              key={award}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              🏆 {award}
            </motion.div>
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="faq-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>IT Services FAQ - Frequently Asked Questions</motion.h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <motion.div
              className={`faq-item${faqOpen === idx ? ' open' : ''}`}
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
            >
              <div className="faq-question">{faq.q}</div>
              <div className="faq-answer" style={{ display: faqOpen === idx ? 'block' : 'none' }}>{faq.a}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
} 