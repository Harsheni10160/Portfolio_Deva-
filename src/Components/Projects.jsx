import React from 'react';
import './Projects.css';
import animepicture from '../assets/animepicture.png';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Anime Typing Game website",
      description: "A fun typing game built with React and Tailwind CSS.",
      image: animepicture,
      link: "https://github.com/Harsheni10160/Anime-typing-speed-testing-"
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description: "A complete react admin panel for managing orders.",
      image:  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Kanban style drag and drop task manager built with Redux.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Full stack social network with real-time chat.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      link: "#"
    }
  ];

  // TRICK: Duplicate the data to create the infinite loop illusion
  const scrollProjects = [...projects, ...projects];

  return (
    <div id="projects" className="projects-wrapper">
      <div className="container project-container">
        
        <div className="header-section">
          <h1 className="project-heading">MY PROJECT</h1>
          <p className="project-subheading">Some Things I've Build So Far</p>
        </div>

        {/* Marquee Container */}
        <div className="marquee">
          <div className="marquee-content">
            {scrollProjects.map((project, index) => (
              <div key={`${project.id}-${index}`} className="project-card">
                <div className="card-image-wrapper">
                  <img src={project.image} alt={project.title} className="card-img" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.description}</p>
                  
                  <a href={project.link} className="card-btn">
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;