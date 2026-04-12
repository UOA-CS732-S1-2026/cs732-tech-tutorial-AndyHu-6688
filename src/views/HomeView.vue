<script setup>
import { useTodoStore } from '../stores/todos'
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'

const store = useTodoStore()
</script>

<template>
  <main>
    <div class="todo-app">
      <div class="title">Todo App</div>
      <TodoForm />
      <TodoList />
      <div class="footer">{{ store.remaining }} items remaining</div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 16px;
}

.todo-app {
  width: 100%;
  max-width: 520px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  padding: 32px 28px;
}

.title {
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  color: #1f2937;
  margin-bottom: 24px;
}

.footer {
  margin-top: 16px;
  text-align: center;
  font-size: 0.85rem;
  color: #9ca3af;
}
</style>
