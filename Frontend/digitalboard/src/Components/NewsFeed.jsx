import React from 'react';

const NewsFeed = () => {
  return (
    <div style={styles.container}>
      <h2>Today's News from Twitter</h2>
      <div style={styles.newsBox}>
        <a
          className="twitter-timeline"
          href="https://twitter.com/BBCBreaking?ref_src=twsrc%5Etfw"
          data-tweet-limit="5"
        >
          Tweets by BBCBreaking
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  newsBox: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default NewsFeed;
