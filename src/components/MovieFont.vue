<script>
import formatDate from "../composables/formatDate";
import ImageOrPlaceholderFont from './ImageOrPlaceholderFont.vue';

export default {
  components: { ImageOrPlaceholderFont },
  props: ["movie"],
  setup() {
    return { formatDate };
  },
};
</script>


<template>
  <router-link :to="{ name: 'MoviesShow', params: { id: movie['id'] } }">
      <image-or-placeholder-font :result="movie" size="w500" my_key="poster_path"/>
  </router-link>

</template>
