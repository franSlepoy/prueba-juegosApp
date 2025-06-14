# 🎮 Prueba Técnica - Catálogo de Videojuegos

Aplicación web desarrollada como prueba técnica. Permite explorar un catálogo de videojuegos populares, acceder a sus detalles y agregar tus favoritos a un Top 5 personal. Todo con estética retro pixel art, soporte de tema claro/oscuro y animaciones suaves. 🕹️

---

## 🌐 Demo en producción

🚀 Ver la app online:  
👉 [https://tusitio.vercel.app](https://prueba-juegos-app.sinestesia-lab.com/) *(reemplazá este link con el real)*

---

## 🎨 Diseño UI en Figma

🎯 Diseño visual de las pantallas de Home y Detalle, replicadas desde la web:  
📎 [Ver diseño en Figma (solo lectura)](https://www.figma.com/design/wjA7COLLo5QXpCK7jhsiIx/Prueba-T%C3%A9cnica---Videojuegos?node-id=0-1&t=LwxEuWjbP16btLy3-1)

---

## 🧩 Funcionalidades

✅ Listado de videojuegos populares  
✅ Página de detalle con información del juego  
✅ Scroll infinito para cargar más juegos  
✅ Agregar o quitar juegos del Top 5  
✅ Modal con vista del Top 5 actual  
✅ Soporte de tema claro 🌞 / oscuro 🌙 (persistente)  
✅ Animaciones, efectos hover y diseño responsivo  

---

## 🛠️ Tecnologías utilizadas

| Tecnología          | Uso principal |
|---------------------|---------------|
| **Vue 3 + Vite**    | Framework y bundler |
| **Vuetify 3**       | Componentes UI y sistema de temas |
| **RAWG API**        | Fuente de datos de videojuegos |
| **Figma**           | Diseño de pantallas |
| **LocalStorage**    | Persistencia del Top 5 |
| **JavaScript (ES6)**| Lógica del frontend |
| **CSS / Animaciones** | Gradientes, sombras y efectos |

---

## 📦 Instalación local

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

