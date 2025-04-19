<template>
  <div>
    <h1>Учёт расходов</h1>

    <div v-if="history.length">
      <p>Баланс: {{ totalBalance }}</p>
      <p>Расходы: {{ outcomeBalance }}</p>
      <p>Доходы: {{ incomeBalance }}</p>

      <div v-for="item in history" :key="item.id" class="item">
        <span>{{ item.text }}</span>
        <span :style="{ color: item.amount < 0 ? 'red' : 'green' }">
          {{ item.amount > 0 ? '+' : '' }}{{ item.amount }}
        </span>
      </div>
    </div>
    <p v-else>Вы не совершали финансовых операций</p>

    <form @submit.prevent="addTransaction" class="form">
      <div class="form-field">
        <input
          v-model.trim="title"
          placeholder="Введите название"
          required
        />
      </div>
      <div class="form-field">
        <input
          v-model.number="amount"
          type="number"
          placeholder="Введите сумму"
          required
        />
      </div>
      <div class="form-field">
        <button type="submit">Добавить</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import './App.css'

import { ref, computed } from 'vue'

const history = ref([])

const title = ref('')
const amount = ref(null)

const addTransaction = () => {
  if (!title.value || !amount.value) return

  history.value.push({
    id: Date.now(),
    text: title.value,
    amount: amount.value,
  })

  title.value = ''
  amount.value = null
}

const incomeBalance = computed(() =>
  history.value
    .filter((item) => item.amount > 0)
    .reduce((acc, cur) => acc + cur.amount, 0)
)

const outcomeBalance = computed(() =>
  history.value
    .filter((item) => item.amount < 0)
    .reduce((acc, cur) => acc + cur.amount, 0)
)

const totalBalance = computed(() => incomeBalance.value + outcomeBalance.value)
</script>


