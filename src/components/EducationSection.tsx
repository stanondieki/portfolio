"use client";

import { motion } from "framer-motion";
import { Education } from "@/types";
import { formatDate } from "@/lib/utils";

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Education
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (              <motion.div
                key={edu.id}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 font-medium">{edu.field}</p>
                    <p className="text-gray-700">{edu.institution}</p>
                    {edu.location && (
                      <p className="text-gray-500 text-sm">{edu.location}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 font-medium">
                      {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : "Present"}
                    </p>
                    {edu.gpa && (
                      <p className="text-gray-500 text-sm">GPA: {edu.gpa}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
