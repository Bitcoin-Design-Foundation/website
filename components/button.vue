<script setup>
const props = defineProps([
  'label',
  'theme', // filled, outline, free
  'size', // small, medium, big
  'disabled',
  'to',
  'url'
])

const emit = defineEmits(['click'])

const classObject = computed(() => {
  const c = [
    'button',
    '-' + (props.theme || 'filled'),
    '-' + (props.size || 'medium')
  ]

  return c.join(' ')
})

</script>

<template>
  <NuxtLink
    v-if="to"
    :class="classObject"
    :disabled="disabled"
    :aria-label="label"
    :to="to"
  ><span><slot /></span></NuxtLink>
  <a
    v-if="url"
    :class="classObject"
    :disabled="disabled"
    :aria-label="label"
    :to="to"
    target="_blank"
  ><span><slot /></span></a>
  <button
    v-if="!(to || url)"
    :class="classObject"
    :disabled="disabled"
    :aria-label="label"
    @click="emit('click')"
  ><span><slot /></span></button>
</template>

<style scoped lang="scss">

.button {
  display: inline-block;
  appearance: none;
  border-width: 0;
  font-weight: 600;
  color: white;
  box-sizing: border-box;
  text-decoration: none;
  position: relative;

  span {
    display: inline-block;
    position: relative;
    transition: all 250ms $ease;
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
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  // Styles
  &.-filled {
    color: var(--primary-strongest);

    &:before {
      background-color: var(--primary);
    }

    &:not(disabled):hover {
      color: black;

      &:before {
        background-color: var(--primary-stronger);
      }
    }

    &:disabled {
      &:before {
        background-color: var(--neutral-4);
      }
    }
  }

  &.-ghost {
    color: var(--primary-stronger);

    &:before {
      background-color: var(--primary);
      opacity: 0.15;
    }

    &:not(disabled):hover {
      color: white;

      &:before {
        opacity: 1;
      }
    }

    &:disabled {
      &:before {
        background-color: var(--neutral-4);
      }
    }
  }

  &.-outline {
    background-color: transparent;
    border: 1px solid var(--neutral-5);
    color: var(--primary);

    &:hover {
      border-color: var(--primary);
      color: var(--primary);
    }
  }

  &.-free {
    background-color: transparent;
    color: var(--primary);

    &:hover {
      background-color: var(--neutral-2);
      color: var(--primary);
    }
  }

  // Sizes
  &.-small {
    span {
      height: 30px;
      font-size: 15px;
    }
  }

  &.-medium {
    span {
      padding: 10px 25px;
      font-size: 19px;
    }
  }

  &.-big {
    span {
      padding: 12px 37px;
      font-size: 24px;
    }
  }
}

</style>
