import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 text-white">
      
      {/* 1. Hero Section */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          About Care.xyz
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          We are dedicated to providing the most reliable and secure caregiving services in Bangladesh. Your family is our family.
        </p>
      </div>

      {/* 2. Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-slate-800/50 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed">
                To create a safe and accessible platform where families can find trusted caregivers instantly. We aim to reduce the stress of finding reliable help for children and the elderly.
            </p>
        </div>
        <div className="bg-slate-800/50 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -ml-10 -mb-10"></div>
            <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
            <p className="text-slate-300 leading-relaxed">
                To become the leading caregiving platform in South Asia, ensuring that every household has access to professional medical and domestic support.
            </p>
        </div>
      </div>

      {/* 3. Team Section */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
                <div key={item} className="text-center bg-slate-800/30 p-6 rounded-2xl border border-white/5">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-slate-700">
                        <img src={`https://i.pravatar.cc/150?img=${item + 10}`} alt="Team Member" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold">Member Name</h3>
                    <p className="text-purple-400 text-sm">Co-Founder</p>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
}