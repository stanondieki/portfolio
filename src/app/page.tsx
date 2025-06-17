"use client";

import { personalInfo, experiences, education, projects, skills, contact } from "@/lib/data";
import { PersonalInfo, Experience, Education, Project, Skill, Contact } from "@/types";
import Image from "next/image";
import React from "react";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">
            Stanley Ondieki
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#experience" className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="py-4 space-y-2 bg-white rounded-lg mt-2 shadow-lg border border-gray-200">
            <a
              href="#home"
              onClick={toggleMenu}
              className="block px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="block px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={toggleMenu}
              className="block px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="block px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="block px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection({ personalInfo }: { personalInfo: PersonalInfo }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Simple Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gray-100 rounded-full opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gray-50 rounded-full opacity-80"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
        {/* Clean Profile Image */}
        <div className="mb-12">
          <div className="w-40 h-40 mx-auto mb-8 relative group">
            <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white">
              {personalInfo.avatar ? (
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {personalInfo.name.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Clean Typography */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            {personalInfo.name}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
            {personalInfo.title}
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Simple CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <a
            href="mailto:ondiekistanley21@gmail.com"
            className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg"
          >
            Get In Touch
          </a>
          
          {personalInfo.resumeUrl && (
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              Download Resume
            </a>
          )}
        </div>

        {/* Clean Social Links */}
        <div className="flex justify-center space-x-6 mt-12">
          <a
            href="https://shorturl.at/Frnd8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://shorturl.at/TLcRr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ skills }: { skills: Skill[] }) {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                My Story
              </h3>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I&apos;m a passionate Software Developer with hands-on experience at Dukatech, where I contributed to innovative projects including the Soko Beauty app. My expertise spans mobile and web development, with a particular focus on creating efficient, user-friendly applications.
                </p>
                <p>
                  Currently pursuing my Bachelor of Science in Information Technology at KCA University, I combine academic knowledge with practical experience to deliver high-quality software solutions. I thrive on solving complex problems and transforming challenges into opportunities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Skills & Technologies
            </h3>
            <div className="space-y-8">
              {skills.map((skillCategory, index) => (
                <div key={index}>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Simple Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-gray-900 mb-2">1+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
            <div className="text-gray-600 font-medium">Projects</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
            <div className="text-gray-600 font-medium">Technologies</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
            <div className="text-gray-600 font-medium">Code Commits</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            My professional journey and the impact I&apos;ve made
          </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((experience) => (
            <div key={experience.id} className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-300"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 bg-gray-900 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="ml-20 bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {experience.position}
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-700">
                      {experience.company}
                    </h4>
                    <p className="text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {experience.location}
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-300">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {experience.startDate} - {experience.endDate || 'Present'}
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {experience.description}
                </p>
                
                {experience.technologies && (
                  <div>
                    <h5 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection({ education }: { education: Education[] }) {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <h4 className="text-lg text-gray-700 font-medium">{edu.field}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-600">{edu.location}</p>
                </div>
                <div className="text-gray-600 mt-2 md:mt-0 bg-gray-100 px-4 py-2 rounded-lg">
                  {edu.startDate} - {edu.endDate || 'Present'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Showcasing my passion for creating innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.filter(project => project.featured).map((project) => (
            <div key={project.id} className="group">
              <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200">
                {/* Project Header */}
                <div className="h-48 bg-gray-900 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl font-bold">{project.title[0]}</span>
                    </div>
                    <h3 className="text-lg font-bold">{project.title.split(' ')[0]}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium border border-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-md text-xs font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="text-sm font-semibold">Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ contact }: { contact: Contact }) {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-16 h-1 bg-white mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s connect and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-white font-semibold hover:text-gray-300 transition-colors duration-300">
                      {contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href={`tel:${contact.phone}`} className="text-white font-semibold hover:text-gray-300 transition-colors duration-300">
                      {contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">{contact.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-gray-900 py-4 px-8 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">
              Stanley Ondieki
            </h3>
            <p className="text-gray-400 mt-2">Building the future, one line of code at a time.</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Stanley Ondieki. All rights reserved. Made with ❤️ using Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>
    </button>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection personalInfo={personalInfo} />
        <AboutSection skills={skills} />
        <ExperienceSection experiences={experiences} />
        <EducationSection education={education} />
        <ProjectsSection projects={projects} />
        <ContactSection contact={contact} />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
