import React, { useEffect } from 'react';

const NewsFeed = () => {
  useEffect(() => {
    // Load Twitter script after component mounts
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    // Apply hover effect
    const applyHoverEffect = () => {
      const newsBox = document.querySelector('.twitter-timeline');
      if (newsBox) {
        newsBox.addEventListener('mouseover', () => {
          newsBox.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        });
        newsBox.addEventListener('mouseout', () => {
          newsBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
      }
    };

    // Call the function to apply hover effect after script is loaded
    script.onload = () => {
      applyHoverEffect();
    };

    return () => {
      // Clean up event listeners on component unmount
      const newsBox = document.querySelector('.twitter-timeline');
      if (newsBox) {
        newsBox.removeEventListener('mouseover', () => {});
        newsBox.removeEventListener('mouseout', () => {});
      }
    };
  }, []);

  return (
    <div style={{...styles.container,justifyContent:'center'}}>
      <h2 style={{justifyContent:'center',textAlign:'center'}}>Today's News from Twitter</h2>
      <div style={{...styles.newsBox,display:'flex',justifyContent:'center',marginBottom:'5vh'}}>
        <a
          className="twitter-timeline"
          href="https://twitter.com/BBCBreaking?ref_src=twsrc%5Etfw"
          data-tweet-limit="3"
          data-width="350"
        >
          Tweets by BBCBreaking
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '10px',
    maxWidth: '600px', // Increased width
    margin: '0 auto',
    background: 'linear-gradient(to right, #000000, #434343)', // Gradient background
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0.3, 0.3, 0.3, 0.3)',
    color: '#ffffff', // Text color for better contrast
    // width: '100%'
  },
  newsBox: {
    maxHeight: '70vh',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0.3, 0.3, 0.3, 0.1)',
    overflow: 'auto',
    transition: 'box-shadow 0.3s ease-in-out',
    scrollbarWidth: 'none', /* For Firefox */
  },
  // Hide scrollbar for Webkit browsers (Chrome, Safari)
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0px',
      height: '0px'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent'
    },
  }
};

export default NewsFeed;
