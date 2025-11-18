import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api"; // your axios instance

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    is_agent: false,
    password: "",
    password2: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/register/", form); // ✅ correct endpoint
      setMessage("Account created successfully!");
      navigate("/login");
    } catch (err) {
      setMessage("Signup failed. Please check your info.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account ✨
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 p-3 rounded-lg w-full outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 p-3 rounded-lg w-full outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 p-3 rounded-lg w-full outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              value={form.password2}
              onChange={(e) => setForm({ ...form, password2: e.target.value })}
              className="border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 p-3 rounded-lg w-full outline-none"
            />
          </div>

          {/* Agent Checkbox */}
          <div className="flex items-center gap-3">
          
            <input
              type="checkbox"
              checked={form.is_agent}
              onChange={(e) =>
                setForm({ ...form, is_agent: e.target.checked })
              }
              className="h-5 w-5 accent-orange-600"
            />
            <label className="text-gray-700">Register as Agent?</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {message && (
          <p
            className={`text-center mt-4 font-medium ${
              message.includes("success") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center text-gray-500 mt-6 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-orange-600 hover:underline font-semibold"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
