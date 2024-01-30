<script setup>

</script>

<template>
  <div class="banner-waves">
    <Nav theme="dark" />
    <div class="copy">
      <h1>Open-source.<br/>Bitcoin. Design.<br/>Funding.</h1>
      <div class="options">
        <Button 
          to="/donate" 
          theme="filled" 
          size="big"
        >Donate</Button>
        <Button 
          to="/apply" 
          theme="filled" 
          size="big"
        >Apply</Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.banner-waves {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  background-image: url('/assets/images/waves.jpg');
  background-size: cover;
  background-position: center center;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;

  .copy {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 35px;
    @include r('padding-top', 20, 70);
    @include r('padding-bottom', 40, 70);
    @include r('padding-left', 20, 70);
    @include r('padding-right', 20, 70);
    background: linear-gradient(to bottom, rgba(black, 0) 0%, rgba(black, 0.35) 75%);

    h1 {
      @include r('font-size', 48, 88);
      font-weight: 600;
      color: white;
    }

    .options {
      display: flex;
      gap: 20px;
    }
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { 
    background-image: url('/assets/images/waves@2x.jpg');
    min-height: 600px;
  }

  @include media-query(medium-up) {
    height: 85vh;
    min-height: 700px;
  }
}

</style>