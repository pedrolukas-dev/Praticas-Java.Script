import { Route,Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import FaleConosco from './pages/FaleConosco'
import Home from './pages/Home'
import SobreNos from './pages/SobreNos'
import { useState } from 'react';


function App() {

  return (
    <>
      <Header>
        <main>
          {/* QUalquer página terar header e footer */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
        </Routes>
        </main>
        <Footer/>
      </Header>
    </>
  )
}

export default App
