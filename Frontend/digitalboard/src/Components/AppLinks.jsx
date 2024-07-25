import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; // For Google
import { faTable } from '@fortawesome/free-solid-svg-icons'; // For Google Sheets
import { faRobot } from '@fortawesome/free-solid-svg-icons'; // Use a generic icon for ChatGPT if not available

const AppLinks = () => {
  return (
    <div style={styles.container}>
      <a href="https://google.com"  rel="noopener noreferrer" style={styles.link}>
        <div style={styles.googleCircle}>
          <FontAwesomeIcon icon={faGoogle} style={styles.icon} />
        </div>
        {/* Google Chat */}
      </a>
      <a href="https://chat.openai.com"  rel="noopener noreferrer" style={styles.link}>
        <div style={styles.gptCircle}>
          <FontAwesomeIcon icon={faRobot} style={styles.icon} />
        </div>
        {/* ChatGPT */}
      </a>
      <a href="https://sheets.google.com" rel="noopener noreferrer" style={styles.link}>
        <div style={styles.sheetsCircle}>
          <FontAwesomeIcon icon={faTable} style={styles.icon} />
        </div>
        {/* Google Sheets */}
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'center', 
    flexWrap: 'wrap', 
    padding: '20px',
    maxWidth: '1000px', 
    margin: '0 auto',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#000',
    fontSize: '18px',
    margin: '10px',
    padding: '10px',
    borderRadius: '8px',
    transition: 'background-color 0.3s, color 0.3s',
    boxSizing: 'border-box',
  },
  icon: {
    fontSize: '3rem', 
    color: '#fff', 
  },
  googleCircle: {
    backgroundColor: '#4285F4', 
    borderRadius: '50%',
    width: '5rem', 
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  },
  gptCircle: {
    background: 'linear-gradient(135deg, #004d00, #00ff00)', // Dark green to light green gradient
    borderRadius: '50%',
    width: '5rem', // Adjust size of circle
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  },
  sheetsCircle: {
    backgroundColor: '#34A853', // Light green
    borderRadius: '50%',
    width: '5rem', // Adjust size of circle
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  },
};

export default AppLinks;
