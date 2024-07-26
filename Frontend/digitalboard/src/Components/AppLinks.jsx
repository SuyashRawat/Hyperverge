import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMeetup, faGoogleDrive, faYoutube, faGooglePlay } from '@fortawesome/free-brands-svg-icons'; // For Google and YouTube
import { faTable, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // For Google Sheets and Maps
import { faRobot } from '@fortawesome/free-solid-svg-icons'; // Use a generic icon for ChatGPT if not available

const AppLinks = () => {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <a href="https://google.com" rel="noopener noreferrer" style={styles.link}>
          <div style={styles.googleCircle}>
            <FontAwesomeIcon icon={faGoogle} style={styles.icon} />
          </div>
          {/* Google */}
        </a>
        <a href="https://chat.openai.com" rel="noopener noreferrer" style={styles.link}>
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
      <div style={styles.row}>
        <a href="https://meet.google.com/landing" rel="noopener noreferrer" style={styles.link}>
          <div style={styles.youtubeCircle}>
            <FontAwesomeIcon icon={faMeetup} style={styles.icon} />
          </div>
          {/* Google Meet */}
        </a>
        <a href="https://mail.google.com" rel="noopener noreferrer" style={styles.link}>
          <div style={styles.gmailCircle}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
          </div>
          {/* Gmail */}
        </a>
        <a href="https://drive.google.com" rel="noopener noreferrer" style={styles.link}>
          <div style={styles.driveCircle}>
            <FontAwesomeIcon icon={faGoogleDrive} style={styles.icon} />
          </div>
          {/* Google Drive */}
        </a>
      </div>
      <div style={styles.row}>
        <a href="https://youtube.com" rel="noopener noreferrer" style={styles.link}>
          <div style={styles.youtubeCircle}>
            <FontAwesomeIcon icon={faYoutube} style={styles.icon} />
          </div>
          {/* YouTube */}
        </a>
        <a href="https://maps.google.com" rel="noopener noreferrer" style={styles.link}>
          <div style={styles.mapsCircle}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
          </div>
          {/* Google Maps */}
        </a>
        <a href="https://play.google.com" rel="noopener noreferrer" style={styles.link}>
          <div style={styles.playStoreCircle}>
            <FontAwesomeIcon icon={faGooglePlay} style={styles.icon} />
          </div>
          {/* Google Play Store */}
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px', // Reduced space between rows
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
  gmailCircle: {
    backgroundColor: '#D93025', // Gmail color
    borderRadius: '50%',
    width: '5rem',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  },
  driveCircle: {
    backgroundColor: '#0F9D58', // Google Drive color
    borderRadius: '50%',
    width: '5rem',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  },
  youtubeCircle: {
    backgroundColor: '#FF0000', // YouTube color
    borderRadius: '50%',
    width: '5rem',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  },
  mapsCircle: {
    backgroundColor: '#4CAF50', // Google Maps color
    borderRadius: '50%',
    width: '5rem',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  },
  playStoreCircle: {
    backgroundColor: '#009688', // Google Play color
    borderRadius: '50%',
    width: '5rem',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  },
};

export default AppLinks;
