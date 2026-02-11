"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    setMounted(true); 
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  
  if (!mounted) return null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Care.xyz
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all">Home</Link>
              <Link href="/services" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all">Services</Link>
              <Link href="/about" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all">About Us</Link>
              
              {user && (
                <Link href="/my-bookings" className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all">
                  My Bookings
                </Link>
              )}
            </div>
          </div>

          <div className="hidden md:block">
            {user ? (
              <div className="flex items-center gap-4">
                  <span className="text-purple-400 text-sm font-bold">Hi, {user.name}</span>
                  <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Logout
                  </button>
              </div>
            ) : (
              <Link href="/login" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-purple-500/30 transition-all">
                Login
              </Link>
            )}
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10 animate-in slide-in-from-top-5 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
            
            {user ? (
                <>
                <Link href="/my-bookings" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">My Bookings</Link>
                <button onClick={handleLogout} className="w-full text-left text-red-400 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Logout</button>
                </>
            ) : (
               <Link href="/login" onClick={() => setIsOpen(false)} className="mt-4 w-full text-center block bg-purple-600 text-white px-3 py-3 rounded-md text-base font-bold">Login Now</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;