<template>
  <v-dialog
    v-model="showDialog"
    :scrim="true"
    persistent
    scrollable
    location="right"
    width="400"
    content-class="top-five-dialog"
  >
    <v-card>
      <v-card-title class="d-flex justify-center align-center text-center">
        <span class="pixel-font gradient-text float-animation top-title text-h6">Mi Top 5</span>
      </v-card-title>

      <v-btn icon @click="showDialog = false" class="close-btn">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-card-text>
        <v-list>
          <v-list-item
            v-for="game in topFiveGames"
            :key="game.id"
            class="d-flex align-center justify-space-between"
          >
            <div class="d-flex align-center gap">
              <v-avatar size="100">
                <v-img :src="game.background_image" alt="img" cover />
              </v-avatar>
              <span class="pixel-font gradient-text text-caption">{{ game.name }}</span>
            </div>

            <v-btn class="margin-x"  variant="text" @click="removeGame(game.id)">
              <span class="pixel-font gradient-text ">X</span>
            </v-btn>
          </v-list-item>
        </v-list>

        <div v-if="topFiveGames.length === 0" class="pixel-font text-center mt-4">
          (No hay juegos en el Top 5)
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])

const showDialog = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const topFiveGames = ref([])

onMounted(() => {
  const saved = localStorage.getItem('topFive')
  try {
    topFiveGames.value = saved ? JSON.parse(saved) : []
  } catch {
    topFiveGames.value = []
  }
})

const removeGame = (id) => {
  topFiveGames.value = topFiveGames.value.filter((g) => g.id !== id)
  localStorage.setItem('topFive', JSON.stringify(topFiveGames.value))
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.pixel-font {
  font-family: 'Press Start 2P', monospace;
}
.top-title {
  margin-top: 16px;
}
.margin-x {
  margin-left: 18px;
  margin-bottom: 12px;
  
}

.gradient-text {
  background: linear-gradient(45deg, #ff00cc, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.float-animation {
  animation: float 3s ease-in-out infinite;
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

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
}

.top-five-dialog {
  max-width: 400px !important;
  height: 100%;
  margin: 0 !important;
  border-radius: 0;
  box-shadow: -2px 0 15px rgba(0, 0, 0, 0.3);
}

.gap {
  gap: 20px;
}
</style>
