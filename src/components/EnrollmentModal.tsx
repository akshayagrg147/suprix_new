import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Course } from '../data/courses';
import EnrollmentForm, { type EnrollmentData } from './EnrollmentForm';
import EnrollmentSuccess from './EnrollmentSuccess';

interface EnrollmentModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: 'basic' | 'standard' | 'premium';
}

export default function EnrollmentModal({ course, isOpen, onClose, selectedPlan: initialPlan }: EnrollmentModalProps) {
  const [showForm, setShowForm] = useState(false);
  const [enrollmentData, setEnrollmentData] = useState<EnrollmentData | null>(null);
  const [currentPlan, setCurrentPlan] = useState<'basic' | 'standard' | 'premium'>(initialPlan || 'standard');
  const prevIsOpenRef = useRef(false);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowForm(false);
      setEnrollmentData(null);
      setCurrentPlan('standard');
      prevIsOpenRef.current = false;
    } else {
      // If modal just opened and has a plan pre-selected, show form directly
      if (!prevIsOpenRef.current && initialPlan) {
        setCurrentPlan(initialPlan);
        setShowForm(true);
      } else if (!prevIsOpenRef.current) {
        // If no plan pre-selected, reset to standard
        setCurrentPlan('standard');
      }
      prevIsOpenRef.current = true;
    }
  }, [isOpen, initialPlan]);

  // Reset state when modal closes
  const handleClose = () => {
    setShowForm(false);
    setEnrollmentData(null);
    setCurrentPlan(initialPlan || 'standard');
    onClose();
  };

  if (!course) return null;

  const handlePlanSelect = (plan: 'basic' | 'standard' | 'premium') => {
    setCurrentPlan(plan);
    setShowForm(true);
  };

  const handlePaymentSuccess = (data: EnrollmentData) => {
    setEnrollmentData(data);
  };

  // Show success screen if enrollment is complete
  if (enrollmentData && isOpen) {
    return <EnrollmentSuccess enrollmentData={enrollmentData} onClose={handleClose} />;
  }

  // Show form if plan is selected
  if (showForm && isOpen) {
    return (
      <EnrollmentForm
        course={course}
        selectedPlan={currentPlan}
        onClose={handleClose}
        onPaymentSuccess={handlePaymentSuccess}
      />
    );
  }

  // Show plan selection (original modal)
  const handleEnroll = (plan: 'basic' | 'standard' | 'premium') => {
    handlePlanSelect(plan);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 9998,
              backdropFilter: 'blur(4px)'
            }}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '2.5rem',
              maxWidth: '600px',
              width: '90%',
              maxHeight: '90vh',
              overflowY: 'auto',
              zIndex: 9999,
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f0f0f0';
                e.currentTarget.style.color = '#222';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#666';
              }}
            >
              ×
            </button>

            {/* Course Header */}
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{course.icon}</div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '0.5rem'
              }}>
                {course.title}
              </h2>
              <p style={{
                color: '#64748b',
                fontSize: '1.1rem',
                marginBottom: '0.5rem'
              }}>
                Duration: {course.duration}
              </p>
              <p style={{
                color: '#475569',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                {course.description}
              </p>
            </div>

            {/* Features */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '1rem'
              }}>
                What's Included:
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {course.features.map((feature, idx) => (
                  <li key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.75rem',
                    color: '#475569',
                    fontSize: '1rem'
                  }}>
                    <span style={{
                      color: '#10b981',
                      marginRight: '0.75rem',
                      fontSize: '1.2rem',
                      fontWeight: 'bold'
                    }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {/* Basic Plan */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  border: '2px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  backgroundColor: '#f8fafc',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => handleEnroll('basic')}
              >
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#64748b',
                  marginBottom: '0.5rem'
                }}>Basic</h4>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '1rem'
                }}>
                  ₹{course.price.basic}
                </div>
                <button style={{
                  backgroundColor: '#f58220',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
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

              {/* Standard Plan */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  border: '2px solid #f58220',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  backgroundColor: '#fff7ed',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => handleEnroll('standard')}
              >
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#f58220',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}>
                  Popular
                </div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#64748b',
                  marginBottom: '0.5rem',
                  marginTop: '0.5rem'
                }}>Standard</h4>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '1rem'
                }}>
                  ₹{course.price.standard}
                </div>
                <button style={{
                  backgroundColor: '#f58220',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
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
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  border: '2px solid #667eea',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  backgroundColor: '#f0f4ff',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => handleEnroll('premium')}
              >
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#64748b',
                  marginBottom: '0.5rem'
                }}>Premium</h4>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '1rem'
                }}>
                  ₹{course.price.premium}
                </div>
                <button style={{
                  backgroundColor: '#667eea',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
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
            </div>

            {/* Note */}
            <p style={{
              fontSize: '0.875rem',
              color: '#64748b',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              Clicking "Enroll Now" will redirect you to the enrollment form
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

