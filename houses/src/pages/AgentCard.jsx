import React from "react";
import { Link } from "react-router-dom";

export const AgentCard = ({ username,id,email, profile_image }) => {
  return (
    <div className="bg-white w-[250px] h-[350px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
      <img
        src={profile_image || "/src/assets/default.jpg"} // fallback image
        alt={username}
        className="w-full h-40 object-cover"
      />

      <div className="p-5 space-y-3">
        <p className="text-gray-800 font-bold text-lg">{username}</p>
        <p className="text-gray-500 text-sm">{email}</p>

        <div className="flex justify-between text-sm text-yellow-500">
          <div>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
           <Link
        to={`/agent/${id}`}>
          <button className="text-black w-full border border-black text-sm px-4 py-2 rounded-lg hover:text-white hover:bg-black transition-all">
            View Profile
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
