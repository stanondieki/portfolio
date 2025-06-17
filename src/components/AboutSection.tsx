"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types";

interface AboutSectionProps {
  skills: Skill[];
}

export default function AboutSection({ skills }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                My Story
              </h3>              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  I&apos;m Stanley Ondieki, a driven and innovative Software Developer with hands-on experience 
                  in mobile and web development. My passion lies in transforming challenges into elegant solutions 
                  using cutting-edge technologies.
                </p>
                <p>
                  Currently pursuing my Bachelor of Science in Information Technology at KCA University, 
                  I specialize in Flutter mobile development and modern web technologies. I excel at problem-solving 
                  and have a keen ability to design, code, and debug software applications.
                </p>
                <p>
                  My experience at Dukatech has sharpened my skills in planning, testing, and maintaining 
                  software applications. I&apos;m particularly passionate about mobile app development 
                  and creating user-friendly solutions that make a real impact.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Skills & Technologies
              </h3>
              
              <div className="space-y-6">
                {skills.map((skillCategory, index) => (
                  <motion.div
                    key={skillCategory.category}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      {skillCategory.category}
                    </h4>                    <div className="flex flex-wrap gap-3">
                      {skillCategory.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
