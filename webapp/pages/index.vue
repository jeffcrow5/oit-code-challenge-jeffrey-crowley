<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-10">
    <input class="shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline w-3/4 max-width 5/6" type="text" v-model="searchQuery" placeholder="Enter movie title">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline" @click="searchMovies">Search</button>

    <div v-if="searchResults.length > 0">
      <div v-for="movie in searchResults" :key="movie.id">
        <h2>{{ movie.title }}</h2>
        <img :src="movie.poster" alt="Movie Poster">
        <p>{{ movie.popularity }}</p>
        <ul>
          <li v-for="recommendation in movie.recommendations" :key="recommendation.id">
            {{ recommendation.title }}
          </li>
        </ul>
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
    searchMovies() {
      // Call web service and update the searchResults array with response
    }
  }
};
</script>

<style>

</style>
