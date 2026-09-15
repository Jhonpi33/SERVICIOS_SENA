<template>
    <div class="mascot-wrapper">

        <transition name="fade-pop">
            <div v-if="abierto" class="mascot-panel">
                <div class="mascot-panel-header">
                    <span>¡Hola! Soy Sena-Bot 🌱</span>
                    <q-btn flat dense round icon="close" size="sm" @click="abierto = false" />
                </div>

                <p class="mascot-text">¿A dónde quieres ir?</p>

                <div class="mascot-actions">
                    <router-link to="/" class="mascot-action" @click="abierto = false">
                        <q-icon name="home" size="16px" /> Inicio
                    </router-link>
                    <router-link to="/enfermeriaView" class="mascot-action" @click="abierto = false">
                        <q-icon name="medical_services" size="16px" /> Enfermería
                    </router-link>
                    <router-link to="/bienestarView" class="mascot-action" @click="abierto = false">
                        <q-icon name="favorite" size="16px" /> Bienestar
                    </router-link>
                    <router-link to="/bibliotecaView" class="mascot-action" @click="abierto = false">
                        <q-icon name="menu_book" size="16px" /> Biblioteca
                    </router-link>
                    <router-link to="/cafeteriaView" class="mascot-action" @click="abierto = false">
                        <q-icon name="restaurant" size="16px" /> Cafetería
                    </router-link>
                    <router-link to="/coordinacionView" class="mascot-action" @click="abierto = false">
                        <q-icon name="school" size="16px" /> Coordinación
                    </router-link>
                    <a href="mailto:bienestar@sena.edu.co" class="mascot-action">
                        <q-icon name="mail" size="16px" /> Escríbenos
                    </a>
                </div>
            </div>
        </transition>

        <button class="mascot-button" @click="abierto = !abierto" aria-label="Abrir asistente">
            <span class="mascot-face">🌱</span>
        </button>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const abierto = ref(false)
</script>

<style scoped>
.mascot-wrapper {
    position: fixed;
    right: 24px;
    bottom: 50px;
    z-index: 2000;
}

.mascot-button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background: #a1616100;
    box-shadow: 0 8px 20px rgba(22, 36, 27, 0.25);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.18s ease;
}

.mascot-button:hover {
    transform: scale(1.06);
}

.mascot-face {
    font-size: 28px;
}

.mascot-panel {
    position: absolute;
    right: 0;
    bottom: 74px;
    width: 240px;
    background: var(--white);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    box-shadow: 0 12px 28px rgba(22, 36, 27, 0.18);
    padding: 16px;
}

.mascot-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 6px;
}

.mascot-text {
    font-size: 13px;
    color: var(--ink-muted);
    margin: 0 0 12px;
}

.mascot-actions {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.mascot-action {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--ink);
    text-decoration: none;
    padding: 8px 10px;
    border-radius: 8px;
    background: var(--paper);
}

.mascot-action:hover {
    background: var(--green-100);
}

.fade-pop-enter-active,
.fade-pop-leave-active {
    transition: all 0.15s ease;
}

.fade-pop-enter-from,
.fade-pop-leave-to {
    opacity: 0;
    transform: translateY(8px);
}
</style>