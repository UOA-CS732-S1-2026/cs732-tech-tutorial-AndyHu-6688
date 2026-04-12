# Todo App — Vue.js Tech Tutorial (COMPSCI 732)

A Todo List application built with Vue 3, demonstrating core Vue features including reactive data, two-way binding, list rendering, routing, and state management.

## Tech Stack

- Vue 3 (Composition API with `<script setup>`)
- Vite
- Vue Router
- Pinia

## Prerequisites

- Node.js 20+
- npm

## Getting Started

```bash
git clone <repo-url>
cd todo-app
npm install
npm run dev
```

The app will be available at http://localhost:5173

## Project Structure

```
src/
├── App.vue              — Root component with navigation bar
├── main.js              — App entry point, registers Router + Pinia
├── router/index.js      — Route definitions (Home, About)
├── stores/todos.js      — Pinia store for todo data and actions
├── views/
│   ├── HomeView.vue     — Main todo page
│   └── AboutView.vue    — About page with tech stack info
└── components/
    ├── TodoForm.vue     — Input field and Add button
    ├── TodoList.vue     — Todo list container
    └── TodoItem.vue     — Individual todo item
```

## Features

- Add new todo items
- Mark todos as completed (with strikethrough effect)
- Delete todo items
- Live remaining items counter
- Page routing (Home / About)
- Centralized state management with Pinia

## Vue Concepts Demonstrated

- `ref()` — Reactive state
- `computed()` — Derived/calculated values
- `v-model` — Two-way data binding
- `v-for` — List rendering
- `v-if` / `v-else` — Conditional rendering
- `v-bind` (`:class`) — Dynamic class binding
- `@click` — Event handling
- Vue Router — Client-side routing
- Pinia — State management with stores, getters, and actions
- Single File Components (SFC) — `<template>`, `<script setup>`, `<style scoped>`
