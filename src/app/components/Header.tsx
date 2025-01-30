"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Home, Code, BookOpen, Briefcase, Mail } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "Skills", icon: <Code size={20} /> },
    { name: "Education", icon: <BookOpen size={20} /> },
    { name: "Projects", icon: <Briefcase size={20} /> },
    { name: "Contact", icon: <Mail size={20} /> },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-blue-500"
          >
            Asjad Ilahi
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-500 transition-colors text-lg flex items-center space-x-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900/90 backdrop-blur-md py-2"
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="block px-6 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-500 flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header

