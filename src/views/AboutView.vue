<script setup></script>

<template>
  <main>
    <div class="about">
      <h1>About This App</h1>
      <p>This is a Todo List application built with Vue 3 as a tech tutorial demo for COMPSCI 732.</p>
      <h2>Tech Stack</h2>
      <ul>
        <li>Vue 3 (Composition API)</li>
        <li>Vite</li>
        <li>Vue Router</li>
        <li>Pinia</li>
      </ul>
      <h2>Vue Features Demonstrated</h2>
      <ul>
        <li>ref() — Reactive data</li>
        <li>computed() — Derived values</li>
        <li>v-model — Two-way binding</li>
        <li>v-for — List rendering</li>
        <li>v-if / v-else — Conditional rendering</li>
        <li>v-bind (:class) — Dynamic class binding</li>
        <li>@click — Event handling</li>
        <li>Vue Router — Page navigation</li>
        <li>Pinia — State management</li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  padding: 60px 16px;
}

.about {
  width: 100%;
  max-width: 520px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  padding: 32px 28px;
}

h1 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 12px;
}

h2 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin: 20px 0 8px;
}

p {
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 8px;
}

ul {
  margin: 0;
  padding-left: 20px;
  color: #6b7280;
  line-height: 1.8;
}
</style>
