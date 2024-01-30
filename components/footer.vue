<script setup>

</script>

<template>
  <div class="footer">
    <div class="content">
      <a href="mailto:hi@bitcoindesignfoundation.org">hi@bitcoindesignfoundation.org</a>
      <p>© Bitcoin Design Foundation</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

.footer {
  padding-left: 20px;
  padding-right: 20px;
    
  .content {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    gap: 10px;
    position: relative;
    padding-top: 140px;
    padding-bottom: 70px;

    &:before {
      position: absolute;
      content: '';
      display: block;
      top: 67px;
      left: 0;
      width: 30px;
      height: 4px;
      background-color: var(--primary);
    }

    a {
      color: var(--text-light);
      text-decoration: none;
      font-size: 17px;

      &:hover {
        color: var(--primary-stronger);
        text-decoration: underline;
      }
    }

    p {
      color: var(--text-light);
      font-size: 17px;
    }
  }

  @include media-query(small) {
    .content {
      flex-direction: column;
    }
  }

  @include media-query(medium-up) {
    .content {
      justify-content: space-between;
    }
  }
}

</style>