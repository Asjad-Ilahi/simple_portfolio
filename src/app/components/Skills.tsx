"use client"

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { FaCode, FaServer, FaMobile, FaPalette } from "react-icons/fa";

const skills = [
  { name: "HTML/CSS", value: 90, icon: <FaCode />, fill: "#60A5FA" },
  { name: "JavaScript", value: 85, icon: <FaCode />, fill: "#34D399" },
  { name: "React", value: 80, icon: <FaCode />, fill: "#818CF8" },
  { name: "Node.js", value: 75, icon: <FaServer />, fill: "#4ADE80" },
  { name: "Python", value: 70, icon: <FaCode />, fill: "#F472B6" },
  { name: "Mobile Dev", value: 65, icon: <FaMobile />, fill: "#A78BFA" },
  { name: "UI/UX", value: 60, icon: <FaPalette />, fill: "#FB923C" }
].map(skill => ({
  ...skill,
  fullMark: 100,
}));

const Skills = () => {
  const controls = useAnimation();
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const animateGlow = async () => {
      while (true) {
        await controls.start({
          rotate: [0, 360],
          transition: { duration: 20, ease: "linear", repeat: Infinity }
        });
      }
    };
    animateGlow();
  }, [controls]);

  const getChartSize = () => {
    if (windowWidth < 640) return 300;
    if (windowWidth < 768) return 400;
    return 500;
  };

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
        >
          Technical Skills
        </motion.h2>
        
        <div className="relative w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gray-800/20 rounded-full p-8 backdrop-blur-sm"
            style={{ height: getChartSize(), width: getChartSize() }}
          >
            {/* Background patterns */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
            </div>

            <ResponsiveContainer>
              <RadarChart data={skills}>
                <defs>
                  {/* Main area gradient */}
                  <linearGradient id="skillGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.6} />
                  </linearGradient>
                  
                  {/* Glow effects */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Grid styling */}
                <PolarGrid 
                  stroke="#ff3" 
                  strokeDasharray="4 4"
                  stroke-linecap="round"
                />

                {/* Axis labels */}
                <PolarAngleAxis
                  dataKey="name"
                  tick={props => {
                    const { x, y, payload } = props;
                    return (
                      <g transform={`translate(${x},${y})`}>
                        <text
                          x={0}
                          y={0}
                          dy={4}
                          textAnchor="middle"
                          fill="#9CA3AF"
                          fontSize={windowWidth < 640 ? 10 : 12}
                          fontWeight="500"
                          className="select-none"
                        >
                          {payload.value}
                        </text>
                      </g>
                    );
                  }}
                />

                {/* Value axis */}
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  axisLine={false}
                  tick={{ fill: '#fff', fontSize: 10 }}
                  tickCount={5}
                  stroke="#4B5563"
                />

                {/* Main radar area */}
                <Radar
                  name="Skills"
                  dataKey="value"
                  stroke="url(#skillGradient)"
                  strokeWidth={2}
                  fill="url(#skillGradient)"
                  fillOpacity={0.5}
                  filter="url(#glow)"
                >
                  {/* Data points */}
                  {skills.map((entry, index) => (
                    <motion.circle
                      key={`point-${index}`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="radar-point"
                    />
                  ))}
                </Radar>
              </RadarChart>
            </ResponsiveContainer>

            {/* Rotating glow overlay */}
            <motion.div
              animate={controls}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full" />
            </motion.div>
          </motion.div>
        </div>

        {/* Skill cards */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 group-hover:bg-gray-800/40 group-hover:border-gray-700/50 transition-all duration-300">
                <div className="relative">
                  <motion.div
                    className="text-4xl mb-4"
                    style={{ color: skill.fill }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">{skill.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-1 flex-grow rounded-full bg-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.fill }}
                      />
                    </div>
                    <span className="text-sm font-medium" style={{ color: skill.fill }}>
                      {skill.value}%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .radar-point {
          r: 4;
          fill: #60A5FA;
          filter: drop-shadow(0 0 4px #3B82F6);
        }
        
        .recharts-polar-grid-angle line,
        .recharts-polar-grid-concentric path {
          opacity: 0.3;
        }

        .recharts-polar-angle-axis-tick text {
          font-weight: 500;
          text-shadow: 0 2px 4px rgba(0,0,0,);
        }
      `}</style>
    </section>
  );
};

export default Skills;