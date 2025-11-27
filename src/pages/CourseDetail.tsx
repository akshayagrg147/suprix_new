import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courses, type Course } from '../data/courses';
import EnrollmentModal from '../components/EnrollmentModal';

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'standard' | 'premium'>('standard');

  useEffect(() => {
    const course = courses.find(c => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
    } else {
      // Redirect to home if course not found
      navigate('/');
    }
  }, [courseId, navigate]);

  if (!selectedCourse) {
    return (
      <main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1>Course not found</h1>
        <Link to="/" className="cta-btn">Go Home</Link>
      </main>
    );
  }

  const handleEnroll = (plan: 'basic' | 'standard' | 'premium') => {
    setSelectedPlan(plan);
    setIsEnrollmentModalOpen(true);
  };

  return (
    <main style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ marginBottom: '2rem' }}
      >
        <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 0.5rem', color: '#64748b' }}>/</span>
        <span style={{ color: '#1e293b', fontWeight: '600' }}>{selectedCourse.title}</span>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '24px',
          color: 'white',
          marginBottom: '3rem'
        }}
      >
        <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>{selectedCourse.icon}</div>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
          {selectedCourse.title}
        </h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.5rem' }}>⏱️</span>
            <span style={{ fontSize: '1.2rem' }}>{selectedCourse.duration}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.5rem' }}>📚</span>
            <span style={{ fontSize: '1.2rem' }}>{selectedCourse.syllabus.length} Weeks</span>
          </div>
        </div>
        <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          {selectedCourse.description}
        </p>
      </motion.section>

      {/* Course Overview & Features */}
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
          What You'll Learn
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {selectedCourse.features.map((feature, idx) => (
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
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '2px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div style={{
                fontSize: '2rem',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                color: 'white'
              }}>
                ✓
              </div>
              <span style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#1e293b'
              }}>
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Detailed Syllabus */}
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
          {selectedCourse.syllabus.map((week, idx) => (
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
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                gap: '1rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }}>
                  {week.week}
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  margin: 0
                }}>
                  Week {week.week}
                </h3>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem'
              }}>
                {week.topics.map((topic, topicIdx) => (
                  <div
                    key={topicIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#475569',
                      fontSize: '1rem',
                      padding: '1rem',
                      background: '#f8fafc',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f1f5f9';
                      e.currentTarget.style.borderColor = '#667eea';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                  >
                    <span style={{
                      color: '#10b981',
                      marginRight: '0.75rem',
                      fontSize: '1.2rem',
                      fontWeight: 'bold'
                    }}>✓</span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing Section */}
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
          marginBottom: '1rem',
          color: '#1e293b'
        }}>
          Choose Your Plan
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#64748b',
          fontSize: '1.1rem',
          marginBottom: '3rem'
        }}>
          Select the plan that best fits your learning needs
        </p>
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
            onClick={() => handleEnroll('basic')}
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
              ₹{selectedCourse.price.basic}
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 2rem 0',
              textAlign: 'left'
            }}>
              {selectedCourse.features.slice(0, 3).map((feature, idx) => (
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
            onClick={() => handleEnroll('standard')}
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
              ₹{selectedCourse.price.standard}
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 2rem 0',
              textAlign: 'left'
            }}>
              {selectedCourse.features.map((feature, idx) => (
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
            onClick={() => handleEnroll('premium')}
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
              ₹{selectedCourse.price.premium}
            </div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 2rem 0',
              textAlign: 'left'
            }}>
              {selectedCourse.features.map((feature, idx) => (
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
          color: 'white',
          marginBottom: '2rem'
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
          onClick={() => handleEnroll('standard')}
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
        selectedPlan={selectedPlan}
      />
    </main>
  );
}

