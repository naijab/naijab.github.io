<template>
  <div
    class="dark:bg-black bg-white flex h-screen justify-center align-middle text-center"
  >
    <div class="m-auto pb-64">
      <h1 class="dark:text-white text-6xl">naijab.com</h1>
      <button
        class="bg-red-500 dark:bg-white dark:border-black dark:text-black text-xl text-white p-2 rounded"
        @click="switchTheme"
      >
        พบกันเร็วๆ นี้ - {{ theme }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // TODO: Fetch Blog List from markdown
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
  },
}
</script>
