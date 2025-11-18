import React from 'react'
import  banner from "/src/assets/home.png"
import profile from "/src/assets/ban1.jpg"
import { Property1 } from './Property1'
import { PropertyCard } from "../pages/PropertyCard";

export const Blog = () => {
    const properties = [
    {
      image: "/src/assets/house1.jpg",
      address: "123 Fake Rd, New York, NY 11201, USA",
      bed: 3,
      bath: 1,
      size: "10,345",
      type: "Family",
      price: "649,000",
    },
    {
      image: "/src/assets/h2.jpg",
      address: "45 Green St, Los Angeles, CA 90001, USA",
      bed: 4,
      bath: 2,
      size: "12,100",
      type: "Modern",
      price: "720,000",
    },
    {
      image: "/src/assets/h3.jpg",
      address: "99 Ocean Dr, Miami, FL 33139, USA",
      bed: 5,
      bath: 3,
      size: "15,200",
      type: "Beach",
      price: "1,200,000",
    },
    {
      image: "/src/assets/h4.jpg",
      address: "11 Hill Rd, San Francisco, CA 94102, USA",
      bed: 2,
      bath: 1,
      size: "8,450",
      type: "Apartment",
      price: "540,000",
    },
    {
      image: "/src/assets/h5.jpg",
      address: "8 River Ave, Chicago, IL 60601, USA",
      bed: 3,
      bath: 2,
      size: "9,000",
      type: "Classic",
      price: "615,000",
    },
    {
      image: "/src/assets/h6.jpg",
      address: "77 Maple Ln, Houston, TX 77001, USA",
      bed: 4,
      bath: 3,
      size: "11,000",
      type: "Luxury",
      price: "830,000",
    },
  ];

  return (
<div className="relative w-full bg-white  overflow-hidden">
  <div className="w-full">
    <img src={banner} alt="" className="h-52 w-full object-cover" />
  </div>

  <div className="absolute left-6 top-32">
    <img
      src={profile}
      alt=""
      className="rounded-lg w-40 h-44 border-4 border-white shadow-lg object-cover"
    />
  </div>

  <div className="mt-20 pl-48 pb-6 pr-6 flex justify-between items-center">
    <div>
      <p className="text-xl font-bold text-gray-800">Jack Wilson</p>
      <p className="text-gray-600">021 444444449</p>
    </div>

    <div className="flex flex-col gap-2 mt-2 text-sm text-gray-500">
      <div className="text-yellow-500">
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </div>
          <p className="text-gray-600 mt-2">jack@gmail.com</p>

    </div>
    <button className="bg-black text-white text-sm md:text-base font-medium px-5 py-2 rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300">Contact</button>


  </div>
  
    <div className="flex flex-wrap justify-center gap-8 mb-10">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
    {/* profile */}
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
  <div className="shadow-lg w-[90%] my-10 md:w-[80%] lg:w-[70%] bg-white shadow-gray-300 p-10 flex flex-row justify-between items-start rounded-xl gap-20">
    
    {/* ===== Left Side: Profile Section ===== */}
    <div className="flex flex-col items-center w-2/6 text-center">
      <img
        src={profile}
        alt="profile"
        className="w-48 h-52 object-cover rounded-lg shadow-md mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-800">Jack Welson</h1>
      <p className="text-gray-600">021 444444449</p>

      <div className="text-yellow-500 flex gap-1 my-2">
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed mt-4 mb-4 px-2">
        Jack Welson is a highly skilled real estate agent known for his professionalism and dedication.
        With years of experience helping clients find their dream homes, Jack combines market knowledge
        with personalized service to ensure every transaction is smooth and successful.
      </p>

      <button className="bg-black text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300">
        Contact
      </button>
    </div>

    {/* ===== Right Side: All Details Together ===== */}
    <div className="flex flex-col w-2/6 gap-5">
      <div>
        <h1 className="font-semibold text-gray-800">Experience</h1>
        <p className="text-gray-600">1 Year Experience</p>
      </div>

      <div>
        <h1 className="font-semibold text-gray-800">Property Type</h1>
        <p className="text-gray-600">Private House, Villas, Apartment</p>
      </div>

      <div>
        <h1 className="font-semibold text-gray-800">Area</h1>
        <p className="text-gray-600">California, San Jose, Miami</p>
      </div>

      <div>
        <h1 className="font-semibold text-gray-800">Address</h1>
        <p className="text-gray-600">59, Orchid, California</p>
      </div>

      <div>
        <h1 className="font-semibold text-gray-800">License</h1>
        <p className="text-gray-600">BF-8789</p>
      </div>

      <div>
        <h1 className="font-semibold text-gray-800">Website</h1>
        <p className="text-gray-600">jack@gmail.com</p>
      </div>

      <div>
        <h1 className="font-semibold text-gray-800">Socials</h1>
        <div className="flex gap-4 text-gray-600 text-lg mt-2">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  </div>
</div>

  
</div>

  )
}
