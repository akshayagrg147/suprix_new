import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Course } from '../data/courses';
import emailjs from '@emailjs/browser';

interface EnrollmentFormProps {
  course: Course;
  selectedPlan: 'basic' | 'standard' | 'premium';
  onClose: () => void;
  onPaymentSuccess: (enrollmentData: EnrollmentData) => void;
}

export interface EnrollmentData {
  courseId: string;
  courseName: string;
  plan: 'basic' | 'standard' | 'premium';
  amount: number;
  studentName: string;
  email: string;
  phone: string;
  paymentId: string;
  paymentStatus: 'success' | 'pending' | 'failed';
  enrollmentDate: string;
}

// EmailJS configuration for enrollment emails
const EMAILJS_SERVICE_ID = 'service_61p4ysl';
const EMAILJS_ENROLLMENT_TEMPLATE_ID = 'template_wyfl6gq'; // You may want to create a separate template
const EMAILJS_PUBLIC_KEY = 'cEh-KwwYV9428kPa7';
const ADMIN_EMAIL = 'akshaygarg147@gmail.com';

export default function EnrollmentForm({ course, selectedPlan, onClose, onPaymentSuccess }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    qualification: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emailSent, setEmailSent] = useState(false);

  const planPrice = course.price[selectedPlan];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number (10 digits required)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const sendEnrollmentEmail = async () => {
    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Prepare email template parameters
      const templateParams = {
        to_email: ADMIN_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        student_name: formData.name,
        student_email: formData.email,
        student_phone: formData.phone,
        student_address: formData.address || 'Not provided',
        qualification: formData.qualification || 'Not provided',
        experience: formData.experience || 'Not provided',
        course_name: course.title,
        course_id: course.id,
        plan: selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1),
        amount: planPrice,
        message: `New Enrollment Request:
        
Course: ${course.title}
Plan: ${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}
Amount: ₹${planPrice}

Student Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address || 'Not provided'}
Qualification: ${formData.qualification || 'Not provided'}
Experience: ${formData.experience || 'Not provided'}

Please send the payment link to the student.`
      };

      // Send email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_ENROLLMENT_TEMPLATE_ID,
        templateParams
      );

      console.log('Enrollment email sent successfully');
      setEmailSent(true);
      return true;
    } catch (error) {
      console.error('Error sending enrollment email:', error);
      // Still return true to proceed with payment even if email fails
      return true;
    }
  };

  const handlePayment = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Send enrollment email first
    try {
      await sendEnrollmentEmail();
      // Show success message and close after a delay
      setTimeout(() => {
        setIsSubmitting(false);
        // Don't proceed with payment - just show the message
        // The email sent state will show the message
      }, 1000);
      return; // Exit early - don't proceed with payment gateway
    } catch (error) {
      console.error('Error in enrollment process:', error);
      setIsSubmitting(false);
      alert('There was an error processing your enrollment. Please try again.');
      return;
    }

    // OLD PAYMENT CODE - Commented out as we're not using payment gateway now
    /*
    setIsSubmitting(true);

    try {
      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;
      const isDemoMode = !razorpayKey || razorpayKey === 'rzp_test_YOUR_KEY_ID';

      // For demo purposes, if Razorpay key is not set, simulate payment
      if (isDemoMode) {
        // Simulate payment for demo
        setTimeout(() => {
          const enrollmentData: EnrollmentData = {
            courseId: course.id,
            courseName: course.title,
            plan: selectedPlan,
            amount: planPrice,
            studentName: formData.name,
            email: formData.email,
            phone: formData.phone,
            paymentId: `demo_${Date.now()}`,
            paymentStatus: 'success',
            enrollmentDate: new Date().toISOString()
          };
          addToWaitingList(enrollmentData);
          onPaymentSuccess(enrollmentData);
          setIsSubmitting(false);
        }, 2000);
        return;
      }

      // Load Razorpay script if not already loaded
      const loadRazorpayScript = (): Promise<void> => {
        return new Promise((resolve, reject) => {
          if ((window as any).Razorpay) {
            resolve();
            return;
          }

          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Failed to load Razorpay script'));
          document.body.appendChild(script);
        });
      };

      try {
        await loadRazorpayScript();

        // Initialize Razorpay payment
        const options = {
          key: razorpayKey,
          amount: planPrice * 100, // Amount in paise
          currency: 'INR',
          name: 'Suprix Solution',
          description: `${course.title} - ${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan`,
          image: '/logo.svg',
          handler: async function (response: any) {
            // Payment successful
            const enrollmentData: EnrollmentData = {
              courseId: course.id,
              courseName: course.title,
              plan: selectedPlan,
              amount: planPrice,
              studentName: formData.name,
              email: formData.email,
              phone: formData.phone,
              paymentId: response.razorpay_payment_id,
              paymentStatus: 'success',
              enrollmentDate: new Date().toISOString()
            };

            // Add to waiting list
            addToWaitingList(enrollmentData);
            onPaymentSuccess(enrollmentData);
            setIsSubmitting(false);
          },
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone
          },
          theme: {
            color: '#667eea'
          },
          modal: {
            ondismiss: function() {
              setIsSubmitting(false);
            }
          }
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.on('payment.failed', function (response: any) {
          // Payment failed - handle refund logic here
          handlePaymentFailure(response, formData);
          setIsSubmitting(false);
        });
        rzp.open();
      } catch (error) {
        console.error('Razorpay initialization error:', error);
        setIsSubmitting(false);
        alert('Payment gateway error. Please try again or contact support.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setIsSubmitting(false);
      alert('Payment failed. Please try again.');
    }
    */
  };

  const addToWaitingList = (enrollmentData: EnrollmentData) => {
    // Import the utility function
    import('../utils/waitingList').then(({ addToWaitingList: addToList }) => {
      addToList(enrollmentData, {
        address: formData.address,
        qualification: formData.qualification,
        experience: formData.experience
      });

      // You can also send this to your backend API here
      // fetch('/api/enrollments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(enrollmentData)
      // });
    });
  };

  const handlePaymentFailure = (response: any, formData: any) => {
    // Log payment failure
    console.error('Payment failed:', response);
    
    // In a real application, you would:
    // 1. Call your backend API to process refund
    // 2. Update the enrollment status
    // 3. Send notification to student
    
    alert(`Payment failed: ${response.error.description || 'Unknown error'}. If amount was deducted, it will be refunded within 5-7 business days.`);
    
    // Add to waiting list with failed status for tracking
    import('../utils/waitingList').then(({ addToWaitingList: addToList }) => {
      const failedEnrollment: EnrollmentData = {
        courseId: course.id,
        courseName: course.title,
        plan: selectedPlan,
        amount: planPrice,
        studentName: formData.name,
        email: formData.email,
        phone: formData.phone,
        paymentId: response.error.metadata?.payment_id || 'failed',
        paymentStatus: 'failed',
        enrollmentDate: new Date().toISOString()
      };
      
      addToList(failedEnrollment, {
        address: formData.address,
        qualification: formData.qualification,
        experience: formData.experience,
        error: response.error
      });
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
          padding: '1rem',
          overflowY: 'auto'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '2.5rem',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                Enroll in {course.title}
              </h2>
              <button
                onClick={onClose}
                style={{
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
            </div>
            <div style={{
              background: '#f8fafc',
              padding: '1rem',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>Selected Plan</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1e293b' }}>
                  {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>Amount</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#667eea' }}>
                  ₹{planPrice}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handlePayment}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                Full Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: `2px solid ${errors.name ? '#ef4444' : '#e2e8f0'}`,
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
                placeholder="Enter your full name"
              />
              {errors.name && <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.name}</div>}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                Email Address <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: `2px solid ${errors.email ? '#ef4444' : '#e2e8f0'}`,
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
                placeholder="your.email@example.com"
              />
              {errors.email && <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.email}</div>}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                Phone Number <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: `2px solid ${errors.phone ? '#ef4444' : '#e2e8f0'}`,
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
                placeholder="10-digit mobile number"
              />
              {errors.phone && <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.phone}</div>}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={3}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '2px solid #e2e8f0',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
                placeholder="Your address (optional)"
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                Educational Qualification
              </label>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '2px solid #e2e8f0',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  background: 'white'
                }}
              >
                <option value="">Select qualification</option>
                <option value="high-school">High School</option>
                <option value="diploma">Diploma</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#1e293b' }}>
                Experience (Years)
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '2px solid #e2e8f0',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
                placeholder="e.g., 0, 1, 2+ (optional)"
              />
            </div>

            {/* Success Message */}
            {emailSent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  marginBottom: '1.5rem',
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Enrollment Request Submitted!
                </div>
                <div style={{ fontSize: '0.95rem', opacity: 0.95 }}>
                  We will send the payment link soon to your email ({formData.email})
                </div>
              </motion.div>
            )}

            {/* Payment Info */}
            {!emailSent && (
              <div style={{
                background: '#f8fafc',
                padding: '1rem',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
                color: '#64748b'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span>🔒</span>
                  <span>Secure enrollment process</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>✅</span>
                  <span>Payment link will be sent via email</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            {!emailSent && (
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  backgroundColor: isSubmitting ? '#94a3b8' : '#667eea',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = '#5568d3';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = '#667eea';
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }}
              >
                {isSubmitting ? 'Processing...' : `Pay ₹${planPrice} & Enroll`}
              </button>
            )}

            {emailSent && (
              <button
                type="button"
                onClick={onClose}
                style={{
                  width: '100%',
                  backgroundColor: '#667eea',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
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
            )}

            {!emailSent && (
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                textAlign: 'center',
                marginTop: '1rem'
              }}>
                By enrolling, you agree to be added to our waiting list. You'll be notified when the course starts.
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

