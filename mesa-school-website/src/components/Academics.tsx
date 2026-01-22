import { motion } from 'framer-motion'

const stats = [
  { label: 'Professors from top B-schools', value: 'IIM, ISB, Kellogg' },
  { label: 'of multi-disciplinary business curriculum', value: '600+ hours' },
  { label: 'real world case studies', value: '75+' },
  { label: 'and pathways for focused skill building', value: '6 majors' },
]

const Academics = () => {
  return (
    <section id="learning" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            New age Academics
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Learn business from world renowned professors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-card text-center border border-primary-100"
            >
              <div className="text-3xl font-bold text-primary-900 mb-2">
                {stat.value}
              </div>
              <div className="text-primary-700 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#apply"
            className="inline-block bg-primary-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
          >
            Download Brochure
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Academics

