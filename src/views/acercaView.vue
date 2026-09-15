<template>
  <q-page class="about-page">

    <section class="about-block">
      <h2 class="section-label section-title-big">Acerca del centro</h2>
      <div class="center-header">
        <img src="/images/logo-sena.png" alt="Logo SENA" class="center-logo" />
        <div>
          <h1 class="center-name">Servicio Nacional de Aprendizaje — SENA</h1>
          <div class="center-sub">Bienestar al Aprendiz</div>
        </div>
      </div>
      <p class="center-description">
        Bienestar al Aprendiz es una estrategia institucional para contribuir en la permanencia de
        los aprendices en su proceso formativo, alineada con la Política Nacional Integral de
        Bienestar al Aprendiz. Esta aplicación reúne, en un solo lugar, la información de los
        servicios de Enfermería, Bienestar, Biblioteca, Cafetería y Coordinación Académica del
        centro: qué ofrecen, sus horarios de atención, teléfonos de contacto y la ficha del
        encargado de atención al cliente de cada área.
      </p>
    </section>

    <section class="team-block">
      <h2 class="section-label">Equipo desarrollador</h2>
      <div class="team-grid">
        <div class="team-card" v-for="dev in equipo" :key="dev.nombre">
          <img :src="dev.foto" :alt="dev.nombre" class="team-photo" />
          <div class="team-name">{{ dev.nombre }}</div>
          <div class="team-role">{{ dev.rol }}</div>
          <a
            v-if="dev.github"
            :href="dev.github"
            target="_blank"
            rel="noopener"
            class="pill-link"
          >
            <q-icon name="link" size="16px" />
            GitHub
          </a>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script setup>
const equipo = [
  {
    nombre: 'Jhon Alexander',
    rol: 'Desarrollador Full Stack',
    foto: '/images/Perfil_Jhon_Pimiento.png',
    github: 'https://github.com/Jhonpi33'
  }
]
</script>

<style scoped>
.about-page {
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px clamp(20px, 5vw, 56px) 64px;
}

.about-block {
  max-width: 720px;
  margin-bottom: 56px;
}

.center-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 12px 0 20px;
}

.center-logo {
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid var(--card-border);
  background: var(--white);
  padding: 6px;
}

.center-name {
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.3px;
}

.center-sub {
  font-size: 20px;
  color: var(--green-700);
  font-weight: 600;
  margin-top: 2px;
}

.center-description {
  font-size: 18px;
  line-height: 1.75;
  color: var(--ink);
  margin: 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 18px;
}

.team-card {
  background: var(--white);
  border: 1px solid var(--card-border);
  border-top: 3px solid var(--green-600);
  border-radius: 8px;
  padding: 24px 18px;
  text-align: center;
}

.team-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--green-100);
  margin-bottom: 12px;
}

.team-name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 25px;
}

.team-role {
  font-size: 16px;
  color: var(--ink-muted);
  margin: 2px 0 14px;
}

.section-title-big {
  font-size: 34px;
}
</style>
