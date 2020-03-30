import React from 'react';
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin,FaMeetup,FaYoutube,FaGithub } from 'react-icons/fa';

import './social.styles.css';

export const Social = () => (
  <nav className="social">
    <ul>
      <li><a href="https://www.facebook.com/bilisimtopluluguist" rel="noopener noreferrer" target="_blank"><FaFacebook size="20px"/></a></li>
      <li><a href="https://twitter.com/bilisimtopluluk" rel="noopener noreferrer" target="_blank"><FaTwitter size="20px"/></a></li>
      <li><a href="https://www.instagram.com/bilisimtoplulukist/" rel="noopener noreferrer" target="_blank"><FaInstagram size="20px"/></a></li>
      <li><a href="https://www.linkedin.com/company/bilisimtopluluguist" rel="noopener noreferrer" target="_blank"><FaLinkedin size="20px"/></a></li>
      <li><a href="https://www.meetup.com/bilisimtoplulugu/" rel="noopener noreferrer" target="_blank"><FaMeetup size="20px"/></a></li>
      <li><a href="https://github.com/bilisimtoplulugu" rel="noopener noreferrer" target="_blank"><FaGithub size="20px"/></a></li>
      <li><a href="https://www.youtube.com/channel/UCV65xnHpBkf7cfo9R7oYYWA" rel="noopener noreferrer" target="_blank"><FaYoutube size="20px"/></a></li>
    </ul>
  </nav>
);