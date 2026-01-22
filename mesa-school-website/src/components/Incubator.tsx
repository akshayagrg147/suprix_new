import { motion } from 'framer-motion'

const incubatorFeatures = [
  {
    title: '₹5 Cr Startup Fund',
    description: 'Get funding to launch ventures.',
  },
  {
    title: '1:1 Founder Mentorship',
    description: 'Directly from 100+ startup leaders.',
  },
  {
    title: 'Pitch to Top VCs',
    description: 'Present to 50+ investors.',
  },
  {
    title: 'Guided Startup Journey',
    description: '0–1 with structured mentorship.',
  },
]

const Incubator = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            In-house incubator
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Build your own startup and get incubated at Mesa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {incubatorFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
            >
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="opacity-90">{feature.description}</p>
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
          <p className="text-lg mb-6 opacity-90">
            Mesa's in-house incubator where students turn ideas into real, revenue-generating startups with mentorship and funding support.
          </p>
          <a
            href="#apply"
            className="inline-block bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Incubator

