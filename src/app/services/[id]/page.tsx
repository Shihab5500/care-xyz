import Link from "next/link";
import { FaStar, FaArrowLeft, FaCheck } from "react-icons/fa";

import { Metadata } from "next";


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const service = services.find((s) => s.id === Number(id));

  return {
    title: service ? `${service.title} | Care.xyz` : "Service Not Found",
    description: service?.desc,
  };
}



// ডামি ডেটা
const services = [
  { id: 1, title: "Child Care", price: 500, image: "https://img.freepik.com/free-photo/medium-shot-mother-holding-baby_23-2149154627.jpg", desc: "Expert child care services." },
  { id: 2, title: "Elderly Care", price: 800, image: "https://img.freepik.com/free-photo/nurse-helping-senior-woman-walk_23-2148740051.jpg", desc: "Compassionate elderly support." },
  { id: 3, title: "Medical Support", price: 1000, image: "https://img.freepik.com/free-photo/young-doctor-supporting-senior-patient_23-2148962319.jpg", desc: "Professional medical assistance." },
  { id: 4, title: "Physiotherapy", price: 1200, image: "https://img.freepik.com/free-photo/physiotherapist-doing-healing-treatment-patient_23-2149099839.jpg", desc: "Home-based physiotherapy sessions." }
];


export default async function ServiceDetails({ params }: { params: Promise<{ id: string }> }) {
 
  const { id } = await params;
  
  const service = services.find(s => s.id === Number(id));

  if (!service) {
    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white pt-20">
            <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
            <Link href="/services" className="px-6 py-2 bg-purple-600 rounded-lg">Go Back</Link>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        <Link href="/services" className="flex items-center text-purple-400 mb-6 hover:underline">
            <FaArrowLeft className="mr-2" /> Back to Services
        </Link>
        
        <div className="grid md:grid-cols-2 gap-10 bg-slate-800/50 p-8 rounded-3xl border border-white/10">
            <img src={service.image} alt={service.title} className="rounded-2xl w-full h-80 object-cover shadow-lg" />
            
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                <p className="text-slate-300 mb-6">{service.desc}</p>
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl font-bold text-green-400">৳ {service.price} / Day</span>
                    <span className="badge badge-accent bg-green-500/20 text-green-400 border-none">Available</span>
                </div>
                
                <ul className="space-y-2 mb-8 text-slate-400">
                    <li className="flex items-center gap-2"><FaCheck className="text-purple-500"/> Verified Caregiver</li>
                    <li className="flex items-center gap-2"><FaCheck className="text-purple-500"/> 24/7 Support</li>
                </ul>

                <Link href={`/booking/${service.id}`} className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-center transition-all shadow-lg shadow-purple-500/30">
                    Book Now
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}