<template>
  <div class="container">
    <h1>Факты о числах</h1>

    <form @submit.prevent="fetchFact">
      <input
        v-model.number="number"
        type="number"
        placeholder="Введите число"
        required
      />

      <select v-model="category">
        <option value="trivia">Интересный факт</option>
        <option value="math">Математика</option>
        <option value="year">Год</option>
      </select>

      <button type="submit">Поиск</button>
    </form>

    <div v-if="loading">Загрузка...</div>

    <p v-else-if="fact">{{ fact }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const number = ref('')
const category = ref('trivia')
const fact = ref('')
const loading = ref(false)

const fetchFact = () => {
  if (number.value === '') return

  loading.value = true
  fact.value = ''

  fetch(`http://numbersapi.com/${number.value}/${category.value}?json`)
    .then(response => response.json())
    .then(data => {
      if (data.found) {
        fact.value = data.text
      } else {
        fact.value = category.value === 'year'
          ? `${number.value} — скучный год`
          : `${number.value} — скучное число`
      }
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<style>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input,
select,
button {
  padding: 10px;
  font-size: 16px;
}

button {
  background-color:rgb(40, 40, 40);
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color:rgb(0, 0, 0);
}
</style>
