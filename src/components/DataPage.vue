<template>
    <div>
        <!-- <router-link :to = "{name : 'list'}" style="text-decoration: none;"> -->
            <h1 style="padding: 20px 0;
                "
                class="
                    text-cyan-900 text-4xl font-bold border-b-sky-600 border-[0.2px]
                    mb-[30px] py-[20px]
                ">한국 역대영화 순위 TOP 10</h1>
        <!-- </router-link> -->

        <!-- <div v-for="(movie, index) in this.$movie" :key="index"> -->
        <div class="container">
            <span class="first-box">
                <img :src="this.$movie[this.$route.params.movieId-1].img"/>
            </span>
            <span class="second-box">
                <router-link :to = "{name : 'list'}" style="text-decoration: none;">
                    <img class="logo" src="../img/X.png.png">
                </router-link>
                <p class="text"><b>순위</b> : {{ this.$movie[this.$route.params.movieId-1].number }}</p>
                <p class="text"><b>영화 제목</b> : {{ this.$movie[this.$route.params.movieId-1].name }}</p>
                <p class="text"><b>영화 감독</b> : {{ this.$movie[this.$route.params.movieId-1].director }}</p>
                <p class="text"><b>개봉일</b> : {{ this.$movie[this.$route.params.movieId-1].release }}</p>
                <p class="text"><b>관객수</b> : {{ this.$movie[this.$route.params.movieId-1].accrue }}</p>
                <p class="text">{{ this.$movie[this.$route.params.movieId-1].famous }}</p>
            </span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.container{
    width: 700px;
    height: 500px;
    display: flex;
    margin: auto;
    margin-top: 80px;
    box-shadow: 10px 10px 10px 2px gray;
}
.first-box{
    width: 300px;
    height: 500px;
}
.first-box > img{
    width: 100%;
    height: 100%;
}
.second-box{
    width: 400px;
    background-color: rgb(252, 252, 252);
}
.logo{
    padding: 10px 0 0 350px;
    width: 20px;
    height: 20px;
}
.text{
    font-size: 20px;
    padding: 12px 20px;
    text-align: left;
}
</style>