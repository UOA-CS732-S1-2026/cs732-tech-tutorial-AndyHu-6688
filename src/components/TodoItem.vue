<script setup>
import { useTodoStore } from '../stores/todos'

defineProps({
  todo: Object
})

const store = useTodoStore()
</script>

<template>
  <div class="todo-item">
    <div class="todo-left">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="store.toggleTodo(todo.id)"
      />
      <span class="todo-name" :class="{ completed: todo.completed }">{{ todo.text }}</span>
    </div>
    <div class="del" @click="store.deleteTodo(todo.id)">del</div>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.todo-name {
  font-size: 1rem;
  color: #374151;
}

.todo-name.completed {
  text-decoration: line-through;
  color: #9ca3af;
}

.del {
  color: #ef4444;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: color 0.2s;
}

.del:hover {
  color: #dc2626;
}
</style>
