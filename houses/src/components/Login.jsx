import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { Outlet, Link} from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("token/", form);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      setMessage("Login successful!");
      navigate("/");
    } catch (err) {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  from-blue-100 via-white to-blue-50">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please sign in to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg w-full outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg w-full outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-orange-400 transition duration-300"
          >
            Sign In
          </button>
        </form>

        {message && (
          <p
            className={`text-center mt-4 font-medium ${
              message === "Login successful!"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center text-gray-500 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" >
          <a
            href="/signup"
            className="text-blue-600 hover:underline font-semibold"
          >
            Create one
          </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
