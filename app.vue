<script setup>
const theme = ref(null)

function detectTheme() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if(prefersDark) {
    theme.value = 'dark'
  } else {
    theme.value = 'light'
  }

  updateTheme()
}

function toggleTheme(value) { 
  theme.value = theme.value == 'light' ? 'dark' : 'light'
  
  updateTheme()
}

function updateTheme() {
  const themeColorMeta = document.getElementById('themeColorMeta')
  if(theme.value == 'dark') {
    document.body.classList.add('--theme-dark')
    themeColorMeta.content = '#000000'
  } else {
    document.body.classList.remove('--theme-dark')
    themeColorMeta.content = '#FFFFFF'
  }
}

onMounted(() => {
  if(process.client) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectTheme)

    detectTheme()
  }
})

</script>

<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Footer />
  </div>
</template>

<style scoped lang="scss">

#app {
  
}

</style>