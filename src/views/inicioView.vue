<template>
  <q-page class="home-page">

    <!-- ============ HERO: chip + título + subtítulo + buscador + filtros ============ -->
  
<section class="hero">
  <div class="hero-content">
    <p class="eyebrow" id="servicos">Servicios al aprendiz</p>
    <h1 class="hero-title">
      Todo lo que necesitas saber, <span class="highlight">en un solo lugar</span>
    </h1>
    <p class="hero-subtitle">
      Consulta qué ofrece cada servicio del centro, sus horarios de atención,
      el teléfono de contacto y quién te atiende.
    </p>
    <q-input
      v-model="busqueda"
      outlined
      dense
      class="search-input"
      placeholder="¿Qué servicio o trámite buscas? (ej. enfermería, biblioteca...)"
    >
      <template #prepend>
        <q-icon name="search" />
      </template>
    </q-input>
    <div class="filter-row">
      <q-chip
        v-for="cat in categorias"
        :key="cat"
        clickable
        :outline="filtroActivo !== cat"
        :color="filtroActivo === cat ? 'primary' : undefined"
        :text-color="filtroActivo === cat ? 'white' : undefined"
        @click="filtroActivo = cat"
      >
        {{ cat }}
      </q-chip>
    </div>
  </div>
  <div class="logo_inicio">
    <img src="/images/logo-sena.png" alt="Logo SENA" />
  </div>
</section>
  

    <!-- ============ DIRECTORIO: grilla de tarjetas de servicio ============ -->
    <section class="directory">
      <div class="directory-header">
        <div>
          <h2 class="section-title">Directorio de dependencias principales</h2>
          <p class="section-subtitle">Módulos de atención presencial en la sede</p>
        </div>
        <span class="result-count">
          Mostrando {{ serviciosFiltrados.length }} dependencias
        </span>
      </div>

      <div class="card-grid">
        <router-link
          v-for="s in serviciosFiltrados"
          :key="s.to"
          :to="s.to"
          class="service-tile"
        >
          <div class="card-image" :style="{ backgroundImage: `url(${s.banner})` }">
            <span class="status-badge" :class="'badge-' + s.estado.tipo">
              <q-icon :name="s.estado.icono" size="12px" />
              {{ s.estado.texto }}
            </span>
          </div>
          

          <div class="card-body">
            <div class="card-tag">{{ s.categoria }}</div>
            <h3 class="card-title">
              <q-icon :name="s.icon" size="17px" class="card-title-icon" />
              {{ s.title }}
            </h3>
            <p class="card-desc">{{ s.resumen }}</p>

            <ul class="card-meta">
              <li><q-icon name="place" size="15px" /> Ubicación: {{ s.ubicacion }}</li>
              <li><q-icon name="person" size="15px" /> {{ s.encargadoLabel }}: {{ s.encargado }}</li>
            </ul>

            <div class="card-footer">
              <span class="card-footer-left">{{ s.footerLeft }}</span>
              <span class="card-cta">
                {{ s.footerBtn }} <q-icon name="arrow_forward" size="14px" />
              </span>
            </div>
          </div>
        </router-link>
      </div>

      <p v-if="serviciosFiltrados.length === 0" class="empty-state">
        No encontramos servicios que coincidan con tu búsqueda.
      </p>
    </section>

    <!-- ============ BANDA DE AYUDA ============ -->
    <section class="help-banner">
      <div>
        <div class="help-title">¿Tienes dudas o inquietudes?</div>
        <p class="help-text">
          Si no encuentras el trámite que buscas, comunícate directamente con la
          oficina de atención al aprendiz.
        </p>
      </div>
      <div class="help-actions">
        <a class="help-btn help-btn-outline" href="tel:+576076140200">
          <q-icon name="call" size="16px" /> Línea de atención
        </a>
        <a class="help-btn help-btn-solid" href="mailto:bienestar@sena.edu.co">
          <q-icon name="mail" size="16px" /> Escríbenos
        </a>
      </div>
    </section>

  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

// Categorías para los chips de filtro. 'Todos' siempre está presente.
const categorias = ['Todos', 'Abiertos ahora', 'Salud & Apoyo', 'Académico']

// Texto escrito en el buscador y categoría de filtro seleccionada
const busqueda = ref('')
const filtroActivo = ref('Todos')

// Datos reales de cada servicio.
// Las ubicaciones coinciden con las que usa cada vista de detalle del proyecto.
const servicios = [
  {
    title: 'Enfermería',
    to: '/enfermeriaView',
    icon: 'medical_services',
    banner: '/images/fachada-enfermeria.jpg',
    categoria: 'Salud & Apoyo',
    resumen: 'Promoción y prevención de enfermedades, atención básica en primeros auxilios para los aprendices del centro.',
    ubicacion: 'Edificio A · Primer piso',
    encargadoLabel: 'Encargada',
    encargado: 'María Fernanda Gómez',
    footerLeft: 'Tel: 321 415 3995',

    estado: { texto: 'Abierto · hasta 8:00 p.m.', tipo: 'abierto', icono: 'check_circle' }
  },
  {
    title: 'Bienestar al Aprendiz',
    to: '/bienestarView',
    icon: 'favorite',
    banner: '/images/fachada-bienestar.jpg',
    categoria: 'Apoyos, Bienestar y Psicosocial',
    resumen: 'Apoyos socioeconómicos, monitorías, salud física y mental, y fortalecimiento del liderazgo estudiantil.',
    ubicacion: 'Edificio A · Primer piso',
    encargadoLabel: 'Líder',
    encargado: 'María Delia Arenas',
    footerLeft: 'Tel: 317 637 7670',
    
    estado: { texto: 'Abierto · hasta 6:00 p.m.', tipo: 'abierto', icono: 'check_circle' }
  },
  {
    title: 'Biblioteca',
    to: '/bibliotecaView',
    icon: 'menu_book',
    banner: '/images/fachada-biblioteca.png',
    categoria: 'Recursos Académicos',
    resumen: 'Consulta en sala, préstamo a domicilio, préstamo interbibliotecario, talleres y asesorías de búsqueda.',
    ubicacion: 'Bloque académico',
    encargadoLabel: 'Bibliotecóloga',
    encargado: 'Yudith Milagros Martínez',
    footerLeft: 'Tel: 312 584 8032',
    
    estado: { texto: 'Abierto · hasta 10:00 a.m.', tipo: 'abierto', icono: 'check_circle' }
  },
  {
    title: 'Cafetería',
    to: '/cafeteriaView',
    icon: 'restaurant',
    banner: '/images/fachada-cafeteria.jpg',
    categoria: 'Alimentación y Cafetería',
    resumen: 'Venta y atención al cliente del servicio de alimentación para aprendices, instructores y funcionarios.',
    ubicacion: 'Zona de Cafetería · Esquina del domo',
    encargadoLabel: 'Coordinadora',
    encargado: 'Luisa Carreño',
    footerLeft: 'Ficha cocina: 341 0173',
    
    estado: { texto: 'Horario por turnos', tipo: 'especial', icono: 'schedule' }
  },
  {
    title: 'Coordinación Académica',
    to: '/coordinacionView',
    icon: 'school',
    banner: '/images/fachada-coordinacion.jpg',
    categoria: 'Trámites Curriculares',
    resumen: 'Novedades de aprendices, retiros, aplazamientos y logística de ambientes para la formación.',
    ubicacion: 'Bloque Administrativo',
    encargadoLabel: 'Coordinador',
    encargado: 'Luis Carlos Reina',
    footerLeft: 'Tel: 316 6783027',
    
    estado: { texto: 'Atención hasta 12:00 p.m.', tipo: 'aviso', icono: 'schedule' }
  }
]

// Lista final mostrada: filtra por texto buscado y por la categoría elegida en los chips
const serviciosFiltrados = computed(() => {
  return servicios.filter((s) => {
    const coincideTexto = s.title.toLowerCase().includes(busqueda.value.toLowerCase())
    const coincideCategoria =
      filtroActivo.value === 'Todos' ||
      (filtroActivo.value === 'Abiertos ahora' && s.estado.tipo === 'abierto') ||
      s.categoria === filtroActivo.value
    return coincideTexto && coincideCategoria
  })
})
</script>

<style scoped>
/* .logo_hero{
  display: grid;
  grid-template-columns: 2fr, 2fr;
}
.logo_inicio{
  width: 450px;
  height: 400px;
  background-image: url("/public/images/logo-sena.png");
} */
.home-page {
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px clamp(20px, 5vw, 56px) 64px;
}

/* ---------- Hero ---------- */
/* CAMBIO: el hero ahora se divide en contenido izquierdo y logo derecho */
.hero {
  max-width: none;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 50px;
  align-items: center;
}
.hero-content {
  min-width: 0;
}
.logo_inicio {
  width: 100%;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo_inicio img {
  width: 300px;
  height: 300px;
  object-fit: contain;
  display: block;
}
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .logo_inicio {
    height: 220px;
    order: -1;
  }
  .logo_inicio img {
    width: 190px;
    height: 190px;
  }
}

.welcome-chip {
  font-size: 12.5px;
  font-weight: 600;
}

.eyebrow {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: var(--ink-muted);
  margin: 18px 0 6px;
}

.hero-title {
  font-size: clamp(55px, 3.6vw, 40px);
  font-weight: 700;
  letter-spacing: -0.6px;
  line-height: 1.15;
  margin: 0 0 16px;
}
.hero-title .highlight {
  color: var(--green-600);
}

.hero-subtitle {
  font-size: 16.5px;
  line-height: 1.7;
  color: var(--ink-muted);
  margin: 0 0 24px;
}

.search-input {
  max-width: 520px;
  margin-bottom: 16px;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.directory {
  margin-top: 8px;
}

.directory-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.section-title {
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 4px;
}

.section-subtitle {
  font-size: 15px;
  color: var(--ink-muted);
  margin: 0;
}

.result-count {
  font-size: 14px;
  color: var(--ink-muted);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 960px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 620px) {
  .card-grid { grid-template-columns: 1fr; }
}

.service-tile {
  display: block;
  background: var(--white);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.18s ease, transform 0.18s ease;
}
.service-tile:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(22, 36, 27, 0.08);
}

.card-image {
  height: 140px;
  background-size: cover;
  background-position: center;
  background-color: var(--green-100);
  padding: 10px;
  display: flex;
  align-items: flex-start;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 15px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 999px;
  color: var(--white);
}
.badge-abierto { background: rgba(47, 143, 59, 0.92); }
.badge-especial { background: rgba(199, 130, 20, 0.92); }
.badge-aviso { background: rgba(45, 90, 150, 0.9); }

.card-body {
  padding: 16px 18px 18px;
}

.card-tag {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.3px;
  color: var(--green-700);
  margin-bottom: 6px;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 21px;
  font-weight: 700;
  margin: 0 0 6px;
}

.card-title-icon {
  color: var(--green-600);
}

.card-desc {
  font-size: 15px;
  line-height: 1.55;
  color: var(--ink-muted);
  margin: 0 0 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-meta {
  list-style: none;
  margin: 0 0 14px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.card-meta li {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--ink-muted);
}
.card-meta .q-icon {
  color: var(--green-600);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--card-border);
  padding-top: 12px;
}

.card-footer-left {
  font-size: 14px;
  color: var(--ink-muted);
}

.card-cta {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: var(--green-700);
}

.empty-state {
  text-align: center;
  color: var(--ink-muted);
  padding: 40px 0;
}

/* ---------- Banda de ayuda ---------- */
.help-banner {
  margin-top: 48px;
  background: var(--ink);
  border-radius: 12px;
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.help-title {
  font-family: var(--font-display);
  font-size: 25px;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 6px;
}

.help-text {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  max-width: 420px;
}

.help-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.help-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.help-btn-outline {
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  color: var(--white);
}

.help-btn-solid {
  background: var(--green-600);
  color: var(--white);
}

#servicos{
  font-size: 20px;
  color: var(--green-600);
}
</style>