<script setup>

</script>

<template>
  <div class="paragraph">
    <slot/>
  </div>
</template>

<style scoped lang="scss">

.paragraph {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  ::v-deep(h2) {
    
  }

  ::v-deep(p),
  ::v-deep(ul li),
  ::v-deep(ol li) {
    a {
      color: var(--primary-stronger);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  ::v-deep(hr) {
    display: inline-block;
    width: 20px;
    height: 4px;
    appearance: none;
    border-width: 0;
    margin-left: 0;
    background-color: var(--primary);
  }

  ::v-deep(ul),
  ::v-deep(ol) {
    margin: 0;
    
    li {
      @include r('font-size', 18, 21);
      font-weight: 400;
      line-height: 1.4;
      letter-spacing: -0.02rem;
      font-family: 'Inter', sans-serif;
      color: var(--text-light);

      b {
        font-weight: 500;
        color: var(--text-dark);
      }

      & + li {
        margin-top: 10px;
      }
    }
  }

  ::v-deep(picture) {
    img {
      width: 100%;
      height: auto;
    }
  }
}

</style>