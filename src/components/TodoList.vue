<script setup>
import { useTodoStore } from '../stores/todos'
import TodoItem from './TodoItem.vue'

const store = useTodoStore()
</script>

<template>
  <div class="todo-list">
    <p v-if="store.todos.length === 0" class="empty-message">
      No todos yet. Add one above!
    </p>
    <TodoItem v-else v-for="todo in store.todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: column;
}

.empty-message {
  text-align: center;
  color: #9ca3af;
  font-size: 0.95rem;
  padding: 16px 0;
  margin: 0;
}
</style>
