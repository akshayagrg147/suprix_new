import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Shipping() {
  return (
    <>
      <Helmet>
        <title>Shipping Policy - Suprix Solution</title>
        <meta name="description" content="Shipping and delivery policy for Suprix Solution digital products and services." />
      </Helmet>
      <main style={{ padding: '2rem 1rem', maxWidth: '1000px', margin: '0 auto', minHeight: '80vh' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Shipping Policy
          </h1>
          
          <div style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            lineHeight: '1.8',
            color: '#475569'
          }}>
            <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#64748b' }}>
              <strong>Last Updated:</strong> December 2024
            </p>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                1. Digital Products and Services
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Since Suprix Solution primarily offers digital services and online courses, most of our products are delivered electronically:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li><strong>Online Courses:</strong> Access is provided immediately upon enrollment via email</li>
                <li><strong>Software Solutions:</strong> Delivered via secure download links or cloud deployment</li>
                <li><strong>Digital Certificates:</strong> Issued electronically via email upon course completion</li>
                <li><strong>Consulting Services:</strong> Delivered remotely via video calls, email, and project management tools</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                2. Delivery Timeframes
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Course Access:</strong> Within 24-48 hours of enrollment confirmation
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Software Delivery:</strong> As per project timeline agreed upon in the service agreement
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Consulting Services:</strong> Scheduled based on mutual availability and project requirements
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                3. Physical Products (If Applicable)
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                In the event that we offer physical products:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Shipping will be arranged through reputable courier services</li>
                <li>Delivery times vary by location (typically 5-10 business days within India)</li>
                <li>International shipping may take 10-20 business days</li>
                <li>Shipping costs will be clearly stated at checkout</li>
                <li>Tracking information will be provided via email</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                4. Access and Delivery Confirmation
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Upon successful enrollment or purchase, you will receive:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Confirmation email with access details</li>
                <li>Login credentials (if applicable)</li>
                <li>Instructions for accessing your purchased service</li>
                <li>Support contact information</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                5. Delivery Issues
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                If you do not receive access or delivery confirmation within the stated timeframe, please:
              </p>
              <ol style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Check your spam/junk email folder</li>
                <li>Verify the email address used for enrollment</li>
                <li>Contact us immediately at <a href="mailto:hello@suprixsolution.in" style={{ color: '#f58220', textDecoration: 'none' }}>hello@suprixsolution.in</a></li>
                <li>Provide your transaction ID or enrollment reference number</li>
              </ol>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                6. Contact Us
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                For questions about shipping or delivery, please contact us:
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Email:</strong> <a href="mailto:hello@suprixsolution.in" style={{ color: '#f58220', textDecoration: 'none' }}>hello@suprixsolution.in</a>
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Phone:</strong> <a href="tel:+919485563525" style={{ color: '#f58220', textDecoration: 'none' }}>+91 94855-63525</a>
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </>
  );
}


