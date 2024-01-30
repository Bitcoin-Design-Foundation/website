<script setup>
const props = defineProps([
  'theme' // light, dark
])

const logo = '<svg viewBox="0 0 53 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 35C17.5 32.7019 17.0473 30.4262 16.1679 28.303C15.2884 26.1798 13.9994 24.2507 12.3744 22.6256C10.7493 21.0006 8.82016 19.7116 6.69696 18.8321C4.57376 17.9527 2.29813 17.5 0 17.5L7.64951e-07 35H17.5Z" fill="currentColor"/><path d="M0 17.5C2.29813 17.5 4.57376 17.0473 6.69696 16.1679C8.82016 15.2884 10.7493 13.9994 12.3744 12.3744C13.9994 10.7493 15.2884 8.82016 16.1679 6.69696C17.0473 4.57376 17.5 2.29813 17.5 0H7.64951e-07L0 17.5Z" fill="currentColor"/><path d="M17.5 35C19.7981 35 22.0738 34.5473 24.197 33.6679C26.3202 32.7884 28.2493 31.4994 29.8744 29.8744C31.4994 28.2493 32.7884 26.3202 33.6679 24.197C34.5473 22.0738 35 19.7981 35 17.5H17.5L17.5 35Z" fill="currentColor"/><path d="M35 17.5C35 15.2019 34.5473 12.9262 33.6679 10.803C32.7884 8.67984 31.4994 6.75066 29.8744 5.12563C28.2493 3.50061 26.3202 2.21157 24.197 1.33211C22.0738 0.452651 19.7981 -1.00455e-07 17.5 0L17.5 17.5H35Z" fill="currentColor"/><path d="M35 35C37.2981 35 39.5738 34.5473 41.697 33.6679C43.8202 32.7884 45.7493 31.4994 47.3744 29.8744C48.9994 28.2493 50.2884 26.3202 51.1679 24.197C52.0473 22.0738 52.5 19.7981 52.5 17.5H35L35 35Z" fill="currentColor"/><path d="M35 17.5C37.2981 17.5 39.5738 17.0473 41.697 16.1679C43.8202 15.2884 45.7493 13.9994 47.3744 12.3744C48.9994 10.7493 50.2884 8.82016 51.1679 6.69696C52.0473 4.57376 52.5 2.29813 52.5 0H35L35 17.5Z" fill="currentColor"/></svg>'

const classObject = computed(() => {
  const c = [
    'nav',
    '-' + (props.theme || 'light')
  ]

  return c.join(' ')
})
</script>

<template>
  <div :class="classObject">
    <div class="content">
      <NuxtLink to="/">
        <span v-html="logo" />
        <span>Bitcoin Design Foundation</span>
      </NuxtLink>
      <div class="items">
        <NavItem
          to="/donate"
          :theme="theme"
        >Donor info</NavItem>
        <NavItem
          to="/apply"
          :theme="theme"
        >Grant info</NavItem>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.nav {
  .content {
    display: flex;
    gap: 5px;
    @include r('padding-top', 20, 35);
    @include r('padding-left', 20, 70);
    @include r('padding-right', 20, 70);

    > a {
      display: flex;
      align-items: center;
      gap: 20px;
      text-decoration: none;
      line-height: 0;
      transition: all 150ms $ease;

      span {
        text-wrap: nowrap;

        ::v-deep(svg) {
          height: 35px;
          line-height: 1;
        }

        &:last-child {
          font-size: 21px;
          font-weight: 500;
        }
      }
    }

    .items {
      display: flex;
      gap: 20px;
    }
  }

  &.-light {
    .content {
      padding-bottom: 35px;

      > a {
        span {
          color: var(--primary);

          &:last-child {
            color: var(--text-dark);
          }
        }

        &:hover {
          span {
            &:last-child {
              color: var(--primary-stronger);
            }
          }
        }
      }
    }
  }

  &.-dark {
    .content {
      background: linear-gradient(to top, rgba(black, 0) 0%, rgba(black, 0.35) 50%);

      > a {
        span {
          color: white;

          &:last-child {
            color: white;
          }
        }

        &:hover {
          span {
            &:last-child {
              color: white;
            }
          }
        }
      }
    }
  }

  @include media-query(tiny) {
    .content {
      > a {
        gap: 10px;

        span {
          ::v-deep(svg) {
            height: 25px;
          }

          &:last-child {
            font-size: 19px;
          }
        }
      }
    }
  }

  @include media-query(medium-down) {
    .content {
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
    }
  }

  @include media-query(large) {
    .content {
      justify-content: space-between;
    }
  }
}

</style>