

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

const Register = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.status === 400) {
        setError("Email already exists.");
      } else if (res.status === 201) {
        const data = await res.json();
        // ১. অটো লগইন: লোকাল স্টোরেজে সেভ
        localStorage.setItem("user", JSON.stringify(data.user));
        // ২. রিডাইরেক্ট
        window.location.href = "/";
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      const userData = {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        id: user.uid
      };
      
      localStorage.setItem("user", JSON.stringify(userData));
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      setError("Google Login Failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900 pt-24 px-4 overflow-hidden">
       {/* Background Animation */}
       <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
       <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative group">
            <FaUser className="absolute left-4 top-4 text-slate-400" />
            <input type="text" className="w-full pl-11 pr-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500" placeholder="Full Name" required />
          </div>
          <div className="relative group">
            <FaEnvelope className="absolute left-4 top-4 text-slate-400" />
            <input type="email" className="w-full pl-11 pr-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500" placeholder="Email Address" required />
          </div>
          <div className="relative group">
            <FaLock className="absolute left-4 top-4 text-slate-400" />
            <input type="password" className="w-full pl-11 pr-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500" placeholder="Password" required />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all">
            Register
          </button>
        </form>

        <div className="mt-6">
           <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 font-bold py-3 px-4 rounded-xl hover:bg-slate-100 transition-colors">
              <FaGoogle className="text-red-500 text-lg" /> Sign up with Google
           </button>
        </div>

        <p className="mt-6 text-center text-slate-400 text-sm">
          Already have an account? <Link href="/login" className="font-bold text-blue-400 ml-1">Login</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;