import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            id="Testimonials"
            className="bg-[#f8f9fa] flex flex-col items-center mt-4 justify-center container mx-auto py-12 px-6 md:px-20 lg:px-32 text-center"
        >
            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-800">
                What Our Clients{' '}
                <span className="underline underline-offset-4 decoration-1 font-light">
                    Say About RealEstatePro
                </span>
            </h1>

            <p className="text-gray-600 max-w-2xl mb-12">
                Hear from our happy clients who found their dream homes with{' '}
                <span className="font-semibold text-gray-900">RealEstatePro</span>. Their
                stories reflect our passion for trust, comfort, and customer satisfaction.
            </p>

            {/* Testimonial Cards */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12 2xl:gap-16">
                {testimonialsData.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white max-w-[300px] border border-gray-100 shadow-md rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Profile Image */}
                        <img
                            className="w-20 h-20 rounded-full mb-4 mx-auto object-cover"
                            src={testimonial.image}
                            alt={testimonial.alt}
                        />

                        {/* Name & Title */}
                        <h2 className="text-gray-800 text-lg font-semibold">
                            {testimonial.name}
                        </h2>
                        <p className="text-gray-500 text-sm mb-4">{testimonial.title}</p>

                        {/* Rating */}
                        <div className="flex justify-center mb-4 gap-1">
                            {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                                <img
                                    key={starIndex}
                                    src={assets.star_icon}
                                    alt="star"
                                    className="w-4 h-4"
                                />
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-gray-600 text-sm  leading-relaxed">
                            {testimonial.text}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonials
