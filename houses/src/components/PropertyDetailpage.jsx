import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import map from "/src/assets/map.png";
import agent from "/src/assets/h2.jpg"
export const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await api.get(`/properties/${id}/`);
        setProperty(res.data);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this property?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/properties/${id}/`);
      alert("✅ Property deleted successfully!");
      navigate("/"); // redirect back to list 
    } catch (error) {
      console.error("Delete error:", error);
      alert("❌ Failed to delete property");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!property) return <p className="text-center mt-10">Property not found</p>;

  return (
//     <div className="min-h-screen bg-gray-100 flex justify-center p-6">
//       <div className="max-w-2xl bg-white shadow-lg rounded-xl p-6 space-y-4">

//         <img
//           src={property.image}
//           alt={property.title}
//           className="w-full h-64 rounded-lg object-cover"
//         />

//         <h1 className="text-3xl font-bold">{property.title}</h1>
//         <p className="text-gray-600">{property.description}</p>

//         <div className="grid grid-cols-2 gap-4">
//           <p><strong>Price:</strong> {property.price}</p>
//           <p><strong>Location:</strong> {property.location}</p>
//           <p><strong>Room:</strong> {property.room}</p>
//           <p><strong>Bath:</strong> {property.Bath}</p>
//           <p><strong>Area:</strong> {property.area}</p>
//         </div>

//         {/* ✅ Delete Button */}
//         

//       </div>
//     </div>
<div>
     <img
        src={property.image}
        alt={property.title}
        className="w-full h-72 object-cover"
      />
    <div className="bg-gray-100 min-h-screen p-6 flex justify-center">
  <div>
     
    </div>
  <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl overflow-hidden">

    {/* Image */}
    

    <div className="p-6 space-y-8">

      {/* Title & Location */}
      <div>
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <h1 className="text-gray-600 text-lg">{property.location}</h1>

        <div className="flex gap-6 mt-3 text-xl font-semibold text-green-700">
          <h1>${property.price}</h1>
          <h1>{property.area} sqft</h1>
        </div>
      </div>

      {/* Description */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-700">
          Well constructed {property.area} home is now offering you in Uttara for sale.
        </p>
        <p className="mt-2 text-gray-700">{property.description}</p>
      </div>

      {/* Local Info */}
      <div>
        <p className="text-xl font-semibold mb-2">Local Information</p>
        <img src={map} alt="" className="w-full rounded-lg shadow" />
      </div>

      {/* Home Highlights */}
      {/* Home Highlights */}
<div>
  <h1 className="text-xl font-semibold mb-4">Home Highlights</h1>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

    {/* Parking */}
    <div className="bg-gray-50 p-3 rounded-lg text-center">
      <p className="font-semibold">Parking</p>
      <p className="text-gray-600">
        {property.parkign ? "Yes" : "No"}
      </p>
    </div>

    {/* Outdoor */}
    <div className="bg-gray-50 p-3 rounded-lg text-center">
      <p className="font-semibold">Outdoor</p>
      <p className="text-gray-600">
        {property.outdoor ? "Yes" : "No"}
      </p>
    </div>

    {/* AC */}
    <div className="bg-gray-50 p-3 rounded-lg text-center">
      <p className="font-semibold">A/C</p>
      <p className="text-gray-600">
        {property.ac ? "Yes" : "No"}
      </p>
    </div>

    {/* Year Built */}
    <div className="bg-gray-50 p-3 rounded-lg text-center">
      <p className="font-semibold">Year Built</p>
      <p className="text-gray-600">
        {property.year_built || "No Info"}
      </p>
    </div>

    {/* Price / Sqft */}
    <div className="bg-gray-50 p-3 rounded-lg text-center">
      <p className="font-semibold">Price/Sqft</p>
      <p className="text-gray-600">
        {property.price_sqft ? `$${property.price_sqft}` : "No Info"}
      </p>
    </div>

    {/* Listed */}
    <div className="bg-gray-50 p-3 rounded-lg text-center">
      <p className="font-semibold">Listed</p>
      <p className="text-gray-600">
        {property.Listed ? "Yes" : "No"}
      </p>
    </div>

  </div>
</div>


      {/* Agent Info */}
      <div>
        <h1 className="text-xl font-semibold mb-3">Agent Info</h1>
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
          <img src={agent} alt="" className="w-20 h-20 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-lg">Jesmin Ferndas</p>
            <p className="text-gray-600">jesmin@gmail.com</p>
            <p className="text-gray-600">49983854945934</p>
          </div>
        </div>
        <button           onClick={handleDelete}
          className="w-40 bg-black text-white py-3 rounded-xl font-semibold  transition-all" >Delete Property</button>
          <button   onClick={() => navigate(`/properties/${id}/edit`)}   className="w-40 bg-black ml-2 text-white py-3 rounded-xl font-semibold transition-all" >
          Edit Property
         </button>
      </div>

    </div>
  </div>
</div>
</div>

  );
};
