<script setup>

</script>

<template>
  <div class="intro">
    <p><b>Our mission is to support designers and builders who help push the user experience and adoption of bitcoin and related technologies forward.</b></p>
    <p>Bitcoin is at its heart a global technology that is open to all. Technological innovation and good design go hand-in-hand in this, and our goal is to accelerate progress. We are a non-profit organization, established on Open Collective Europe which provides accounting support and the establishment of a non-profit entity. Our activities are funded by donations from individuals and organizations who wish to support our mission.</p>
    <div class="options">
      <Button
        url="mailto:hi@bitcoindesignfoundation.org"
      >Email us</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">

.intro {
  display: flex;
  flex-direction: column;
  gap: 30px;
  @include r('padding-top', 35, 70);

  p {
    b {
      font-family: 'Space Grotesk', sans-serif;
      @include r('font-size', 24, 36);
      line-height: 1.2;
      font-weight: 600;
      color: var(--text-dark);
    }
  }
}

</style>