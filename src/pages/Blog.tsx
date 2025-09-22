import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';

const ITEMS_PER_PAGE = 6;

const blogs = [
  { 
    id: 1,
    title: 'Digital Transformation Strategy: A Complete Guide for Modern Businesses', 
    date: 'July 2025', 
    category: 'Digital Transformation',
    readTime: '8 min read',
    summary: 'Comprehensive guide to digital transformation for businesses looking to modernize operations and drive growth.', 
    link: '#', 
    details: 'Digital transformation is essential for businesses to stay competitive, improve operational efficiency, and deliver superior customer experiences. Learn how to develop and implement a successful digital transformation strategy that aligns with your business objectives and drives measurable results.',
    content: 'In today\'s rapidly evolving digital landscape, businesses must embrace digital transformation to remain competitive and relevant. This comprehensive guide explores the key components of a successful digital transformation strategy, including technology adoption, process optimization, cultural change, and customer experience enhancement. We\'ll cover the essential steps, common challenges, and best practices that leading organizations use to drive successful digital initiatives.',
    tags: ['Digital Transformation', 'Business Strategy', 'Technology Innovation', 'Process Optimization']
  },
  { 
    id: 2,
    title: 'Cloud Migration Best Practices: 10 Essential Tips for Success', 
    date: 'June 2025', 
    category: 'Cloud Computing',
    readTime: '6 min read',
    summary: 'Expert tips and best practices for successful, secure, and cost-effective cloud migration projects.', 
    link: '#', 
    details: 'Cloud migration can be complex and challenging. Discover proven strategies, security considerations, and cost optimization techniques for a successful cloud migration journey that minimizes risks and maximizes benefits.',
    content: 'Cloud migration is a critical step in modernizing IT infrastructure and enabling business agility. This detailed guide provides 10 essential best practices for successful cloud migration, covering everything from initial assessment and planning to execution and optimization. Learn about security considerations, cost management strategies, and common pitfalls to avoid during your cloud transformation journey.',
    tags: ['Cloud Migration', 'AWS', 'Azure', 'Cost Optimization', 'Security']
  },
  { 
    id: 3,
    title: 'AI & Machine Learning in Business: Transforming Operations and Decision Making', 
    date: 'May 2025', 
    category: 'Artificial Intelligence',
    readTime: '10 min read',
    summary: 'How artificial intelligence and machine learning are revolutionizing business operations across industries.', 
    link: '#', 
    details: 'From intelligent chatbots to predictive analytics, AI and machine learning are driving efficiency, innovation, and competitive advantage across various business sectors. Explore real-world applications and implementation strategies.',
    content: 'Artificial Intelligence and Machine Learning are transforming how businesses operate, make decisions, and serve customers. This comprehensive article explores the practical applications of AI/ML in various industries, including healthcare, finance, retail, and manufacturing. Learn about implementation strategies, ROI considerations, and how to build a successful AI initiative within your organization.',
    tags: ['AI', 'Machine Learning', 'Business Intelligence', 'Automation', 'Predictive Analytics']
  },
  { 
    id: 4,
    title: 'Web Application Security: Essential Best Practices for Developers', 
    date: 'April 2025', 
    category: 'Cybersecurity',
    readTime: '7 min read',
    summary: 'Comprehensive guide to web application security best practices and threat protection strategies.', 
    link: '#', 
    details: 'Learn how to protect your web applications from common security threats, implement proper authentication, and ensure data protection compliance with industry-standard security practices.',
    content: 'Web application security is crucial in today\'s threat landscape. This detailed guide covers essential security best practices for developers, including OWASP Top 10 vulnerabilities, secure coding practices, authentication mechanisms, and data protection strategies. Learn how to build security into your development process from the ground up.',
    tags: ['Web Security', 'OWASP', 'Authentication', 'Data Protection', 'Secure Coding']
  },
  { 
    id: 5,
    title: 'Remote Work Technology: Tools and Strategies for Distributed Teams', 
    date: 'March 2025', 
    category: 'Remote Work',
    readTime: '5 min read',
    summary: 'Essential technology solutions and strategies for enabling productive and secure remote work environments.', 
    link: '#', 
    details: 'Explore the latest tools, security measures, and collaboration platforms that make remote work efficient, secure, and productive for modern distributed teams.',
    content: 'The shift to remote work has accelerated the need for robust technology solutions that support distributed teams. This article explores the essential tools, security considerations, and best practices for managing remote teams effectively. Learn about collaboration platforms, security measures, and productivity tools that enable seamless remote work experiences.',
    tags: ['Remote Work', 'Collaboration Tools', 'Team Management', 'Productivity', 'Security']
  },
  { 
    id: 6,
    title: 'UX Design Trends 2025: Creating Exceptional User Experiences', 
    date: 'February 2025', 
    category: 'UI/UX Design',
    readTime: '6 min read',
    summary: 'Latest user experience design trends and how they can boost user engagement and business conversions.', 
    link: '#', 
    details: 'Discover cutting-edge UX design trends, accessibility improvements, and user-centered design principles that drive better user engagement and business results.',
    content: 'User experience design continues to evolve rapidly, with new trends emerging that focus on accessibility, personalization, and seamless interactions. This comprehensive guide explores the latest UX trends for 2024, including micro-interactions, voice interfaces, and inclusive design principles that create exceptional user experiences.',
    tags: ['UX Design', 'User Experience', 'Accessibility', 'Design Trends', 'User Interface']
  },
  { 
    id: 7,
    title: 'DevOps Best Practices: Accelerating Software Delivery and Quality', 
    date: 'January 2025', 
    category: 'DevOps',
    readTime: '8 min read',
    summary: 'How DevOps practices and automation tools can accelerate software releases and improve system reliability.', 
    link: '#', 
    details: 'CI/CD pipelines, infrastructure automation, and collaborative practices are key to faster, more reliable software deployments and improved development efficiency.',
    content: 'DevOps has revolutionized software development by bridging the gap between development and operations teams. This detailed guide covers essential DevOps practices, including continuous integration/continuous deployment (CI/CD), infrastructure as code, monitoring, and collaboration strategies that accelerate delivery while maintaining quality.',
    tags: ['DevOps', 'CI/CD', 'Automation', 'Infrastructure', 'Software Delivery']
  },
  { 
    id: 8,
    title: 'Business Intelligence for Small Businesses: Affordable Data Analytics Solutions', 
    date: 'December 2024', 
    category: 'Business Intelligence',
    readTime: '7 min read',
    summary: 'How small and medium businesses can leverage business intelligence tools for data-driven decision making.', 
    link: '#', 
    details: 'Unlock the power of your business data with affordable, scalable business intelligence solutions designed for SMBs to improve decision-making and operational efficiency.',
    content: 'Business Intelligence is no longer exclusive to large enterprises. This comprehensive guide shows small and medium businesses how to implement affordable BI solutions that provide valuable insights from their data. Learn about cost-effective tools, implementation strategies, and how to build a data-driven culture in your organization.',
    tags: ['Business Intelligence', 'Data Analytics', 'SMB', 'Data Visualization', 'Decision Making']
  },
  { 
    id: 9,
    title: 'Cloud Cost Optimization: Strategies to Reduce Your Cloud Infrastructure Spending', 
    date: 'November 2024', 
    category: 'Cloud Computing',
    readTime: '6 min read',
    summary: 'Proven strategies and tools to monitor, manage, and significantly reduce cloud infrastructure costs.', 
    link: '#', 
    details: 'Learn effective cloud cost optimization techniques, resource management strategies, and monitoring tools to maximize your cloud investment while minimizing expenses.',
    content: 'Cloud costs can quickly spiral out of control without proper management. This practical guide provides proven strategies for optimizing cloud spending, including right-sizing resources, implementing auto-scaling, and using cost monitoring tools. Learn how to achieve significant cost savings while maintaining performance and reliability.',
    tags: ['Cloud Cost Optimization', 'AWS Cost Management', 'Resource Optimization', 'Monitoring', 'Cost Control']
  },
  { 
    id: 10,
    title: 'Technology Stack Selection: A Comprehensive Guide for Startups and Enterprises', 
    date: 'October 2024', 
    category: 'Technology Strategy',
    readTime: '9 min read',
    summary: 'Complete decision-making framework for selecting the right technology stack for your software projects.', 
    link: '#', 
    details: 'Critical factors to consider when choosing technologies, frameworks, and platforms for your next software development project, including scalability, performance, and maintenance considerations.',
    content: 'Choosing the right technology stack is crucial for the success of any software project. This comprehensive guide provides a systematic approach to technology selection, covering factors like scalability, performance, team expertise, community support, and long-term maintenance. Learn how to make informed decisions that align with your business goals.',
    tags: ['Technology Stack', 'Software Development', 'Technology Selection', 'Scalability', 'Performance']
  },
  { 
    id: 11,
    title: 'Microservices Architecture: Building Scalable and Maintainable Applications', 
    date: 'September 2024', 
    category: 'Software Architecture',
    readTime: '10 min read',
    summary: 'Complete guide to microservices architecture, including benefits, challenges, and implementation best practices.', 
    link: '#', 
    details: 'Learn how microservices architecture can help you build scalable, maintainable applications. Explore the benefits, challenges, and best practices for successful microservices implementation.',
    content: 'Microservices architecture has become the preferred approach for building large-scale, distributed applications. This comprehensive guide covers the fundamentals of microservices, including design principles, communication patterns, data management strategies, and deployment considerations. Learn how to architect and implement microservices that scale with your business.',
    tags: ['Microservices', 'Software Architecture', 'Scalability', 'Distributed Systems', 'API Design']
  },
  { 
    id: 12,
    title: 'API Security Best Practices: Protecting Your Digital Assets', 
    date: 'August 2024', 
    category: 'API Development',
    readTime: '8 min read',
    summary: 'Essential security practices for API development and management to protect your digital assets and user data.', 
    link: '#', 
    details: 'APIs are the backbone of modern applications, making API security crucial. Learn about authentication, authorization, rate limiting, and other security measures to protect your APIs.',
    content: 'API security is critical in today\'s interconnected digital ecosystem. This detailed guide covers essential API security practices, including authentication mechanisms, authorization strategies, rate limiting, input validation, and monitoring. Learn how to build secure APIs that protect your data and users while maintaining performance and usability.',
    tags: ['API Security', 'Authentication', 'Authorization', 'Rate Limiting', 'Data Protection']
  },
  { 
    id: 13,
    title: 'Mobile App Performance Optimization: Techniques for Better User Experience', 
    date: 'July 2024', 
    category: 'Mobile Development',
    readTime: '7 min read',
    summary: 'Proven techniques for optimizing mobile app performance to deliver better user experiences and higher engagement.', 
    link: '#', 
    details: 'Mobile app performance directly impacts user experience and retention. Learn about optimization techniques, monitoring tools, and best practices for building high-performance mobile applications.',
    content: 'Mobile app performance is crucial for user retention and engagement. This comprehensive guide covers optimization techniques for both iOS and Android apps, including memory management, network optimization, UI performance, and battery efficiency. Learn how to build fast, responsive mobile applications that users love.',
    tags: ['Mobile Performance', 'iOS Development', 'Android Development', 'User Experience', 'Optimization']
  },
  { 
    id: 14,
    title: 'Database Design Best Practices: Building Efficient and Scalable Data Models', 
    date: 'June 2024', 
    category: 'Database Design',
    readTime: '9 min read',
    summary: 'Essential database design principles and best practices for building efficient, scalable, and maintainable data models.', 
    link: '#', 
    details: 'Good database design is the foundation of any successful application. Learn about normalization, indexing, query optimization, and other essential database design principles.',
    content: 'Database design is a critical aspect of application development that directly impacts performance, scalability, and maintainability. This detailed guide covers essential database design principles, including normalization, indexing strategies, query optimization, and data modeling techniques. Learn how to design databases that scale with your application and business needs.',
    tags: ['Database Design', 'SQL', 'Data Modeling', 'Performance', 'Scalability']
  },
  { 
    id: 15,
    title: 'Cybersecurity Trends 2024: Emerging Threats and Protection Strategies', 
    date: 'May 2024', 
    category: 'Cybersecurity',
    readTime: '8 min read',
    summary: 'Latest cybersecurity trends, emerging threats, and protection strategies to keep your organization secure.', 
    link: '#', 
    details: 'Cybersecurity landscape is constantly evolving. Stay informed about the latest threats, trends, and protection strategies to safeguard your digital assets.',
    content: 'The cybersecurity landscape continues to evolve rapidly, with new threats and attack vectors emerging regularly. This comprehensive guide explores the latest cybersecurity trends for 2024, including AI-powered attacks, zero-trust architecture, and advanced threat protection strategies. Learn how to stay ahead of cybercriminals and protect your organization.',
    tags: ['Cybersecurity', 'Threat Protection', 'Zero Trust', 'AI Security', 'Risk Management']
  },
  { 
    id: 16,
    title: 'E-commerce Platform Development: Key Features and Implementation Strategies', 
    date: 'April 2024', 
    category: 'E-commerce',
    readTime: '10 min read',
    summary: 'Comprehensive guide to e-commerce platform development, covering essential features and implementation strategies.', 
    link: '#', 
    details: 'Building a successful e-commerce platform requires careful planning and implementation. Learn about essential features, technology choices, and best practices for e-commerce development.',
    content: 'E-commerce platforms are complex systems that require careful planning and implementation. This detailed guide covers essential e-commerce features, technology stack selection, payment integration, security considerations, and scalability strategies. Learn how to build e-commerce platforms that drive sales and provide excellent user experiences.',
    tags: ['E-commerce', 'Online Shopping', 'Payment Integration', 'User Experience', 'Scalability']
  },
  { 
    id: 17,
    title: 'Internet of Things (IoT) Security: Protecting Connected Devices', 
    date: 'March 2024', 
    category: 'IoT Security',
    readTime: '7 min read',
    summary: 'Essential security practices for IoT devices and networks to protect against cyber threats and data breaches.', 
    link: '#', 
    details: 'IoT devices present unique security challenges. Learn about IoT security best practices, threat mitigation strategies, and how to secure your connected devices.',
    content: 'The Internet of Things (IoT) brings new security challenges as billions of connected devices create potential attack vectors. This comprehensive guide covers IoT security best practices, including device authentication, network security, data encryption, and threat monitoring. Learn how to secure your IoT ecosystem and protect against emerging threats.',
    tags: ['IoT Security', 'Connected Devices', 'Network Security', 'Device Authentication', 'Threat Protection']
  },
  { 
    id: 18,
    title: 'Blockchain Technology in Business: Applications and Implementation Guide', 
    date: 'February 2024', 
    category: 'Blockchain',
    readTime: '9 min read',
    summary: 'Exploring blockchain technology applications in business and practical implementation strategies for various industries.', 
    link: '#', 
    details: 'Blockchain technology offers unique opportunities for businesses. Learn about practical applications, implementation strategies, and how to leverage blockchain for competitive advantage.',
    content: 'Blockchain technology is transforming various industries beyond cryptocurrency. This comprehensive guide explores practical blockchain applications in business, including supply chain management, smart contracts, digital identity, and data integrity. Learn how to identify opportunities and implement blockchain solutions that drive business value.',
    tags: ['Blockchain', 'Smart Contracts', 'Supply Chain', 'Digital Identity', 'Business Innovation']
  },
  { 
    id: 19,
    title: 'Data Privacy and GDPR Compliance: A Complete Implementation Guide', 
    date: 'January 2024', 
    category: 'Data Privacy',
    readTime: '8 min read',
    summary: 'Comprehensive guide to data privacy regulations and GDPR compliance for businesses handling personal data.', 
    link: '#', 
    details: 'Data privacy regulations are becoming increasingly strict. Learn about GDPR compliance, data protection strategies, and how to build privacy into your applications.',
    content: 'Data privacy regulations like GDPR are reshaping how businesses handle personal data. This detailed guide covers compliance requirements, implementation strategies, data protection techniques, and privacy by design principles. Learn how to build compliant systems that protect user privacy while enabling business innovation.',
    tags: ['Data Privacy', 'GDPR', 'Compliance', 'Data Protection', 'Privacy by Design']
  },
  { 
    id: 20,
    title: 'Serverless Computing: Benefits, Challenges, and Best Practices', 
    date: 'December 2023', 
    category: 'Serverless',
    readTime: '6 min read',
    summary: 'Complete guide to serverless computing, including benefits, challenges, and best practices for implementation.', 
    link: '#', 
    details: 'Serverless computing is revolutionizing application development. Learn about the benefits, challenges, and best practices for building serverless applications.',
    content: 'Serverless computing offers a new paradigm for application development, eliminating server management overhead and enabling automatic scaling. This comprehensive guide covers serverless benefits, common challenges, implementation strategies, and best practices for building efficient serverless applications that scale with demand.',
    tags: ['Serverless', 'Cloud Computing', 'Auto Scaling', 'Function as a Service', 'Cost Optimization']
  }
];

export default function Blog() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogs.map(blog => blog.category)))];

  // Filter blogs by category
  const filteredBlogs = useMemo(() => {
    if (selectedCategory === 'All') return blogs;
    return blogs.filter(blog => blog.category === selectedCategory);
  }, [selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Reset to first page when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setOpenIdx(null); // Close any open blog details
  };

  return (
    <main className="blog-main">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        IT Industry Blog & Technology Insights
      </motion.h1>
      
      {/* Category Filter */}
      <motion.div 
        className="blog-categories"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            style={{
              padding: '0.75rem 1.5rem',
              margin: '0.25rem',
              borderRadius: '25px',
              background: selectedCategory === category 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              color: selectedCategory === category ? 'white' : '#475569',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              fontSize: '0.9rem',
              fontWeight: '600',
              boxShadow: selectedCategory === category 
                ? '0 4px 15px rgba(102, 126, 234, 0.3)' 
                : '0 2px 8px rgba(0,0,0,0.1)',
              border: selectedCategory === category 
                ? '2px solid transparent' 
                : '2px solid #e2e8f0'
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== category) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== category) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)';
              }
            }}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Blog Stats */}
      <motion.div 
        className="blog-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ 
          textAlign: 'center', 
          marginBottom: '2rem', 
          color: '#666',
          fontSize: '0.9rem'
        }}
      >
        Showing {startIndex + 1}-{Math.min(endIndex, filteredBlogs.length)} of {filteredBlogs.length} articles
        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
      </motion.div>

      {/* Blog List */}
      <div className="blog-list">
        {currentBlogs.map((blog, idx) => (
          <motion.div
            className={`blog-detail-card${openIdx === idx ? ' open' : ''}`}
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            style={{
              cursor: 'pointer',
              marginBottom: '1.5rem',
              padding: '2rem',
              border: '1px solid #e8ecf0',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <span 
                className="blog-category"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '0.4rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
                }}
              >
                {blog.category}
              </span>
              <span 
                className="blog-read-time"
                style={{
                  color: '#64748b',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  background: '#f1f5f9',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0'
                }}
              >
                ⏱️ {blog.readTime}
              </span>
            </div>
            
            <h2 style={{ 
              margin: '1rem 0 0.5rem 0', 
              fontSize: '1.4rem', 
              lineHeight: '1.3',
              color: '#1e293b',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {blog.title}
            </h2>
            <span 
              className="blog-date-lg"
              style={{
                color: '#64748b',
                fontSize: '0.9rem',
                marginBottom: '1rem',
                fontWeight: '500',
                background: '#f8fafc',
                padding: '0.3rem 0.8rem',
                borderRadius: '8px',
                display: 'inline-block',
                border: '1px solid #e2e8f0'
              }}
            >
              📅 {blog.date}
            </span>
            
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
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    marginTop: '1rem'
                  }}>
                    <p style={{
                      marginTop: 0, 
                      color: '#475569', 
                      lineHeight: '1.7',
                      fontSize: '1rem',
                      fontWeight: '500',
                      marginBottom: '1rem'
                    }}>
                      {blog.summary}
                    </p>
                    <div style={{
                      color: '#64748b', 
                      lineHeight: '1.7',
                      fontSize: '0.95rem',
                      marginBottom: '1.5rem'
                    }}>
                      {blog.details}
                    </div>
                    
                    {/* Tags */}
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {blog.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          style={{
                            background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                            color: '#3730a3',
                            padding: '0.4rem 0.8rem',
                            borderRadius: '16px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            border: '1px solid #a5b4fc',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={blog.link} 
                      className="learn-more" 
                      style={{
                        marginTop: '1.5rem', 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#3b82f6',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '12px',
                        border: '1px solid #93c5fd',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 4px rgba(59, 130, 246, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(59, 130, 246, 0.1)';
                      }}
                    >
                      Read Full Article 
                      <span style={{ fontSize: '1.1rem' }}>→</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div 
          className="pagination"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '2rem',
            padding: '1rem'
          }}
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              padding: '0.75rem 1.5rem',
              border: '2px solid #e2e8f0',
              background: currentPage === 1 
                ? 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)' 
                : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              color: currentPage === 1 ? '#94a3b8' : '#475569',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              borderRadius: '12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              fontWeight: '600',
              fontSize: '0.9rem',
              boxShadow: currentPage === 1 
                ? '0 2px 4px rgba(0,0,0,0.05)' 
                : '0 4px 12px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 1) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 1) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }
            }}
          >
            ← Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              style={{
                padding: '0.75rem 1rem',
                border: '2px solid transparent',
                background: currentPage === page 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                  : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                color: currentPage === page ? 'white' : '#475569',
                cursor: 'pointer',
                borderRadius: '12px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                minWidth: '48px',
                fontWeight: '600',
                fontSize: '0.9rem',
                boxShadow: currentPage === page 
                  ? '0 4px 15px rgba(102, 126, 234, 0.3)' 
                  : '0 2px 8px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== page) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== page) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)';
                }
              }}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              padding: '0.75rem 1.5rem',
              border: '2px solid #e2e8f0',
              background: currentPage === totalPages 
                ? 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)' 
                : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              color: currentPage === totalPages ? '#94a3b8' : '#475569',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              borderRadius: '12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              fontWeight: '600',
              fontSize: '0.9rem',
              boxShadow: currentPage === totalPages 
                ? '0 2px 4px rgba(0,0,0,0.05)' 
                : '0 4px 12px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== totalPages) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== totalPages) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }
            }}
          >
            Next →
          </button>
        </motion.div>
      )}

      {/* SEO Content Section */}
      <motion.section 
        className="blog-seo-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          marginTop: '3rem',
          padding: '2rem',
          background: '#f8f9fa',
          borderRadius: '12px',
          border: '1px solid #e9ecef'
        }}
      >
        <h2 style={{ color: '#333', marginBottom: '1rem', fontSize: '1.5rem' }}>
          IT Industry Insights & Technology Trends
        </h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
          Stay ahead of the curve with our comprehensive IT industry blog covering the latest trends, 
          best practices, and insights in software development, cloud computing, artificial intelligence, 
          cybersecurity, and digital transformation. Our expert team shares practical knowledge and 
          real-world experiences to help businesses navigate the rapidly evolving technology landscape.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
          <div>
            <h3 style={{ color: '#007bff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Software Development</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Expert insights on modern software development practices, programming languages, 
              frameworks, and development methodologies.
            </p>
          </div>
          <div>
            <h3 style={{ color: '#007bff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Cloud Computing</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Comprehensive guides on cloud migration, cost optimization, and leveraging 
              cloud platforms for business growth.
            </p>
          </div>
          <div>
            <h3 style={{ color: '#007bff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>AI & Machine Learning</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Practical applications of artificial intelligence and machine learning 
              in business operations and decision making.
            </p>
          </div>
          <div>
            <h3 style={{ color: '#007bff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Cybersecurity</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Essential security practices and threat protection strategies to 
              safeguard your digital assets and data.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
} 
