<script setup lang="ts">

import AvatarFrame from "./AvatarFrame.vue";
import HomePageBar from "./HomePageBar.vue";
import {HomePageData} from "../../../../homePageData.ts";

const github = new HomePageData(
    "github",
    new URL("https://github.com/createduser/"),
    "/src/assets/icons/platforms/github.svg",
)
const qq = new HomePageData(
    "qq",
    new URL("https://ti.qq.com/open_qq/index2.html?url=mqqapi%3a%2f%2fuserprofile%2ffriend_profile_card%3fsrc_type%3dweb%26version%3d1.0%26source%3d2%26uin%3d3752434732"),
    "/src/assets/icons/platforms/qq.svg",
)
const gitee = new HomePageData(
    "gitee",
    new URL("https://gitee.com/userrrrr"),
    "/src/assets/icons/platforms/gitee.svg",
)
const bilibili = new HomePageData(
    "bilibili",
    new URL("https://space.bilibili.com/489980247"),
    "/src/assets/icons/platforms/bilibili.svg",
)
const mail = new HomePageData(
    "mail",
    new URL("mailto:ordinary@userrrrr.cn"),
    "/src/assets/icons/platforms/mail.svg",
)

const homepages = [
    github,qq,gitee,bilibili,mail
]
</script>

<template>
  <div id="avatar">
    <AvatarFrame/>
    <HomePageBar :homepages="homepages"/>
  </div>
</template>

<style scoped>
#avatar{
  display: flex;
  flex-flow: column;

  margin: auto 0 auto 0;
}
</style>