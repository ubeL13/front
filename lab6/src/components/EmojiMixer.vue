<template>
  <div v-if="firstEmoji && secondEmoji" class="mixer">
    <Emoji :emoji="firstEmoji" />
    <Emoji :emoji="secondEmoji" />
    <img :src="kitchenEmoji" alt="Mixed Emoji" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Emoji from './Emoji.vue'

const props = defineProps({
  firstEmoji: Object,
  secondEmoji: Object
})

const kitchenEmoji = computed(() => {
  if (props.firstEmoji && props.secondEmoji) {
    const unicodeFirst = props.firstEmoji.unicode[0].replace('U+', '').toLowerCase()
    const unicodeSecond = props.secondEmoji.unicode[0].replace('U+', '').toLowerCase()
    return `https://emk.vercel.app/s/${unicodeFirst}_${unicodeSecond}?size=96`
  }
  return ''
})
</script>

<style>
.mixer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
