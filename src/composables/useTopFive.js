import { ref, computed } from 'vue'

const topFive = ref(JSON.parse(localStorage.getItem('topFive')) || [])

export function useTopFive() {
  const isInTop = (id) => topFive.value.some(game => game.id === id)

  const addGame = (game) => {
    if (!isInTop(game.id) && topFive.value.length < 5) {
      topFive.value.push(game)
      localStorage.setItem('topFive', JSON.stringify(topFive.value))
    }
  }

  const removeGame = (id) => {
    topFive.value = topFive.value.filter(game => game.id !== id)
    localStorage.setItem('topFive', JSON.stringify(topFive.value))
  }

  return {
    topFive: computed(() => topFive.value),
    isInTop,
    addGame,
    removeGame
  }
}
