<!-- App.vue -->
<template>
  <RouterView />
  <v-btn
    icon
    class="theme-toggle"
    @click="toggleTheme"
    :title="isDark ? 'Modo Claro' : 'Modo Oscuro'"
  >
    <v-icon>mdi-theme-light-dark</v-icon>
  </v-btn>
</template>

<script setup>
import { useCustomTheme } from '@/composables/useTheme'
const { isDark, toggleTheme } = useCustomTheme()
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 9999;
  background: linear-gradient(45deg, #ff00cc, #00ccff);
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
</style>
