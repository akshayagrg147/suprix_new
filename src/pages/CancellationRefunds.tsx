import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function CancellationRefunds() {
  return (
    <>
      <Helmet>
        <title>Cancellation & Refunds Policy - Suprix Solution</title>
        <meta name="description" content="Cancellation and refunds policy for Suprix Solution IT services and course enrollments." />
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
            Cancellation & Refunds Policy
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
                1. Course Enrollment Cancellation
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                You may cancel your course enrollment within <strong>7 days</strong> of enrollment for a full refund, provided that:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>The course has not yet started</li>
                <li>No course materials have been accessed or downloaded</li>
                <li>The cancellation request is submitted in writing via email</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                2. Refund Processing
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Refunds will be processed within <strong>7-14 business days</strong> from the date of cancellation approval. The refund will be credited to the original payment method used for the transaction.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Please note that payment gateway processing fees (if any) may be deducted from the refund amount.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                3. IT Services Cancellation
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                For ongoing IT services and consulting projects:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Cancellation requests must be submitted at least <strong>30 days</strong> in advance</li>
                <li>Refunds for unused service periods will be calculated on a pro-rata basis</li>
                <li>Work already completed and delivered will not be eligible for refund</li>
                <li>Custom development projects are non-refundable once development has commenced</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                4. Non-Refundable Items
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                The following are not eligible for refund:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Completed and delivered projects</li>
                <li>Services already rendered</li>
                <li>Course enrollments after the course has started</li>
                <li>Digital products and downloadable materials</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                5. How to Request a Cancellation/Refund
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                To request a cancellation or refund, please:
              </p>
              <ol style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Send an email to <a href="mailto:hello@suprixsolution.in" style={{ color: '#f58220', textDecoration: 'none' }}>hello@suprixsolution.in</a></li>
                <li>Include your enrollment/service details and reason for cancellation</li>
                <li>Provide your transaction ID or payment reference number</li>
                <li>Our team will review and respond within 2-3 business days</li>
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
                For any questions regarding cancellations or refunds, please contact us:
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

