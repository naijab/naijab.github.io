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
  data() {
    return {
      countDown: 10,
    }
  },

  // TODO: Fetch Blog List from markdown
  computed: {
    theme() {
      return this.$colorMode.value === 'light' ? 'light' : 'dark'
    },
  },
  created() {
    this.countDownTimer()
  },
  methods: {
    switchTheme() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
    goToBlog() {
      this.location.href = 'https://naijab.medium.com/'
    },
    countDownTimer() {
      if (this.countDown === 0) {
        this.goToBlog()
        return
      }
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
  },
}
</script>
