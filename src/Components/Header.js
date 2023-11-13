// Header.js
import React from 'react';
import githubLogo from '../Logos/github-logo.png';

const Header = () => {
  return (
    <header className='header_h'>
      <h1>This is a Shopping List</h1>
      <a href="https://github.com/your-username/your-repo" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub Logo" style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
        </a>
    </header>
  );
};

export default Header;
