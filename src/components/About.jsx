import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f8f9fa] flex flex-col items-center justify-center container mx-auto p-8  md:px-20 lg:px-32"
            id="About"
        >
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                Discover{" "}
                <span className="underline underline-offset-4 decoration-1 font-light">
                    Our Journey
                </span>
            </h1>

            <p className="text-gray-500 max-w-80 mb-8 text-center">
                Find your dream home — simple, smart, and within your budget.
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
                <img
                    src={assets.brand_img}
                    alt="home"
                    className="!w-[290px] sm:w-[380px] md:w-[420px] lg:w-[450px] h-[400px] sm:h-[320px] md:h-[360px] lg:h-[380px] rounded-lg"
                />

                <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                    <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-8">
                        <div>
                            <p className="text-4xl text-gray-800 font-medium">10+</p>
                            <p>Years of Experience</p>
                        </div>
                        <div>
                            <p className="text-4xl text-gray-800 font-medium">13+</p>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <p className="text-4xl text-gray-800 font-medium">21+</p>
                            <p>Ongoing Projects</p>
                        </div>
                        <div>
                            <p className="text-4xl text-gray-800 font-medium">35+</p>
                            <p>Mn. Sq. Ft. Delivered</p>
                        </div>
                    </div>

                    <p className="my-6 max-w-lg text-justify text-gray-700">
                        We make finding your dream home simple and smart, offering a curated
                        range of properties to match every taste and budget. Whether you’re
                        buying, investing, or just exploring, our platform helps you
                        discover the perfect place with ease and confidence.
                    </p>

                    <button className="bg-blue-600 text-white py-2 px-8 rounded hover:bg-blue-700 transition">
                        <a href="https://github.com/afnanmuhammad"> Learn more</a>
                    </button>
                </div>
            </div>
            <footer className="mt-10 text-gray-400 flex border-t border-t-gray-400 justify-end w-full">
                <p> Real State © {new Date().getFullYear()} <span className="text-blue-500 font-semibold">Pro</span></p> {" "}
            </footer>
        </motion.div>
    );
};

export default About;
