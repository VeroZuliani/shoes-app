import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar'
import Hero from './views/Hero'
import About from './views/About'
import Testimonials from './views/Testimonials'
import Contact from './views/Contact'
import Footer from './views/Footer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <NavBar/> */}
    {/* <Hero/> */}
    <About/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </StrictMode>,
)
