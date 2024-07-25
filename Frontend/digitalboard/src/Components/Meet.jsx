import React, { useState } from 'react';
import '../styles/GoogleMeet.css';

const GoogleMeet = () => {
  const [meetingLink, setMeetingLink] = useState('');

  const handleCreateMeeting = () => {
    window.open('https://meet.google.com/landing', '_blank');
  };

  return (
    <div className="google-meet-container">
      <h2>Create a Google Meet</h2>
      <button className="google-meet-button" onClick={handleCreateMeeting}>Create Meeting</button>
    </div>
  );
};

export default GoogleMeet;
