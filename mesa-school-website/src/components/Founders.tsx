import { motion } from 'framer-motion'

const founderFeatures = [
  {
    title: 'Case-based Classrooms',
    description: 'Meeting-style discussions & debates.',
  },
  {
    title: 'Real-World Projects',
    description: 'Live problems through Business Strategy Lab.',
  },
  {
    title: 'Powerful Network Access',
    description: 'Connect with founders, mentors, & peers.',
  },
  {
    title: 'Internship Opportunities',
    description: 'Work on business problems that matter.',
  },
]

const caseStudies = [
  {
    company: 'Epigamia',
    description: 'As competition heated up in the high-protein yogurt space, Epigamia needed to decide whether to double down or pivot its strategy. Mesa students led market research, 100+ consumer interviews, and taste tests to uncover insights, then built a 24-month roadmap across brand, product, and growth.',
    outcome: 'Two students from this team later joined Epigamia as Chiefs of Staff.',
  },
  {
    company: 'Blue Tokai',
    description: 'Blue Tokai wanted to scale its café footprint smarter, not faster, by choosing locations backed by data. Mesa students built a site selection framework that blended demographics, traffic, competition, and economics into one decision-making model.',
    outcome: 'Their prototype tool helped identify high-potential clusters for expansion.',
  },
  {
    company: 'Qila Games',
    description: 'Qila Games, an India-based studio, aimed to enter the Middle East by positioning its multiplayer game as both a gaming and social platform.',
    outcome: 'Mesa students built a complete GTM strategy covering branding, product design, and user acquisition and retention, and competitive differentiation in the MENA region.',
  },
]

const Founders = () => {
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
            Learn directly from Founders
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Solve real business problems with 100+ Founders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {founderFeatures.map((feature, index) => (
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
          <h3 className="text-3xl font-bold text-center mb-8">Real Case Studies Done by Founders</h3>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border-l-4 border-primary-900 shadow-card"
              >
                <h4 className="text-2xl font-bold text-primary-900 mb-3">{study.company}</h4>
                <p className="text-primary-800 mb-3 leading-relaxed">{study.description}</p>
                <p className="text-primary-700 italic">{study.outcome}</p>
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
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Founders

