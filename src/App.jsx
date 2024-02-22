import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Featured from './Components/Featured/Featured'
import About from './Components/About/About'
import Products from './Components/Products/Products'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'





const App = () => {
  return (

     <>      
     <Navbar />
     <Home />
     <About /> 
      <Featured />
      <Products />    
      <Contact />        
     <Footer />
   </>
  )
}

export default App