import { useState } from 'react'
import './index.css'
import MarketingWebsite from './Components/NavbarApp'
import About from './Components/About'
import Footer from './Components/Services'
import CaseStudies from './Components/CaseStudies'

export default function App() {
  return (
  <>
<MarketingWebsite/>
<About/>
<CaseStudies/>
<Footer/>
  </>
  );
}



