<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="app-header">
      <q-toolbar class="app-toolbar">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" class="menu-btn gt-sm-hide" />

        <router-link to="/" class="brand">
          <img src="/images/logo-sena.png" alt="Logo SENA" class="brand-logo" />
          <span class="brand-name">Servicios al Aprendiz</span>
        </router-link>

        <q-space />

        <q-tabs align="right" class="app-tabs gt-sm">
          <q-route-tab to="/" label="Inicio" />
          <q-route-tab to="/enfermeriaView" label="Enfermería" />
          <q-route-tab to="/bienestarView" label="Bienestar" />
          <q-route-tab to="/bibliotecaView" label="Biblioteca" />
          <q-route-tab to="/cafeteriaView" label="Cafetería" />
          <q-route-tab to="/coordinacionView" label="Coordinación" />
          <q-route-tab to="/acercaView" label="Acerca de" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <q-list padding>
        <q-item clickable v-ripple to="/" exact @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="home" /></q-item-section>
          <q-item-section>Inicio</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/enfermeriaView" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="medical_services" /></q-item-section>
          <q-item-section>Enfermería</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/bienestarView" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="favorite" /></q-item-section>
          <q-item-section>Bienestar</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/bibliotecaView" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="menu_book" /></q-item-section>
          <q-item-section>Biblioteca</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/cafeteriaView" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="restaurant" /></q-item-section>
          <q-item-section>Cafetería</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/coordinacionView" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="school" /></q-item-section>
          <q-item-section>Coordinación</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/acercaView" @click="leftDrawerOpen = false">
          <q-item-section avatar><q-icon name="info" /></q-item-section>
          <q-item-section>Acerca de</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="app-footer">
      <q-toolbar class="footer-toolbar">
        SENA · Bienestar al Aprendiz
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.app-header {
  background: var(--white);
  color: var(--ink);
  border-bottom: 1px solid var(--card-border);
}

.app-toolbar {
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 40px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--ink);
}

.brand-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.brand-name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 16px;
}

.app-tabs :deep(.q-tab) {
  color: var(--ink-muted);
  font-family: var(--font-body);
  font-weight: 500;
  text-transform: none;
  min-height: 56px;
}

.app-tabs :deep(.q-tab--active) {
  color: var(--green-700);
}

.app-tabs :deep(.q-tab__indicator) {
  background: var(--green-600);
}

.menu-btn {
  color: var(--ink);
  margin-right: 8px;
}

.app-footer {
  background: var(--ink);
  color: var(--white);
}

.footer-toolbar {
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
  min-height: 44px;
}
</style>
