<template>
  <article class="container m-auto mt-20">
    <h1 class="title">{{ post.title }}</h1>
    <h2 class="description">{{ post.description }}</h2>
    <img :src="post.cover" alt="cover" />
    <div v-for="tag in post.tags" :key="tag" class="tags">{{ tag }}</div>
    <nuxt-content :document="post" class="content-wrapper" />
  </article>
</template>

<script>
// FIXME: Cover image not show

export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    return { post }
  },
}
</script>

<style scoped>
.title {
  @apply text-5xl;
}

.description {
  @apply text-gray-700;
  @apply text-xl;
}

.content-wrapper {
  @apply mt-4;
  @apply mb-4;
}

.tags {
  @apply font-bold;
  @apply text-gray-700;

  @apply border-gray-400;
  @apply border-2;

  @apply inline-flex;
  @apply bg-white;
  @apply rounded-full;

  @apply mr-2;
  @apply p-1;
}
</style>
