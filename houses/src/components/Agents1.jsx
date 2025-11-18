import React from 'react'
import HeroSlider from './HeroSlider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Agents1 = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 px-6 md:px-16 py-20 ">
    
    <div className="md:w-1/2 space-y-5">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        Easy & Simple Way to Find Your Dream Appointment
      </h1>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ullam consequuntur placeat nesciunt omnis nulla ad labore! 
        Aut saepe unde quasi magni modi, doloremque adipisci sapiente, voluptate iusto nostrum nemo.
      </p>
      <button className="bg-black text-white text-sm md:text-base font-medium px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300">
        View Details
      </button>
    </div>

    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
      <img
        src="/src/assets/banner.png"
        alt="Appointment Banner"
        className="w-full max-w-md rounded-xl object-cover"
      />
    </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 px-6 md:px-16 py-20 ">
    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
      <img
        src="/src/assets/banner2.png"
        alt="Appointment Banner"
        className="w-full max-w-md rounded-xl object-cover"
      />
    </div>
    <div className="md:w-1/2 space-y-5">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        Easy & Simple Way to Find Your Dream Appointment
      </h1>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ullam consequuntur placeat nesciunt omnis nulla ad labore! 
        Aut saepe unde quasi magni modi, doloremque adipisci sapiente, voluptate iusto nostrum nemo.
      </p>
      <button className="bg-black text-white text-sm md:text-base font-medium px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300">
        View Details
      </button>
    </div>


    
        </div>
        <div>
      <HeroSlider />
    </div>
    </div>
  )
}
