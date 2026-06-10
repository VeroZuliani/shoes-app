import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar'
import Hero from './views/Hero'
import Contact from './views/Contact'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar/>
    <Hero/>
    <Contact/>
  </StrictMode>,
)
