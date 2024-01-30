<script setup>

</script>

<template>
  <div class="page-header">
    <slot/>
  </div>
</template>

<style scoped lang="scss">

.page-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  @include r('padding-top', 35, 70);
  @include r('padding-bottom', 35, 70);

  ::v-deep(p) {
    a {
      color: var(--primary-stronger);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

</style>