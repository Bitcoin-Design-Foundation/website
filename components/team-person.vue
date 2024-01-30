<script setup>
const props = defineProps([
  'info'
])
</script>

<template>
  <div class="team-person">
    <img
      :src="info.src"
      :srcset="info.srcset"
      :alt="info.name"
      width="254"
      height="188"
    >
    <div class="copy">
      <h4>{{ info.name }}</h4>
      <p>{{ info.role }}</p>
      <div class="links">
        <a
          v-if="info.social"
          :href="info.social"
          target="_blank"
        ><span>Social</span></a>
        <a
          v-if="info.newsletter"
          :href="info.newsletter"
          target="_blank"
        ><span>Newsletter</span></a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.team-person {
  display: flex;

  img {
    border-radius: 2px;
    object-fit: cover;
  }

  .copy {
    .links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @include r('margin-top', 15, 25);
      margin-left: -15px;

      a {
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