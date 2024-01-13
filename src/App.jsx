import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
// import Mainpage from './Pages/Mainpage.tx'
// import Catalogue from './Pages/Catalogue'
import Home from './Components/Home/Home'
import Featured from './Components/Featured/Featured'
import About from './Components/About/About'
import Products from './Components/Products/Products'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'





const App = () => {
  return (

    // <BrowserRouter>      
    //   <Navbar />
    //   <Routes>
    //     <Route index element={<Mainpage />} />
    //     <Route path='catalogue' element={<Catalogue />} />   
    //   </Routes>      
    //   <Footer />
    // </BrowserRouter>
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