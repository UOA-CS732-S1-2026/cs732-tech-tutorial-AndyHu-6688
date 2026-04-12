<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todos'

const store = useTodoStore()
const newTodo = ref('')

function handleAdd() {
  store.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <div class="todo-form">
    <input
      v-model="newTodo"
      type="text"
      class="todo-input"
      placeholder="Add a todo"
      @keyup.enter="handleAdd"
    />
    <div class="todo-button" @click="handleAdd">Add Todo</div>
  </div>
</template>

<style scoped>
.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
}

.todo-input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.todo-input:focus {
  border-color: #7c3aed;
}

.todo-input::placeholder {
  color: #9ca3af;
}

.todo-button {
  padding: 10px 18px;
  background: #7c3aed;
  color: #ffffff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s;
}

.todo-button:hover {
  background: #6d28d9;
}
</style>
