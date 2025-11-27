import { motion } from 'framer-motion';
import { type EnrollmentData } from './EnrollmentForm';

interface EnrollmentSuccessProps {
  enrollmentData: EnrollmentData;
  onClose: () => void;
}

export default function EnrollmentSuccess({ enrollmentData, onClose }: EnrollmentSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '3rem',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          fontSize: '3rem'
        }}>
          ✓
        </div>

        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#1e293b',
          marginBottom: '1rem'
        }}>
          Enrollment Successful!
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: '#64748b',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          You have been successfully added to the waiting list for
        </p>

        <div style={{
          background: '#f8fafc',
          padding: '1.5rem',
          borderRadius: '12px',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <div style={{ marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>Course</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e293b' }}>{enrollmentData.courseName}</div>
          </div>
          <div style={{ marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>Plan</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e293b' }}>
              {enrollmentData.plan.charAt(0).toUpperCase() + enrollmentData.plan.slice(1)}
            </div>
          </div>
          <div style={{ marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>Amount Paid</div>
            <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#10b981' }}>₹{enrollmentData.amount}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>Payment ID</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '500', color: '#475569', fontFamily: 'monospace' }}>
              {enrollmentData.paymentId}
            </div>
          </div>
        </div>

        <div style={{
          background: '#fef3c7',
          border: '1px solid #fbbf24',
          borderRadius: '12px',
          padding: '1rem',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>📋</span>
            <div>
              <div style={{ fontWeight: '600', color: '#92400e', marginBottom: '0.25rem' }}>Waiting List</div>
              <div style={{ fontSize: '0.875rem', color: '#78350f' }}>
                You're on the waiting list! We'll notify you via email ({enrollmentData.email}) when the course starts.
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
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
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#667eea';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}


