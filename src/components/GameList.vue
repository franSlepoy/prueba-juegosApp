<template>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="game in games"
          :key="game.id"
          cols="12" sm="6" md="4" lg="3"
        >
          <GameCard :game="game" />
        </v-col>
      </v-row>
  
      <v-row justify="center" v-if="loading">
        <v-progress-circular indeterminate color="primary" />
      </v-row>
  
      <v-alert type="error" v-if="error">
        Error al cargar juegos: {{ error.message }}
      </v-alert>
    </v-container>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useGames } from '@/composables/useGames'
  import GameCard from './GameCard.vue'
  
  const { games, fetchGames, loading, error } = useGames()
  
  // Scroll infinito
  onMounted(() => {
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        fetchGames()
      }
    })
  })
  </script>
  