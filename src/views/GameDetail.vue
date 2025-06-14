<template>
    <v-container class="py-10 game-font">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-btn  class="main-action-button mb-6" to="/">
            ← Volver al listado
          </v-btn>
  
          <v-card v-if="game" class="floating-card game-detail-card">
            <v-img :src="game.background_image" height="300px" cover />
  
            <v-card-title class="game-title">{{ game.name }}</v-card-title>
  
            <v-card-subtitle class="game-subtitle">
              <strong>Rating:</strong> {{ game.rating }} ★
            </v-card-subtitle>
  
            <v-card-text class="game-description">
              <p><strong>Plataformas:</strong> {{ plataformas }}</p>
              <p><strong>Géneros:</strong> {{ generos }}</p>
            </v-card-text>
  
            <v-card-actions>
              <v-btn
                class="main-action-button mt-4"
                @click="toggleTop"
              >
                {{ isInTop(game.id) ? 'Quitar del Top 5' : 'Agregar a Top 5' }}
              </v-btn>
            </v-card-actions>
          </v-card>
  
          <v-skeleton-loader v-else-if="loading" type="card" height="300px" />
  
          <v-alert v-else type="error" class="mt-4">
            No se pudo cargar el juego.
          </v-alert>
        </v-col>
      </v-row>
  
      <TopFiveModal v-model="mostrarTopFive" />
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  import { useTopFive } from '@/composables/useTopFive'
  import TopFiveModal from '@/components/TopFiveModal.vue'
  
  const route = useRoute()
  const game = ref(null)
  const loading = ref(true)
  const mostrarTopFive = ref(false)
  
  const { addGame, removeGame, isInTop } = useTopFive()
  
  const toggleTop = () => {
    if (isInTop(game.value.id)) {
      removeGame(game.value.id)
    } else {
      addGame({
        id: game.value.id,
        name: game.value.name,
        background_image: game.value.background_image,
        rating: game.value.rating
      })
    }
  }
  
  onMounted(async () => {
    try {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games/${route.params.id}?key=${import.meta.env.VITE_RAWG_API_KEY}`
      )
      game.value = data
    } catch (e) {
      console.error('Error al obtener juego:', e)
    } finally {
      loading.value = false
    }
  })
  
  const plataformas = computed(() =>
    game.value?.platforms?.map(p => p.platform.name).join(', ') || '—'
  )
  
  const generos = computed(() =>
    game.value?.genres?.map(g => g.name).join(', ') || '—'
  )
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  
  .game-font {
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
  }
  
  .floating-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .floating-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  
  .game-detail-card {
    min-height: 550px;
  }
  
  .main-action-button {
    margin: auto;
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
    padding: 10px 20px;
    color: white;
    background: linear-gradient(90deg, #ff00cc, #3333ff);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: none;
    text-transform: none;
    letter-spacing: 0;
  }
  .main-action-button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px #ff00cc;
  }
  
  .game-title {
    font-family: 'Press Start 2P', cursive;
    font-size: 18px;
    line-height: 1.5;
  }
  
  .game-subtitle {
    font-size: 13px;
    margin-bottom: 12px;
  }
  
  .game-description {
    font-size: 11px;
    line-height: 2;
  }
  </style>
  