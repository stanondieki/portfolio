"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Contact } from "@/types";

interface ContactSectionProps {
  contact: Contact;
}

export default function ContactSection({ contact }: ContactSectionProps) {
  return (    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
                <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {contact.email}
                  </a>
                </div>
                
                {contact.phone && (
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                      <Phone className="text-blue-600" size={20} />
                    </div>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                      {contact.phone}
                    </a>
                  </div>
                )}
                
                {contact.location && (
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                      <MapPin className="text-blue-600" size={20} />
                    </div>
                    <span className="text-gray-700 font-medium">{contact.location}</span>
                  </div>
                )}
                
                <div className="flex space-x-4 pt-4">
                  {contact.github && (
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                    >
                      <Github size={24} />
                    </a>
                  )}
                  
                  {contact.linkedin && (
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                    >
                      <Linkedin size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Send a Message
              </h3>
                <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white shadow-sm resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
