<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-10">
    <h1 class="text-5xl font-bold">Movie Search</h1>
    <input class="shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline w-3/4 max-width 5/6" type="text" @keyup.enter="searchMovies" v-model="searchQuery" placeholder="Enter movie title">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline" @click="searchMovies">Search</button>

    <div class="grid grid-cols-4 gap-5 p-5" v-if="searchResults.length > 0">
      <div class="flex flex-col items-center gap-3" v-for="movie in searchResults" :key="movie.id">
        <p class="text-lg font-bold">{{ movie.title }}</p>
        <img class="rounded-md" :src="movie.poster_image_url" alt="Movie Poster">
        <p>Popularity: {{ movie.popularity_summary }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchResults: []
    };
  },
  methods: {
    async searchMovies() {
      try {
        const response = await fetch(`http://localhost:8080/movies?query=${this.searchQuery}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        const data = await response.json();
        this.searchResults = data;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
