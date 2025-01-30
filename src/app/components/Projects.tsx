"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaPalette, FaMobile, FaGlobe, FaReact, FaNodeJs, FaVuejs, FaSwift, FaFigma, FaWordpress } from "react-icons/fa"
import { SiNextdotjs, SiFlutter } from "react-icons/si"

const projectsData = {
  design: [
    {
      title: "Brand Identity",
      image: "/placeholder.svg",
      description: "A complete brand identity design for a tech startup.",
      link: "https://example.com/project1",
      technologies: [FaFigma, FaPalette],
    },
    {
      title: "UI/UX Design",
      image: "/placeholder.svg",
      description: "User interface and experience design for a mobile app.",
      link: "https://example.com/project2",
      technologies: [FaFigma, FaPalette],
    },
  ],
  mobile: [
    {
      title: "Fitness Tracker",
      image: "/placeholder.svg",
      description: "A React Native app for tracking workouts and nutrition.",
      link: "https://example.com/project3",
      technologies: [FaReact, FaMobile],
    },
    {
      title: "Social Media App",
      image: "/placeholder.svg",
      description: "An Instagram-like social media app built with Flutter.",
      link: "https://example.com/project4",
      technologies: [SiFlutter, FaMobile],
    },
  ],
  web: [
    {
      title: "E-commerce Platform",
      image: "/placeholder.svg",
      description: "A full-stack e-commerce website built with Next.js and Node.js.",
      link: "https://example.com/project5",
      technologies: [SiNextdotjs, FaNodeJs],
    },
    {
      title: "Portfolio Website",
      image: "/placeholder.svg",
      description: "A responsive portfolio website showcasing creative works.",
      link: "https://example.com/project6",
      technologies: [FaReact, FaWordpress],
    },
  ],
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState("design")

  const tabIcons = {
    design: <FaPalette />,
    mobile: <FaMobile />,
    web: <FaGlobe />,
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Projects
        </motion.h2>
        <div className="flex justify-center mb-8">
          {Object.keys(projectsData).map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`mx-2 px-4 py-2 rounded-full flex items-center ${
                activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <span className="mr-2">{tabIcons[tab as keyof typeof tabIcons]}</span>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData[activeTab as keyof typeof projectsData].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-sm mx-auto"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex space-x-2">
                    {project.technologies.map((Tech, index) => (
                      <Tech key={index} className="text-2xl text-blue-500" />
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

