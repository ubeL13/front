<script setup>
import { ref } from 'vue'

const user = ref({
  firstName: '',
  lastName: '',
  gender: 'male',
  password: '',
  confirmPassword: ''
})

const showPassword = ref(false)

const register = () => {
  console.log('Данные пользователя:', user.value)
}

const passwordsMatch = () => {
  return user.value.password === user.value.confirmPassword
}
</script>

<template>
  <form @submit.prevent="register">
    <div>
      <label>Имя:</label>
      <input type="text" v-model="user.firstName" required>
    </div>
    
    <div>
      <label>Фамилия:</label>
      <input type="text" v-model="user.lastName" required>
    </div>
    
    <div>
      <label>Пол:</label>
      <label>
        <input type="radio" v-model="user.gender" value="male"> Мужской
      </label>
      <label>
        <input type="radio" v-model="user.gender" value="female"> Женский
      </label>
    </div>
    
    <div>
      <label>Пароль:</label>
      <input 
        :type="showPassword ? 'text' : 'password'" 
        v-model="user.password" 
        required
      >
    </div>
    
    <div>
      <label>Подтверждение пароля:</label>
      <input 
        :type="showPassword ? 'text' : 'password'" 
        v-model="user.confirmPassword" 
        required
      >
    </div>
    
    <button
      type="button"
      @mousedown="showPassword = true"
      @mouseup="showPassword = false"
      @mouseleave="showPassword = false"
    >
      Показать пароль
    </button>
    
    <button 
      type="submit" 
      :disabled="!passwordsMatch()"
    >
      Зарегистрироваться
    </button>
  </form>
  
  <p v-if="user.firstName || user.lastName">
    Пользователь: {{ user.firstName }} {{ user.lastName }}. 
    {{ user.gender === 'male' ? 'Мужского' : 'Женского' }} пола.
  </p>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: 0 auto;
}

div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

button {
  margin-top: 1rem;
  padding: 0.5rem;
}

label {
  margin-right: 1rem;
}
</style>