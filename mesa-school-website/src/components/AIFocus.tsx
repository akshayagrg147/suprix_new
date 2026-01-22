import { motion } from 'framer-motion'

const aiFeatures = [
  {
    title: '150 hours AI Curriculum',
    description: 'From no-code to fine-tuning',
  },
  {
    title: '25+ AI tools',
    description: 'That you will gain expertise in',
  },
  {
    title: 'Build Automation Agents',
    description: 'Automating startup workflows',
  },
  {
    title: 'Product Building Blocks',
    description: 'Learn UI, APIs, and databases.',
  },
]

const terms = [
  {
    term: 'Term 1',
    title: 'Foundations of AI & No-Code Product Building',
  },
  {
    term: 'Term 2',
    title: 'Voice, Multimodal, and Agentic AI Products',
  },
  {
    term: 'Term 3',
    title: 'Vertical AI Products + Automation + Vibe Coding',
  },
  {
    term: 'Term 4',
    title: 'Fine-Tuning & Open Source AI Productization',
  },
  {
    term: 'Term 5',
    title: 'Building the AI Agents of the Future',
  },
  {
    term: 'Term 6',
    title: 'Scaling Products & Building AI Systems',
  },
  {
    term: 'Term 7',
    title: 'Thesis - Solve a Real Problem with AI',
  },
]

const AIFocus = () => {
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
            AI & Product focus
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Build real AI products, launch on product hunt and get 100 paying customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aiFeatures.map((feature, index) => (
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
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">AI tools offered to cohort 4</h3>
          <div className="space-y-4">
            {terms.map((item, index) => (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border-l-4 border-primary-900 shadow-card"
              >
                <div className="flex items-center gap-4">
                  <span className="font-bold text-primary-900 text-lg">{item.term}</span>
                  <span className="text-primary-800">{item.title}</span>
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

export default AIFocus

