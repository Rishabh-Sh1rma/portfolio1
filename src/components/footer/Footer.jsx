import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Rishabh Sharma</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/rishabh-sharma25/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Rishabh-Sh1rma" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
    </footer>
  )
}

export default Footer