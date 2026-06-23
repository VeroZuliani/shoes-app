import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './views/Hero'
import About from './views/About'
import Products from './views/Products'
import Testimonials from './views/Testimonials'
import Contact from './views/Contact'
import Footer from './views/Footer'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero/>
    <About/>
    <Products/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </StrictMode>,
)
