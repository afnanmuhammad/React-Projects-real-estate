import React from "react";
import { assets } from "../assets/assets";

const Footer = ({ onPrivacyClick }) => {
    return (
        <div
            className="bg-gray-800 text-white py-10 px-6 md:px-20 lg:px-32 mt-4 overflow-hidden"
            id="Footer"
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Brand info */}
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <img src={assets.logo_dark} alt="footerLogo" className="mb-4 w-32 invert brightness-0" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Discover your dream property with RealEstatePro — combining trust,
                        innovation, and professional expertise to guide you every step of
                        the way.
                    </p>
                </div>

                {/* Company links */}
                <div className="w-full md:w-1/5 mb-8 md:mb-0">
                    <h3 className="text-white text-lg font-bold mb-4">Company</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <a href="#Header" className="hover:text-white transition">
                            Home
                        </a>
                        <a href="#About" className="hover:text-white transition">
                            About Us
                        </a>
                        <a href="#Contact" className="hover:text-white transition">
                            Contact Us
                        </a>
                        <button
                            onClick={onPrivacyClick}
                            className="text-left text-gray-400 hover:text-white transition cursor-pointer"
                        >
                            Privacy Policy
                        </button>

                    </ul>
                </div>

                {/* Newsletter */}
                <div className="w-full md:w-1/3">
                    <h3 className="text-white text-lg font-bold mb-4">
                        Subscribe to our newsletter
                    </h3>
                    <p className="text-gray-300 mb-4 max-w-80">
                        Get the latest property updates, market news, and insights straight
                        to your inbox.
                    </p>

                    {/* Input + Button */}
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 text-gray-300 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm mt-10 border-t border-gray-600 pt-4">
                <p>© 2025 RealEstatePro. All rights reserved.</p>
                <p>
                    Created by{" "}
                    <span className="text-blue-400 font-semibold tracking-wide">
                        Afnan
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Footer;
