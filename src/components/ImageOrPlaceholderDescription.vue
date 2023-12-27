<script>
export default {
  props: ["images", "descripcion", "res"],
  setup() { },
  data() {
    return {
      image: { backgroundImage: 'url(https://image.tmdb.org/t/p/w500' + this.images[0].file_path + ')' }

    };
  },
};

</script>

<template>
  
  <div class="container">
    <div :key="images[0].file_path" :style="image" class="ba">

      <div class="box">
        <p class="text-gray-900">{{ res["overview"] }}</p>
      </div>
    </div>
  </div>

</template>
<style>
.box {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: x-large;
  text-align: center;
  line-height: 1;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  max-width: 100%;
  padding: 20px 40px;
}
.ba{
  background-repeat: no-repeat;
}
</style>
