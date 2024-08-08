<script setup lang="ts">
import {HomePageData} from "../../../../homePageData.ts"
import HomePage from "./HomePage.vue";

const props = defineProps(
    {
      homepages : {
        type : Array<HomePageData>,
        default : []
      },
      target: {
        type : String,
        default : "_blank",
        validator: (value) => ['_blank', '_self','_parent','_top'].includes(typeof value === "string" ? value : "_blank")
      }
    }
)

</script>

<template>
  <div id="home-page-bar">
    <HomePage v-for="(homepage,index) in props.homepages" :key="index"  :homepage="homepage" class="homepage" target="target"/>
  </div>
</template>


<style scoped>
#home-page-bar{
  display: flex;
  justify-content: center;
}
</style>