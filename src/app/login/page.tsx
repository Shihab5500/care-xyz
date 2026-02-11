
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

const Login = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.status === 200) {
        const data = await res.json();
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/"; 
      } else {
        setError("Invalid email or password");
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
      setError("Google Login Failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-24 px-4">
       {/* Background Elements */}
       <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
       <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-white mb-2">Welcome Back</h2>
          <p className="text-slate-400 text-sm">Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <FaEnvelope className="absolute left-4 top-4 text-slate-400" />
            <input type="email" className="w-full pl-11 pr-4 py-3.5 bg-slate-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500" placeholder="Email Address" required />
          </div>
          <div className="relative group">
            <FaLock className="absolute left-4 top-4 text-slate-400" />
            <input type="password" className="w-full pl-11 pr-4 py-3.5 bg-slate-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500" placeholder="Password" required />
          </div>

          {error && <p className="text-red-400 text-center text-sm">{error}</p>}

          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg">
            Sign In
          </motion.button>
        </form>

        <div className="mt-8">
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-slate-500 border-t border-white/10 w-full text-center pt-4">Or continue with</span>
            </div>
            <button onClick={handleGoogleLogin} className="mt-6 w-full flex items-center justify-center gap-3 bg-white text-slate-900 font-bold py-3.5 px-4 rounded-xl hover:bg-slate-100 transition-colors">
                <FaGoogle className="text-red-500 text-xl" /> Google
            </button>
        </div>

        <p className="mt-8 text-center text-slate-400 text-sm">
          Don't have an account? <Link href="/register" className="font-bold text-purple-400 ml-1">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;