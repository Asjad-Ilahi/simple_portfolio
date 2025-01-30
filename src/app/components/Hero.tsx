"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
            <div style={{ height: '20px' }}></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Asjad Ilahi</span>
                        </h1>
                        <div className="text-xl lg:text-2xl mb-6">
                            I'm a{" "}
                            <TypeAnimation
                                sequence={["Web Developer", 2000, "UI/UX Designer", 2000, "Mobile App Developer", 2000]}
                                wrapper="span"
                                cursor={true}
                                repeat={Number.POSITIVE_INFINITY}
                                className="font-semibold text-blue-600 dark:text-blue-400"
                            />
                        </div>
                        <p className="text-lg mb-8 text-gray-400 dark:text-gray-300">
                            Passionate about creating amazing digital experiences
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
                            >
                                Get in touch
                            </motion.a>
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                View Projects
                            </motion.a>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex justify-center lg:justify-start space-x-4 mt-8"
                        >
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                <FaTwitter size={24} />
                            </a>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative w-64 h-64 mx-auto lg:w-96 lg:h-96">
                            <Image
                                src="/asjad.png"
                                alt="Your Name"
                                width={384} 
                                height={384}
                                className="rounded-full object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero

