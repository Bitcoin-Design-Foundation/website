<script setup>
const props = defineProps([
  'to',
  'theme'
])

const classObject = computed(() => {
  const c = [
    'nav-item',
    '-' + (props.theme || 'light')
  ]

  return c.join(' ')
})
</script>

<template>
  <NuxtLink
    :class="classObject"
    :to="to"
  >
    <span><slot /></span>
  </NuxtLink>
</template>

<style scoped lang="scss">

.nav-item {
  text-decoration: none;
  font-size: 19px;
  position: relative;

  span {
    display: inline-block;
    position: relative;
    transition: color 250ms $ease;
    padding: 3px 20px;
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
    background-color: var(--primary);
    opacity: 0.1;
    transition: opacity 250ms $ease;
  }

  &:hover:not(.router-link-active) {
    // text-decoration: underline;
  }

  &.-light {
    color: var(--primary-stronger);
    // color: var(--text-dark);

    &:hover {
      &:before {
        opacity: 0.25;
      }
    }

    &.router-link-active {
      color: var(--primary-stronger);
    }
  }

  &.-dark {
    color: var(--primary);
    font-weight: 500;

    &:before {
      background-color: black;
      opacity: 0.5;
    }

    &:hover {
      color: var(--primary-stronger);

      &:before {
        opacity: 0.75;
      }
    }

    &.router-link-active {
      color: white;
    }
  }
}

</style>