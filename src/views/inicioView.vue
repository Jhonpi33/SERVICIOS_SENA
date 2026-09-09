<template>
  <q-page class="home-page">

    <section class="intro">
      <h2 class="section-label">Servicios al aprendiz</h2>
      <h1 class="intro-title">Todo lo que necesitas saber, en un solo lugar</h1>
      <p class="intro-text">
        Consulta qué ofrece cada servicio del centro, sus horarios de atención,
        el teléfono de contacto y quién te atiende.
      </p>
    </section>

    <section class="grid">
      <router-link
        v-for="s in servicios"
        :key="s.to"
        :to="s.to"
        class="service-tile"
        :style="{ backgroundImage: `url(${s.banner})` }"
      >
        <div class="tile-scrim"></div>
        <div class="tile-content">
          <q-icon :name="s.icon" size="22px" class="tile-icon" />
          <span class="tile-title">{{ s.title }}</span>
        </div>
      </router-link>
    </section>

  </q-page>
</template>

<script setup>
const servicios = [
  { title: 'Enfermería', to: '/enfermeriaView', icon: 'medical_services', banner: '/images/fachada-enfermeria.jpg' },
  { title: 'Bienestar al Aprendiz', to: '/bienestarView', icon: 'favorite', banner: '/images/fachada-bienestar.jpg' },
  { title: 'Biblioteca', to: '/bibliotecaView', icon: 'menu_book', banner: '/images/fachada-biblioteca.png' },
  { title: 'Cafetería', to: '/cafeteriaView', icon: 'restaurant', banner: '/images/fachada-cafeteria.jpg' },
  { title: 'Coordinación Académica', to: '/coordinacionView', icon: 'school', banner: '/images/fachada-coordinacion.jpg' }
]
</script>

<style scoped>
.home-page {
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px clamp(20px, 5vw, 56px) 64px;
}

.intro {
  max-width: 640px;
  margin-bottom: 40px;
}

.intro-title {
  font-size: clamp(28px, 3.6vw, 40px);
  font-weight: 700;
  letter-spacing: -0.6px;
  line-height: 1.15;
  margin: 4px 0 16px;
}

.intro-text {
  font-size: 16.5px;
  line-height: 1.7;
  color: var(--ink-muted);
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.service-tile {
  position: relative;
  display: block;
  height: 190px;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--green-100);
  background-size: cover;
  background-position: center;
  text-decoration: none;
  transition: transform 0.18s ease;
}

.service-tile:hover {
  transform: translateY(-3px);
}

.tile-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(22, 36, 27, 0) 35%, rgba(22, 36, 27, 0.8) 100%);
}

.tile-content {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--white);
}

.tile-icon {
  color: var(--white);
}

.tile-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 16px;
}
</style>
