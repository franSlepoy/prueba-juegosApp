// src/composables/useTheme.js
import { useTheme } from 'vuetify'
import { ref, watch } from 'vue'

const themeKey = 'themeMode'
const savedTheme = localStorage.getItem(themeKey) || 'dark'
const isDark = ref(savedTheme === 'dark')

export function useCustomTheme() {
  const theme = useTheme()
  theme.global.name.value = isDark.value ? 'dark' : 'light'

  watch(isDark, (val) => {
    theme.global.name.value = val ? 'dark' : 'light'
    localStorage.setItem(themeKey, val ? 'dark' : 'light')
  })

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme
  }
}
