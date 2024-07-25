import React from 'react';

const GoogleSlides = ({ embedUrl }) => {
  return (
    <div className="google-slides-container">
      <h2>Google Slides Integration</h2>
      <p>View the embedded Google Slides presentation below:</p>
      <iframe
        src={embedUrl}
        width="600"
        height="400"
        frameBorder="0"
        allowFullScreen
        title="Google Slides"
      ></iframe>
    </div>
  );
};

export default GoogleSlides;
