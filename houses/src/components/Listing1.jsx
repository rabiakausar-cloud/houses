import React from 'react'
import { Button } from '../pages/button'
export const Listing1 = () => {
return (
   <div className='h-full'>
     <div className="flex flex-col  md:flex-row px-20 justify-around items-center h-screen bg-white  py-8">

     
      <div className="bg-[#ffe0ce] w-full md:w-1/2 h-[450px] rounded-2xl shadow-lg flex flex-col justify-center items-start px-10 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Simple & Easy Way to Find Your Dream Appointment
        </h1>
        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Similique, accusantium?
        </p>
        <Button
          label="Get Started"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all"
        />
      </div>

     
      <div className=" w-full md:w-1/2 h-[450px]  mt-8 md:mt-0 flex flex-col justify-center items-center p-6">
        <div className="grid grid-cols-2 gap-4 w-full">
          
          <div className="flex flex-col items-center h-[215px] w-[230px] justify-center bg-[#fcede6] p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <i className="fa fa-search text-3xl text-orange-500 mb-3"></i>
            <p className="font-semibold ">Search Your Location</p>
          </div>

        
          <div className="flex flex-col items-center h-[215px] w-[230px] justify-center bg-[#fcede6] p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <i className="fa fa-crosshairs text-3xl text-orange-500 mb-3"></i>
            <p className="font-semibold ">Visit Appointment</p>
          </div>

          
          <div className="flex flex-col items-center h-[215px] w-[230px] justify-center bg-[#fcede6] p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <i className="fa fa-home text-3xl text-orange-500 mb-3"></i>
            

            <p className="font-semibold ">Get Your Dream House</p>
          </div>

          <div className="flex flex-col items-center h-[215px] w-[230px] justify-center bg-[#fcede6] p-6 rounded-xl shadow hover:scale-105 transition-transform">
            <i class="fa fa-cloud text-3xl text-orange-500 mb-3" aria-hidden="true"></i>
            <p className="font-semibold ">Enjoy Your Dream</p>
          </div>
        </div>
      </div>
      
    </div>
    <div className="bg-[#fffaf7] flex flex-wrap gap-28 justify-center items-center py-12 px-20 text-center">
      
      <div className="flex flex-col items-center m-6">
       <i class="fa fa-copyright text-3xl text-orange-500 mb-3" aria-hidden="true"></i>

        <h1 className="text-2xl font-bold ">$15.4M</h1>
        <p className="text-gray-600">Owned from</p>
        <p className="text-gray-800 ">Property Transactions</p>
      </div>

      <div className="flex flex-col items-center m-6">
        <i class="fa fa-podcast text-3xl text-orange-500 mb-3" aria-hidden="true"></i>


        <h1 className="text-2xl font-bold ">25K</h1>
        <p className="text-gray-600">Property for BUY & SELL</p>
        <p className="text-gray-800 ">Successfully</p>
      </div>

      <div className="flex flex-col items-center m-6">
        <i class="fa fa-fire text-3xl text-orange-500 mb-3" aria-hidden="true"></i>
        <h1 className="text-2xl font-bold ">500</h1>
        <p className="text-gray-600">Daily Complete</p>
        <p className="text-gray-800 ">Transactions</p>
      </div>

      <div className="flex flex-col items-center m-6">
        <i class="fa fa-user text-orange-500 mb-3 text-3xl" aria-hidden="true"></i>

        <h1 className="text-2xl font-bold ">600+</h1>
        <p className="text-gray-800 font-medium">Regular Clients</p>
      </div>
    </div>
    <div>
      
    </div>
   </div>
  );
};