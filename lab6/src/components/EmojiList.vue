<template>
  <div class="emoji-list">
    <Emoji
        v-for="emoji in emojis"
        :key="emoji.name"
        :emoji="emoji"
        @click="$emit('selectEmoji', emoji)"
    />
  </div>
</template>

<script setup>
import Emoji from './Emoji.vue'

defineProps({
  emojis: Array
})

defineEmits(['selectEmoji'])
</script>

<style>
.emoji-list {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  width: 100%;
}
</style>
