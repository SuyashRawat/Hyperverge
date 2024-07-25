const express = require('express');
const cors = require('cors');
const axios = require('axios');
const qs = require('qs');  // Add this line

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/token', async (req, res) => {
  const { code } = req.body;

  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const params = qs.stringify({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: "http://localhost:3000/callback",
    client_id: 'c3787bf6fd964cadac0de9fa3f715711',
    client_secret: 'd82276af8cae4c5f841d2f5cc2f5bb52',
  });

  try {
    const response = await axios.post(tokenUrl, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Spotify token:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: error.response ? error.response.data : 'Failed to fetch token' });
  }
});

app.post('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
