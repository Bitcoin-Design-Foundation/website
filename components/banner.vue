<script setup>

</script>

<template>
  <div class="banner">
    <h1>Open-source.<br/>Bitcoin. Design.<br/>Funding.</h1>
    <div class="options">
      <Button 
        to="/donate" 
        size="big"
        theme="ghost" 
      >Donate</Button>
      <Button 
        to="/apply" 
        size="big"
        theme="ghost"
      >Apply</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">

.banner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
  @include r('padding-top', 35, 70);
  @include r('padding-bottom', 35, 70);

  h1 {
    @include r('font-size', 48, 88);
  }

  .options {
    display: flex;
    gap: 20px;
  }
}

</style>