
// import { motion, AnimatePresence } from 'framer-motion'
// import { Plus, X } from 'lucide-react'
// import { useState } from 'react'


// function Faq() {
//   const [openIndex, setOpenIndex] = useState(0| null)

//   const faqs = [
//     {
//       question: "What is the logo design process?",
//       answer: "Our design process includes 4 phases: Discovery and Research, Concept Development, Design and Refinement, and Finalisation and Delivery."
//     },
//     {
//       question: "How much does a logo design cost?",
//       answer: "Our logo design packages start from $500 and vary based on complexity, requirements, and timeline. We offer flexible pricing options to suit different budgets and needs."
//     },
//     {
//       question: "How long does it take to design a logo?",
//       answer: "Typically, our logo design process takes 2-4 weeks from start to finish. This timeline ensures we can properly research, conceptualize, and refine your logo design."
//     },
//     {
//       question: "Do you offer custom logo designs or use templates?",
//       answer: "We create 100% custom logo designs tailored to your brand. We never use templates or pre-made designs, ensuring your logo is unique and authentic."
//     },
//     {
//       question: "Can you redesign my existing logo?",
//       answer: "Yes, we offer logo redesign services. We'll work with you to evolve your current logo while maintaining brand recognition and improving its overall design."
//     },
//     {
//       question: "What if I don't like the initial concepts?",
//       answer: "We offer revision rounds as part of our design process. We'll work closely with you to understand your feedback and make necessary adjustments until you're satisfied."
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-black text-white p-6 md:p-12">
//       <div className="max-w-4xl mx-auto">
//         <motion.h1
//           className="text-3xl md:text-4xl font-bold mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Our faqs.
//         </motion.h1>
//         <motion.p
//           className="text-lg md:text-xl text-gray-400 mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           The most common questions we get asked.
//         </motion.p>
        
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="border-b border-gray-800"
//             >
//               <button
//                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                 className="w-full py-6 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
//                 aria-expanded={openIndex === index}
//                 aria-controls={`faq-answer-${index}`}
//               >
//                 <span className={`text-lg md:text-2xl font-medium pr-8 transition-all ${openIndex === index ? 'text-primary' : ''}`}>
//                   {faq.question}
//                 </span>
//                 <motion.span
//                   initial={false}
//                   animate={{ rotate: openIndex === index ? 5 : 0 }}
//                   transition={{ duration: 0.9 }}
//                   className="flex-shrink-0"
//                 >
//                   {openIndex === index ? (
//                     <X className="w-6 h-6 text-primary" />
//                   ) : (
//                     <Plus className="w-6 h-6" />
//                   )}
//                 </motion.span>
//               </button>
              
//               <AnimatePresence>
//                 {openIndex === index && (
//                   <motion.div
//                     id={`faq-answer-${index}`}
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="overflow-hidden"
//                   >
//                     <div className="pb-6 text-gray-400 text-xl md:text-2xl">
//                       {faq.answer}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Faq;


import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(0|null);
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 200], [0, -50]);

  const faqs = [
    {
      question: "What is the logo design process?",
      answer: "Our design process includes 4 phases: Discovery and Research, Concept Development, Design and Refinement, and Finalisation and Delivery."
    },
    {
      question: "How much does a logo design cost?",
      answer: "Our logo design packages start from $500 and vary based on complexity, requirements, and timeline. We offer flexible pricing options to suit different budgets and needs."
    },
    {
      question: "How long does it take to design a logo?",
      answer: "Typically, our logo design process takes 2-4 weeks from start to finish. This timeline ensures we can properly research, conceptualize, and refine your logo design."
    },
    {
      question: "Do you offer custom logo designs or use templates?",
      answer: "We create 100% custom logo designs tailored to your brand. We never use templates or pre-made designs, ensuring your logo is unique and authentic."
    },
    {
      question: "Can you redesign my existing logo?",
      answer: "Yes, we offer logo redesign services. We'll work with you to evolve your current logo while maintaining brand recognition and improving its overall design."
    },
    {
      question: "What if I don't like the initial concepts?",
      answer: "We offer revision rounds as part of our design process. We'll work closely with you to understand your feedback and make necessary adjustments until you're satisfied."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our FAQs.
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The most common questions we get asked.
        </motion.p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-gray-800"
              style={{ y: yRange }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`text-lg md:text-xl font-regular pr-8 transition-all ${openIndex === index ? 'text-primary' : ''}`}>
                  {faq.question}
                </span>
                <motion.span
                  initial={false}
                  animate={{ rotate: openIndex === index ? 5 : 0 }}
                  transition={{ duration: 0.9 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <X className="w-6 h-6 text-primary" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-gray-400 font-thin text-sm md:text-xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
