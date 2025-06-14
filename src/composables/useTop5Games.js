// src/composables/useTop5Games.js
import { ref, watch } from 'vue';

const top5Games = ref([]);

// Cargar desde localStorage al iniciar (si existe)
const saved = localStorage.getItem('top5Games');
if (saved) {
  try {
    top5Games.value = JSON.parse(saved);  // Reconstruir array desde JSON:contentReference[oaicite:3]{index=3}
  } catch (e) {
    localStorage.removeItem('top5Games');
    top5Games.value = [];
  }
}

// Función para guardar la lista actual en localStorage
function saveTop5() {
  localStorage.setItem('top5Games', JSON.stringify(top5Games.value));  // Serializar a JSON:contentReference[oaicite:4]{index=4}
}

// Agregar un juego al Top 5
function addGame(game) {
  if (!top5Games.value.find(g => g.id === game.id)) {
    if (top5Games.value.length >= 5) {
      // Opcional: evitar más de 5 juegos (ej. eliminar el más antiguo o simplemente no agregar)
      top5Games.value.splice(0, 1); // (Por ejemplo, eliminar el primero para hacer espacio)
    }
    // Guardar solo campos necesarios: id, nombre, imagen
    top5Games.value.push({ id: game.id, name: game.name, image: game.background_image });
    saveTop5();
  }
}

// Quitar un juego del Top 5 por ID
function removeGame(gameId) {
  top5Games.value = top5Games.value.filter(g => g.id !== gameId);
  saveTop5();
}

// Verificar si un juego está en el Top 5
function isInTop5(gameId) {
  return top5Games.value.some(g => g.id === gameId);
}

// Watch (opcional): sincronizar automáticamente si la lista cambia
watch(top5Games, saveTop5, { deep: true });

export function useTop5Games() {
  return { top5Games, addGame, removeGame, isInTop5 };
}
