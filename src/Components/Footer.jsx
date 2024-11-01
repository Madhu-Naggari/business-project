import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Logo from './assets/logoimage.png'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mt-8 flex flex-col justify-center items-center">
                    <img src={Logo} alt="" className='w-20 h-20' />
                    <br />
                    <h1 className="text-purple-500 font-bold text-2xl mb-2">ORCADE HUB</h1>
                    <p className="text-purple-500 mb-4">INNOVATE.CODE.SUCCEED</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="text-white"><FaFacebook /></a>
                        <a href="#" className="text-white"><FaInstagram /></a>
                        <a href="#" className="text-white"><FaTwitter /></a>
                        <a href="#" className="text-white"><FaLinkedin /></a>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-purple-500 font-bold text-lg mb-4">Contact Info</h2>
                        <ul className='flex flex-col gap-2'>
                        <p>Tirupati Urban, Andhra Pradesh, India</p>
                        <p>+91 7093012101 (AJITH)</p>
                        <p>contact@orcadehub.com</p>
                        <p>Opening Hours: 9am - 6pm</p>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-purple-500 font-bold text-lg mb-4">Services</h2>
                        <ul className='flex flex-col gap-2'>
                            <li>Web & Mobile App Development</li>
                            <li>Academic Workshops</li>
                            <li>E-Learning</li>
                            <li>Freelance</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-purple-500 font-bold text-lg mb-4">Company</h2>
                        <ul className='flex flex-col gap-2'>
                            <li>Home</li>
                            <li>Careers</li>
                            <li>About</li>
                            <li>Events</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-purple-500 font-bold text-lg mb-4">Resources</h2>
                        <ul className='flex flex-col gap-2'>
                            <li>Blog</li>
                            <li>eBooks</li>
                            <li>Knowledge Base</li>
                            <li>Testimonials</li>
                            <li>Affiliate Program</li>
                            <li>Strategic Partners</li>
                        </ul>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className='text-center'>
                    2024 ORCADE HUB <br />
                    Terms of Use • Privacy Policy
                </div>
            </div>
        </footer>
    );
};

export default Footer;
