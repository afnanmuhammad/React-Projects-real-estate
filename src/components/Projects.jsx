import React from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [cardShow, setCardShow] = React.useState(1);
    React.useEffect(() => {
        const updateCardShow = () => {
            if (window.innerWidth >= 1280) {
                setCardShow(4);
            } else if (window.innerWidth >= 768) {
                setCardShow(2);
            } else {
                setCardShow(1);
            }
        };
        updateCardShow();
        window.addEventListener("resize", updateCardShow);
        return () => window.removeEventListener("resize", updateCardShow);
    }, []);


    const scrollToNext = () => {
        setCurrentIndex((priveousIndex) => (priveousIndex + 1) % projectsData.length);

    }
    const scrollToPrevious = () => {
        setCurrentIndex((priveousIndex) => (priveousIndex === 0 ? projectsData.length - 1 : priveousIndex - 1));
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}

            className="bg-[#f8f9fa] container mx-auto py-8  px-6 md:px-20 lg:px-32 mt-4 w-full overflow-hidden"
            id="Projects"
        >
            <h1 className="text-2xl sm:*:text-4xl font-bold mb-2 text-center">
                Our Completed {" "}
                <span className="underline underline-offset-4 decoration-1 font-light">
                    Developments
                </span>
            </h1>
            <p className="text-gray-500 text-center mb-8 max-w-80 mx-auto">
                Crafitin Space, Building Legacies-ExploreOur Portfolio
            </p>
            {/* slider buttons */}
            <div className="flex  items-center justify-end mb-4">
                <button onClick={scrollToPrevious} className="mr-2 bg-gray-200 px-4 py-2 rounded-full">
                    <img
                        src={assets.left_arrow}
                        alt="previous"
                        aria-label="Previouse Project"
                    />
                </button>
                <button onClick={scrollToNext} className="mr-2 bg-gray-200 px-4 py-2 rounded-full">
                    <img src={assets.right_arrow} alt="next" aria-label="Next Project" />
                </button>
            </div>
            {/* silder data */}
            <div className="overflow-hidden">
                <div className="flex mb-10 gap-8 md:gap-12 lg:gap-16 2xl:gap-20 transform transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / cardShow)}% )` }}
                >
                    {projectsData.map((project, index) => (
                        <div key={index} className="relative flex-shrink-0 my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg overflow-hidden shadow-lg ">
                            <img src={project.image} alt={project.image} className="w-full h-82 mb-14 object-cover" />
                            <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                                <div className="inline-block bg-white/70 shadow-md bg-opacity-90 px-4 py-2 rounded text-center w-4/5">
                                    <h2 className="text-lg font-semibold text-gray-400">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm text-gray-700">{project.price} <span className="px-1">|</span> {project.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div >
    );
};

export default Projects;
