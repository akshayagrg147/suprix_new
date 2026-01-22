import { motion } from 'framer-motion'

const outcomes = [
  { label: 'Average CTC', value: '26 Lakhs' },
  { label: 'Highest CTC', value: '45 Lakhs' },
  { label: 'Hiring partners', value: '70+' },
  { label: 'Placement rate', value: '100%' },
]

const CareerOutcomes = () => {
  return (
    <section id="outcomes" className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Career Outcomes achieved
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">{outcome.value}</div>
              <div className="text-xl opacity-90">{outcome.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareerOutcomes

