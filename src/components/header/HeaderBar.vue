<script lang="ts">
import Language from "./Langauge.vue";
import {NButton} from "naive-ui";
import NButtonGroup from "naive-ui";

export default {
  components: {
    Language,NButton,NButtonGroup
  }
}
</script>

<template>
  <div id="header-bar">
    <span/>
    <b class="title">userrrrr</b>
    <span class="links">
      <n-button text size="large" type="default" class="link-button">
        <template #default>
          文档
        </template>
      </n-button>
      <n-button text size="large" type="default" class="link-button">
        <template #default>
          软件
        </template>
      </n-button>
    </span>
  </div>
</template>

<style scoped>
@font-face {
  src: url('/src/assets/fonts/SourceHanSansHWSC-Regular.otf');
  font-family: 'SourceHanSansHWSC-Regular';
}
@font-face {
  src: url('/src/assets/fonts/SourceHanSansHWSC-Bold.otf');
  font-family: 'SourceHanSansHWSC-Bold';
}
#header-bar{
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

  padding: 1.5em;
  min-height: 5.25em;

  *{
    margin-bottom: auto;
    margin-top: auto;
  }
  .title{
    color: #333333;
    font-size: 1.5rem;
    text-align: center;

    font-family: SourceHanSansHWSC-Bold,serif;
   }
  .links{
    display: flex;
    flex-flow: row-reverse;
    gap: 2em;

    font-family: SourceHanSansHWSC-Regular,serif;
  }
}

</style>