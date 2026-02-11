import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* কলাম ১: ব্র্যান্ড */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Care.xyz</h2>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Making caregiving easy, secure, and accessible. We verify every professional to ensure your family's safety.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
                        </div>
                    </div>

                    {/* কলাম ২: সার্ভিস */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm hover:text-purple-400 transition-colors">Babysitting</Link></li>
                            <li><Link href="#" className="text-sm hover:text-purple-400 transition-colors">Elderly Care</Link></li>
                            <li><Link href="#" className="text-sm hover:text-purple-400 transition-colors">Medical Support</Link></li>
                            <li><Link href="#" className="text-sm hover:text-purple-400 transition-colors">Special Needs</Link></li>
                        </ul>
                    </div>

                    {/* কলাম ৩: কোম্পানি */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm hover:text-purple-400 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-sm hover:text-purple-400 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-sm hover:text-purple-400 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-sm hover:text-purple-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* কলাম ৪: লিগাল */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-sm hover:text-purple-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="text-sm hover:text-purple-400 transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Care.xyz. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;