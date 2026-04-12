import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', () => {
  const todos = ref([
    { id: 1, text: 'Eat lunch', completed: false },
    { id: 2, text: 'Take a nap', completed: false },
    { id: 3, text: 'Write code', completed: false }
  ])

  const remaining = computed(() => {
    return todos.value.filter(todo => !todo.completed).length
  })

  function addTodo(text) {
    if (text.trim() === '') return
    todos.value.push({
      id: Date.now(),
      text: text,
      completed: false
    })
  }

  function deleteTodo(id) {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  function toggleTodo(id) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) todo.completed = !todo.completed
  }

  return { todos, remaining, addTodo, deleteTodo, toggleTodo }
})
