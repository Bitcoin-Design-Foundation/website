<script setup>

const people = [
  {
    name: 'Mogashni',
    role: 'UX Researcher',
    src: '/assets/images/mogashni.jpg',
    srcset: '/assets/images/mogashni.jpg 1x, /assets/images/mogashni@2x.jpg 2x',
    email: 'mo@bitcoindesignfoundation.org',
    social: 'https://twitter.com/MogashniNaidoo',
    newsletter: 'http://mogashni.substack.com'
  },
  {
    name: 'Daniel',
    role: 'Designer',
    src: 'daniel.jpg',
    srcset: '/assets/images/daniel.jpg 1x, /assets/images/daniel@2x.jpg 2x',
    email: 'daniel@bitcoindesignfoundation.org',
    social: 'https://twitter.com/danielnordh'
  },
  {
    name: 'Christoph',
    role: 'Designer',
    src: 'christoph.jpg',
    srcset: '/assets/images/christoph.jpg 1x, /assets/images/christoph@2x.jpg 2x',
    email: 'chistoph@bitcoindesignfoundation.org',
    social: 'https://twitter.com/GBKS',
    newsletter: 'http://gbks.substack.com'
  }
]

</script>

<template>
  <div class="team">
    <div class="copy">
      <h2>The team</h2>
      <p>Phasellus ultricies ex a facilisis tincidunt. Vestibulum scelerisque, felis eget finibus vestibulum, risus nunc gravida nunc, sed placerat metus tortor non leo. Donec ante justo, tempus at magna pellentesque, scelerisque dictum libero.</p>
    </div>
    <div class="items">
      <TeamPerson
        v-for="item in people"
        :key="item.name"
        :info="item"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

.team {
  display: flex;
  flex-direction: column;
  @include r('gap', 30, 50);

  .copy {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .items {
    display: flex;
    gap: 15px;
  }

  @include media-query(small) {
    .items {
      flex-direction: column;
      gap: 35px;
    }
  }

  @include media-query(medium-up) {
    .items {
      gap: 70px;

      > * {
        flex-basis: 10%;
        flex-grow: 1;
      }
    }
  }
}

</style>