<script setup lang="ts">
import Avatar from "./homePage/avatar/Avatar.vue";
import Title from "./Title.vue";
</script>;

<template>
  <div id="main">
    <Avatar/>
    <Title/>
  </div>
</template>

<style scoped>
#main{
  display: flex;

  flex: 2;
  padding: 8em;
  height: calc(100% - 30em);
}
</style>