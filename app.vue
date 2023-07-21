<script setup>

const image = ref(null)
const imageLoaded = ref(false)

function onLoadImage() {
  imageLoaded.value = true
}

const imageClass = computed(() => {
  return imageLoaded.value ? '-loaded' : null
})

function checkImageLoaded() {
  if(image.value && image.value.complete && image.value.naturalHeight !== 0) {
    imageLoaded.value = true
  } else {
    setTimeout(checkImageLoaded, 100)
  }
}

onMounted(() => {
  checkImageLoaded()
})

</script>

<template>
  <div id="app">
    <img
      ref="image"
      :class="imageClass"
      src="/assets/images/background.jpg"
      srcset="/assets/images/background.jpg 1x, /assets/images/background@2x.jpg 2x" 
      alt=""
      width="800"
      height="239"
      @load="onLoadImage"
    >
    <div class="content">
      <h1>
        <img 
          src="/assets/images/logo.svg" 
          alt="Bitcoin Design Foundation"
          width="800"
          height="239"
        >
      </h1>
      <p>Our mission is to support designers who improve the bitcoin user experience. Coming soon.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  min-height: 100vh;
  position: relative;

  > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: all 400ms $ease;

    &.-loaded {
      opacity: 1;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include r('gap', 10, 30);
    position: relative;
    max-width: 800px;
    @include r('padding', 20, 40);

    h1 {

      img {
        width: 100%;
        height: auto;
      }
    }

    p {
      text-align: center;
      color: white;
      font-weight: 600;
      @include r('font-size', 24, 36);
      line-height: 1.1;
      letter-spacing: -0.05rem;
      text-wrap: balance;
    }
    
  }
}

</style>