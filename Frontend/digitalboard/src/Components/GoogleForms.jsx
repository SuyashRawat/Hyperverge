import React, { useState } from 'react';
import '../styles/GoogleFormEmbed.css'; // Assuming you have this CSS file

const GoogleFormEmbed = () => {
  const [formId, setFormId] = useState('');
  const [submittedFormId, setSubmittedFormId] = useState('');

  const handleInputChange = (event) => {
    setFormId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedFormId(formId);
  };

  const formUrl = `https://docs.google.com/forms/d/e/${submittedFormId}/viewform?embedded=true`;

  return (
    <div>
      <form onSubmit={handleSubmit} >
        {!submittedFormId && (
          <>
            <label>
              <input
                type="text"
                value={formId}
                placeholder="Enter Google Form ID:"
                onChange={handleInputChange}
                className="search-bar mx-3 text-white"
              />
            </label>
            <button type="submit" className="btn btn-success mx-5">
              Load Form
            </button>
          </>
        )}
      </form>
      {submittedFormId && (
        <div style={{ width: '100%', height: '100vh' }}>
        <iframe 
          src={formUrl} 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
          scrolling="yes"
          seamless="seamless"
          className="hidden-scrollbar"
        >
          Loading…
        </iframe>
      </div>
      
      )}
    </div>
  );
};

export default GoogleFormEmbed;
