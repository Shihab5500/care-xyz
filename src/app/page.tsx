


import Link from "next/link";
import { FaUserPlus, FaSmile, FaAward } from "react-icons/fa";

// ডামি সার্ভিস ডেটা
const services = [
  { id: 1, title: "Child Care", description: "Trusted babysitters for your peace of mind.", image: "https://img.freepik.com/free-photo/medium-shot-mother-holding-baby_23-2149154627.jpg", price: "500" },
  { id: 2, title: "Elderly Care", description: "Compassionate assistance for senior citizens.", image: "https://img.freepik.com/free-photo/nurse-helping-senior-woman-walk_23-2148740051.jpg", price: "800" },
  { id: 3, title: "Medical Support", description: "Professional nursing for sick family members.", image: "https://img.freepik.com/free-photo/young-doctor-supporting-senior-patient_23-2148962319.jpg", price: "1000" }
];

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200">
      
      {/* 1. Hero / Banner Section */}
      <div className="hero min-h-[85vh] relative flex items-center justify-center bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/happy-family-playing-park_1098-1547.jpg)' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center max-w-3xl px-4 animate-in fade-in zoom-in duration-1000">
          <h1 className="mb-6 text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Reliable Care for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Your Family</span>
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Professional babysitting, elderly care, and patient support at your doorstep. Verified professionals ensuring safety and comfort.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/services" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-purple-500/50">Book Now</Link>
            <Link href="/about" className="px-8 py-3 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold rounded-full transition-all">Learn More</Link>
          </div>
        </div>
      </div>

     
      <section className="py-12 bg-slate-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
                <FaUserPlus className="text-4xl text-purple-400 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white">500+</h3>
                <p className="text-slate-400">Verified Caregivers</p>
            </div>
            <div className="p-6 border-x border-white/5">
                <FaSmile className="text-4xl text-blue-400 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white">2000+</h3>
                <p className="text-slate-400">Happy Families</p>
            </div>
            <div className="p-6">
                <FaAward className="text-4xl text-yellow-400 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white">4.9/5</h3>
                <p className="text-slate-400">Average Rating</p>
            </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Premium Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border border-white/5">
              <figure className="relative h-64 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </figure>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <p className="text-purple-400 font-bold text-lg">From ৳ {service.price}</p>
                  <Link href={`/services/${service.id}`} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold rounded-lg transition-colors">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

     
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">What Parents Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-white/5 relative">
                        <div className="text-yellow-500 text-xl mb-4">★★★★★</div>
                        <p className="text-slate-400 mb-6">"Absolutely amazing service! The babysitter was very professional and kind. Highly recommended."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                            <div>
                                <h4 className="text-white font-bold">Happy Parent</h4>
                                <p className="text-xs text-slate-500">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
}