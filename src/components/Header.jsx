import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <div
            className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
            style={{ backgroundImage: "url('/header_img.png')" }}
            id="Header">
            <Navbar />

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="container text-center mx-auto px-6 py-4 md:px20 lg:px32 text-white">
                <h2 className="text-5xl sm:text-6xl md:text[82px] inline-block max-w-3xl pt-20 font-semibold">Explore homes that fit your dreams!</h2>
                <div className="mt-16 space-x-6">
                    <a href="#Projects" className="border border-white px-8 py-3 rounded ">Projects</a>
                    <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded">Contact Us</a>
                </div>
            </motion.div>
        </div>
    );
};

export default Header;