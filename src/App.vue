<script setup>
</script>

<template>
  <header class="nav-bar">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
:global(body) {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #e8d5f5 0%, #c3dafe 100%);
  min-height: 100vh;
}

.nav-bar {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  padding: 12px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

nav {
  display: flex;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
}

nav a {
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}

nav a:hover {
  color: #7c3aed;
}

nav a.router-link-active {
  color: #7c3aed;
  font-weight: 700;
  border-bottom-color: #7c3aed;
}
</style>
