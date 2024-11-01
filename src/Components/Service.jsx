import React from "react"
import { courses } from "../Components/assets/data/dummydata"
import { FaBook } from "react-icons/fa"
import { AiFillStar } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import Cardlogo from '../Components/assets/images/hero.png'
 const Service = () => {
  return (
    <>
      <section className='courses bg-black text-white py-16 '>
        <div className='w-4/5 m-auto'>
          <div className='heading mb-16'>
            <h1 className='text-3xl md:text-4xl font-semibold text-white'>
              Find The Right <br />
              Online Course For You
            </h1>
            <span className='text-sm mt-2 block'>you don't have to struggle alone, you've got our assistance and help.</span>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {courses.map((item) => (
              <div className='box rounded-lg shadow-shadow1 bg-zinc-900/50 text-white'>
                <div className='images rounded-t-lg relative overflow-hidden h-40 w-ful'>
                  <img src={item.cover} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 border-collapse duration-300' />
                </div>
                <div className='text p-3'>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                      <FaBook />
                      <span className='text-[14px] ml-2'> 10 lessons</span>
                    </div>
                    <div className='flex items-center'>
                      <AiFillStar className='text-orange-500' />
                      <span className='text-[14px] ml-2'> 4.50(2)</span>
                    </div>
                  </div>
                  <h3 className='text-white my-4 font-medium h-10'>{item.title}</h3>
                  <div className='user flex items-center'>
                    <img className='rounded-full w-8 h-8' src={Cardlogo} alt='' />
                    <span className='text-[14px] ml-2'>Madhu</span>
                  </div>
                </div>
                <div to='/' className='flex items-center justify-between border-t border-zinc-700/50 p-3'>
                  <span className='text-sm text-primary'></span>
                  <NavLink className='text-[14px] ml-2 flex items-center'>
                    Know Details <HiOutlineArrowNarrowRight />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Service;