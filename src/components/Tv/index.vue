<script>
import { onMounted } from "vue";
import TvCard from "../TvCard.vue";
import TvCardScrollVue from "../TvCardScroll.vue";
import getPopularTv from "./composables/getPopularTv";
import getTopRatedShows from "./composables/getTopRatedTv";

// Import Swiper Vue.js components
import { Swiper } from "swiper/vue/swiper";
import { SwiperSlide } from "swiper/vue/swiper-slide";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    TvCard, Swiper,
    SwiperSlide, TvCardScrollVue,
  },
  setup() {
    const { popularTv, loadPopularTv } = getPopularTv();
    const { topRatedShows, loadTopRatedShows } = getTopRatedShows();

    onMounted(() => {
      loadPopularTv();
      loadTopRatedShows();
    });

    return { topRatedShows, popularTv, modules: [Autoplay, Pagination, Navigation], };
  },
};
</script>

<template>
  <div class="container px-4 pt-10 mx-auto">
    <div>
      <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :pagination="{
  clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="topTv in topRatedShows" :key="topTv.id">
          <div class="items-center">
            <tv-card-scroll-vue :tvshow="topTv" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="py-12 top-rated-shows">
      <h2 class="pb-4 text-lg font-semibold tracking-wider text-gray-600 uppercase dark:text-myyellow">
        Mejores calificados
      </h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div v-for="topTv in topRatedShows" :key="topTv.id">
          <tv-card :tvshow="topTv" />
        </div>
      </div>
    </div>
    <div>
      <h2 class="text-lg font-semibold tracking-wider text-gray-600 uppercase dark:text-myyellow">
        Programas populares
      </h2>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div v-for="popTv in popularTv" :key="popTv.id">
          <tv-card :tvshow="popTv" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
