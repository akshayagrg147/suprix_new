import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const blogs = [
  { title: 'Why Digital Transformation Matters', date: 'July 2024', summary: 'Explore the importance of digital transformation for modern businesses.', link: '#', details: 'Digital transformation is essential for businesses to stay competitive, improve efficiency, and deliver better customer experiences. Learn how to start your journey.' },
  { title: 'Top 5 Cloud Migration Tips', date: 'June 2024', summary: 'Best practices for a smooth and secure cloud migration.', link: '#', details: 'Migrating to the cloud can be complex. Discover the top tips for a successful, secure, and cost-effective migration.' },
  { title: 'AI in Everyday Business', date: 'May 2024', summary: 'How artificial intelligence is reshaping business operations.', link: '#', details: 'From chatbots to predictive analytics, AI is driving efficiency and innovation across industries.' },
  { title: 'Building Secure Web Applications', date: 'April 2024', summary: 'A guide to web app security best practices.', link: '#', details: 'Learn how to protect your web applications from common threats and vulnerabilities.' },
  { title: 'The Future of Remote Work', date: 'March 2024', summary: 'How technology is enabling the distributed workforce.', link: '#', details: 'Explore the tools and strategies that make remote work productive and secure.' },
  { title: 'UX Trends for 2024', date: 'February 2024', summary: 'What’s new in user experience design this year?', link: '#', details: 'Discover the latest trends in UX and how they can boost engagement and conversions.' },
  { title: 'DevOps: Accelerating Delivery', date: 'January 2024', summary: 'How DevOps practices speed up software releases.', link: '#', details: 'CI/CD, automation, and collaboration are key to faster, more reliable deployments.' },
  { title: 'Business Intelligence for SMBs', date: 'December 2023', summary: 'How small businesses can leverage BI tools.', link: '#', details: 'Unlock the power of your data with affordable, scalable BI solutions.' },
  { title: 'Cloud Cost Optimization', date: 'November 2023', summary: 'Save money on your cloud infrastructure.', link: '#', details: 'Tips and tools to monitor, manage, and reduce your cloud spend.' },
  { title: 'Choosing the Right Tech Stack', date: 'October 2023', summary: 'A decision guide for startups and enterprises.', link: '#', details: 'Factors to consider when selecting technologies for your next project.' },
];

export default function Blog() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main className="blog-main">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Blog & Insights
      </motion.h1>
      <div className="blog-list">
        {blogs.map((blog, idx) => (
          <motion.div
            className={`blog-detail-card${openIdx === idx ? ' open' : ''}`}
            key={blog.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            style={{cursor: 'pointer'}}
          >
            <h2>{blog.title}</h2>
            <span className="blog-date-lg">{blog.date}</span>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{overflow: 'hidden'}}
                >
                  <p style={{marginTop: 12, color: '#333'}}>{blog.summary}</p>
                  <div style={{marginTop: 8, color: '#666'}}>{blog.details}</div>
                  <a href={blog.link} className="learn-more" style={{marginTop: 8, display: 'inline-block'}}>Read More</a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </main>
  );
} 