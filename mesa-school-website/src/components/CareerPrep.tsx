import { motion } from 'framer-motion'

const careerFeatures = [
  {
    title: '250+ hours Career Support',
    description: 'Including networking and training.',
  },
  {
    title: 'Startup Internships',
    description: '3-month roles in fast-growing companies.',
  },
  {
    title: 'High-Growth Career Paths',
    description: "Target roles in Founder's Office, Product, VC.",
  },
  {
    title: 'Interview Readiness',
    description: '100+ mock interviews with startup leaders.',
  },
]

const CareerPrep = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Structured Career Preparation
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get ready for a powerful career in startups
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {careerFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-shadow border border-primary-100"
            >
              <h3 className="font-bold text-lg mb-2 text-primary-900">{feature.title}</h3>
              <p className="text-primary-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="#apply"
            className="inline-block bg-primary-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default CareerPrep

