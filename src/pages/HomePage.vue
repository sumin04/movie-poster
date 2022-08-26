<template>
    <!-- 데이터가 null -->
    <div v-if="usersDataList === null">
        <img width="300" src="https://gifburg.com/images/gifs/loading/gifs/0013.gif" alt="">
        <h3>데이터 불러오는 중</h3>
    </div>

    <!-- 데이터 길이가 1 미만 -->
    <div v-else-if="usersDataList.length < 1">
        <img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" alt="">
        <h3>유저가 발견되지 않았어요 !</h3>
    </div>

    <div v-else>
        <list-data class="data-list" :dataList="usersDataList" :className="'users'" :linkName="'data'" />
    </div>

    <input type="button" @click="fetchData()" value="새로고침" />
</template>

<script>
import ListData from "../components/ListData.vue";

export default {
    components: {
        ListData,
    },

    data() {
        return {
            usersId: null,
            usersDataList: null,
        };
    },

    methods: {
        fetchData: function() {
            this.usersId = [];
            this.usersDataList = [];
            this.$axiosDataList.filter((user) => {
                let user_id = user.userId;

                if (this.usersId.indexOf(user_id) === -1) {
                    this.usersId.push(user_id);
                    this.usersDataList.push(user);
                }
            });
        },
    },

    mounted() {

    },

};
</script>

<style>
    .data-list{
        padding: 15px 0;
    }
</style>