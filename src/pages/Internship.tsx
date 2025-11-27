import { motion } from 'framer-motion';
import { useState } from 'react';
import { courses, testimonials, type Course } from '../data/courses';
import EnrollmentModal from '../components/EnrollmentModal';

export default function Internship() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  
  // Default to AI/ML course for the internship page
  const aiMlCourse = courses.find(c => c.id === 'ai-ml-internship') || courses[0];

  const handleEnroll = (course: Course) => {
    setSelectedCourse(course);
    setIsEnrollmentModalOpen(true);
  };

  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: 'center',
          padding: '3rem 1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '24px',
          color: 'white',
          marginBottom: '3rem'
        }}
      >
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{aiMlCourse.icon}</div>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
          {aiMlCourse.title} ({aiMlCourse.duration})
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '800px', margin: '0 auto' }}>
          {aiMlCourse.description}
        </p>
      </motion.section>

      {/* Syllabus Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ marginBottom: '4rem' }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#1e293b'
        }}>
          Course Syllabus
        </h2>
        <div style={{
          display: 'grid',
          gap: '1.5rem'
        }}>
          {aiMlCourse.syllabus.map((week, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                border: '2px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem',
                gap: '1rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  {week.week}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  margin: 0
                }}>
                  Week {week.week}
                </h3>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '0.75rem'
              }}>
                {week.topics.map((topic, topicIdx) => (
                  <li key={topicIdx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#475569',
                    fontSize: '1rem',
                    padding: '0.75rem',
                    background: '#f8fafc',
                    borderRadius: '8px'
                  }}>
                    <span style={{
                      color: '#10b981',
                      marginRight: '0.75rem',
                      fontSize: '1.2rem',
                      fontWeight: 'bold'
                    }}>✓</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Program Features */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          background: '#f8fafc',
          padding: '3rem 2rem',
          borderRadius: '24px',
          marginBottom: '4rem'
        }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#1e293b'
        }}>
          Program Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {aiMlCourse.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>✔</div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#1e293b',
                margin: 0
              }}>
                {feature}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing Cards */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ marginBottom: '4rem' }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#1e293b'
        }}>
          Choose Your Plan
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            style={{
              background: 'white',
              border: '2px solid #e2e8f0',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => handleEnroll(aiMlCourse)}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>Basic</h3>
            <div style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#667eea',
              marginBottom: '1.5rem'
            }}>
              ₹{aiMlCourse.price.basic}
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 2rem 0',
              textAlign: 'left'
            }}>
              {aiMlCourse.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} style={{
                  marginBottom: '0.75rem',
                  color: '#475569',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button style={{
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              width: '100%',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#5568d3';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#667eea';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              Enroll Now
            </button>
          </motion.div>

          {/* Standard Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: '2px solid #667eea',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)',
              cursor: 'pointer',
              color: 'white',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}
            onClick={() => handleEnroll(aiMlCourse)}
          >
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#f58220',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: '700'
            }}>
              Popular
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              marginTop: '0.5rem'
            }}>Standard</h3>
            <div style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '1.5rem'
            }}>
              ₹{aiMlCourse.price.standard}
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 2rem 0',
              textAlign: 'left'
            }}>
              {aiMlCourse.features.map((feature, idx) => (
                <li key={idx} style={{
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  opacity: 0.95
                }}>
                  <span style={{ marginRight: '0.5rem' }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button style={{
              backgroundColor: '#f58220',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              width: '100%',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e6731a';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f58220';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              Enroll Now
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            style={{
              background: 'white',
              border: '2px solid #f58220',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => handleEnroll(aiMlCourse)}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>Premium</h3>
            <div style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#f58220',
              marginBottom: '1.5rem'
            }}>
              ₹{aiMlCourse.price.premium}
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 2rem 0',
              textAlign: 'left'
            }}>
              {aiMlCourse.features.map((feature, idx) => (
                <li key={idx} style={{
                  marginBottom: '0.75rem',
                  color: '#475569',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                  {feature}
                </li>
              ))}
              <li style={{
                marginTop: '0.5rem',
                color: '#f58220',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{ marginRight: '0.5rem' }}>⭐</span>
                Priority Support
              </li>
            </ul>
            <button style={{
              backgroundColor: '#f58220',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              width: '100%',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e6731a';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f58220';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              Enroll Now
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          background: '#f8fafc',
          padding: '3rem 2rem',
          borderRadius: '24px',
          marginBottom: '4rem'
        }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#1e293b'
        }}>
          What Our Students Say
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                display: 'flex',
                gap: '0.25rem',
                marginBottom: '1rem'
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#ffd700', fontSize: '1.2rem' }}>★</span>
                ))}
              </div>
              <p style={{
                color: '#475569',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '1rem',
                fontStyle: 'italic'
              }}>
                "{testimonial.text}"
              </p>
              <div>
                <div style={{
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '0.25rem'
                }}>
                  {testimonial.name}
                </div>
                <div style={{
                  color: '#64748b',
                  fontSize: '0.9rem'
                }}>
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, #f58220 0%, #e6731a 100%)',
          borderRadius: '24px',
          color: 'white'
        }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '1rem'
        }}>
          Ready to Start Your Journey?
        </h2>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          opacity: 0.95
        }}>
          Join hundreds of students who are already learning and growing with us
        </p>
        <button
          onClick={() => handleEnroll(aiMlCourse)}
          style={{
            backgroundColor: 'white',
            color: '#f58220',
            border: 'none',
            padding: '1.25rem 3rem',
            borderRadius: '12px',
            fontSize: '1.1rem',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
          }}
        >
          Enroll Now
        </button>
      </motion.section>

      {/* Enrollment Modal */}
      <EnrollmentModal
        course={selectedCourse}
        isOpen={isEnrollmentModalOpen}
        onClose={() => setIsEnrollmentModalOpen(false)}
      />
    </main>
  );
}

