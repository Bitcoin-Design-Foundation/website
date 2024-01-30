<script setup>

</script>

<template>
  <div class="home">
    <BannerWaves />
    <div class="content-wrap">
      <div class="content">
        <Intro />
        <Community />
        <Team />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.home {
  .content-wrap {
    padding-left: 20px;
    padding-right: 20px;
    
    .content {
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;
      @include r('gap', 35, 70);
    }
  }
}

</style>