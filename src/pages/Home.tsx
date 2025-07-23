import { motion } from 'framer-motion';
import { useState } from 'react';
import Player from 'lottie-react';
import bookReadingLottie from '../assets/book-reading-lottie.json';

const serviceImgs = [
  'https://img.icons8.com/color/96/000000/artificial-intelligence.png',
  'https://img.icons8.com/color/96/000000/development-skill.png',
  'https://img.icons8.com/color/96/000000/web-design.png',
  'https://img.icons8.com/color/96/000000/cloud.png',
  'https://img.icons8.com/color/96/000000/devops.png',
  'https://img.icons8.com/color/96/000000/consulting.png',
];
const capabilityImgs = [
  'https://img.icons8.com/color/96/000000/artificial-intelligence.png',
  'https://img.icons8.com/color/96/000000/cloud.png',
  'https://img.icons8.com/color/96/000000/devops.png',
  'https://img.icons8.com/color/96/000000/web-design.png',
  'https://img.icons8.com/color/96/000000/mobile-development.png',
  'https://img.icons8.com/color/96/000000/database.png',
  'https://img.icons8.com/color/96/000000/lock-2.png',
  'https://img.icons8.com/color/96/000000/analytics.png',
];
const portfolioImgs = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
];
const teamImgs = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/65.jpg',
];

const stats = [
  { label: 'Digital Solutions Delivered', value: '350+' },
  { label: 'Strategic Unicorn Partners', value: '20+' },
  { label: 'Products with 1Mn+ Downloads', value: '30+' },
  { label: 'Repeat Business', value: '80%' },
  { label: 'Engineers', value: '600+' },
];

const processSteps = [
  { icon: '🔍', title: 'Discovery', desc: 'We understand your business, goals, and challenges.' },
  { icon: '📝', title: 'Planning', desc: 'We craft a tailored roadmap and strategy.' },
  { icon: '⚙️', title: 'Execution', desc: 'Our experts build, test, and launch your solution.' },
  { icon: '🤝', title: 'Support', desc: 'We provide ongoing support and optimization.' },
];

const capabilities = [
  { icon: capabilityImgs[0], title: 'AI & ML', desc: 'Intelligent automation and analytics.' },
  { icon: capabilityImgs[1], title: 'Cloud', desc: 'AWS, Azure, Google Cloud, migration & ops.' },
  { icon: capabilityImgs[2], title: 'DevOps', desc: 'CI/CD, automation, and infrastructure.' },
  { icon: capabilityImgs[3], title: 'Web Development', desc: 'Modern, scalable, responsive web apps.' },
  { icon: capabilityImgs[4], title: 'Mobile Apps', desc: 'iOS, Android, Flutter, React Native.' },
  { icon: capabilityImgs[5], title: 'Data & DB', desc: 'Big Data, analytics, and secure storage.' },
  { icon: capabilityImgs[6], title: 'Cybersecurity', desc: 'Security audits, compliance, and defense.' },
  { icon: capabilityImgs[7], title: 'BI & Analytics', desc: 'Business intelligence and dashboards.' },
];

const clients = [
  'HCL Healthcare', 'Byjus', 'GoDigit', 'Physics Wallah', 'Hitachi', 'Rapido',
];

const industries = [
  'Healthcare', 'FinTech', 'E-Commerce', 'EdTech', 'Logistics', 'EV', 'TravelTech', 'FoodTech', 'EnergyTech',
];

const services = [
  { title: 'Digital Transformation', desc: 'Seamless digitization for your business’s success.', img: serviceImgs[0] },
  { title: 'Artificial Intelligence', desc: 'Driving innovation with intelligent and scalable solutions.', img: serviceImgs[1] },
  { title: 'Application Development', desc: 'Custom application development services tailored to your needs.', img: serviceImgs[2] },
  { title: 'Website Development', desc: 'Developing robust & responsive websites for your business.', img: serviceImgs[3] },
  { title: 'Cloud Solutions', desc: 'Redefine scalability with unparalleled flexibility and performance.', img: serviceImgs[4] },
  { title: 'DevOps Solutions', desc: 'Unleashing agility for unprecedented growth.', img: serviceImgs[5] },
  { title: 'Technology Consulting & Innovation', desc: 'Unlock new horizons for your business with innovative solutions.', img: serviceImgs[5] },
];

const caseStudies = [
  { title: 'Empowering Healthcare with Digital Platforms', desc: 'Developed a game-changing web platform to empower HCL Healthcare in the competitive digital landscape.', img: portfolioImgs[0], link: '#' },
  { title: 'Revolutionizing EdTech', desc: 'Advanced and responsive iOS app for Physics Wallah, transforming the Ed-tech world.', img: portfolioImgs[1], link: '#' },
  { title: 'Seamless Insurance Process', desc: 'Paved the way for GoDigit users in making the insurance process easier and hassle-free with robust digital solutions.', img: portfolioImgs[2], link: '#' },
  { title: 'Enhanced Internal Operations', desc: 'Integrated Assembly Management Dashboards to help Hitachi simplify business operations and bring efficiency.', img: portfolioImgs[3], link: '#' },
  { title: 'AI-powered Analytics for Retail', desc: 'Implemented predictive analytics for a major retailer, boosting sales by 25%.', img: portfolioImgs[0], link: '#' },
  { title: 'Cloud Migration for FinTech', desc: 'Migrated a FinTech platform to AWS, improving uptime and scalability.', img: portfolioImgs[1], link: '#' },
];

const team = [
  { name: 'Akshay Kumar', role: 'CEO', img: teamImgs[0] },
  { name: 'Priya Sharma', role: 'Lead Developer', img: teamImgs[1] },
  { name: 'Rahul Verma', role: 'UI/UX Designer', img: teamImgs[2] },
];

const testimonials = [
  '“The engagement led to significant numbers of users and 4.8 ratings in the app store, exceeding our business goals. Suprix Solution executed a smooth workflow through regular standups and effective communication. The team was hard-working, dedicated, and professional.”',
  '“We are extremely satisfied with Suprix Solution’s work, high quality, and flexibility. They were very process-oriented and skillful. Their team was very adaptable and cooperative throughout the partnership.”',
  '“Suprix Solution has consistently delivered high-quality outputs on time. Their team impressed us with their development skills, capability to handle complex UI design, and ability to produce the features we requested.”',
  '“Ever since we onboarded Suprix Solution, we’ve witnessed an increase in engagement metrics, a significant reduction in app crashes, and a surge in positive reviews. Their timeliness, responsiveness, and excellence have positively impacted the project.”',
];

const awards = [
  'Clutch Global Award',
  'ISO 9001 Certified',
  'Top 50 Tech Innovators',
  'ET Leadership Excellence',
  'Most Reviewed Company by Manifest',
];

const blogPosts = [
  { title: 'How AI is Transforming Business', date: 'July 2024', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', summary: 'Explore the impact of artificial intelligence on modern enterprises and how to leverage it for growth.' },
  { title: 'Cloud Migration Best Practices', date: 'June 2024', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', summary: 'A step-by-step guide to migrating your business to the cloud securely and efficiently.' },
  { title: 'UX Trends in 2024', date: 'May 2024', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', summary: 'Discover the latest trends in user experience design and how they can boost engagement.' },
];

const faqs = [
  { q: 'What services does your IT company provide?', a: 'We offer a range of IT services, including web development, mobile app development, UI/UX design, IT consulting, cloud solutions, cybersecurity, and video streaming integrations.' },
  { q: 'How can your IT solutions help my business grow?', a: 'Our IT solutions are designed to enhance operational efficiency, streamline workflows, and improve customer engagement. Whether it’s through a custom website, a user-friendly mobile app, or secure data management, our goal is to deliver solutions that drive business growth.' },
  { q: 'Do you offer customized IT solutions for specific industries?', a: 'Yes, we specialize in offering tailor-made IT solutions for industries like eCommerce, healthcare, pharmaceuticals, and more. Our team works closely with clients to understand their unique needs and deliver solutions that align with their business objectives.' },
  { q: 'What technologies and tools do you specialize in?', a: 'Our team is proficient in a wide array of technologies, including but not limited to Flutter, React, WordPress, cloud platforms (AWS, Google Cloud), and video streaming tools like HLS and WebRTC.' },
  { q: 'Can you assist with IT consulting for ongoing projects?', a: 'Absolutely! We offer IT consulting services for businesses looking to optimize their existing infrastructure or integrate new technologies. Our experts provide insights on improving efficiency, scaling systems, and addressing any IT challenges you may face.' },
  { q: 'How do I get started?', a: 'Contact us for a free consultation or fill out the inquiry form.' },
  { q: 'What makes Suprix Solution different?', a: 'Our client-centric approach, deep technical expertise, and commitment to innovation set us apart.' },
];

function AnimatedCounter({ value }: { value: number | string }) {
  return <span className="stat-value">{value}</span>;
}

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" style={{background: '#fff', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '2rem'}}>
        <motion.div style={{flex: '1 1 320px', minWidth: 280}} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 style={{color: '#222'}}>Synergizing AI with Digital Humanism</h1>
          <p style={{color: '#444'}}>As a global digital product development and technology consulting leader, <b>Suprix Solution</b> helps clients become fluidic, innovative, and digital-first companies to win in their respective fields.</p>
          <a href="#contact" className="cta-btn">Let’s Talk</a>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Digital Transformation" style={{marginTop: 24, width: '100%', maxWidth: 340, borderRadius: '1.2rem', boxShadow: 'var(--shadow)'}} />
        </motion.div>
        {/* <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1 }} style={{maxWidth: 340, width: '100%', borderRadius: '1.2rem', boxShadow: 'var(--shadow)', background: 'transparent'}}>
          <Player autoplay loop animationData={bookReadingLottie} style={{ height: 300, width: 300 }} />
        </motion.div> */}
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
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>How We Work</motion.h2>
        <div className="process-steps-grid">
          {processSteps.map((step, idx) => (
            <motion.div
              className="process-step-card"
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span className="process-step-icon" style={{fontSize: 36}}>{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Capabilities Section */}
      <section className="capabilities-section" style={{background: '#f5f5f5'}}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Our Capabilities</motion.h2>
        <div className="capabilities-grid">
          {capabilities.map((cap, idx) => (
            <motion.div
              className="capability-card"
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={cap.icon} alt={cap.title + ' icon'} style={{width: 48, height: 48, marginBottom: 10}} />
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Clients/Industries Section */}
      <section className="clients-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Our Clients & Industries</motion.h2>
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
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Our 360° AI-Led Capabilities</motion.h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <motion.div
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={service.img} alt={service.title + ' icon'} style={{width: 56, height: 56, marginBottom: 12}} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#" className="learn-more">Learn More</a>
            </motion.div>
          ))}
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
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Our Works & Case Studies</motion.h2>
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
              <a href={cs.link} className="learn-more">Read Details</a>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="team-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Meet Our Leadership</motion.h2>
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
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>What Our Partners Say</motion.h2>
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
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Latest Insights</motion.h2>
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
              <a href="#" className="learn-more">Read More</a>
            </motion.div>
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="faq-section">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Frequently Asked Questions</motion.h2>
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
          <h2>Let’s embark on a transformative journey together!</h2>
          <a href="#contact" className="cta-btn">Get a Free Consultation</a>
        </motion.div>
      </section>
      {/* Contact Section with Form */}
      <section id="contact" className="contact-section" style={{background: '#fff', color: '#222'}}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Let’s Connect</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          Need help with a project or have a question? We’re here. <br />
          <a href="mailto:hello@suprixsolution.in" className="contact-link">hello@suprixsolution.in</a>
        </motion.p>
        <motion.a href="tel:+919485563525" className="cta-btn" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
          Call Us: +91 94855-63525
        </motion.a>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit" className="cta-btn">Send Message</button>
        </form>
      </section>
    </main>
  );
} 