import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SpotifyPlayer.css';
import spotifyLogo from '../images/spotify-logo.png';  // Adjust the path as necessary

const SpotifyPlayer = ({ accessToken }) => {
  const [query, setQuery] = useState('');
  const [trackUri, setTrackUri] = useState('');

  const searchTrack = async () => {
    try {
      if (!accessToken) {
        console.error('Access token is missing');
        return;
      }

      const response = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          q: query,
          type: 'track',
          limit: 1,
        },
      });

      const track = response.data.tracks.items[0];
      if (track) {
        setTrackUri(track.uri);
      } else {
        alert('No track found');
      }
    } catch (error) {
      console.error('Error searching track:', error);
    }
  };

  return (
    <div className="spotify-player-container">
      <img src={spotifyLogo} alt="Spotify Logo" className="spotify-logo" />
      <input
        type="text"
        placeholder="Search for a song"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-bar"
      />
      <button onClick={searchTrack} className="search-button">
        Search
      </button>
      {trackUri && (
        <iframe
          src={`https://open.spotify.com/embed/track/${trackUri.split(':')[2]}`}
          className="spotify-iframe"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      )}
    </div>
  );
};

export default SpotifyPlayer;
