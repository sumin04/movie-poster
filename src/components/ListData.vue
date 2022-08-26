<template>
  <div v-for="(val, idx) in dataList" :key="idx" :class="className">
    <router-link :to="{ name: linkName, params: { titleId: val.id, userId: val.userId } }">
      <span v-if="className === 'users'">{{ val.userId }}</span>
      <span v-else-if="className === 'titleList'">TITLE : {{ val.title }}</span>
      <span v-else-if="className === 'memo'">
        <h3>TITLE : {{ val.title }}</h3>
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    // 문자열
    dataList: Array,
    className: String,
    linkName: String,
  },
  mounted(){
    console.log(this.linkName);
  }
};
</script>

<style>

</style>