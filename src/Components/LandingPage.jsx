

import { useEffect, useRef } from "react"
import { motion } from 'framer-motion'


function Landing() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const timer = setInterval(scroll, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-[90vh] bg-[#6a0dad] text-white flex flex-col items-center justify-center">
      <main className="flex-1 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            First Time in the Entire World
          </motion.h1>
          <motion.h3
            className='text-xl md:text-3xl font-regular leading-tight'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Offer Web and Mobile Development for Absolutely FREE FREE
          </motion.h3>
          <motion.p
            className="text-sm md:text-lg text-gray-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At OrcadeHub, we believe in empowering businesses and individuals by providing top-notch web and mobile app development services at no cost. Whether you're a startup, small business, or an individual entrepreneur, our team of experienced developers is here to bring your ideas to life with zero financial burden. This is a limited-time offer, so don't miss out!
          </motion.p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button             initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }} className="bg-black hover:bg-orange-600 text-white focus:ring-orange-500 px-6 py-3 rounded font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black">View plans</motion.button>
            <motion.button   initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }} className="bg-transparent border-2 border-gray-700 hover:bg-gray-800 text-white focus:ring-gray-700 px-6 py-3 rounded font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black">Learn more</motion.button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Landing;
