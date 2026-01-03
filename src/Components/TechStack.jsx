import React from 'react';
import './TechStack.css';

const TechStack = () => {
  // Ordered specifically to fit the 2-4-3-4-3 Grid Pattern
  const skills = [
    // Row 1 (2 items) - Major Frontend
    { name: 'React.js', icon: 'devicon-react-original colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },

    // Row 2 (4 items) - Styling & Design
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'Figma', icon: 'devicon-figma-plain colored' },

    // Row 3 (3 items) - Backend Core
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Express', icon: 'devicon-express-original' }, // Express is usually white/black
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },

    // Row 4 (4 items) - Languages & Auth
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },

    // Row 5 (3 items) - Tools
    { name: 'Postman', icon: 'devicon-postman-plain colored' },
    { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
    { name: 'Mongoose', icon: 'devicon-mongoose-original colored' }, // Using Mongoose icon
  ];

  return (
    <div id="tech" className="tech-wrapper">
      
      {/* Title Section */}
     
          {/* Typography Header */}
          <h1 className="Tech-heading">
            <div className='Techsub_heading'>TECH <span className="Tech-green"> STACKS</span></div> 
            <span className="Tech-script ">KNOWN</span>
          </h1>

      {/* The Grid Container */}
      <div className="tech-grid-container">
        {skills.map((skill, index) => (
          <div key={index} className={`tech-card item-${index}`}>
            
            {/* Layer 1: Base (Black BG, White Icon) */}
            <div className="layer base-layer">
              {/* We use filter in CSS to make colored icons white */}
              <i className={`${skill.icon} icon-base`}></i>
            </div>

            {/* Layer 2: Hover (White BG, Colored Icon) */}
            <div className="layer hover-layer">
              <i className={`${skill.icon} icon-hover`}></i>
              <span className="skill-label">{skill.name}</span>
            </div>

          </div>
        ))}
      </div>

      {/* Side navigation removed */}
    </div>
  );
};

export default TechStack;