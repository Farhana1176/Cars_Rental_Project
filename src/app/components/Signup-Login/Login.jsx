"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login successful!");
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    toast.info(`Password reset link sent to ${resetEmail}`);
    setResetEmail("");
    setShowForgotModal(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md relative">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-[#7E57C2] flex items-center justify-center text-white text-xl shadow-md">
            <i className="fas fa-user cursor-pointer"></i>
          </div>
        </div>

        <div className="flex items-center justify-center mb-6">
          <hr className="border-t border-gray-700 flex-grow" />
          <span className="mx-4 text-[#7E57C2] text-2xl font-semibold">
            Login
          </span>
          <hr className="border-t border-gray-700 flex-grow" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="name@gmail.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border rounded"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-3 border rounded pr-10"
              required
            />
            <i
              className={`fas ${
                showPassword ? "fa-eye-slash" : "fa-eye"
              } absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <button
              type="button"
              className="text-[#7E57C2] hover:underline"
              onClick={() => setShowForgotModal(true)}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="group relative flex items-center justify-center w-full py-3 px-6 bg-[#7E57C2] text-white font-semibold rounded-full transition-all duration-300 hover:bg-black"
          >
            <span className="z-10">Login</span>
            <i className="fas fa-arrow-right absolute right-6 top-1/2 -translate-y-1/2 translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-white"></i>
          </button>

          <hr className="border-t border-gray-700 my-4" />

          <p className="text-center text-sm text-gray-600">
            Not a member?{" "}
            <a
              href="/signup"
              className="text-[#7E57C2] hover:underline font-medium"
            >
              Signup
            </a>
          </p>
        </form>
      </div>

      {/* Forgot Password Dialog */}
      {showForgotModal && (
        <div className="fixed inset-0 bg-purple-300 bg-opacity-40 backdrop-blur-lg flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <div className="relative mb-4 w-full">
              <h3 className="text-lg font-semibold text-[#7E57C2] text-center">
                Reset Password
              </h3>
              <i
                className="fas fa-times cursor-pointer text-[#7E57C2] hover:text-black text-xl absolute right-0 top-1/2 -translate-y-1/2"
                onClick={() => setShowForgotModal(false)}
              ></i>
            </div>

            <form onSubmit={handleForgotSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="w-full p-3 border rounded"
                required
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="group relative flex items-center justify-center px-8 py-2 bg-[#7E57C2] text-white font-medium rounded-md transition-all duration-300 hover:bg-black"
                >
                  <span className="z-10">Reset Password</span>
                  <i className="fas fa-arrow-right absolute right-4 top-1/2 -translate-y-1/2 translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-white"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
