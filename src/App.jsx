import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import New from './Components/New/New'
import About from './Components/About/About'
import Catalogue from './Components/Catalogue/Catalogue'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (

    <>
      <Navbar />
      <Home />
      <New />
      <About />
      <Catalogue />
      <Footer />
    </>
  )
}

export default App