import { motion } from 'framer-motion'

const features = [
  {
    number: '1',
    title: 'New-age academics',
    description: 'Learn new age skills like: growth, product, AI agents, venture capital from world renowned experts, unicorn founders, VCs and professors from top universities.',
  },
  {
    number: '2',
    title: 'Learn directly from Founders',
    description: '100+ startup founders will visit the campus and teach you during your 12 months. Ask questions, network and stand a chance to get follow up meetings.',
  },
  {
    number: '3',
    title: 'AI & product focus',
    description: 'Learn 25+ AI tools, get mentored by top AI product managers and build 3 real AI products, launch on product hunt and get 100 loyal customers in 3-4 weeks.',
  },
  {
    number: '4',
    title: 'In-house Incubator',
    description: 'Get access to 5Cr in-house fund, mentorship from 100+ startup founders and an opportunity to pitch to 50+ largest VCs in India.',
  },
  {
    number: '5',
    title: 'Learn sales by doing sales',
    description: 'Do 1L in sales during your first 4 weeks at Mesa, Go offline, set up flea stalls, do tele-calling and door to door sales to understand the art.',
  },
  {
    number: '6',
    title: 'Structured career prep',
    description: '250+ hours of focused career prep based on ambition, past work experience, interests and abilities which has helped students crack roles on an avg of 25L+ CTC.',
  },
]

const ProgramDetails = () => {
  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Program Details
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-lg">
            <div className="flex items-center gap-2">
              <span className="font-semibold">12 months</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Full-Time, Residential</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Aug 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Bangalore</span>
            </div>
          </div>
          <a
            href="#apply"
            className="inline-block mt-8 bg-primary-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
          >
            Apply Now
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow border border-primary-100 shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {feature.number}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-primary-900">{feature.title}</h3>
                  <p className="text-primary-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramDetails

