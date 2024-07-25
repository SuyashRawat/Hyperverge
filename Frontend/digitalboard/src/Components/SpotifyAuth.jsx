import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import SpotifyPlayer from './SpotifyPlayer';
import '../styles/SpotifyAuth.css';
import spotifyLogo from '../images/spotify-logo.png';  // Adjust the path as necessary

const SpotifyAuth = () => {
  const [accessToken, setAccessToken] = useState(null);
  const clientId = 'c3787bf6fd964cadac0de9fa3f715711';
  const redirectUri = 'http://localhost:3000';
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
    <div className="container">
      {!accessToken ? (
        <button className="loginButton" onClick={handleLogin}>
          <img src={spotifyLogo} alt="Spotify Logo" />
          Login with Spotify
        </button>
      ) : (
        <SpotifyPlayer accessToken={accessToken} />
      )}
    </div>
  );
};

export default SpotifyAuth;
