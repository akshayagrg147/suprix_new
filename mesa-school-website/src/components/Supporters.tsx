import { motion } from 'framer-motion'

const supporters = [
  {
    name: 'Kunal Shah',
    title: 'Cred Founder',
    subtitle: 'Advisor Sequoia Capital, Advisor AngelList, Avid Angel Investor',
    company: 'Cred',
  },
  {
    name: 'Vidit Aatrey',
    title: 'Meesho Founder',
    subtitle: 'IIT Delhi, Ex - InMobi',
    company: 'Meesho',
  },
  {
    name: 'Vijay Shekhar',
    title: 'Paytm Founder',
    subtitle: 'Delhi College of Engineering, Avid Angel Investor',
    company: 'Paytm',
  },
  {
    name: 'Mekin M',
    title: 'Udhyam Founder',
    subtitle: 'Ex - Flipkart, Avid Angel Investors',
    company: 'Udhyam',
  },
  {
    name: 'Abhiraj Bhal',
    title: 'Urban Company Founder',
    subtitle: 'IIM Ahmedabad, IIT Kanpur',
    company: 'Urban Company',
  },
  {
    name: 'Varun Khaitan',
    title: 'Urban Company Founder',
    subtitle: 'IIT Kanpur, Ex - BCG',
    company: 'Urban Company',
  },
]

const Supporters = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Supporters and Investors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-primary-700 mb-12"
        >
          ...and 50+ startup founders
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supporters.map((supporter, index) => (
            <motion.div
              key={supporter.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-shadow border border-primary-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-800 font-bold text-xl">
                  {supporter.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-primary-900">{supporter.name}</h3>
                  <p className="text-primary-700 font-semibold">{supporter.title}</p>
                  <p className="text-sm text-primary-600 mt-1">{supporter.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Supporters

