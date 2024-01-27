const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = 8080;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

console.log(ACCESS_TOKEN);

app.get('/movies', async (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  };

  const url = `https://api.themoviedb.org/3/search/movie?query=${req.query}&include_adult=false&language=en-US&page=1`;

  let body = {};

  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      body = json.results.map(movie => {
        return {
          title: movie.title,
          poster_image: movie.poster_path,
          popularity: movie.popularity
        }
      })
      // limit to 10 movies
      body = body.slice(0, 10);
    })
    .catch(err => console.error('Error fetching movies: ', err));

  res.send(body);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
