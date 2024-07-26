import React from 'react';

const GoogleSlides = ({ embedUrl }) => {
  return (
    <div className="google-slides-container">
      <h2 className='text-white' style={{fontSize:'1.4rem'}}>Google Slides</h2>
      <p  className='text-white'>View the embedded Google Slides presentation below</p>
      <iframe
        src={embedUrl}
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen
        title="Google Slides"
      ></iframe>
    </div>
  );
};

export default GoogleSlides;
