import React from "react";
import { Link } from "react-router-dom";

export const PropertyCard = ({ id,image, location, room, Bath, area, type, price }) => {
  return (
    <div className="bg-white w-[300px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
      <img
        src={image}
        alt={location}
        className="w-full h-52 object-cover"
      />

      <div className="p-5 space-y-3">
        <p className="text-gray-700 font-semibold">{location}</p>

        <div className="flex justify-between text-sm text-gray-500">
          <div>
            <p><i className="fa fa-bed mr-2" aria-hidden="true"></i>
{room} Bed Room</p>
            <p><i className="fa fa-shower mr-2" aria-hidden="true"></i>{Bath} Bath</p>
          </div>
          <div className="text-right">
            <p><i class="fa fa-area-chart pr-2" aria-hidden="true"></i>
{area} sqft


</p>
            <p><i className="fa fa-users pr-2" aria-hidden="true"></i>
Family</p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <Link
        to={`/property/${id}`}>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-orange-600 transition-all">
            View Details
          </button>
          </Link>
          <p className="text-lg font-bold text-gray-800">${price}</p>
        </div>
      </div>
    </div>
  );
};
