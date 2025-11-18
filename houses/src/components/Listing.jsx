import React, { useEffect, useState } from "react";
import map from "/src/assets/map.png";
import { PropertyCard } from "../pages/PropertyCard";
import axios from 'axios'
import API from "../api";

export const Listing = () => {

const[properties,setproperties]=useState([])
 useEffect(()=>{
  async function getAllProperty(){
    try{
      const properties= await API.get("/properties/")
      console.log(properties.data,'propertyproperty')
      setproperties(properties.data)

    }catch(error){
      console.log(error)
    }
      
  }
  getAllProperty()
 },[])



  const [filters, setFilters] = useState({
    type: "",
    price: "",
    beds: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

 

  return (
    <div className="w-full mt-[50px]">
      {/* Filter Bar */}
      <div className="w-full bg-white p-4 flex flex-wrap items-center justify-center gap-4 md:gap-6">
        <input
          type="text"
          placeholder="Search location or property..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Buy/Sell/Rent</option>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
          <option value="rent">Rent</option>
        </select>

        <select
          name="price"
          value={filters.price}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-40 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Price Range</option>
          <option value="0-100000">0 - 1 Lac</option>
          <option value="100000-500000">1 Lac - 5 Lac</option>
          <option value="500000-1000000">5 Lac - 10 Lac</option>
          <option value="1000000+">10 Lac+</option>
        </select>

        <select
          name="beds"
          value={filters.beds}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Beds</option>
          <option value="1">1 Bed</option>
          <option value="2">2 Beds</option>
          <option value="3">3 Beds</option>
          <option value="4+">4+ Beds</option>
        </select>

        <button className="border border-gray-400 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          + Add More
        </button>
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
          Search
        </button>
      </div>

      {/* Map + Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Left Side: Map */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={map}
            alt="Map"
            className="w-[450px] h-[600px] rounded-lg shadow-md"
          />
        </div>

        {/* Right Side: Property Cards */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Top two cards side by side */}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {properties.slice(0, 2).map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>

          {/* Remaining four cards below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {properties.slice(2).map((property, index) => (
              <PropertyCard key={index + 2} {...property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
