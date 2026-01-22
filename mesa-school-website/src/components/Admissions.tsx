import { motion } from 'framer-motion'
import { useState } from 'react'

const steps = [
  {
    number: '1',
    title: 'Take the Mesa Admissions Test (MAT)',
    description: "Designed to evaluate like a Founders' Office interview, the MAT holistically tests candidates across multiple aspects including their aptitude, business acumen, first principles thinking, ability to sell & more.",
  },
  {
    number: '2',
    title: 'Submit your Application',
    description: 'Upload an updated 1-pager resume & fill in your basic details to complete your application.',
  },
  {
    number: '3',
    title: 'Interview with our Admissions Panel',
    description: 'Shortlisted candidates are invited to book their interview slot with the admissions panel (charged at Rs. 1500). Interviews span 2 stages: screening rounds & case evaluations, followed by group discussions & conversations with Mesa Leadership.',
  },
  {
    number: '4',
    title: 'Receive the verdict',
    description: 'You will receive your result within 10 working days of your last interview, with one of the three options: selected, waitlisted, or rejected. Waitlisted candidates hear back on their final candidature at the end of the admissions round.',
  },
]

const rounds = [
  {
    name: 'Early Bird',
    deadline: 'Dec 28, 2025',
    interviews: 'January',
    applicationFee: 'Free',
    interviewFee: '₹ 1500',
    courseFee: '₹ 23,95,000',
  },
  {
    name: 'Round 1',
    deadline: 'March 1, 2026',
    interviews: 'February - March',
    applicationFee: 'Free',
    interviewFee: '₹ 1500',
    courseFee: '₹ 24,35,000',
  },
  {
    name: 'Round 2',
    deadline: 'May 3, 2026',
    interviews: 'April - May',
    applicationFee: 'Free',
    interviewFee: '₹ 1500',
    courseFee: '₹ 24,35,000',
  },
  {
    name: 'Round 3',
    deadline: 'July 5, 2026',
    interviews: 'June - July',
    applicationFee: 'Free',
    interviewFee: '₹ 1500',
    courseFee: '₹ 24,35,000',
  },
]

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Application submitted! We will get back to you soon.')
  }

  return (
    <section id="apply" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A step-by-step guide
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-primary-900">{step.title}</h3>
                  <p className="text-primary-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Key dates and deadlines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rounds.map((round, index) => (
              <motion.div
                key={round.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-card border border-primary-100"
              >
                <h4 className="font-bold text-xl mb-2 text-primary-900">{round.name}</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Deadline:</span> {round.deadline}</p>
                  <p><span className="font-semibold">Interviews:</span> {round.interviews}</p>
                  <p><span className="font-semibold">Application Fee:</span> {round.applicationFee}</p>
                  <p><span className="font-semibold">Interview Fee:</span> {round.interviewFee}</p>
                  <p><span className="font-semibold">Course Fee:</span> {round.courseFee}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-6">Apply Now</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resume (PDF)
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Admissions

