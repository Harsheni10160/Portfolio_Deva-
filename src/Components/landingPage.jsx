// import React, { useState, useEffect } from 'react';
// import './landingPage.css';
// import resume from '../assets/DEVA.pdf'; // Ensure this path is correct
// import picture from '../assets/devalatest.jpeg'; // Ensure this path is correct
// import { Github, Linkedin, Mail, Download } from 'lucide-react';

// function LandPage() {
//   const fullText = `FFull Stack Developer who builds delightful user experiences.\n\nPassionate about building responsive and meaningful web experiences.`;
//   const [displayedText, setDisplayedText] = useState('');

//   useEffect(() => {
//     let i = 0;
//     const speed = 20; // ms per character
//     const timer = setInterval(() => {
//       setDisplayedText((prev) => prev + fullText.charAt(i));
//       i += 1;
//       if (i >= fullText.length) clearInterval(timer);
//     }, speed);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div id="home" className="portfolio-wrapper">
//       <div className="container">
        
//         {/* Logo Top Left */}
//         <div className="logo">DH</div>

//         {/* Left Content */}
//         <div className="left-section">
//           {/* Grey Pill Shape */}
//           <div className="top-pill"></div>

//           {/* Typography Header */}
//           <h1 className="main-heading">
//             <div className='sub_heading'>I'M A <span className="highlight-green">WEB -</span></div> 
//             <span className="highlight-script">DEVELOPER</span>
//           </h1>

//           {/* Description Text (typing animation) */}
//             <p className="description">
//               <span className="typing" aria-live="polite">{displayedText}</span>
//             </p>

//           {/* Big Action Buttons */}
//           <div className="action-buttons">
//             <a href="#projects" className="btn-primary">
//               View My Work
//             </a>
//             {/* Download Resume Button */}
//             <a href={resume} className="btn-outline" download>
//               <Download size={20} style={{ marginRight: '8px' }} />
//               Download Resume
//             </a>
//           </div>

//           {/* Social Icons using Lucide-React */}
//           <div className="social-icons">
//             <a 
//               href="https://github.com/Harsheni10160" 
//               target="_blank" 
//               rel="noreferrer" 
//               className="icon-circle" 
//               aria-label="GitHub"
//             >
//               <Github size={24} />
//             </a>
//             <a 
//               href="https://linkedin.com/in/deva-harsheni-singaravel-560a91356" 
//               target="_blank" 
//               rel="noreferrer" 
//               className="icon-circle" 
//               aria-label="LinkedIn"
//             >
//               <Linkedin size={24} />
//             </a>
//             <a 
//               href="mailto:devaharshen2006@gmail.com" 
//               className="icon-circle" 
//               aria-label="Email"
//             >
//               <Mail size={24} />
//             </a>
//           </div>
//         </div>

//         {/* Right Content (Image) */}
//         <div className="right-section">
//           <div className="profile-container">
//             <img 
//               src={picture}
//               alt="Deva Harsheni" 
//               className="profile-img" 
//             />
//             <div className="signature">Deva Harsheni . s</div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default LandPage;
import React, { useState, useEffect } from 'react';
import './landingPage.css';
import resume from '../assets/DEVA.pdf';
import picture from '../assets/devalatest.jpeg';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

function LandPage() {
  const fullText = `Full Stack Developer who builds delightful user experiences.\n\nPassionate about building responsive and meaningful web experiences.`;
  const [displayedText, setDisplayedText] = useState('');
  const [developerText, setDeveloperText] = useState('');
  const developerWord = 'DEVELOPER';

  // Typing effect for "DEVELOPER"
  useEffect(() => {
    let i = 0;
    const speed = 150; // ms per character
    const timer = setInterval(() => {
      setDeveloperText(developerWord.substring(0, i + 1));
      i += 1;
      if (i >= developerWord.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, []);

  // Typing effect for description
  useEffect(() => {
    let i = 0;
    const speed = 20;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(i));
      i += 1;
      if (i >= fullText.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="portfolio-wrapper">
      <div className="container">
        
        <div className="logo">DH</div>

        <div className="left-section">
          <div className="top-pill"></div>

          <h1 className="main-heading">
            <div className='sub_heading'>I'M A <span className="highlight-green">WEB -</span></div> 
            <span className="highlight-script typing-cursor">
              {developerText}
              {developerText.length < developerWord.length && <span className="cursor">|</span>}
            </span>
          </h1>

          <p className="description">
            <span className="typing" aria-live="polite">{displayedText}</span>
          </p>

          <div className="action-buttons">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href={resume} className="btn-outline" download>
              <Download size={20} style={{ marginRight: '8px' }} />
              Download Resume
            </a>
          </div>

          <div className="social-icons">
            <a 
              href="https://github.com/Harsheni10160" 
              target="_blank" 
              rel="noreferrer" 
              className="icon-circle" 
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/deva-harsheni-singaravel-560a91356" 
              target="_blank" 
              rel="noreferrer" 
              className="icon-circle" 
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:devaharshen2006@gmail.com" 
              className="icon-circle" 
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="right-section">
          <div className="profile-container">
            <img 
              src={picture}
              alt="Deva Harsheni" 
              className="profile-img" 
            />
            <div className="signature">Deva Harsheni . s</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LandPage;