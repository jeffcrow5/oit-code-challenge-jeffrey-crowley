const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
const PORT = 8080;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

app.get('/movies', async (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  };

  const query = req.query.query;
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  let body = {};

  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      body = json.results.map(movie => {
        return {
          movie_id: movie.id,
          title: movie.title,
          poster_image_url: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
          popularity_summary: `${movie.vote_average} average from ${movie.vote_count} votes`,
        }
      })
      // limit to 10 movies
      body = body.slice(0, 10);
    })
    .finally(() => {
      res.send(JSON.stringify(body));
    })
    .catch(err => console.error('Error fetching movies: ', err));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
