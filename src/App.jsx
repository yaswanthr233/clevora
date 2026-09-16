import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ManyReqErr from './components/ManyReqErr'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'

import {Routes, Route} from 'react-router'
import Footer from './components/Footer'
function App() {
  return (
  <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/manyreqerr" element={<ManyReqErr/>} />
      <Route path="/howitworks" element={<HowItWorks/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    <Footer/>
  </div>

  )
}

export default App
