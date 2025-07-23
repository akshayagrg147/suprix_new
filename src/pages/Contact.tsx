import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  { q: 'What services does your IT company provide?', a: 'We offer a range of IT services, including web development, mobile app development, UI/UX design, IT consulting, cloud solutions, cybersecurity, and video streaming integrations.' },
  { q: 'How can your IT solutions help my business grow?', a: 'Our IT solutions are designed to enhance operational efficiency, streamline workflows, and improve customer engagement. Whether it’s through a custom website, a user-friendly mobile app, or secure data management, our goal is to deliver solutions that drive business growth.' },
  { q: 'Do you offer customized IT solutions for specific industries?', a: 'Yes, we specialize in offering tailor-made IT solutions for industries like eCommerce, healthcare, pharmaceuticals, and more. Our team works closely with clients to understand their unique needs and deliver solutions that align with their business objectives.' },
  { q: 'What technologies and tools do you specialize in?', a: 'Our team is proficient in a wide array of technologies, including but not limited to Flutter, React, WordPress, cloud platforms (AWS, Google Cloud), and video streaming tools like HLS and WebRTC.' },
  { q: 'Can you assist with IT consulting for ongoing projects?', a: 'Absolutely! We offer IT consulting services for businesses looking to optimize their existing infrastructure or integrate new technologies. Our experts provide insights on improving efficiency, scaling systems, and addressing any IT challenges you may face.' },
];

export default function Contact() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main className="contact-main">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Contact Us
      </motion.h1>
      <div className="contact-content">
        <form className="contact-form-lg">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit" className="cta-btn">Send Message</button>
        </form>
        <div className="contact-info-lg">
          <h2>Company Info</h2>
          <p>Email: <a href="mailto:hello@suprixsolution.in">hello@suprixsolution.in</a></p>
          <p>Phone: <a href="tel:+919485563525">+91 94855-63525</a></p>
          <p>Location: Gurugram, Haryana</p>
          <div className="contact-map-placeholder">[Map Placeholder]</div>
        </div>
      </div>
      <section className="faq-section" style={{marginTop: '3rem'}}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }}>Frequently Asked Questions</motion.h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <motion.div
              className={`faq-item${openIdx === idx ? ' open' : ''}`}
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              style={{cursor: 'pointer'}}
            >
              <div className="faq-question">{faq.q}</div>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{overflow: 'hidden', marginTop: 8, color: '#333'}}
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
} 