<template>
  <div
    class="dark:bg-black bg-white flex h-screen justify-center align-middle text-center"
  >
    <div class="m-auto pb-64">
      <h1 class="dark:text-white text-6xl">naijab.com</h1>
      <button
        class="bg-red-500 dark:bg-white dark:border-black dark:text-black text-xl text-white p-2 rounded"
        @click="goToBlog"
      >
        อ่าน Blog
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$colorMode.value === 'light' ? 'light' : 'dark'
    },
  },
  methods: {
    switchTheme() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
    goToBlog() {
      if (window) {
        window.location.href = 'https://naijab.medium.com/'
      }
    },
  },
}
</script>
