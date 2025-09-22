import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const serviceImgs = [
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=96&q=80', // AI/ML
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=96&q=80', // Software Development
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=96&q=80', // Web Development
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=96&q=80', // Cloud Computing
  'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=96&q=80', // DevOps
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=96&q=80', // IT Consulting
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
const portfolioImgs = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
];
const teamImgs = [
  'https://api.dicebear.com/7.x/avataaars/svg?seed=CEO&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&gender=male', // CEO - Boy
  'https://api.dicebear.com/7.x/avataaars/svg?seed=CTO&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&gender=male', // CTO - Boy
  'https://api.dicebear.com/7.x/avataaars/svg?seed=BDE&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&gender=female', // BDE - Girl
];

const stats = [
  { label: 'IT Solutions Delivered', value: '350+' },
  { label: 'Enterprise Clients', value: '20+' },
  { label: 'Mobile Apps with 1M+ Downloads', value: '30+' },
  { label: 'Client Retention Rate', value: '80%' },
  { label: 'Expert IT Professionals', value: '600+' },
];

const processSteps = [
  { icon: '🔍', title: 'IT Assessment', desc: 'We analyze your current IT infrastructure, business goals, and technology challenges.' },
  { icon: '📝', title: 'Strategic Planning', desc: 'We develop a comprehensive IT strategy and digital transformation roadmap.' },
  { icon: '⚙️', title: 'Solution Development', desc: 'Our expert developers build, test, and deploy your custom IT solutions.' },
  { icon: '🤝', title: 'Managed IT Support', desc: 'We provide ongoing IT support, maintenance, and continuous optimization.' },
];

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
  'HCL Healthcare', 'Vylee', 'Mafatlal Industries', 'Vridhee', 'Schoolnet', 'Chopsy Tracking',
];

const industries = [
  'Healthcare IT', 'Financial Technology', 'E-Commerce Solutions', 'Educational Technology', 'Supply Chain Management', 'Electric Vehicle Technology', 'Travel & Hospitality', 'Food & Beverage', 'Energy & Utilities',
];

const services = [
  { title: 'Digital Transformation Services', desc: 'Complete digital transformation solutions to modernize your business operations and drive growth.', img: serviceImgs[0] },
  { title: 'AI & Machine Learning Solutions', desc: 'Custom artificial intelligence and machine learning solutions for intelligent business automation.', img: serviceImgs[1] },
  { title: 'Custom Software Development', desc: 'Bespoke software development services for web, mobile, and enterprise applications.', img: serviceImgs[2] },
  { title: 'Web Development Services', desc: 'Professional website development with modern design and optimal performance.', img: serviceImgs[3] },
  { title: 'Cloud Computing Solutions', desc: 'Comprehensive cloud migration, management, and optimization services for scalability.', img: serviceImgs[4] },
  { title: 'DevOps & IT Automation', desc: 'Streamlined DevOps practices and IT automation for faster, reliable deployments.', img: serviceImgs[5] },
  { title: 'IT Consulting & Strategy', desc: 'Expert IT consulting services to align technology with your business objectives.', img: serviceImgs[5] },
];

const caseStudies = [
  { title: 'Healthcare IT Solutions & Digital Transformation', desc: 'Developed comprehensive healthcare management platform with patient data analytics and telemedicine capabilities for improved patient care.', img: portfolioImgs[0], link: '#' },
  { title: 'Educational Technology Mobile App Development', desc: 'Created advanced iOS and Android applications with interactive learning features and seamless user experience.', img: portfolioImgs[1], link: '#' },
  { title: 'Insurance Technology & Digital Platform Solutions', desc: 'Built digital insurance platform with automated claims processing and comprehensive customer portal functionality.', img: portfolioImgs[2], link: '#' },
  { title: 'Enterprise Dashboard & Business Intelligence Development', desc: 'Developed custom business intelligence dashboards to streamline operations and improve organizational efficiency.', img: portfolioImgs[3], link: '#' },
  { title: 'AI-Powered Retail Analytics & Machine Learning Solutions', desc: 'Implemented machine learning solutions for retail industry, resulting in significant sales increase through predictive analytics.', img: portfolioImgs[0], link: '#' },
  { title: 'Cloud Migration & Financial Technology Solutions', desc: 'Successfully migrated financial technology platform to AWS cloud infrastructure, improving performance and scalability.', img: portfolioImgs[1], link: '#' },
];

const team = [
  { name: 'Akshay Garg', role: 'Chief Executive Officer & Director of IT Strategy', img: teamImgs[0] },
  { name: 'Vishal Bansal', role: 'Chief Technology Officer', img: teamImgs[1] },
  { name: 'Poonam', role: 'Business Development Executive', img: teamImgs[2] },
];


const testimonials = [
  '“The engagement led to significant numbers of users and 4.8 ratings in the app store, exceeding our business goals. Suprix Solution executed a smooth workflow through regular standups and effective communication. The team was hard-working, dedicated, and professional.”',
  '“We are extremely satisfied with Suprix Solution’s work, high quality, and flexibility. They were very process-oriented and skillful. Their team was very adaptable and cooperative throughout the partnership.”',
  '“Suprix Solution has consistently delivered high-quality outputs on time. Their team impressed us with their development skills, capability to handle complex UI design, and ability to produce the features we requested.”',
  '“Ever since we onboarded Suprix Solution, we’ve witnessed an increase in engagement metrics, a significant reduction in app crashes, and a surge in positive reviews. Their timeliness, responsiveness, and excellence have positively impacted the project.”',
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

const blogPosts = [
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

function AnimatedCounter({ value }: { value: number | string }) {
  return <span className="stat-value">{value}</span>;
}

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 3000); // Change slide every 3 seconds

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
      "https://www.linkedin.com/company/suprix-solution",
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
      <section className="hero-section" style={{background: '#fff', padding: '4rem 0', maxWidth: '1200px', margin: '0 auto', overflow: 'visible'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '8rem', flexWrap: 'wrap', position: 'relative'}}>
          {/* Left Side - Main Content */}
          <motion.div style={{flex: '1', minWidth: '500px', paddingRight: '10rem', paddingLeft: '0', marginLeft: '-4rem', paddingTop: '0', paddingBottom: '0', position: 'relative', left: '0'}} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div style={{color: '#666', fontSize: '1rem', marginBottom: '0.8rem', fontWeight: '500', letterSpacing: '0.3px', textAlign: 'left'}}>Empowering Business Futures</div>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap'}}>
              <h1 style={{
                boxDecorationBreak: 'clone',
                boxSizing: 'border-box',
                color: '#222',
                display: 'inline',
                fontFamily: 'Figtree, sans-serif',
                fontSize: '44px',
                fontWeight: '500',
                height: 'auto',
                letterSpacing: '-1.32px',
                lineHeight: '52.8px',
                marginBlockEnd: '16px',
                marginBlockStart: '8px',
                marginInlineEnd: '0px',
                marginInlineStart: '0px',
                textAlign: 'left',
                textSizeAdjust: '100%',
                unicodeBidi: 'isolate',
                width: 'auto',
                WebkitFontSmoothing: 'antialiased',
                marginLeft: '0',
                paddingLeft: '0',
                position: 'relative',
                left: '0',
                top: '0'
              }}>
                Driving Digital Solutions to Elevate Your Business <span style={{color: '#f58220', fontWeight: '500', }}>Future</span>
                <a href="/contact" className="cta-btn" style={{
                backgroundColor: '#f58220', 
                color: 'white', 
                marginLeft: '1.5rem',
                padding: '0.2rem 3.5rem', 
                borderRadius: '50px', 
                textDecoration: 'none', 
                fontSize: '1.1rem', 
                fontWeight: '700', 
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(245, 130, 32, 0.3)',
                transition: 'all 0.3s ease',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                whiteSpace: 'nowrap'
              }}>Get Started</a>
              </h1>
            </div>
          </motion.div>
          
          {/* Right Side - Rating Content */}
          <motion.div style={{flex: '1', minWidth: '400px', maxWidth: '500px'}} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1 }}>
            <div style={{background: '#fff', padding: '2.5rem', borderRadius: '12px', border: '1px solid #e9ecef'}}>
              <p style={{
                color: '#444', 
                fontSize: '1.1rem', 
                lineHeight: '1.6', 
                marginBottom: '2.5rem',
                fontWeight: '400',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
              }}>
                Welcome to <strong style={{color: '#222', fontWeight: '700'}}>SUPRIX SOLUTION</strong>, An information technology hub where innovation and quality collide. Our specialty is creating unique IT solutions that boost your company's productivity.
              </p>
              
              {/* Rating Section */}
              <div style={{marginBottom: '1.5rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '0.8rem'}}>
                  <div style={{display: 'flex', gap: '0.3rem'}}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{color: '#ffd700', fontSize: '1.6rem'}}>★</span>
                    ))}
                  </div>
                  <div style={{fontSize: '2rem', fontWeight: '700', color: '#222', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'}}>4.9/5 Rating</div>
                </div>
                <div style={{color: '#666', fontSize: '1rem', marginBottom: '1.5rem', fontWeight: '400'}}>From over 100+ reviews.</div>
              </div>
              
              {/* Profile Pictures */}
              <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=reviewer1&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&gender=male" alt="Reviewer 1" style={{
                    width: '45px', 
                    height: '45px', 
                    borderRadius: '50%', 
                    border: '2px solid white', 
                    marginRight: '-8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }} />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=reviewer2&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&gender=female" alt="Reviewer 2" style={{
                    width: '45px', 
                    height: '45px', 
                    borderRadius: '50%', 
                    border: '2px solid white', 
                    marginRight: '-8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }} />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=reviewer3&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&gender=male" alt="Reviewer 3" style={{
                    width: '45px', 
                    height: '45px', 
                    borderRadius: '50%', 
                    border: '2px solid white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }} />
                </div>
                <div style={{
                  width: '45px', 
                  height: '45px', 
                  borderRadius: '50%', 
                  backgroundColor: '#f58220', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: '800', 
                  fontSize: '1rem',
                  boxShadow: '0 2px 8px rgba(245, 130, 32, 0.3)'
                }}>100+</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Feature Cards Section */}
      <section style={{background: '#fff', padding: '4rem 2rem', maxWidth: '1400px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem'}}>
          {/* Video Card */}
          <motion.div 
            style={{
              background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
              borderRadius: '20px',
              padding: '2.5rem',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '350px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'linear-gradient(135deg, rgba(74, 85, 104, 0.8) 0%, rgba(45, 55, 72, 0.9) 100%)'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              left: '1.5rem',
              width: '70px',
              height: '70px',
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
              ▶
            </div>
            <div style={{position: 'relative', zIndex: 2}}>
              <h3 style={{fontSize: '1.6rem', fontWeight: '700', marginBottom: '0.8rem', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'}}>How Does It Work?</h3>
              <p style={{fontSize: '1rem', opacity: '0.9', fontWeight: '500', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'}}>Play Video</p>
            </div>
          </motion.div>

          {/* Suprix Potential Card */}
          <motion.div 
            style={{
              background: '#000',
              borderRadius: '20px',
              padding: '2.5rem',
              color: 'white',
              minHeight: '350px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <div style={{fontSize: '3.5rem', fontWeight: '700', color: '#f58220', marginBottom: '1rem', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'}}>95+</div>
              <p style={{fontSize: '1rem', opacity: '0.8', marginBottom: '1.5rem', fontWeight: '500', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'}}>Unlock your business potential with Suprix</p>
              <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
                <li style={{marginBottom: '0.8rem', fontSize: '1rem', fontWeight: '500', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'}}>• We Will Make Your Business Growth</li>
              </ul>
              <p style={{fontSize: '0.95rem', opacity: '0.9', lineHeight: '1.6', fontWeight: '400', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'}}>
                Join with us to take advantage of technology's potential and prepare for a digital future
              </p>
            </div>
            <div style={{marginTop: 'auto'}}>
              <a href="/about" style={{
                color: 'white', 
                textDecoration: 'none', 
                fontSize: '1rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontWeight: '600',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
              }}>
                Learn More →
              </a>
            </div>
          </motion.div>

          {/* Services Card */}
          <motion.div 
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              padding: '2.5rem',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '350px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              backgroundImage: 'url("https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80")',
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
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.9) 100%)'
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
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
                }}>App development</span>
                <span style={{
                  background: 'rgba(255,255,255,0.25)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
                }}>Web development</span>
                <span style={{
                  background: 'rgba(255,255,255,0.25)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
                }}>It consulting</span>
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
            As a leading <strong>IT consulting company in India</strong>, Suprix Solution specializes in delivering 
            <strong> custom software development</strong>, <strong>cloud migration services</strong>, 
            <strong> AI and machine learning solutions</strong>, and <strong>digital transformation consulting</strong>. 
            Our expert team of developers, cloud architects, and IT consultants helps businesses across 
            <strong> healthcare, fintech, e-commerce, education, and manufacturing sectors</strong> achieve 
            their digital goals with cutting-edge technology solutions.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
            <div style={{background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#f58220', marginBottom: '1rem'}}>Expert Development Team</h3>
              <p style={{color: '#666'}}>Certified developers with expertise in React, Node.js, Python, AWS, and Azure technologies.</p>
            </div>
            <div style={{background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#f58220', marginBottom: '1rem'}}>Proven Track Record</h3>
              <p style={{color: '#666'}}>Successfully delivered 350+ IT projects with 99% client satisfaction rate.</p>
            </div>
            <div style={{background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
              <h3 style={{color: '#f58220', marginBottom: '1rem'}}>24/7 Support</h3>
              <p style={{color: '#666'}}>Round-the-clock technical support and maintenance for all our solutions.</p>
            </div>
          </div>
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
              <AnimatedCounter value={stat.value} />
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
      {/* Capabilities Section */}
      <section className="capabilities-section" style={{background: '#f5f5f5'}}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Our Comprehensive IT Service Capabilities | Technology Solutions</motion.h2>
        <div className="capabilities-grid">
          {capabilities.map((cap, idx) => (
            <motion.div
              className="capability-card"
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={cap.icon} alt={cap.title + ' icon'} style={{width: 64, height: 64, marginBottom: 16}} />
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Clients/Industries Section */}
      <section className="clients-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Trusted by Leading Companies Across Industries</motion.h2>
        <div className="clients-carousel">
          {clients.map((client, idx) => (
            <motion.div
              className="client-logo"
              key={client}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <span>{client}</span>
            </motion.div>
          ))}
        </div>
        <div style={{marginTop: 24, color: '#888', fontSize: 15}}>
          <b>Industries:</b> {industries.join(', ')}
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="services-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Comprehensive IT Services & Digital Solutions | Software Development Company</motion.h2>
        <div className="services-slideshow-container">
          <div 
            className="services-slideshow"
            style={{
              transform: `translateX(-${currentSlide * (100 / 7)}%)`,
              transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {services.map((service, idx) => (
              <motion.div
                className="service-slide"
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="service-slide-content">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Video/Demo Section */}
      <section className="video-demo-section" style={{background: '#f5f5f5', textAlign: 'center', padding: '4rem 1rem'}}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>How Does It Work?</motion.h2>
        <div style={{margin: '2rem auto', maxWidth: 600}}>
          <iframe width="100%" height="340" src="https://www.youtube.com/embed/2e1x5Rk2KjA" title="Suprix Solution Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>
      {/* Portfolio/Case Studies Section */}
      <section id="portfolio" className="portfolio-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>IT Project Portfolio & Success Stories</motion.h2>
        <div className="portfolio-grid">
          {caseStudies.map((cs, idx) => (
            <motion.div
              className="portfolio-card"
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={cs.img} alt={cs.title + ' project'} style={{width: '100%', maxWidth: 220, borderRadius: 12, marginBottom: 16, boxShadow: 'var(--shadow)'}} />
              <h3>{cs.title}</h3>
              <p>{cs.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="team-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Meet Our IT Leadership Team</motion.h2>
        <div className="team-grid">
          {team.map((member, idx) => (
            <motion.div
              className="team-card"
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={member.img} alt={member.name + ' photo'} style={{width: 72, height: 72, borderRadius: '50%', marginBottom: 12, objectFit: 'cover', boxShadow: 'var(--shadow)'}} />
              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Client Testimonials & Success Stories</motion.h2>
        <div className="testimonials-grid">
          {testimonials.map((text, idx) => (
            <motion.blockquote
              key={idx}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {text}
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
      {/* Blog/Insights Preview Section */}
      <section className="blog-section" style={{background: '#f5f5f5'}}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Latest IT Industry Insights & Technology Blog</motion.h2>
        <div className="blog-grid">
          {blogPosts.map((blog, idx) => (
            <motion.div
              className="blog-card"
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={blog.img} alt={blog.title + ' image'} style={{width: '100%', maxWidth: 220, borderRadius: 12, marginBottom: 16, boxShadow: 'var(--shadow)'}} />
              <h3>{blog.title}</h3>
              <span className="blog-date">{blog.date}</span>
              <p>{blog.summary}</p>
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
      {/* Sticky CTA Banner */}
      <section className="cta-banner-section">
        <motion.div className="cta-banner" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <h2>Ready to Transform Your Business with Expert IT Services?</h2>
          <a href="/contact" className="cta-btn">Get a Free Consultation</a>
        </motion.div>
      </section>
      {/* Contact Section with Form */}
      <section id="contact" className="contact-section" style={{background: '#fff', color: '#222'}}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Contact Our IT Consulting Team</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          Need help with a project or have a question? We’re here. <br />
          <a href="mailto:hello@suprixsolution.in" className="contact-link">hello@suprixsolution.in</a>
        </motion.p>
        <motion.a href="tel:+919485563525" className="cta-btn" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
          Call Us: +91 94855-63525
        </motion.a>
      </section>
    </main>
  );
} 