
<template>
    <br>
    <div class="text-center" background-color="white">
        <div class="text-5xl font-extrabold ...">
            <span class="bg-clip-text  from-pink-500 to-violet-500">
                CASTILLOMAYA MOVIES
            </span>
        </div>
        <br>
        <div class="text-white">
            <div class="mb-8 flex flex-col items-center">
                <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
                    :coverflowEffect="{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
}" :pagination="{
    clickable: true,
}" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}">
                    
                        <swiper-slide v-for="popularMovie in popularMovies" :key="popularMovie.id"
                            :background-color="black">
                            <MovieFont :movie="popularMovie" :genres="getMovieGenres(genres, popularMovie.genre_ids)" />
                        </swiper-slide>
                    
                </swiper>

            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import getMovieGenres from "../Movies/composables/getMovieGenres";
import LoadingBar from "../LoadingBar.vue";
import MovieFont from "../MovieFont.vue";
import getGenres from "../Movies/composables/getGenres";
import getPopularMovies from "../Movies/composables/getRecentMovies";

 

//swiper
// Import Swiper Vue.js components
import { Swiper } from "swiper/vue/swiper";
import { SwiperSlide } from "swiper/vue/swiper-slide";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);

export default defineComponent({
    name: "scrollVue",
    components: { MovieFont, LoadingBar, Swiper, SwiperSlide, },
    setup() {
        const { popularMovies, loading, loadPopularMovies } = getPopularMovies();
        console.log("lista")
        console.log(popularMovies)
        const { genres, loadGenres } = getGenres();

        onMounted(() => {
            loadPopularMovies();
            loadGenres();
        });

        return { popularMovies, loading, genres, getMovieGenres };
    },
    methods: {
        onSwiper: function () {
            console.log("onSwiper called");
        },
        onSlideChange: function () {
            console.log("Slide change");
        },
    },
});
</script>
<style scoped>
.swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide:nth-child(1n) {
    background-color: palevioletred;
}

.swiper-slide:nth-child(2n) {
    background-color: skyblue;
}

.swiper-slide:nth-child(3n) {
    background-color: peru;
}

.swiper-slide:nth-child(4n) {
    background-color: cadetblue;
}

.swiper-slide:nth-child(5n) {
    background-color: plum;
}

.swiper-slide:nth-child(6n) {
    background-color: goldenrod;
}

.swiper-slide:nth-child(7n) {
    background-color: palegreen;
}
</style>
