import React from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const navItems = [
    { short: 'H', name: 'Home', href: '#home' },
    { short: 'A', name: 'About Me', href: '#about' },
    { short: 'T', name: 'Tech Stack', href: '#tech' },
    { short: 'P', name: 'Projects', href: '#projects' },
    { short: 'C', name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="side-nav">
      {navItems.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          className="side-nav-item"
          whileHover={{ x: -18 }}
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
          aria-label={item.name}
        >
          <span className="short">{item.short}</span>
          <span className="full">{item.name}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default Navigation;