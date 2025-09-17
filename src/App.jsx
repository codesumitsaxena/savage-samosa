import { useState } from 'react'
import './index.css'
import MarketingWebsite from './Components/NavbarApp'
import About from './Components/About'
import Services from './Components/Services'
import CaseStudies from './Components/CaseStudies'
import Footer from './Components/Footer'
import Marquee from './Components/Marquee'

export default function App() {
  return (
  <>
<MarketingWebsite/>
{/* <About/> */}
<CaseStudies/>
<Services/>
<Marquee/>
<Footer/>
  </>
  );
}



