import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-900 mb-8 leading-tight"
          >
            PGP in Startup Leadership
            <br />
            <span className="text-primary-800">& Entrepreneurship</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mb-10 text-base md:text-lg text-primary-700"
          >
            <div className="flex flex-col items-center">
              <span className="font-bold text-primary-900 text-sm uppercase tracking-wide mb-1">Duration</span>
              <span className="text-xl font-semibold">12 Months</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-primary-900 text-sm uppercase tracking-wide mb-1">Mode</span>
              <span className="text-xl font-semibold">Full-Time</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-primary-900 text-sm uppercase tracking-wide mb-1">Location</span>
              <span className="text-xl font-semibold">Bangalore</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-primary-900 text-sm uppercase tracking-wide mb-1">Seats</span>
              <span className="text-xl font-semibold">150 seats</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <span className="px-5 py-2.5 bg-primary-50 text-primary-800 rounded-full font-semibold text-sm border border-primary-200">
              AI-focused
            </span>
            <span className="px-5 py-2.5 bg-primary-50 text-primary-800 rounded-full font-semibold text-sm border border-primary-200">
              Learn by building
            </span>
            <span className="px-5 py-2.5 bg-primary-50 text-primary-800 rounded-full font-semibold text-sm border border-primary-200">
              CXO-led classes
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#apply"
              className="inline-block bg-primary-900 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-primary-800 transition-all duration-200 shadow-soft hover:shadow-lg"
            >
              Know More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

