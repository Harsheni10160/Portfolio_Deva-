import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import vedio from '../assets/deva_video.mp4';
import './About.css';

// Add this typing hook
const useTypingEffect = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let i = 0;
    setDisplayedText('');
    setIsComplete(false);

    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, hasStarted]);

  return { displayedText, isComplete, startTyping: () => setHasStarted(true) };
};

const About = () => {
  // Add this line
  const { displayedText: subtitleText, isComplete, startTyping } = useTypingEffect('Get to Know Me Better', 80);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible && !isComplete) {
      startTyping();
    }
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-header"
          onViewportEnter={() => setIsVisible(true)}
        >
          <h2 className="about-title">
            ABOUT <span className="about-title-green">ME</span>
          </h2>
          {/* UPDATED: Replace the subtitle content */}
          <p className="about-subtitle typing-cursor">
            {subtitleText}
            {!isComplete && <span className="cursor">|</span>}
          </p>
        </motion.div>

        <div className="about-split-container">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="about-media-section"
          >
            <div className="about-video-wrapper">
              <video
              src={vedio}
              className="about-image"
              autoPlay
              loop
              muted
              playsInline
              />
              <div className="video-label">ABOUT_ME</div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="about-content-section"
          >
            <motion.div variants={itemVariants} className="about-intro">
              <h3 className="about-name">Hello! I'm <span className="name-highlight">Deva Harsheni</span></h3>
              <p className="about-main-text">
                I'm a passionate Full Stack Developer who loves creating beautiful, accessible web experiences. 
                I enjoy working with modern JavaScript frameworks and have a keen eye for design details.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="about-secondary-text">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community. I believe in writing clean, maintainable code 
                and creating user experiences that make a difference.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="status-indicator">
              <div className="status-dot"></div>
              <span>Available for opportunities</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;