import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './assets/components/Navbar'
import Header from './assets/components/Header'
import FeatureSection from './assets/components/FeatureSection'
import InsightsSection from './assets/components/InsightsSection'
import UserManagement from './assets/components/UserManagement'
import Footer from './assets/components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Header/>
  <FeatureSection />
    <InsightsSection />
    <UserManagement />
     <Footer />

    </>
  )
}

export default App
