<template>
  <span
    class="emoji"
    v-html="emoji.htmlCode[0]"
    @click="$emit('click')"
  ></span>
</template>

<script setup>
defineProps({
  emoji: Object
})

defineEmits(['click'])
</script>

<style>
.emoji {
  font-size: 36px;
  cursor: pointer;
  padding: 5px;
}
</style>
