# 🎮 Prueba Técnica - Catálogo de Videojuegos

Aplicación desarrollada como parte de una prueba técnica, cuyo objetivo es permitir a cualquier gamer descubrir los juegos más populares del momento, acceder a sus detalles y armar su propio **Top 5 personal**. El sitio incluye scroll infinito, modo oscuro/claro persistente, animaciones y una experiencia visual retro con tipografía pixelada.

---

## 🌐 Deploy

🔗 **Web publicada:**  
👉 [https://prueba-juegos-app.sinestesia-lab.com/](https://prueba-juegos-app.sinestesia-lab.com/)

---

## 🎨 Diseño UI original

💡 El diseño de las pantallas **Home** y **Detalle** fue realizado íntegramente en Figma, respetando un estilo retro visual inspirado en videojuegos clásicos y usando la tipografía *Press Start 2P*.

🔗 **Link al diseño en Figma (solo lectura):**  
👉 [https://www.figma.com/design/wjA7COLLo5QXpCK7jhsiIx/Prueba-T%C3%A9cnica---Videojuegos?node-id=0-1&p=f&t=NOLNZX5tR4QrwLCQ-0](https://www.figma.com/design/wjA7COLLo5QXpCK7jhsiIx/Prueba-T%C3%A9cnica---Videojuegos?node-id=0-1&p=f&t=NOLNZX5tR4QrwLCQ-0)

---

## ✅ Funcionalidades desarrolladas

- 🎯 Diseño original en Figma replicado fielmente en la implementación
- 🔄 **Scroll infinito** en el Home para cargar juegos progresivamente
- 🕹 **Vista de detalle** con título, rating, géneros, plataformas
- ⭐ **Top 5 personalizable** con persistencia en LocalStorage
- 🌗 **Modo oscuro/claro** con toggle y persistencia
- 💨 **Skeleton loaders**, transiciones y animaciones suaves
- 🧪 **Test unitario** agregado para el manejo del Top 5 (Vitest)

---

## 🛠️ Tecnologías utilizadas

| Herramienta         | Descripción                         |
|---------------------|-------------------------------------|
| **Vue 3**           | Framework (Composition API)         |
| **Vite**            | Bundler moderno y rápido            |
| **Vuetify 3**       | Framework de componentes y temas    |
| **RAWG API**        | Fuente de datos de videojuegos      |
| **Figma**           | Diseño de pantallas                 |
| **Vitest**          | Testing unitario                    |
| **LocalStorage**    | Persistencia de datos (Top 5, tema) |

---

## 📦 Instalación local

```bash
git clone https://github.com/franSlepoy/prueba-juegosApp.git
cd prueba-juegosApp
npm install

```bash
git clone https://github.com/tuusuario/prueba-videojuegos.git
cd prueba-videojuegos
npm install

🔐 Configuración de la API Key
Esta app utiliza la RAWG API, por lo que necesitás una clave para que funcione.

📌 Cómo obtenerla:
Ingresá a https://rawg.io/apidocs

Iniciá sesión o creá una cuenta

Copiá tu clave personal desde el dashboard

📁 Crear archivo .env
En la raíz del proyecto, creá un archivo llamado .env y agregá esta línea:

env
Copiar
Editar
VITE_RAWG_API_KEY=tu_api_key_aqui
⚠️ No uses comillas ni espacios extra. Esta clave será usada automáticamente por el código.

▶️ Ejecutar el proyecto
bash
Copiar
Editar
npm run dev

