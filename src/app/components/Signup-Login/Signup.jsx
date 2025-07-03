'use client'

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Account created successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md relative">
        <ToastContainer position="top-center" autoClose={3000} />

        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-[#7E57C2] flex items-center justify-center text-white text-xl shadow-md">
            <i className="fas fa-user-plus cursor-pointer"></i>
          </div>
        </div>


        <div className="flex items-center justify-center mb-6">
          <hr className="border-t border-gray-800 flex-grow" />
          <span className="mx-4 text-[#7E57C2] font-semibold text-2xl">Signup</span>
          <hr className="border-t border-gray-800 flex-grow" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="w-1/2 p-3 border rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="w-1/2 p-3 border rounded"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="name@gmail.com"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border rounded pr-10"
              required
            />
            <i
              className={`fas ${
                showPassword ? "fa-eye-slash" : "fa-eye"
              } absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>


          <button
            type="submit"
            className="group relative flex items-center justify-center w-full py-3 px-6 bg-[#7E57C2] text-white font-semibold rounded-full transition-all duration-300 hover:bg-gray-700"
          >
            <span className="z-10">Signup</span>
            <i className="fas fa-arrow-right absolute right-6 top-1/2 -translate-y-1/2 translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-white"></i>
          </button>

          <hr className="border-t border-gray-700 my-4" />

          <p className="text-center text-sm text-gray-600">
            Already a member?{" "}
            <a href="/login" className="text-[#7E57C2] hover:underline font-medium">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
