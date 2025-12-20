import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Suprix Solution</title>
        <meta name="description" content="Privacy policy for Suprix Solution - how we collect, use, and protect your personal information." />
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
            Privacy Policy
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
                1. Introduction
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Suprix Solution ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                2. Information We Collect
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                We may collect the following types of information:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address</li>
                <li><strong>Payment Information:</strong> Billing details, payment method (processed securely through payment gateways)</li>
                <li><strong>Usage Data:</strong> Website interaction data, IP address, browser type, device information</li>
                <li><strong>Course/Service Data:</strong> Enrollment information, course progress, project details</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                3. How We Use Your Information
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                We use collected information for:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Providing and improving our services</li>
                <li>Processing enrollments and payments</li>
                <li>Communicating with you about services, courses, and updates</li>
                <li>Responding to inquiries and providing customer support</li>
                <li>Analyzing website usage and improving user experience</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                4. Information Sharing and Disclosure
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                We do not sell your personal information. We may share information only in the following circumstances:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>With service providers who assist in our operations (payment processors, email services)</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
                <li>In case of business transfer or merger (with notice to users)</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                5. Data Security
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>SSL encryption for data transmission</li>
                <li>Secure payment processing</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Regular backups and data protection protocols</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                6. Your Rights
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                You have the right to:
              </p>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p style={{ marginBottom: '1rem' }}>
                To exercise these rights, contact us at <a href="mailto:hello@suprixsolution.in" style={{ color: '#f58220', textDecoration: 'none' }}>hello@suprixsolution.in</a>
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                7. Cookies and Tracking
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                We use cookies and similar technologies to enhance your experience, analyze usage, and improve our services. You can control cookies through your browser settings.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                8. Third-Party Links
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                9. Children's Privacy
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                10. Changes to Privacy Policy
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services constitutes acceptance of the updated policy.
              </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f58220',
                marginBottom: '1rem'
              }}>
                11. Contact Us
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                For questions about this Privacy Policy or our data practices, please contact us:
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

