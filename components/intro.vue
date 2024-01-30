<script setup>

</script>

<template>
  <div class="intro">
    <p><b>Our mission is to support designers and builders who help push forward the user experience and adoption of bitcoin and related technologies.</b></p>
    <p>Bitcoin is at its heart a global technology that is open to all. This potential can only be achieved if we can make bitcoin accessible and usable by as many people as possible. Technological innovation and good design go hand-in-hand in this, and our goal is to accelerate progress. We are a non-profit organization, established as a Verein (association) in Germany. Our activities are funded by membership fees and donations from individuals and organizations who wish to support our mission. All donations are passed on in the form of grants.</p>
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
      font-size: 36px;
      line-height: 1.2;
      font-weight: 600;
      color: var(--text-dark);
    }
  }
}

</style>