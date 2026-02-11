import Link from "next/link";
import { FaUserNurse, FaBaby, FaWheelchair } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Child Care",
    description: "Professional babysitters to take care of your little ones with love and safety.",
    icon: <FaBaby className="text-5xl text-purple-400 mb-4" />,
    image: "https://img.freepik.com/free-photo/medium-shot-mother-holding-baby_23-2149154627.jpg",
    price: "500"
  },
  {
    id: 2,
    title: "Elderly Care",
    description: "Compassionate care for seniors including medication management and companionship.",
    icon: <FaWheelchair className="text-5xl text-blue-400 mb-4" />,
    image: "https://img.freepik.com/free-photo/nurse-helping-senior-woman-walk_23-2148740051.jpg",
    price: "800"
  },
  {
    id: 3,
    title: "Medical Support",
    description: "Specialized support for sick family members requiring constant medical attention.",
    icon: <FaUserNurse className="text-5xl text-green-400 mb-4" />,
    image: "https://img.freepik.com/free-photo/young-doctor-supporting-senior-patient_23-2148962319.jpg",
    price: "1000"
  },
  {
    id: 4,
    title: "Physiotherapy",
    description: "Expert physiotherapists providing home therapy sessions for faster recovery.",
    icon: <FaUserNurse className="text-5xl text-pink-400 mb-4" />,
    image: "https://img.freepik.com/free-photo/physiotherapist-doing-healing-treatment-patient_23-2149099839.jpg",
    price: "1200"
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Premium Services</h1>
        <p className="text-slate-400">Choose from our wide range of professional care services tailored for your family's needs.</p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
      </div>

      {/* Service Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.id} className="group bg-slate-800/50 border border-white/5 rounded-3xl overflow-hidden hover:bg-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            </div>
            
            <div className="p-6 text-center">
                <div className="flex justify-center -mt-12 mb-4 relative z-10">
                    <div className="bg-slate-900 p-3 rounded-full border border-white/10 shadow-lg">
                        {service.icon}
                    </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{service.description}</p>
                <p className="text-purple-400 font-bold text-lg mb-4">From {service.price} Tk/Day</p>
                
                <Link href={`/services/${service.id}`} className="block w-full py-2 rounded-xl bg-white/5 hover:bg-purple-600 text-white font-semibold transition-colors border border-white/10 hover:border-transparent">
                    View Details
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}