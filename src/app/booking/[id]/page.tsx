"use client";
import React, { useState, useEffect, use } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from 'sweetalert2'; 
import { useRouter } from "next/navigation";

const services = [
  { id: 1, title: "Child Care", price: 500 },
  { id: 2, title: "Elderly Care", price: 800 },
  { id: 3, title: "Medical Support", price: 1000 },
  { id: 4, title: "Physiotherapy", price: 1200 }
];

export default function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  
  const service = services.find(s => s.id === Number(id));
  
  const [duration, setDuration] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    if (service) {
      setTotalCost(service.price * duration);
    }
  }, [duration, service]);

  const handleBooking = async (e: any) => {
    e.preventDefault();

    if (!user) {
      Swal.fire('Login Required', 'Please login to book a service', 'warning');
      router.push('/login');
      return;
    }

    const bookingData = {
      userEmail: user.email,
      serviceTitle: service?.title,
      price: service?.price,
      duration: duration,
      totalCost: totalCost,
      startDate: e.target[0].value, 
      address: e.target[2].value,   
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (res.status === 201) {
        
        Swal.fire({
          title: 'Booking Confirmed!',
          text: 'Your service has been booked successfully.',
          icon: 'success',
          confirmButtonColor: '#9333ea',
          confirmButtonText: 'Go to My Bookings'
        }).then((result) => {
          if (result.isConfirmed) {
            router.push('/my-bookings'); 
          }
        });
      }
    } catch (error) {
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };

  if (!service) return <div className="text-white text-center pt-32">Service not found</div>;

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-white mb-6">Book {service.title}</h2>
          
          <form onSubmit={handleBooking} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                    <label className="label text-slate-300 font-semibold mb-2 block">Start Date</label>
                    <div className="relative">
                        <FaCalendarAlt className="absolute left-4 top-4 text-slate-400" />
                        <input type="date" className="w-full bg-slate-900 border border-white/10 rounded-xl py-3 pl-12 text-white focus:outline-none focus:border-purple-500" required />
                    </div>
                </div>
                
                <div className="form-control">
                    <label className="label text-slate-300 font-semibold mb-2 block">Duration (Days)</label>
                    <div className="relative">
                        <FaClock className="absolute left-4 top-4 text-slate-400" />
                        <input type="number" min="1" value={duration} onChange={(e) => setDuration(parseInt(e.target.value))} className="w-full bg-slate-900 border border-white/10 rounded-xl py-3 pl-12 text-white focus:outline-none focus:border-purple-500" required />
                    </div>
                </div>
            </div>

            <div className="form-control">
                <label className="label text-slate-300 font-semibold mb-2 block">Full Address</label>
                <textarea className="w-full bg-slate-900 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-purple-500 h-24" placeholder="House No, Road No, Details..." required></textarea>
            </div>

            <button className="w-full btn bg-purple-600 hover:bg-purple-700 text-white border-none py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-purple-500/40 mt-4">
                Confirm Booking
            </button>
          </form>
        </div>

        <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/5 h-fit">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Summary</h3>
            <div className="space-y-4 text-slate-300">
                <div className="flex justify-between"><span>Rate</span><span className="font-semibold text-white">{service.price} Tk/Day</span></div>
                <div className="flex justify-between"><span>Duration</span><span className="font-semibold text-white">{duration} Days</span></div>
                <div className="divider bg-white/10 h-[1px] my-4"></div>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">Total</span>
                    <span className="text-2xl font-bold text-purple-400">{totalCost} Tk</span>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
}