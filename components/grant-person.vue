<script setup>
const props = defineProps([
  'info'
])
</script>

<template>
  <div class="grant-person">
    <img
      :src="info.src"
      :srcset="info.srcset"
      :alt="info.name"
      width="188"
      height="188"
    >
    <div class="copy">
      <h4>{{ info.name }}</h4>
      <p v-html="info.description" />
      <a
        :href="info.link"
        target="_blank"
      ><span>Find out more</span></a>
    </div>
  </div>
</template>

<style scoped lang="scss">

.grant-person {
  display: flex;

  img {
    border-radius: 2px;
    object-fit: cover;
  }

  .copy {
    p {
      text-wrap: balance;
      
      ::v-deep(a) {
        color: var(--primary-stronger);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    > a {
      @include r('margin-top', 15, 25);
      margin-left: -15px;
      color: var(--primary-stronger);
      text-decoration: none;
      display: inline-block;
      position: relative;

      span {
        display: inline-block;
        position: relative;
        transition: all 250ms $ease;
        padding: 3px 15px;
      }

      &:before {
        position: absolute;
        content: '';
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        pointer-events: none;
        transition: all 250ms $ease;
        background-color: var(--primary);
        opacity: 0;
      }

      &:hover {
        // color: var(--primary-strongest);

        &:before {
          opacity: 0.25;
        }
      }
    }
  }

  @include media-query(small) {
    gap: 30px;

    img {
      width: 100px;
      height: 100px;
    }
  }

  @include media-query(medium-up) {
    flex-direction: column;
    gap: 20px;
    
    img {
      width: 100%;
      height: 187px;
    }
  }
}

</style>