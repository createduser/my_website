<script setup lang="ts">

</script>

<template>
  <div id="avatar-frame">
    <img src="../../../../assets/avatar.png" id="avatar-icon">
  </div>
</template>

<style scoped>
#avatar-frame{
  display: flex;
  border-radius: 50%;
  width: 18.75em;
  height: 18.75em;
  background: rgba(255, 206, 0, 0.59);

  overflow: hidden;

  justify-self: center;
  align-self: center;

  align-items: flex-end;
  justify-content: center;

  #avatar-icon{

    width: 17.19em;
    height: 17.19em;
  }
}
</style>