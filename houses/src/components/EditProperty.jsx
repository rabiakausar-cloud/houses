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
    parking: false,
    ac: false,
    outdoor: false,
    price_sqft: "",
    year_built: "",
    Listed: false,
    image: null,
  });

  const [preview, setPreview] = useState(null);

  // Load property
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
          parking: data.parking,
          ac: data.ac,
          outdoor: data.outdoor,
          price_sqft: data.price_sqft,
          year_built: data.year_built,
          Listed: data.Listed,
          image: null, // keep null because patch only needs new image
        });

        setPreview(data.image);
      } catch (err) {
        console.error(err);
      }
    };

    loadData();
  }, [id]);

  // Input change handler
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, image: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Update API call
  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = new FormData();

    // Append only non-empty fields
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== "" && value !== undefined) {
        data.append(key, value);
      }
    });

    try {
      await api.patch(`/properties/${id}/`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Property updated successfully!");
      navigate(`/properties/${id}`);
    } catch (err) {
      console.log(err);
      alert("❌ Update failed. Check console.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleUpdate}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg space-y-5"
      >
        <h2 className="text-3xl text-center font-bold">Edit Property</h2>

        {preview && (
          <img
            src={preview}
            className="w-full h-56 object-cover rounded-lg shadow"
            alt="Preview"
          />
        )}

        {/* Text fields */}
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
            placeholder="Rooms"
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
          placeholder="Price per sq ft"
        />

        <input
          type="date"
          name="year_built"
          className="w-full border p-3 rounded-lg"
          value={formData.year_built}
          onChange={handleChange}
        />

        {/* Checkboxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            ["parking", "Parking"],
            ["ac", "AC"],
            ["outdoor", "Outdoor"],
            ["Listed", "Listed"],
          ].map(([name, label]) => (
            <label key={name} className="flex gap-2 items-center">
              <input
                type="checkbox"
                name={name}
                checked={formData[name]}
                onChange={handleChange}
              />
              {label}
            </label>
          ))}
        </div>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-xl font-semibold "
        >
          Update Property
        </button>
      </form>
    </div>
  );
};
