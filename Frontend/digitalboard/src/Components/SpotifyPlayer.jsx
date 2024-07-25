import React, { useState } from 'react';
import axios from 'axios';

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
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search for a song"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.searchBar}
      />
      <button onClick={searchTrack} style={styles.searchButton}>
        Search
      </button>
      {trackUri && (
        <iframe
          src={`https://open.spotify.com/embed/track/${trackUri.split(':')[2]}`}
          width="100%"
          height="80"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          style={styles.iframe}
        ></iframe>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '350px',
    height: '450px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
    boxSizing: 'border-box',
  },
  searchButton: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#1DB954',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  iframe: {
    borderRadius: '4px',
  },
};

export default SpotifyPlayer;
