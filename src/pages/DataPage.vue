<template>
  <div>
    <div class="option">
        <b :class="{'clickedDiv' : clickedButton ==='all'}" @click="filterFunc('all')">전체</b>
        <b :class="{'clickedDiv' : clickedButton ==='writting'}" @click="filterFunc('writting')">작성중</b>
        <b :class="{'clickedDiv' : clickedButton ==='complete'}" @click="filterFunc('complete')">완료</b>
    </div>

    <div v-if="filteredDataList.length < 1">
        <img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" alt="">
        <h4>유저가 발견되지 않앗서여ㅛ</h4>
    </div>

    <div v-else>
        <list-data
            :linkName="'memo'"
            :dataList="filteredDataList"
            :className="'titleList'"
        />
    </div>
  </div>
</template>

<script>
import ListData from '../components/ListData.vue'

export default {
  components: { 
        ListData,
    },

    data() {
        return {
            filteredDataList: [],
            clickedButton: String,
        };
    },

    methods: {
        filterFunc: function (filterStandard) {
            this.filteredDataList = [];

            if (filterStandard === "all") {
                this.filteredDataList = this.filteredData;
                this.clickedButton = "all";
            } else if (filterStandard === "writting") {
                this.filteredData.filter((user) => {
                    if (user.completed === false) {
                        this.filteredDataList.push(user);
                    }
                });
                this.clickedButton = "writting";
            } else if (filterStandard === "complete") {
                this.filteredData.filter((user) => {
                    if (user.completed === true) {
                        this.filteredDataList.push(user);
                    }
                });
                this.clickedButton = "complete";
            }
        },
    },

    computed: {
        filteredData() {
            return this.$axiosDataList.filter((user) => {
                if (user.userId === Number(this.$route.params.userId)) {
                    return user;
                }   
            });
        },
    },

    mounted() {
        this.filteredDataList = this.filteredData;
        this.clickedButton = "all";
    },
};
</script>

<style>
    .option > b{
        margin: 0 30px;
        font-size: 18px;
    }
</style>