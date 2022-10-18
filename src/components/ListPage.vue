<template>
  <div>
    <h1 class="text-cyan-900 text-4xl font-bold mb-[30px]
      py-[20px] border-b-sky-600 border-[0.2px]"
    >
      한국 역대영화 순위 TOP 10
    </h1>

    <div class="button" v-for="(movie, index) in this.$movie" :key="index">
      <router-link
        class="text-black border-none"
        :to="{ name: 'data', params: { movieId: movie.number } }"
      >
        <h3 class="mt-[30px]">{{ movie.name }}</h3>
      </router-link>
    </div>
  </div>
</template>
<script></script>

<style>
* {
  margin: 0;
  padding: 0;
  text-align: center;
}
.button {
  border: none;
  background-color: white;
  font-size: 20px;
  display: block;
}
</style>
