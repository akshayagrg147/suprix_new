import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Supporters from '../components/Supporters'
import ProgramDetails from '../components/ProgramDetails'
import Academics from '../components/Academics'
import Founders from '../components/Founders'
import AIFocus from '../components/AIFocus'
import Incubator from '../components/Incubator'
import SalesLearning from '../components/SalesLearning'
import CareerPrep from '../components/CareerPrep'
import CareerOutcomes from '../components/CareerOutcomes'
import Admissions from '../components/Admissions'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Supporters />
      <ProgramDetails />
      <Academics />
      <Founders />
      <AIFocus />
      <Incubator />
      <SalesLearning />
      <CareerPrep />
      <CareerOutcomes />
      <Admissions />
      <Footer />
    </div>
  )
}

export default Home

