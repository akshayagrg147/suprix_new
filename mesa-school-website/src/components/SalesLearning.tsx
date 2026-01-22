import { motion } from 'framer-motion'

const salesFeatures = [
  {
    title: 'Dropshipping Business',
    description: 'Scale to ₹3L in Term 1.',
  },
  {
    title: 'D2C Sales Challenges',
    description: 'Compete in one-day product sellouts.',
  },
  {
    title: 'B2B Sales Sprints',
    description: 'Crack SaaS sales through challenges.',
  },
  {
    title: 'Real Sales Experience',
    description: 'Telecalling, door-to-door & flea markets',
  },
]

const SalesLearning = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learn sales by doing sales
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Achieve 1L+ in sales revenue in first 4 weeks of the program
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {salesFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg border border-primary-200 shadow-card"
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

export default SalesLearning

