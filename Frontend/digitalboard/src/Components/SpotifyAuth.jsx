import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import SpotifyPlayer from './SpotifyPlayer';

const SpotifyAuth = () => {
  const [accessToken, setAccessToken] = useState(null);
  const clientId = 'c3787bf6fd964cadac0de9fa3f715711';
  const redirectUri = 'http://localhost:3000/callback';
  const scopes = 'streaming user-read-private user-read-email';

  useEffect(() => {
    const { access_token } = queryString.parse(window.location.hash);
    if (access_token) {
      setAccessToken(access_token);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleLogin = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
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
    flexDirection: 'column',
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
