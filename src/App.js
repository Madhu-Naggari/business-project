// import CollaboratedCompanies from "./Components/CollabratedCompany";
// import Footer from "./Components/Footer";
// // import 'tailwindcss/tailwind.css'
// import '@fontsource/roboto'

// function App() {
//   return (
//     <div className="App" style={{ fontFamily: "roboto" }}>

//     </div>
//   );
// }

// export default App;

'use client'


import NavLinks from './Components/NavLinks'
import HomeNav from './Components/HomeNav'


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HomeNav />
      <NavLinks />
    </div>
  )
}

export default App;