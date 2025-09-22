import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const faqs = [
  { q: 'What services does your IT company provide?', a: 'We offer a range of IT services, including web development, mobile app development, UI/UX design, IT consulting, cloud solutions, cybersecurity, and video streaming integrations.' },
  { q: 'How can your IT solutions help my business grow?', a: 'Our IT solutions are designed to enhance operational efficiency, streamline workflows, and improve customer engagement. Whether it’s through a custom website, a user-friendly mobile app, or secure data management, our goal is to deliver solutions that drive business growth.' },
  { q: 'Do you offer customized IT solutions for specific industries?', a: 'Yes, we specialize in offering tailor-made IT solutions for industries like eCommerce, healthcare, pharmaceuticals, and more. Our team works closely with clients to understand their unique needs and deliver solutions that align with their business objectives.' },
  { q: 'What technologies and tools do you specialize in?', a: 'Our team is proficient in a wide array of technologies, including but not limited to Flutter, React, WordPress, cloud platforms (AWS, Google Cloud), and video streaming tools like HLS and WebRTC.' },
  { q: 'Can you assist with IT consulting for ongoing projects?', a: 'Absolutely! We offer IT consulting services for businesses looking to optimize their existing infrastructure or integrate new technologies. Our experts provide insights on improving efficiency, scaling systems, and addressing any IT challenges you may face.' },
];

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_61p4ysl';
const EMAILJS_TEMPLATE_ID = 'template_wyfl6gq';
const EMAILJS_PUBLIC_KEY = 'cEh-KwwYV9428kPa7'; // Your EmailJS public key

export default function Contact() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showEmailContent, setShowEmailContent] = useState(false);
  const [emailContent, setEmailContent] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Check if EmailJS is properly configured
      if (EMAILJS_PUBLIC_KEY === 'your_public_key_here') {
        // Fallback: Show email content and provide options
        const subject = `Contact Form Submission from ${formData.name}`;
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Service Interest: ${formData.service || 'Not specified'}

Message:
${formData.message}
        `;
        
        // Store email content for display
        setEmailContent(`To: hello@suprixsolution.in
Subject: ${subject}

${body}`);
        
        // Show email content
        setShowEmailContent(true);
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
        
        return;
      }

      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'hello@suprixsolution.in' // Your email address
      };

      // Send email
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-main" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: 'center',
          padding: '4rem 1rem 2rem 1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          marginBottom: '3rem'
        }}
      >
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: '800',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Get In Touch With Our IT Experts
        </h1>
        <p style={{
          fontSize: '1.2rem',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Ready to transform your business with cutting-edge technology? Let's discuss your project and create something amazing together.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginTop: '2rem'
        }}>
          <a href="mailto:hello@suprixsolution.in" style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}>
            📧 hello@suprixsolution.in
          </a>
          <a href="tel:+919485563525" style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}>
            📞 +91 94855-63525
          </a>
        </div>
      </motion.section>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(102, 126, 234, 0.1)'
            }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Start Your Project
              </h2>
              <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              {/* Hidden field for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    background: 'white',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile App Development</option>
                  <option value="cloud-solutions">Cloud Solutions</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="it-consulting">IT Consulting</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '1.2rem 2rem',
                  background: isSubmitting 
                    ? 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                  opacity: isSubmitting ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                  }
                }}
              >
                {isSubmitting ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <span style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid transparent',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></span>
                    Sending...
                  </span>
                ) : (
                  'Send Message →'
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && !showEmailContent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                    color: '#065f46',
                    borderRadius: '12px',
                    border: '1px solid #10b981',
                    textAlign: 'center',
                    fontWeight: '600'
                  }}
                >
                  ✅ Message sent successfully! We'll get back to you within 24 hours.
                </motion.div>
              )}

              {/* Email Content Display */}
              {showEmailContent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: '1rem',
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                    borderRadius: '12px',
                    border: '1px solid #0ea5e9'
                  }}
                >
                  <h4 style={{
                    color: '#0c4a6e',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }}>
                    📧 Email Ready to Send
                  </h4>
                  
                  <div style={{
                    background: 'white',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid #e0e7ff',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    color: '#374151',
                    whiteSpace: 'pre-wrap',
                    maxHeight: '200px',
                    overflowY: 'auto'
                  }}>
                    {emailContent}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}>
                    <button
                      onClick={() => {
                        const subject = `Contact Form Submission from ${formData.name || 'User'}`;
                        const body = emailContent.split('\n\n')[1];
                        const mailtoLink = `mailto:hello@suprixsolution.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        window.location.href = mailtoLink;
                      }}
                      style={{
                        padding: '0.75rem 1.5rem',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      📧 Open Email Client
                    </button>
                    
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(emailContent);
                          // Show a better notification
                          const notification = document.createElement('div');
                          notification.textContent = '✅ Email content copied to clipboard!';
                          notification.style.cssText = `
                            position: fixed;
                            top: 20px;
                            right: 20px;
                            background: #10b981;
                            color: white;
                            padding: 1rem 1.5rem;
                            border-radius: 8px;
                            font-weight: 600;
                            z-index: 1000;
                            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                          `;
                          document.body.appendChild(notification);
                          setTimeout(() => {
                            document.body.removeChild(notification);
                          }, 3000);
                        } catch (err) {
                          alert('Email content copied to clipboard!');
                        }
                      }}
                      style={{
                        padding: '0.75rem 1.5rem',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      📋 Copy to Clipboard
                    </button>
                    
                    <button
                      onClick={() => {
                        setShowEmailContent(false);
                        setSubmitStatus('idle');
                      }}
                      style={{
                        padding: '0.75rem 1.5rem',
                        background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      ✕ Close
                    </button>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                    color: '#991b1b',
                    borderRadius: '12px',
                    border: '1px solid #ef4444',
                    textAlign: 'center',
                    fontWeight: '600'
                  }}
                >
                  ❌ Failed to send message. Please try again or contact us directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(102, 126, 234, 0.1)'
            }}
          >
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Contact Information
            </h2>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                borderRadius: '16px',
                marginBottom: '1rem',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                  fontSize: '1.5rem'
                }}>
                  📧
                </div>
                <div>
                  <h3 style={{ fontWeight: '600', color: '#1e293b', marginBottom: '0.25rem' }}>Email</h3>
                  <a href="mailto:hello@suprixsolution.in" style={{
                    color: '#667eea',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '1.1rem'
                  }}>
                    hello@suprixsolution.in
                  </a>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                borderRadius: '16px',
                marginBottom: '1rem',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                  fontSize: '1.5rem'
                }}>
                  📞
                </div>
                <div>
                  <h3 style={{ fontWeight: '600', color: '#1e293b', marginBottom: '0.25rem' }}>Phone</h3>
                  <a href="tel:+919485563525" style={{
                    color: '#667eea',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '1.1rem'
                  }}>
                    +91 94855-63525
                  </a>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                borderRadius: '16px',
                marginBottom: '1rem',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                  fontSize: '1.5rem'
                }}>
                  📍
                </div>
                <div>
                  <h3 style={{ fontWeight: '600', color: '#1e293b', marginBottom: '0.25rem' }}>Location</h3>
                  <div style={{ color: '#64748b', fontWeight: '500', fontSize: '1.1rem' }}>
                    Gurugram, Haryana, India
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid #93c5fd',
              marginBottom: '2rem'
            }}>
              <h3 style={{
                color: '#1e40af',
                fontSize: '1.2rem',
                fontWeight: '700',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                🚀 Our Services
              </h3>
              <div style={{ color: '#1e40af', fontSize: '1rem', lineHeight: '1.6' }}>
                • Custom Software Development<br/>
                • Web & Mobile App Development<br/>
                • Cloud Solutions & Migration<br/>
                • AI & Machine Learning<br/>
                • IT Consulting & Strategy<br/>
                • Digital Transformation
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid #7dd3fc',
              textAlign: 'center'
            }}>
              <h3 style={{
                color: '#0c4a6e',
                fontSize: '1.1rem',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                ⚡ Quick Response
              </h3>
              <p style={{ color: '#0c4a6e', fontSize: '0.95rem', margin: 0 }}>
                We typically respond to all inquiries within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* FAQ Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem 4rem 1rem'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Get answers to common questions about our IT services and solutions
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gap: '1rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '1.5rem',
                cursor: 'pointer',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                transform: openIdx === idx ? 'scale(1.02)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                if (openIdx !== idx) {
                  e.currentTarget.style.transform = 'scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (openIdx !== idx) {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
                }
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: '600',
                color: '#1e293b',
                fontSize: '1.1rem'
              }}>
                <span>{faq.q}</span>
                <span style={{
                  fontSize: '1.5rem',
                  color: '#667eea',
                  transform: openIdx === idx ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}>
                  +
                </span>
              </div>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      overflow: 'hidden',
                      marginTop: '1rem',
                      color: '#64748b',
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CSS for loading spinner animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
} 