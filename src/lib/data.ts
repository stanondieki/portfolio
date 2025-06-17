import { PersonalInfo, Experience, Project, Contact, Skill, Education } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Stanley Ondieki",
  title: "Software Developer",
  bio: "Driven and innovative Software Developer with experience at Dukatech. Expert in Dart, Firebase cloud storage and Problem solving. I excel in Mobile and Web development, demonstrating a keen ability to transform challenges to solutions.",
  avatar: "/images/prof.jpg", // Add your avatar path here
  // resumeUrl: "/path-to-your-resume.pdf", // Add your resume path here
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Dukatech",
    position: "Software Developer",
    startDate: "2024-06",
    endDate: "2024-08",
    description: "Assisted in Planning, Designing, Coding, Debugging, Testing, Documenting and Maintaining Software Applications. Developed Soko Beauty, An App for beauty product sales.",
    technologies: ["Dart", "Flutter", "Firebase", "Cloud Storage", "Mobile App Development"],
    location: "Nairobi, Kenya",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Soko Beauty App",
    description: "A mobile app for beauty product sales with advanced features like Time messaging.",
    longDescription: "Developed during my time at Dukatech, Soko Beauty is a comprehensive mobile application for beauty product sales featuring real-time messaging, Firebase cloud storage, and enhanced user experience.",
    technologies: ["Dart", "Flutter", "Firebase", "Cloud Storage", "Real-time Messaging"],
    githubUrl: "https://github.com/stanleyondieki", // Update with actual URL
    featured: true,
  },
  {
    id: "2",
    title: "Web Development Projects",
    description: "Various web development projects showcasing modern web technologies.",
    longDescription: "Collection of web applications built using HTML, CSS, JavaScript, React, and Next.js demonstrating problem-solving skills and modern development practices.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    githubUrl: "https://github.com/stanleyondieki", // Update with actual URL
    featured: true,
  },
  {
    id: "3",
    title: "Mobile App Development",
    description: "Mobile applications built with Flutter and React Native.",
    longDescription: "Cross-platform mobile applications demonstrating expertise in mobile development frameworks and user experience design.",
    technologies: ["Flutter", "Dart", "React Native", "Firebase", "Mobile UI/UX"],
    githubUrl: "https://github.com/stanleyondieki", // Update with actual URL
    featured: true,
  },
];

export const skills: Skill[] = [
  {
    category: "Languages/Frameworks",
    skills: ["Dart (Flutter)", "JavaScript/TypeScript", "Next.js", "React", "HTML", "CSS"],
  },
  {
    category: "Tools/Technologies",
    skills: ["Firebase (Firestore)", "Cloud Storage", "Cloud Messaging", "Real-time Messaging", "Git"],
  },
  {
    category: "Development Areas",
    skills: ["Mobile App Dev", "Web App Dev", "Authentication", "Cloud Integration", "Problem Solving"],
  },
  {
    category: "Core Skills",
    skills: ["Problem Solving", "Planning", "Designing", "Coding", "Debugging", "Testing"],
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "KCA University",
    degree: "Bachelor of Science",
    field: "Information Technology",
    startDate: "2022-09",
    // endDate: "Present", // Still ongoing
    location: "Nairobi, Kenya",
  },
];

export const contact: Contact = {
  email: "ondiekistanley21@gmail.com",
  phone: "+254 727 230 675",
  location: "00100, Nairobi, Kenya",
  linkedin: "https://shorturl.at/TLcRr",
  github: "https://shorturl.at/Frnd8",
  // website: "https://yourwebsite.com", // Add your website if you have one
};
