"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types";
import { formatDate, calculateExperience } from "@/lib/utils";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (              <motion.div
                key={experience.id}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {experience.position}
                    </h3>
                    <p className="text-blue-600 font-medium">{experience.company}</p>
                    {experience.location && (
                      <p className="text-gray-500 text-sm">{experience.location}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 font-medium">
                      {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : "Present"}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {calculateExperience(experience.startDate, experience.endDate)}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{experience.description}</p>
                  {experience.technologies && experience.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
