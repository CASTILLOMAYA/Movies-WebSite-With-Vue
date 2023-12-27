<template>
	<scrollVue></scrollVue>
	<popular-movies></popular-movies>
	<now-playing-movies></now-playing-movies>
</template>

<script>
	import MovieCard from "../MovieCard.vue";
	import NowPlayingMovies from "../Movies/components/NowPlayingMovies.vue";
	import PopularMovies from "../Movies/components/PopularMovies.vue";
  import scrollVue from "./scroll.vue";

	export default {
		components: {
			MovieCard,
			PopularMovies,
			NowPlayingMovies,
      scrollVue,
		},
		setup() {},
	};
</script>