<template>
  <div>
    <div v-if="filteredList === null">
        <img width="300" src="https://www.instiz.net/name_enter/53562744">
        <h3>로딩중입니다.</h3>
    </div>

    <div v-else-if="filteredList.length < 1">
        <img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" />
        <h4>유저가 발견되지 않았음</h4>
        
        <router-link :to="{name: 'memo', params: { userId: this.$router.params.userId, titleId: backPage},}">
            {{ refresh() }}돌아가기
        </router-link>
    </div>

    <div v-else>
        {{ getPage() }}
        <div>{{ filteredList[0].title }}</div>
        <textarea type="text" />

        <div @click="refresh()">
            <router-link :to="{ name: 'memo', params: { userId: this.$route.params.userId, titleId: prevPage }, }">
            prev
            </router-link>

            <router-link :to="{ name: 'memo', params: { userId: this.$route.params.userId, titleId: nextPage }, }">
            next
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {

    },

    data() {
        return {
            filteredList: null,
            nextPage: Number,
            prevPage: Number,
            backPage: Number,
        };
    },

    computed: {
        filteredData() {
            return this.$usersData.filter((user) => {
                if (user.userId === Number(this.$route.params.userId)) {
                    return user;
                }
                return false;
            });
        },
    },

    methods: {
        getPage: function () {
            for (let page = 0; page < this.filteredData.length; page++) {
                if (this.filteredData[page].id === Number(this.$route.params.titleId)) {
                    this.nextPage = this.filteredData[page].id + 1;
                    this.prevPage = this.filteredData[page].id - 1;
                    this.backPage = this.filteredData[page].id;
                }
            }
        },
        refresh: function () {
            let self = this;
            this.filteredList = [];

            this.filteredData.filter((user) => {
                if (user.id === Number(this.$route.params.titleId)) {
                    self.filteredList.push(user);
                }
            });
        },
    },

    mounted() {
        let self = this;
        this.filteredList = []

        this.filteredData.filter((user) => {
            if (user.id === Number(this.$route.params.titleId)) {
                self.filteredList.push(user);
            }
        });
    },
};
</script>

<style>

</style>