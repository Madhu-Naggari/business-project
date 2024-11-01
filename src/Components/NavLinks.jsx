import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Team from './Team'
import Service from './Service'
import OurProcess from './OurProcess'
import ClientRating from './ClientRating'
import Home from './Home'
import ContactForm from './ContactForm'
import Faq from './Faq'
function NavLinks() {
  return (
      <div>
             <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/OurProcess" element={<OurProcess />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/ClientRating" element={<ClientRating />} />
          <Route path="/Contact" element={<ContactForm />} />
          <Route path="/Faq" element={<Faq />} />
        </Routes>
      </div>
    </div>
  )
}

export default NavLinks