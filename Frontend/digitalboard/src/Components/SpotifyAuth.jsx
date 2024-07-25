import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import SpotifyPlayer from './SpotifyPlayer';

const SpotifyAuth = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const { code } = queryString.parse(window.location.search);
    if (code) {
      fetchAccessToken(code);
    }
  }, []);

  const fetchAccessToken = async (code) => {
    try {
      const response = await fetch('http://localhost:3001/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      if (data.access_token) {
        setAccessToken(data.access_token);
        // Clear query parameters from the URL after login
        window.history.replaceState({}, document.title, window.location.pathname);
      } else {
        console.error('Failed to obtain access token');
      }
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };

  const handleLogin = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=c3787bf6fd964cadac0de9fa3f715711&response_type=code&redirect_uri=${encodeURIComponent('http://localhost:3000/callback')}&scope=streaming`;
    window.location = authUrl;
  };

  return (
    <div style={styles.container}>
      {!accessToken ? (
        <button style={styles.loginButton} onClick={handleLogin}>
          Login with Spotify
        </button>
      ) : (
        <SpotifyPlayer accessToken={accessToken} />
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    flexDirection: 'column', // Ensure vertical centering
  },
  loginButton: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#1DB954',
    color: 'white',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
};

export default SpotifyAuth;
