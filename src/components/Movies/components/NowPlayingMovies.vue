<template>
  <div class="container px-4 py-10 mx-auto">
    <div>
      <h2
        class="pb-6 text-lg font-semibold tracking-wider text-gray-600 uppercase dark:text-myyellow"
      >
        Peliculas ahora
      </h2>
      <div v-if="loading"><loading-bar /></div>
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        <div
          class="mt-4"
          v-for="nowPlayingMovie in nowPlayingMovies"
          :key="nowPlayingMovie.id"
        >
          <MovieCard
            :movie="nowPlayingMovie"
            :genres="getMovieGenres(genres, nowPlayingMovie.genre_ids)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import getNowPlayingMovies from "../composables/getNowPlayingMovies";
  import getGenres from "../composables/getGenres";
  import MovieCard from "../../MovieCard.vue";
  import { onMounted } from "vue";
  import getMovieGenres from "../composables/getMovieGenres";
  import LoadingBar from "../../LoadingBar.vue";

  export default {
    props: [],
    components: {
      MovieCard,
      LoadingBar,
    },
    setup() {
      const { nowPlayingMovies, loading, loadNowPlayingMovies } =
        getNowPlayingMovies();
      const { genres, loadGenres } = getGenres();

      onMounted(async () => {
        loadNowPlayingMovies();
        loadGenres();
      });

      return { nowPlayingMovies, loading, genres, getMovieGenres };
    },
  };
</script>

<style>
</style>
