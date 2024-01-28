# Jeffrey Crowley's OIT Coding Challenge

## Overview
This is a simple web application that allows users to search for movies based on title. The application uses a Vue/Nuxt frontend and a Node/Express backend. The webapp frontend is served by the webservice backend, and the backend queries the [TMDb API](https://developers.themoviedb.org/3/getting-started/introduction) for movie data. The frontend is styled using [Tailwind CSS](https://tailwindcss.com/).

## Running the Application
### Prerequisites
- [Node.js](https://nodejs.org/en/) (v14.17.0)
- [npm](https://www.npmjs.com/) (v6.14.13)
- [Yarn](https://yarnpkg.com/) (v1.22.10)
- [Vue CLI](https://cli.vuejs.org/) (v4.5.13)
- [Nuxt.js](https://nuxtjs.org/) (v2.15.7)
- A *valid* [TMDB API access token](https://developers.themoviedb.org/3/getting-started/introduction) or API key. See below for troubles I had with this.

### Steps
1. Clone the repository
2. Navigate to the /webservice directory of the repository
3. Run `npm install` to install dependencies
4. Create a .env file in the /webservice directory with the following contents:
```
ACCESS_TOKEN=<your TMDb API access token OR API key>
```
5. Run `node app.js` to start the backend server
6. In a separate terminal, navigate to the /webapp directory of the repository
7. Run `yarn install` to install dependencies
8. Run `yarn dev` to start the frontend server
9. Navigate to http://localhost:3000 in your browser to view the application

### Notes/Future Improvements
- The current frontend is very basic and could be improved with more features and styling. I would add a header (and logo, if it existed) to the top of the page. It is also not responsive, so it does not look good on mobile devices. It also pushes the search bar to the top of the page when displaying results, which is not ideal.
- I was sloppy with my git commits and ended up committing my .env file. I later removed it and added it to the .gitignore, but it still exists in the git history. If I had more time, I would go back and remove it from the git history.
- The current enter process for the search is a little clunky. I would like to wrap the search bar and button in a form instead of using the onKeyUp event listener.
- I didn't utilize CSS as much as I should have. Due to time constraints, I used Tailwind CSS's utility classes instead of writing my own CSS. I would like to go back and write my own CSS for the application or at least figure out a better method than using a bunch of utility classes for styling. 
- General code cleanup and refactoring. I would like to add more comments to the code and make it more readable.
- I had to spend a significant amount of time troubleshooting the TMDb API key. No matter how I created it or refreshed it, the API key would *not* work for me. I kept getting back 401 errors and being told that my key wasn't valid. I ended up using an access token instead, which worked fine, but it only worked after some troubleshooting and wasted time. I would have liked to spend more time on the frontend visuals and backend unit tests, but I had to spend a lot of time troubleshooting the API key.