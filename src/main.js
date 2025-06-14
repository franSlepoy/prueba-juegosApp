import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

import theme from './theme'

const vuetify = createVuetify({
  theme,
  icons: {
    defaultSet: 'mdi',
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
