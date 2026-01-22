const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mesa</h3>
            <p className="text-gray-400">
              PGP in Startup Leadership & Entrepreneurship
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#learning" className="hover:text-white transition-colors">Learning</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Program</a></li>
              <li><a href="#outcomes" className="hover:text-white transition-colors">Outcomes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#apply" className="hover:text-white transition-colors">Apply Now</a></li>
              <li><a href="#hire" className="hover:text-white transition-colors">Hire from us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Chat with us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Bangalore, India</li>
              <li>Email: info@mesaschool.co</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-300">
          <p>&copy; {new Date().getFullYear()} Mesa School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

