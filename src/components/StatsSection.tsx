"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { number: 1, label: "Years of Experience", suffix: "+" },
  { number: 5, label: "Projects Completed", suffix: "+" },
  { number: 3, label: "Technologies Mastered", suffix: "+" },
  { number: 100, label: "Code Commits", suffix: "+" },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const increment = stat.number / 50;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, 30);
      });
    }
  }, [isVisible]);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center text-white"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-blue-100 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
