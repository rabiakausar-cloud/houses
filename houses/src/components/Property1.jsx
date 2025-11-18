// src/components/PropertyList.jsx
import React from "react";
import { PropertyCard } from "../pages/PropertyCard";
export const Property1= () => {
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
    <div className="bg-[#fffaf7] min-h-screen py-12 px-20">
      <h2 className="text-3xl mt-4 font-bold text-gray-800 mb-10 text-center">
        Featured Properties
      </h2>

    <div className="flex flex-wrap justify-center gap-8">
    {properties.map((property, index) => (
      <PropertyCard key={index} {...property} />
    ))}
  </div>
    </div>
  );
};
