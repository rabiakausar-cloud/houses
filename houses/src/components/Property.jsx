import React, { useState } from "react";
import api from "../api";

export const Property = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    room: "",
    Bath: "",
    area: "",
    image: null,
    parking: false,
    ac: false,
    outdoor: false,
    Listed: false,
    price_sqft: "",
    year_built: "",
  });

  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const res = await api.post("/properties/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Created:", res.data);
      setMessage("✅ Property created successfully!");

      // Reset form
      setFormData({
        title: "",
        description: "",
        price: "",
        location: "",
        room: "",
        Bath: "",
        area: "",
        image: null,
        parking: false,
        ac: false,
        outdoor: false,
        Listed: false,
        price_sqft: "",
        year_built: "",
      });
      setPreview(null);
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to create property");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">Create Property</h2>

        {/* ✅ Image Preview */}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg shadow"
          />
        )}

        {/* ✅ Title */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        {/* ✅ Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        {/* ✅ Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        {/* ✅ Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        {/* ✅ Room + Bath */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="room"
            placeholder="Room"
            value={formData.room}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="Bath"
            placeholder="Bath"
            value={formData.Bath}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
        </div>

        {/* ✅ Area */}
        <input
          type="text"
          name="area"
          placeholder="Area (e.g. 5 Marla)"
          value={formData.area}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        {/* ✅ Price per sq ft */}
        <input
          type="text"
          name="price_sqft"
          placeholder="Price Per Sq Ft"
          value={formData.price_sqft}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        {/* ✅ Year Built */}
        <input
          type="date"
          name="year_built"
          value={formData.year_built}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        {/* ✅ Checkboxes */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="parking"
              checked={formData.parking}
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

        {/* ✅ Image Upload */}
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full border p-2 rounded-lg bg-gray-50"
        />

        {/* ✅ Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-orange-400 transition-all"
        >
          Submit
        </button>

        <p className="text-center font-medium mt-3">{message}</p>
      </form>
    </div>
  );
};
