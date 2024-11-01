import React from 'react';
import { motion } from 'framer-motion';
import Contact from './assets/contact.jpg'
function ContactForm() {
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-center items-center min-h-screen bg-black p-6">
      {/* Image Section - Only visible on large screens */}
      <motion.div
        className="hidden lg:block lg:w-1/2 p-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={Contact}
          alt="Contact Us"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        className="w-full lg:w-1/2 bg-zinc-700/50 text-white p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="w-1/2 p-3 rounded-md bg-gray-700 focus:ring focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="w-1/2 p-3 rounded-md bg-gray-700 focus:ring focus:ring-blue-500 outline-none"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-gray-700 focus:ring focus:ring-blue-500 outline-none"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 rounded-md bg-gray-700 focus:ring focus:ring-blue-500 outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-gray-700 focus:ring focus:ring-blue-500 outline-none"
          ></textarea>
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              className="w-full p-3 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition"
              onClick={() => window.open("https://wa.me/YOUR_PHONE_NUMBER", "_blank")}
            >
              Contact on WhatsApp
            </button>
            <button
              type="submit"
              className="w-full p-3 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
            >
              Contact via Email
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactForm;
