import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "9d897240-9a11-4733-b986-04bbfa92e7bd");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult("");
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}

            className='bg-[#f8f9fa] mt-4 text-center p-6 py-14 lg:32  w-full overflow-hidden' id='Contact'>
            <h1 className="text-2xl sm:*:text-4xl font-bold mb-2 text-center">
                Connect {" "}
                <span className="underline underline-offset-4 decoration-1 font-light">
                    With Our Experts
                </span>
            </h1>
            <p className="text-gray-500 text-center mb-8 max-w-80 mx-auto">
                Expert guidance and tailored solutions for your real estate needs
            </p>
            {/* form content */}
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto pt-8 text-gray-600 border border-gray-300 p-6 rounded-lg shadow-lg bg-white">
                {/* Name and Email section */}
                <div className="flex flex-col md:flex-row md:gap-4">
                    {/* Name input */}
                    <div className="w-full md:w-1/2 text-left">
                        <label className="block mb-1 font-medium">Your Name</label>
                        <input
                            name='name'
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            required
                        />
                    </div>

                    {/* Email input */}
                    <div className="w-full md:w-1/2 text-left">
                        <label className="block mb-1 font-medium">Your Email</label>
                        <input
                            name='email'
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            required
                        />
                    </div>
                </div>
                <div>
                    {/* Message input */}
                    <div className="mt-4 text-left">
                        <label className="block mb-1 font-medium">Your Message</label>
                        <textarea
                            name='message'
                            rows="4"
                            placeholder="Type your message here"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            required
                        ></textarea>
                    </div>
                    {/* Submit button */}
                    <button
                        type="submit"
                        className="mt-6  bg-blue-500 text-white py-3 px-12 rounded-lg hover:bg-blue-300 transition-colors duration-300"
                    >
                        {result ? result : "Send Message"}
                    </button>
                </div>
            </form>

        </motion.div >
    )
}

export default Contact