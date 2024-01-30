<script setup>

</script>

<template>
  <div class="community">
    <div class="copy">
      <h2>The Bitcoin Design Community</h2>
      <p><i>“Design bitcoin for everyone”</i> is the motto of the <a href="http://bitcoin.design" target="_blank">Bitcoin Design Community</a>. Established as an online community in 2020, it has produced the <a href="http://bitcoin.design/guide/" target="_blank">Bitcoin Design Guide</a>, the <a href="http://bitcoinuikit.com" target="_blank">Bitcoin UI Kit</a>, reference designs and adoption-pushing efforts like the <a href="http://bitcoinqr.dev" target="_blank">unified QR code</a> and <a href="https://whentaproot.org" target="_blank">taproot</a> campaigns. The large community has held <a href="http://youtube.com/c/BitcoinDesign" target="_blank">hundreds of calls</a>, organized <a href="https://event.bitcoin.design" target="_blank">Designathons</a> and worked directly with many open source projects to improve their design. A small number of grants initiated this huge body of collective work, positively impacting the whole bitcoin ecosystem. The Bitcoin Design Foundation supports the sustainability of these efforts and expands the impact of good design on bitcoin.</p>
      <Button
        url="https://bitcoin.design"
        rel="me"
      >Visit bitcoin.design</Button>
    </div>

    <img
      src="/assets/images/community-collage.jpg"
      srcset="/assets/images/community-collage.jpg 1x, /assets/images/community-collage@2x.jpg 2x"
      width="900"
      height="700"
      alt="Collage of snapshots and designs from community activity"
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

    p {
      a {
        color: var(--primary-stronger);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

</style>