import React, { useState } from 'react';

const GoogleMeet = () => {
  const [meetingLink, setMeetingLink] = useState('');

  const handleCreateMeeting = () => {
    window.open('https://meet.google.com/landing', '_blank');
  };

  return (
    <div>
      <h2>Create a google Meet</h2>
      <button onClick={handleCreateMeeting}>Create Meeting</button>
    </div>
  );
};

export default GoogleMeet;
