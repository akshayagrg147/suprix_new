import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Suprix Solution</title>
        <meta name="description" content="Terms and conditions for using Suprix Solution IT services and courses." />
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
            Terms and Conditions
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
                1. Acceptance of Terms
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                By accessing and using Suprix Solution's website, services, or enrolling in our courses, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                2. Services Description
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Suprix Solution provides IT consulting services, custom software development, web development, mobile app development, cloud solutions, and educational courses. We reserve the right to modify, suspend, or discontinue any service at any time.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                3. User Responsibilities
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                You agree to:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Provide accurate and complete information when using our services</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not reproduce, duplicate, or resell any course materials without permission</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                4. Payment Terms
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                All payments must be made in advance unless otherwise agreed. We accept payments through secure payment gateways. Prices are subject to change without notice, but changes will not affect orders already placed.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                5. Intellectual Property
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                All content, including but not limited to text, graphics, logos, software, and course materials, is the property of Suprix Solution and is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content without our written permission.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                6. Limitation of Liability
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Suprix Solution shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by you for the specific service.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                7. Privacy and Data Protection
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                8. Modifications to Terms
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                9. Contact Information
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                For questions about these Terms and Conditions, please contact us:
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


