import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses, type Course } from '../data/courses';
import EnrollmentModal from '../components/EnrollmentModal';

export default function Internship() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  // All courses closed by default
  const [openEnrollmentCourseIds, setOpenEnrollmentCourseIds] = useState<Set<string>>(
    new Set()
  );

  return (
    <main className="internship-page" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', width: '100%', paddingBottom: '2rem', marginBottom: '0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Course Enrollment Section */}
        <section style={{background: 'transparent', padding: '4rem 1rem 2rem 1rem', color: 'white', marginBottom: '0'}}>
          <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '1rem',
              color: 'white'
            }}
          >
            Enroll in Our Professional Courses
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              marginBottom: '3rem',
              opacity: 0.95
            }}
          >
            Choose from our comprehensive range of IT courses and kickstart your career
          </motion.p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {courses.map((course, idx) => {
              const isOpen = openEnrollmentCourseIds.has(course.id);
              return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  color: '#1e293b',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: isOpen ? '3px solid #f58220' : 'none',
                    cursor: course.id === 'web-development' ? 'pointer' : 'default',
                    position: 'relative',
                    overflow: 'visible'
                }}
                onClick={() => {
                  // Only navigate for Full Stack Web Development Internship
                  if (course.id === 'web-development') {
                  navigate(`/course/${course.id}`);
                  }
                }}
              >
                {course.id === 'web-development' && (
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    transform: 'rotate(15deg)',
                    background: 'linear-gradient(135deg, #f58220 0%, #e6731a 100%)',
                    color: 'white',
                    padding: '0.5rem 1.2rem',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(245, 130, 32, 0.5)',
                    zIndex: 10,
                    transformOrigin: 'center'
                  }}>
                    ACTIVE
                  </span>
                )}
                <div>
                  <div style={{
                    fontSize: '3.5rem',
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }}>
                    {course.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '0.75rem',
                    color: '#1e293b',
                    textAlign: 'center',
                    position: 'relative'
                  }}>
                    {course.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    lineHeight: '1.5'
                  }}>
                    {course.description}
                  </p>
                  {course.id === 'web-development' && (
                    <div style={{
                      background: 'linear-gradient(135deg, #f58220 0%, #e6731a 100%)',
                      color: 'white',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      marginBottom: '1rem',
                      textAlign: 'center',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      boxShadow: '0 4px 12px rgba(245, 130, 32, 0.3)'
                    }}>
                      ⏰ Enroll before 15 Feb
                    </div>
                  )}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                    fontSize: '0.9rem',
                    color: '#475569'
                  }}>
                    <span>⏱️</span>
                    <span>{course.duration}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                    justifyContent: 'center'
                  }}>
                    {course.features.slice(0, 3).map((feature, i) => (
                      <span key={i} style={{
                        background: '#f1f5f9',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        color: '#475569',
                        fontWeight: '500'
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden', marginBottom: '1rem' }}
                      >
                        <div style={{
                          background: '#f8fafc',
                          padding: '1.5rem',
                          borderRadius: '12px',
                          border: '2px solid #e2e8f0',
                          width: '100%',
                          boxSizing: 'border-box'
                        }}>
                          <h4 style={{
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            color: '#1e293b',
                            marginBottom: '1rem',
                            textAlign: 'center'
                          }}>
                            Choose Your Plan
                          </h4>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                            gap: '0.75rem',
                            marginBottom: '1rem',
                            width: '100%',
                            boxSizing: 'border-box'
                          }}>
                            <div
                              style={{
                                background: 'white',
                                border: '2px solid #e2e8f0',
                                borderRadius: '8px',
                                padding: '0.75rem 0.5rem',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                color: '#1e293b',
                                width: '100%',
                                minWidth: 0,
                                boxSizing: 'border-box',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                              }}
                            >
                              <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem', whiteSpace: 'nowrap' }}>Basic</div>
                              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#667eea', whiteSpace: 'nowrap' }}>₹{course.price.basic}</div>
                            </div>
                            <div
                              style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                border: '2px solid #667eea',
                                borderRadius: '8px',
                                padding: '0.75rem 0.5rem',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                color: 'white',
                                position: 'relative',
                                width: '100%',
                                minWidth: 0,
                                boxSizing: 'border-box',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                              }}
                            >
                              <div style={{ fontSize: '0.7rem', marginBottom: '0.25rem', opacity: 0.9, whiteSpace: 'nowrap' }}>Popular</div>
                              <div style={{ fontSize: '0.75rem', marginBottom: '0.25rem', opacity: 0.9, whiteSpace: 'nowrap' }}>Standard</div>
                              <div style={{ fontSize: '1.1rem', fontWeight: '700', whiteSpace: 'nowrap' }}>₹{course.price.standard}</div>
                            </div>
                            <div
                              style={{
                                background: 'white',
                                border: '2px solid #f58220',
                                borderRadius: '8px',
                                padding: '0.75rem 0.5rem',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                color: '#1e293b',
                                width: '100%',
                                minWidth: 0,
                                boxSizing: 'border-box',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                              }}
                            >
                              <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem', whiteSpace: 'nowrap' }}>Premium</div>
                              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#f58220', whiteSpace: 'nowrap' }}>₹{course.price.premium}</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {course.id !== 'web-development' && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // Toggle enrollment form for inactive courses
                        const newSet = new Set(openEnrollmentCourseIds);
                        if (isOpen) {
                          newSet.delete(course.id);
                        } else {
                          newSet.add(course.id);
                        }
                        setOpenEnrollmentCourseIds(newSet);
                      }}
                      style={{
                        backgroundColor: '#94a3b8',
                        color: 'white',
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        fontWeight: '700',
                        cursor: 'not-allowed',
                        width: '100%',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 4px 15px rgba(148, 163, 184, 0.3)',
                        opacity: 0.8
                      }}
                      disabled
                    >
                      Enrollment Closed
                    </button>
                  )}
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentModal
        course={selectedCourse}
        isOpen={isEnrollmentModalOpen}
        onClose={() => setIsEnrollmentModalOpen(false)}
      />
      </div>
    </main>
  );
}

