# 📋 Servicios SENA

Directorio web de los servicios del centro de formación. Reúne en un solo lugar las dependencias con las que cuenta el centro — **Enfermería, Bienestar al Aprendiz, Biblioteca, Cafetería y Coordinación Académica** — con su horario de atención, encargado y ubicación.

Cada servicio tiene su propia **ficha de detalle** (qué ofrece, a quién va dirigido y cómo contactarlo). En la página de inicio hay un **buscador con filtros por categoría** (Abiertos ahora, Salud & Apoyo, Académico, etc.) para encontrar rápidamente el servicio que necesitas.

## Stack

- **Vue 3** (`<script setup>`) + **Vite**
- **Quasar** (componentes de interfaz) con tema personalizado (`src/css/sena-theme.css`)
- **Vue Router** (vista por cada dependencia)

## Instalación y ejecución

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
```

## Despliegue

El proyecto está publicado en GitHub Pages:
**https://jhonpi33.github.io/SERVICIOS_SENA/**

`vite.config.js` define `base: '/SERVICIOS_SENA/'` (requerido por GitHub Pages). El script de despliegue usa `gh-pages`:

```bash
npm run deploy
```
