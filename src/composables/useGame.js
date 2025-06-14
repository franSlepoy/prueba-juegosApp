import { ref, onMounted } from 'vue'
import axios from 'axios'

export function useGames() {
  const games = ref([])
  const loading = ref(true)

  onMounted(async () => {
    try {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&page_size=52`
      )
      games.value = data.results
    } catch (e) {
      console.error('Error al obtener juegos:', e)
    } finally {
      loading.value = false
    }
  })

  return { games, loading }
}
