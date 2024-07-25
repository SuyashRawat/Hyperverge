import React from 'react';

const GoogleCalendar = () => {
  return (
    <div >
      <iframe
        src="https://calendar.google.com/calendar/embed?src=f4737057a32490d30cb1e5f9a45a230023f5ffa0d26e1c47d609dfff3344054e@group.calendar.google.com&ctz=Your/Timezone&mode=DAY" 
        style={styles.iframe}
        title="Google Calendar"
        frameBorder="0"
      />
      <h3 style={styles.title}>Google Calendar - Day View</h3>
    </div>
  );
};

const styles = {
  widget: {
    width: '40vw',
    height: '60vh',
    margin: '20px auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0.2, 0.2, 0.2, 0.2)',
    transition: 'box-shadow 0.3s ease',
  },
  iframe: {
    width: '40vw',
    height: '60vh',
  },
  title: {
    textAlign: 'center',
    padding: '10px 0',
    backgroundColor: '#f9f9f9',
    borderTop: '1px solid #ddd',
    margin: 0,
  },
};

const hoverStyles = {
  widget: {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
};

const handleMouseEnter = (e) => {
  Object.assign(e.currentTarget.style, hoverStyles.widget);
};

const handleMouseLeave = (e) => {
  Object.assign(e.currentTarget.style, styles.widget);
};

const StyledGoogleCalendar = () => (
  <div
    style={styles.widget}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <GoogleCalendar />
  </div>
);

export default StyledGoogleCalendar;
