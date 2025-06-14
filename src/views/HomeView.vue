<template>
  <v-container fluid class="py-12 bg-gradient">
    <v-row justify="center">
      <v-col cols="auto">
        <v-row justify="center">
          <v-col cols="auto">
            <v-btn class="top-button mb-6" @click="mostrarTopFive = true">
              <span>Ver Mi Top 5</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <TopFiveModal v-model="mostrarTopFive" />

    <h2 class="subtitle gradient-text mb-10">Buscá tus juegos preferidos y agregalos a tu top 5</h2>

    <h1 class="main-title gradient-text text-center mt-4 mb-8">Los Juegos más populares</h1>

    <v-row>
      <v-col v-if="loading" v-for="i in 8" :key="i" cols="12" sm="6" md="4" lg="3">
        <v-skeleton-loader type="card" height="300px" />
      </v-col>

      <v-col v-else v-for="game in games" :key="game.id" cols="12" sm="6" md="4" lg="3">
        <GameCard :game="game" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import GameCard from '@/components/GameCard.vue'
import { useGames } from '@/composables/useGame'
import TopFiveModal from '@/components/TopFiveModal.vue'
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'

const { games, loading } = useGames()
const mostrarTopFive = ref(false)

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
</script>

<style scoped>
.bg-gradient {
  min-height: 100vh;
  padding-bottom: 80px;
  transition: background 0.4s ease;
}

/* Fondo dinámico según tema */
:deep(.v-application--is-ltr.dark) .bg-gradient {
  background: linear-gradient(to bottom right, #0a0f2c, #121a40, #203a78);
}

:deep(.v-application--is-ltr.light) .bg-gradient {
  background: linear-gradient(to bottom right, #f4f4f4, #fefefe);
}

.gradient-text {
  background: linear-gradient(45deg, #ff00cc, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.main-title {
  font-size: 38px;
  font-family: 'Press Start 2P', cursive;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  margin: 0 auto;
  width: 0;
  animation:
    typing 2.5s steps(30, end) forwards,
    float 3s ease-in-out infinite;
}

.subtitle {
  font-size: 10px;
  font-family: 'Press Start 2P', cursive;
  text-align: center;
  animation: float 3s ease-in-out infinite;
}

.top-button {
  margin: auto;
  font-family: 'Press Start 2P', cursive;
  font-size: 12px;
  padding: 10px 20px;
  color: white;
  background: linear-gradient(90deg, #ff00cc, #3333ff);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border: none;
  text-transform: none;
  letter-spacing: 0;
}

.top-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 215, 0, 0.4);
}

@media (max-width: 768px) {
  .main-title {
   
    font-size: 12px;
  }
  .subtitle {
    margin: auto;
    width: 80%;
    font-size: 10px;
  }
}

@keyframes typing {
  to {
    width: 30ch;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>
