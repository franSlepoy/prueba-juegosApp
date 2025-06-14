<template>
  <RouterLink :to="`/game/${game.id}`" class="card-link">
    <v-card class="hoverable-card" elevation="6">
      <v-img :src="game.background_image" height="200px" cover />
      <v-card-title :class="['card-title', { 'dark-title': isDark, 'light-title': !isDark }]">
        {{ game.name }}
      </v-card-title>
    </v-card>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

defineProps({
  game: Object
})

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
</script>

<style scoped>
.card-link {
  text-decoration: none;
}

.hoverable-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.hoverable-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.card-title {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  text-align: center;
  transition: color 0.3s ease;
}

/* Color de texto en modo claro */
.light-title {
  color: black;
}

/* Color de texto en modo oscuro */
.dark-title {
  color: white;
}
</style>
