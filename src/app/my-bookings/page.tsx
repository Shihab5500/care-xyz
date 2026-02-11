"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaCalendarCheck, FaMoneyBillWave, FaClock } from "react-icons/fa";

export default function MyBookings() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        try {
          // ইমেইল দিয়ে ডাটাবেস থেকে বুকিং আনা
          const res = await fetch(`/api/booking?email=${user.email}`);
          const data = await res.json();
          setBookings(data);
        } catch (error) {
          console.error("Error fetching bookings:", error);
        }
      }
      setLoading(false);
    };

    fetchBookings();
  }, []);

  if (loading) return <div className="min-h-screen bg-slate-900 pt-24 text-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">My Bookings</h1>

        <div className="grid grid-cols-1 gap-6">
          {bookings.length > 0 ? bookings.map((booking) => (
            <div key={booking._id} className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-lg hover:bg-slate-800 transition-colors">
              
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="bg-purple-600/20 p-4 rounded-xl text-purple-400">
                    <FaCalendarCheck size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">{booking.serviceTitle}</h3>
                    <p className="text-slate-400 text-sm mt-1">Start: {booking.startDate}</p>
                    <div className="flex gap-4 text-sm text-slate-300 mt-2">
                        <span className="flex items-center gap-1"><FaClock /> {booking.duration} Days</span>
                        <span className="flex items-center gap-1"><FaMoneyBillWave /> {booking.totalCost} Tk</span>
                    </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                <span className="px-4 py-2 rounded-full text-sm font-bold bg-yellow-500/20 text-yellow-400">
                    {booking.status}
                </span>
                <button className="btn btn-sm bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white">
                    Cancel
                </button>
              </div>

            </div>
          )) : (
            <div className="text-center py-20 bg-slate-800/30 rounded-3xl">
                <p className="text-slate-500 text-lg mb-4">You have no bookings yet.</p>
                <Link href="/services" className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold">Book a Service Now</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}