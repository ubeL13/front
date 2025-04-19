<template>
  <div class="app">
    <h1>Emoji Kitchen</h1>

    <div class="emoji-kitchen">
      <div class="emoji-lists">
        <h2>Выберите первый смайл</h2>
        <EmojiList
          :emojis="emojis"
          @selectEmoji="selectedSmiles[0] = $event"
        />
      </div>

      <div class="emoji-mixer">
        <EmojiMixer
          :firstEmoji="selectedSmiles[0]"
          :secondEmoji="selectedSmiles[1]"
        />
      </div>

      <div class="emoji-lists">
        <h2>Выберите второй смайл</h2>
        <EmojiList
          :emojis="emojis"
          @selectEmoji="selectedSmiles[1] = $event"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EmojiList from './components/EmojiList.vue'
import EmojiMixer from './components/EmojiMixer.vue'

const emojis = ref([])
const selectedSmiles = ref([null, null])

onMounted(() => {
  fetch('https://emojihub.yurace.pro/api/all')
    .then((res) => res.json())
    .then((data) => {
      emojis.value = data
    })
})
</script>

<style>
.app {
  font-family: sans-serif;
  padding: 20px;
  text-align: center;
}

.emoji-kitchen {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-top: 40px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.emoji-lists {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.emoji-mixer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>


