import React from 'react'
import Faq from './Faq'
import Landing from './LandingPage'
import OurProcess from './OurProcess';
import CollaboratedCompanies from './CollabratedCompany';
import Footer from './Footer';
import ContactForm from './ContactForm';
import Team from './Team';
import ClientRating from './ClientRating';
import Service from './Service';

function Home() {
  return (
    <div>
      <Landing />
      <CollaboratedCompanies />
      <Team/>
      <OurProcess />
      <Service/>
      <ClientRating />
      <ContactForm />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
