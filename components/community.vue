<script setup>

</script>

<template>
  <div class="community">
    <div class="copy">
      <h2>The Bitcoin Design Community</h2>
      <p>Bitcoin is at its heart a global technology that is open to all. This potential can only be achieved if we can make bitcoin accessible and usable by as many people as possible. Technological innovation and good design go hand-in-hand in this, and our goal is to accelerate progress.</p>
      <Button
      url="https://bitcoin.design"
      >Visit bitcoin.design</Button>
    </div>

    <img
      src="/assets/images/community-collage.jpg"
      srcset="/assets/images/community-collage.jpg 1x, /assets/images/community-collage@2x.jpg 2x"
      width="900"
      height="700"
    >
  </div>
</template>

<style scoped lang="scss">

.community {
  display: flex;
  flex-direction: column;
  @include r('gap', 30, 50);

  .copy {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

</style>