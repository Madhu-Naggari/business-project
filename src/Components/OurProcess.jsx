'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function OurProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const cardVariants = [
    {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
      },
    },
    {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
      },
    },
    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
      },
    },
    {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
      },
    },
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Discovery and Research.',
      items: [
        'Understand the clients values and audience.',
        'Conduct market research.',
        'Identify key design elements.',
      ],
    },
    {
      number: '02',
      title: 'Concept Development.',
      items: [
        'Brainstorm and sketch initial logo concepts.',
        'Focus on simplicity.',
        'Prioritise ideas for further development.',
      ],
    },
    {
      number: '03',
      title: 'Design and Refinement.',
      items: [
        'Create digital versions of prioritised concepts.',
        'Refine the designs, ensuring clarity.',
        'Incorporate client feedback to fine-tuning.',
      ],
    },
    {
      number: '04',
      title: 'Finalisation and Delivery.',
      items: [
        'Prepare the final logo in various formats.',
        'Provide a comprehensive brand guide.',
        'Deliver the final assets and suppport.',
      ],
    },
  ]

  return (
    <section ref={ref} className="w-full min-h-screen bg-black text-white py-20 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="text-center mb-20" variants={headerVariants}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our process.</h1>
          <p className="text-gray-400 text-lg">
            Reliable process for achieving distinctiveness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-zinc-900/50 rounded-lg p-8"
              variants={cardVariants[index]}
            >
              <span className="text-orange-500 text-lg font-medium">
                {step.number}
              </span>
              <h2 className="text-2xl font-bold mt-2 mb-6">{step.title}</h2>
              <ul className="space-y-4">
                {step.items.map((item, i) => (
                  <li key={i} className="text-gray-400">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default OurProcess