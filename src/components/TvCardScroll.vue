<template>
  <div class="mt-8">

    <div :style="image" class="rend ">
      <div class="transbox">

        <div class="text-5xl font-extrabold ...">
          <span>
            {{ tvshow["name"] }}
          </span>
        </div>
        <br>
        <p class="des" color="white" style="font-family: 'Times New Roman', Times, serif; font-size: x-large;">{{ des }}
        </p>
        <br>
        <div>
          <router-link :to="{ name: 'TvShow', params: { id: tvshow.id } }" class="mt-2 text-lg hover:text-gray-300">

            <div class="ver">
              Ver
            </div>
          </router-link>
          <div class="flex items-center mt-1 text-sm text-gray-400">
            <svg class="w-4 fill-current text-myyellow" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <path
                  d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                  data-name="star" />
              </g>
            </svg>
            <span class="ml-1">{{ tvshow["vote_average"] }}</span>
            <span class="mx-2">|</span>
            <span>{{ tvshow["first_air_date"] }}</span>
          </div>
          <div class="text-sm text-gray-400">{{ tvshow["genres"] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageOrPlaceholder from "./ImageOrPlaceholder.vue";

export default {
  components: { ImageOrPlaceholder },
  props: ["tvshow"],

  data() {
    console.log(this.tvshow);
    return {
      image: { backgroundImage: "url(https://image.tmdb.org/t/p/original/" + this.tvshow.backdrop_path + ")" },
      image_2: "https://image.tmdb.org/t/p/original/" + this.tvshow.poster_path,
      des: this.tvshow.overview,
    };
  },
};
</script>

<style>
.rend {
  background-size: cover;
  background-position: center;
  align-items: center;
  display: flex;
}

.transbox {
  padding: 5%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(5px);
  max-width: 100%;
  max-height: 100%;
}

.pos {
  width: 30%;
}

.des {
  text-indent: 50px;
  text-align: justify;
  letter-spacing: 3px;
}

.ver {
  background-image: linear-gradient(to right, #2b5876 0%, #4e4376 51%, #2b5876 100%);
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.ver:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
