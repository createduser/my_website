<script setup lang="ts">
import {HomePageData} from "../../../../homePageData.ts";

const props = defineProps({
  homepage: {
    type:HomePageData,
    default : () => new HomePageData(
        "nothing",
        new URL("javascript:void(0)"),
        "javascript:void(0)"
    )
  },
  target: {
    type : String,
    default : "_blank",
    validator: (value) => ['_blank', '_self','_parent','_top'].includes(typeof value === "string" ? value : "_blank")
  }
})
</script>

<template>
  <div class="homePage">
    <a :target="target" :href="props.homepage.href.href">
      <img :src="props.homepage.iconURL">
    </a>
  </div>
</template>

<style scoped>
.homePage{
  padding: 36px 18px 0px 18px;
}
</style>