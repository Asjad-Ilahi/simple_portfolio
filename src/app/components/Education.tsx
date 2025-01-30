"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaUniversity, FaCode } from "react-icons/fa"

const educationData = [
  {
    year: "2020 - 2022",
    degree: "Master of Science in Computer Science",
    school: "University of Technology",
    icon: <FaGraduationCap />,
    color: "#FF6B6B",
  },
  {
    year: "2016 - 2020",
    degree: "Bachelor of Science in Software Engineering",
    school: "State University",
    icon: <FaUniversity />,
    color: "#4ECDC4",
  },
  {
    year: "2014 - 2016",
    degree: "Associate Degree in Web Development",
    school: "Community College",
    icon: <FaCode />,
    color: "#45B7D1",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Education
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse left-timeline" : "right-timeline"
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <motion.div
                className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h1 className="mx-auto text-white text-2xl" style={{ color: item.color }}>
                  {item.icon}
                </h1>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
              >
                <h3 className="mb-3 font-bold text-xl" style={{ color: item.color }}>
                  {item.degree}
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">{item.school}</p>
                <p className="text-sm text-blue-400 mt-2">{item.year}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

