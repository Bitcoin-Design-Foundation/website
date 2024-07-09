<script setup>

const people = [
  {
    name: 'Michael',
    description: 'Design and more on the <a href="https://bitcoincore.app/" target="_blank">Bitcoin Core App</a>.',
    link: 'https://opencollective.com/bitcoin-design-foundation/updates/grant-5-michael-and-bitcoin-core-app',
    src: '/assets/images/michael.jpg',
    srcset: '/assets/images/michael.jpg 1x, /assets/images/michael@2x.jpg 2x'
  },
  {
    name: 'Yashraj',
    description: 'Documenting best practices for silent payments UX.',
    link: 'https://opencollective.com/bitcoin-design-foundation/updates/grant-4-yashraj-and-silent-payments',
    src: '/assets/images/yashraj.jpg',
    srcset: '/assets/images/yashraj.jpg 1x, /assets/images/yashraj@2x.jpg 2x'
  },
  {
    name: 'Jakub',
    description: 'UX research on the <a href="https://bitcoincore.app/" target="_blank">Bitcoin Core App</a>.',
    link: 'https://opencollective.com/bitcoin-design-foundation/updates/grant-3-jakub-and-bitcoin-core-app',
    src: '/assets/images/jakub.jpg',
    srcset: '/assets/images/jakub.jpg 1x, /assets/images/jakub@2x.jpg 2x'
  },
  {
    name: 'Chris',
    description: 'Maintaining the <a href="https://www.bitcoinuikit.com/" target="_blank">Bitcoin UI Kit</a>.',
    link: 'https://opencollective.com/bitcoin-design-foundation/updates/second-grant-announcement-chris-and-bitcoin-ui-kit',
    src: '/assets/images/chris.jpg',
    srcset: '/assets/images/chris.jpg 1x, /assets/images/chris@2x.jpg 2x'
  },
  {
    name: 'Erik',
    description: 'Documenting best practices for Ecash UX.',
    link: 'https://opencollective.com/bitcoin-design-foundation/updates/announcing-our-first-grant-for-erik-and-his-work-on-ecash',
    src: '/assets/images/erik.jpg',
    srcset: '/assets/images/erik.jpg 1x, /assets/images/erik@2x.jpg 2x'
  }
]

</script>

<template>
  <div class="grants">
    <div class="copy">
      <h2>Grants</h2>
      <p>Get funding for your contributions to the open-source bitcoin ecosystem, via UX research, design and related activities that fit our mission.</p>
    </div>
    <div class="items">
      <GrantPerson
        v-for="item in people"
        :key="item.name"
        :info="item"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

.grants {
  display: flex;
  flex-direction: column;
  @include r('gap', 30, 50);

  .copy {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .items {

  }

  @include media-query(small) {
    .items {
      display: flex;
      flex-direction: column;
      gap: 35px;
      // flex-direction: column;
      // gap: 35px;
    }
  }

  @include media-query(medium) {
    .items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 25px;
      row-gap: 25px;
    }
  }

  @include media-query(large) {
    .items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 70px;
      row-gap: 70px;
    }
  }
}

</style>