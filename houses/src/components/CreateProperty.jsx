import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

export const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    room: "",
    Bath: "",
    area: "",
    image: null,
    parkign: false,     // ✅ spell exactly like model
    ac: false,
    outdoor: false,
    price_sqft: "",
    year_built: "",
    Listed: false,
  });

  const [preview, setPreview] = useState(null);

  // ✅ Load property details
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await api.get(`/properties/${id}/`);
        const data = res.data;

        setFormData({
          title: data.title,
          description: data.description,
          price: data.price,
          location: data.location,
          room: data.room,
          Bath: data.Bath,
          area: data.area,
          image: null,
          parkign: data.parkign,   // ✅ match spell
          ac: data.ac,
          outdoor: data.outdoor,
          price_sqft: data.price_sqft,
          year_built: data.year_built,
          Listed: data.Listed,
        });

        setPreview(data.image);
      } catch (err) {
        console.error(err);
      }
    };

    loadData();
  }, [id]);

  // ✅ Handle all input types
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (files) {
      setPreview(URL.createObjectURL(files[0]));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Submit update request
  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await api.patch(`/properties/${id}/`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Property updated!");
      navigate(`/properties/${id}`);
    } catch (err) {
      console.log(err);
      alert("❌ Update failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleUpdate}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg space-y-5"
      >
        <h2 className="text-3xl font-bold text-center mb-4">
          Edit Property
        </h2>

        {/* ✅ Preview Image */}
        {preview && (
          <img
            src={preview}
            className="w-full h-56 object-cover rounded-lg mb-4 shadow"
            alt="Preview"
          />
        )}

        <input
          type="text"
          name="title"
          className="w-full border p-3 rounded-lg"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
        />

        <textarea
          name="description"
          className="w-full border p-3 rounded-lg"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <input
          type="number"
          name="price"
          className="w-full border p-3 rounded-lg"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <input
          type="text"
          name="location"
          className="w-full border p-3 rounded-lg"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="room"
            className="border p-3 rounded-lg"
            value={formData.room}
            onChange={handleChange}
            placeholder="Room"
          />

          <input
            type="text"
            name="Bath"
            className="border p-3 rounded-lg"
            value={formData.Bath}
            onChange={handleChange}
            placeholder="Bath"
          />
        </div>

        <input
          type="text"
          name="area"
          className="w-full border p-3 rounded-lg"
          value={formData.area}
          onChange={handleChange}
          placeholder="Area (sq ft)"
        />

        <input
          type="text"
          name="price_sqft"
          className="w-full border p-3 rounded-lg"
          value={formData.price_sqft}
          onChange={handleChange}
          placeholder="Price per Sq Ft"
        />

        <input
          type="date"
          name="year_built"
          className="w-full border p-3 rounded-lg"
          value={formData.year_built}
          onChange={handleChange}
        />

        {/* ✅ Boolean Checkboxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="parkign"
              checked={formData.parkign}
              onChange={handleChange}
            />
            Parking
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="ac"
              checked={formData.ac}
              onChange={handleChange}
            />
            AC
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="outdoor"
              checked={formData.outdoor}
              onChange={handleChange}
            />
            Outdoor
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="Listed"
              checked={formData.Listed}
              onChange={handleChange}
            />
            Listed
          </label>
        </div>

        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
        >
          Update Property
        </button>
      </form>
    </div>
  );
};
