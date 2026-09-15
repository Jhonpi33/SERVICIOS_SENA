<template>
    <q-page class="service-page">
        <!-- ================= HEADER ================= -->
        <section class="top-header">
            <div class="top-header-main">
                <div v-if="badges.length" class="badges-row">
                    <span v-for="(b, i) in badges" :key="i" class="badge-pill">
                        <q-icon v-if="b.icono" :name="b.icono" size="16px" />
                        {{ b.texto }}
                    </span>
                </div>
                <h1 class="page-title">{{ title }}</h1>
                <p class="page-desc">{{ description }}</p>
            </div>
            <div v-if="stats.length" class="stats-box">
                <div v-for="(s, i) in stats" :key="i" class="stat-item">
                    <div class="stat-label">{{ s.label }}</div>
                    <div class="stat-value">{{ s.value }}</div>
                </div>
            </div>
        </section>
        <!-- ================= CONTENIDO ================= -->
        <div class="layout">
            <main class="main-col">
                <!-- HERO -->
                <section class="hero" :style="{ backgroundImage: `url(${banner})` }">
                    <div class="hero-scrim"></div>
                    <div v-if="heroTags.length" class="hero-tags">
                        <span v-for="(t, i) in heroTags" :key="i" class="hero-tag">
                            <q-icon :name="t.icono" size="16px" />
                            {{ t.texto }}
                        </span>
                    </div>
                    <div v-if="heroCaption" class="hero-caption">
                        <div class="hero-caption-eyebrow">{{ heroCaption.eyebrow }}</div>
                        <div class="hero-caption-title">{{ heroCaption.titulo }}</div>
                    </div>
                </section>
                <!-- ================= SERVICIOS ================= -->
                <section v-if="servicios.length" class="section-block">
                    <div class="section-block-header">
                        <div>
                            <div class="section-kicker">SERVICIOS DISPONIBLES</div>
                            <h2 class="section-label">{{ serviciosTitulo }}</h2>
                        </div>
                        <span class="section-count">{{ servicios.length }} servicios</span>
                    </div>
                    <div class="services-grid">
                        <article v-for="(s, i) in servicios" :key="i" class="service-item">
                            <div class="service-icon-wrapper">
                                <q-icon :name="s.icono" size="25px" />
                            </div>
                            <div class="service-content">
                                <h3 class="service-item-title">{{ s.titulo }}</h3>
                                <p class="service-item-text">{{ s.texto }}</p>
                                <span v-if="s.link" class="service-item-link">
                                    {{ s.link }}
                                    <q-icon name="arrow_forward" size="17px" />
                                </span>
                            </div>
                        </article>
                    </div>
                </section>
                <!-- ================= REQUISITOS ================= -->
                <section v-if="requisitos.length" class="requisitos-block">
                    <div class="requisitos-header">
                        <div class="requisitos-title-wrap">
                            <div class="requisitos-icon">
                                <q-icon name="checklist" size="23px" />
                            </div>
                            <div>
                                <h3 class="requisitos-title">Requisitos para la atención</h3>
                                <p class="requisitos-subtitle">Ten en cuenta esta información antes de solicitar el
                                    servicio.</p>
                            </div>
                        </div>
                    </div>
                    <div class="requisitos-grid">
                        <div v-for="(r, i) in requisitos" :key="i" class="requisito-item">
                            <q-icon name="check_circle" size="20px" class="requisito-check" />
                            <div>
                                <div class="requisito-titulo">{{ r.titulo }}</div>
                                <div class="requisito-texto">{{ r.texto }}</div>
                            </div>
                        </div>
                    </div>
                    <div v-if="notaAtencion || ctaTexto" class="requisitos-footer">
                        <span v-if="notaAtencion" class="requisitos-note">
                            <q-icon name="info" size="18px" />
                            {{ notaAtencion }}
                        </span>
                        <a v-if="ctaTexto" :href="ctaLink" class="cta-btn">
                            <q-icon name="event_available" size="18px" />
                            {{ ctaTexto }}
                        </a>
                    </div>
                </section>
            </main>
            <aside class="side-col">
                <!-- ================= ENCARGADO ================= -->
                <section class="staff-card">
                    <div class="staff-card-top">
                        <span class="staff-label">ENCARGADO(A)</span>
                        <span v-if="encargado.estado" class="staff-status">
                            <span class="dot"></span>
                            {{ encargado.estado }}
                        </span>
                    </div>
                    <div class="staff-main">
                        <img v-if="encargado.foto" :src="encargado.foto" :alt="encargado.nombre" class="staff-photo" />
                        <div class="staff-information">
                            <div class="staff-name">{{ encargado.nombre }}</div>
                            <div class="staff-role">{{ encargado.cargo }}</div>
                            <div v-if="encargado.credencial" class="staff-credencial">{{ encargado.credencial }}</div>
                        </div>
                    </div>
                    <div class="staff-email-row">
                        <q-icon name="mail" size="18px" />
                        <span class="staff-email-text">{{ encargado.correo }}</span>
                        <button class="copy-btn" @click="copiarCorreo">{{ copiado ? 'Copiado' : 'Copiar' }}</button>
                    </div>
                    <div class="staff-actions">
                        <a :href="'mailto:' + encargado.correo" class="staff-btn staff-btn-outline">
                            <q-icon name="send" size="17px" />
                            Correo
                        </a>
                        <a v-if="encargado.whatsapp" :href="'https://wa.me/' + encargado.whatsapp" target="_blank"
                            rel="noopener" class="staff-btn staff-btn-solid">
                            <q-icon name="chat" size="17px" />
                            WhatsApp
                        </a>
                    </div>
                </section>
                <!-- ================= HORARIOS ================= -->
                <section class="info-block">
                    <div class="info-block-title-row">
                        <h3 class="info-block-title">
                            <q-icon name="schedule" size="21px" />
                            Horarios de atención
                        </h3>
                        <span v-if="enServicio" class="mini-badge">
                            <span class="mini-dot"></span>
                            En servicio
                        </span>
                    </div>
                    <ul class="schedule-list">
                        <li v-for="(h, i) in horarios" :key="i">
                            <div class="schedule-icon">
                                <q-icon :name="h.icono || 'schedule'" size="19px" />
                            </div>
                            <div class="schedule-content">
                                <div class="day-row">
                                    <span v-if="h.dia" class="day">{{ h.dia }}</span>
                                    <span v-if="h.etiqueta" class="day-tag">{{ h.etiqueta }}</span>
                                </div>
                                <span class="time">{{ h.horario }}</span>
                            </div>
                        </li>
                    </ul>
                </section>
                <!-- ================= CONTACTO ================= -->
                <section class="info-block">
                    <h3 class="info-block-title contact-title">
                        <q-icon name="contact_phone" size="21px" />
                        Información de contacto
                    </h3>
                    <div v-for="(t, i) in telefonos" :key="'tel-' + i" class="contact-row">
                        <div class="contact-icon-box">
                            <q-icon name="phone" size="19px" />
                        </div>
                        <div class="contact-info">
                            <div class="contact-label">Teléfono</div>
                            <div class="contact-value">{{ t }}</div>
                        </div>
                        <a :href="'tel:' + soloNumeros(t)" class="contact-cta">Llamar</a>
                    </div>
                    <div v-if="ubicacion" class="contact-row">
                        <div class="contact-icon-box">
                            <q-icon name="place" size="19px" />
                        </div>
                        <div class="contact-info">
                            <div class="contact-label">Ubicación</div>
                            <div class="contact-value">{{ ubicacion.titulo }}</div>
                            <div v-if="ubicacion.detalle" class="contact-sub">{{ ubicacion.detalle }}</div>
                        </div>
                    </div>
                    <div v-if="extension" class="contact-row">
                        <div class="contact-icon-box">
                            <q-icon name="dialpad" size="19px" />
                        </div>
                        <div class="contact-info">
                            <div class="contact-label">Extensión</div>
                            <div class="contact-value">{{ extension }}</div>
                        </div>
                    </div>
                </section>
                <!-- ================= EMERGENCIA ================= -->
                <section v-if="emergencia" class="emergency-block">
                    <h3 class="emergency-title">
                        <q-icon name="emergency" size="21px" />
                        {{ emergencia.titulo || 'Protocolo de emergencia' }}
                    </h3>
                    <p class="emergency-text">{{ emergencia.texto }}</p>
                    <div v-if="emergencia.extensiones && emergencia.extensiones.length" class="emergency-ext-row">
                        <div v-for="(e, i) in emergencia.extensiones" :key="i" class="emergency-ext">
                            <div class="emergency-ext-value">{{ e.valor }}</div>
                            <div class="emergency-ext-label">{{ e.label }}</div>
                        </div>
                    </div>
                </section>
            </aside>
        </div>
    </q-page>
</template>



<script setup>
import { ref } from 'vue'
const props = defineProps({
    title: { type: String, required: true },
    banner: { type: String, required: true },
    description: { type: String, required: true },
    horarios: { type: Array, required: true },
    telefonos: { type: Array, required: true },
    encargado: { type: Object, required: true },
    badges: { type: Array, default: () => [] },
    stats: { type: Array, default: () => [] },
    heroTags: { type: Array, default: () => [] },
    heroCaption: { type: Object, default: null },
    servicios: { type: Array, default: () => [] },
    serviciosTitulo: { type: String, default: '¿Qué servicios prestamos?' },
    requisitos: { type: Array, default: () => [] },
    notaAtencion: { type: String, default: '' },
    ctaTexto: { type: String, default: '' },
    ctaLink: { type: String, default: '#' },
    enServicio: { type: Boolean, default: false },
    ubicacion: { type: Object, default: null },
    extension: { type: String, default: '' },
    emergencia: { type: Object, default: null }
})
const copiado = ref(false)
async function copiarCorreo() {
    try {
        await navigator.clipboard.writeText(props.encargado.correo)
        copiado.value = true
        setTimeout(() => { copiado.value = false }, 1500)
    } catch (e) {
        console.error('No se pudo copiar el correo', e)
    }
}
function soloNumeros( texto) {
    return texto.replace(/\D/g, '')
}
</script>



<style scoped>
.service-page {
    min-height: 100vh;
    background: var(--paper);
    color: var(--ink);
}
.top-header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 36px;
    max-width: 1240px;
    margin: 0 auto;
    padding: 38px clamp(20px, 5vw, 60px) 28px;
}
.top-header-main {
    max-width: 760px;
}
.badges-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
}
.badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--green-100);
    color: var(--green-700);
    font-size: 14px;
    font-weight: 700;
    padding: 7px 13px;
    border-radius: 999px;
}
.page-title {
    font-size: clamp(36px, 4vw, 50px);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.8px;
    margin: 0 0 14px;
    color: var(--green-600)
}
.page-desc {
    font-size: 18px;
    line-height: 1.65;
    color: var(--ink-muted);
    margin: 0;
    max-width: 760px;
}
.stats-box {
    display: flex;
    background: var(--white);
    border: 1px solid var(--card-border);
    border-radius: 14px;
    overflow: hidden;
    flex-shrink: 0;
    box-shadow: 0 6px 22px rgba(0, 0, 0, 0.05);
}
.stat-item {
    padding: 18px 21px;
    min-width: 135px;
}
.stat-item + .stat-item {
    border-left: 1px solid var(--card-border);
}
.stat-label {
    font-size: 13px;
    font-weight: 700;
    color: var(--ink-muted);
    margin-bottom: 6px;
}
.stat-value {
    font-family: var(--font-display);
    font-size: 20px;
    font-weight: 800;
    color: var(--green-700);
}
.layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 350px;
    align-items: start;
    gap: 32px;
    padding: 10px clamp(20px, 5vw, 60px) 60px;
    max-width: 1240px;
    margin: 0 auto;
}
.main-col {
    min-width: 0;
}
.side-col {
    display: flex;
    flex-direction: column;
    gap: 18px;
}
.hero {
    position: relative;
    height: 320px;
    border-radius: 16px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-color: var(--green-100);
    margin-bottom: 34px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}
.hero-scrim {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(22, 36, 27, 0) 35%,
        rgba(22, 36, 27, 0.85) 100%
    );
}
.hero-tags {
    position: absolute;
    top: 16px;
    left: 16px;
    display: flex;
    gap: 7px;
    flex-wrap: wrap;
}
.hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(22, 36, 27, 0.65);
    color: var(--white);
    font-size: 13.5px;
    font-weight: 700;
    padding: 7px 12px;
    border-radius: 999px;
    backdrop-filter: blur(3px);
}
.hero-caption {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 22px;
    color: var(--white);
}
.hero-caption-eyebrow {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.5px;
    opacity: 0.9;
    margin-bottom: 5px;
}
.hero-caption-title {
    font-family: var(--font-display);
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
}
.section-block {
    margin-bottom: 34px;
}
.section-block-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;
    margin-bottom: 18px;
}
.section-kicker {
    font-size: 13px;
    font-weight: 800;
    color: var(--green-600);
    letter-spacing: 0.8px;
    margin-bottom: 5px;
}
.section-label {
    font-size: 25px;
    font-weight: 800;
    line-height: 1.25;
    margin: 0;
    color: var(--green-600);
}
.section-count {
    font-size: 13px;
    font-weight: 700;
    color: var(--ink-muted);
    white-space: nowrap;
}
.services-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 15px;
}
.service-item {
    display: flex;
    gap: 15px;
    background: var(--white);
    border: 1px solid var(--card-border);
    border-radius: 13px;
    padding: 18px;
    min-height: 160px;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.service-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);
}
.service-icon-wrapper {
    width: 48px;
    height: 48px;
    min-width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--green-700);
    background: var(--green-100);
    border-radius: 12px;
}
.service-content {
    min-width: 0;
}
.service-item-title {
    font-family: var(--font-display);
    font-size: 18px;
    line-height: 1.3;
    font-weight: 750;
    margin: 1px 0 7px;
    color: var(--ink);
}
.service-item-text {
    font-size: 15px;
    line-height: 1.55;
    color: var(--ink-muted);
    margin: 0 0 10px;
}
.service-item-link {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 13.5px;
    font-weight: 800;
    color: var(--green-700);
}
.staff-card {
    background: var(--white);
    border: 1px solid var(--card-border);
    border-top: 3px solid var(--green-600);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.035);
}
.staff-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
}
.staff-label {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.4px;
    color: var(--ink-muted);
}
.staff-status {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    font-weight: 700;
    color: var(--green-700);
}
.dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--green-600);
}
.staff-main {
    display: flex;
    align-items: center;
    gap: 13px;
    margin-bottom: 15px;
}
.staff-photo {
    width: 78px;
    height: 78px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--green-100);
    flex-shrink: 0;
}
.staff-information {
    min-width: 0;
}
.staff-name {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 18px;
    line-height: 1.25;
    color: var(--ink);
}
.staff-role {
    font-size: 14.5px;
    color: var(--ink-muted);
    margin-top: 3px;
    line-height: 1.4;
}
.staff-credencial {
    font-size: 12.5px;
    color: var(--ink-muted);
    margin-top: 3px;
}
.staff-email-row {
    display: flex;
    align-items: center;
    gap: 7px;
    background: var(--paper);
    border-radius: 8px;
    padding: 9px 10px;
    margin-bottom: 12px;
}
.staff-email-row .q-icon {
    color: var(--green-600);
    flex-shrink: 0;
}
.staff-email-text {
    flex: 1;
    font-size: 13.5px;
    color: var(--ink);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.copy-btn {
    border: none;
    background: none;
    color: var(--green-700);
    font-size: 12.5px;
    font-weight: 700;
    cursor: pointer;
    flex-shrink: 0;
    padding: 3px;
}
.staff-actions {
    display: flex;
    gap: 8px;
}
.staff-btn {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 13.5px;
    font-weight: 700;
    padding: 9px 10px;
    border-radius: 8px;
    text-decoration: none;
    white-space: nowrap;
}
.staff-btn-outline {
    border: 1.5px solid var(--green-600);
    color: var(--green-700);
    background: var(--white);
}
.staff-btn-solid {
    background: var(--green-600);
    color: var(--white);
}
.info-block {
    background: var(--white);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    padding: 19px 20px;
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.035);
}
.info-block-title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
}
.info-block-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-display);
    font-size: 17px;
    font-weight: 700;
    color: var(--ink);
    margin: 0;
}
.info-block-title .q-icon {
    color: var(--green-600);
}
.mini-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: var(--green-100);
    color: var(--green-700);
    font-size: 11px;
    font-weight: 700;
    padding: 5px 8px;
    border-radius: 999px;
    white-space: nowrap;
}
.mini-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--green-600);
}
.schedule-list {
    list-style: none;
    margin: 0;
    padding: 0;
}
.schedule-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 11px 0;
    border-bottom: 1px solid var(--card-border);
}
.schedule-list li:first-child {
    padding-top: 0;
}
.schedule-list li:last-child {
    border-bottom: none;
    padding-bottom: 0;
}
.schedule-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    min-width: 34px;
    background: var(--green-100);
    color: var(--green-700);
    border-radius: 9px;
}
.schedule-content {
    min-width: 0;
    flex: 1;
}
.day-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 4px;
}
.day {
    font-weight: 700;
    font-size: 15px;
    color: var(--ink);
}
.day-tag {
    font-size: 10px;
    font-weight: 700;
    color: var(--green-700);
    background: var(--green-100);
    padding: 3px 7px;
    border-radius: 999px;
}
.time {
    display: block;
    font-size: 14px;
    line-height: 1.5;
    color: var(--ink-muted);
}
.contact-title {
    margin-bottom: 14px;
}
.contact-row {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 11px 0;
    border-bottom: 1px solid var(--card-border);
}
.contact-row:last-child {
    border-bottom: none;
    padding-bottom: 0;
}
.contact-row:first-of-type {
    padding-top: 0;
}
.contact-icon-box {
    width: 33px;
    height: 33px;
    min-width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--green-100);
    color: var(--green-700);
    border-radius: 8px;
}
.contact-info {
    flex: 1;
    min-width: 0;
}
.contact-label {
    font-size: 11px;
    font-weight: 700;
    color: var(--ink-muted);
    margin-bottom: 2px;
}
.contact-value {
    font-size: 14.5px;
    line-height: 1.4;
    font-weight: 700;
    color: var(--ink);
}
.contact-sub {
    font-size: 12.5px;
    color: var(--ink-muted);
    line-height: 1.4;
    margin-top: 2px;
}
.contact-cta {
    flex-shrink: 0;
    font-size: 12.5px;
    font-weight: 700;
    color: var(--green-700);
    text-decoration: none;
    padding: 5px 8px;
    border-radius: 6px;
    background: var(--green-100);
}
.requisitos-block {
    background: var(--green-100);
    border-radius: 14px;
    padding: 22px;
}
.requisitos-header {
    margin-bottom: 17px;
}
.requisitos-title-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
}
.requisitos-icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    color: var(--green-700);
    border-radius: 11px;
}
.requisitos-title {
    font-family: var(--font-display);
    font-size: 19px;
    font-weight: 800;
    margin: 0;
    color: var(--ink);
}
.requisitos-subtitle {
    font-size: 13.5px;
    color: var(--ink-muted);
    margin: 4px 0 0;
}
.requisitos-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
}
.requisito-item {
    display: flex;
    align-items: flex-start;
    gap: 9px;
    background: var(--white);
    border-radius: 10px;
    padding: 14px;
}
.requisito-check {
    color: var(--green-600);
    flex-shrink: 0;
    margin-top: 1px;
}
.requisito-titulo {
    font-weight: 800;
    font-size: 14.5px;
    margin-bottom: 4px;
    color: var(--ink);
}
.requisito-texto {
    font-size: 13.5px;
    color: var(--ink-muted);
    line-height: 1.5;
}
.requisitos-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 16px;
}
.requisitos-note {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12.5px;
    color: var(--ink-muted);
}
.cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--green-600);
    color: var(--white);
    font-size: 13.5px;
    font-weight: 800;
    padding: 10px 16px;
    border-radius: 9px;
    text-decoration: none;
}
.emergency-block {
    background: #FBEAE8;
    border: 1px solid #F3C9C4;
    border-radius: 12px;
    padding: 18px 20px;
}
.emergency-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-display);
    font-size: 15px;
    font-weight: 700;
    color: #B3261E;
    margin: 0 0 8px;
}
.emergency-text {
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--ink);
    margin: 0 0 13px;
}
.emergency-ext-row {
    display: flex;
    gap: 8px;
}
.emergency-ext {
    flex: 1;
    text-align: center;
    background: var(--white);
    border-radius: 7px;
    padding: 8px 4px;
}
.emergency-ext-value {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 14px;
    color: #B3261E;
}
.emergency-ext-label {
    font-size: 10px;
    color: var(--ink-muted);
    margin-top: 2px;
}
@media (max-width: 1000px) {
    .top-header {
        grid-template-columns: 1fr;
    }
    .stats-box {
        width: max-content;
    }
    .layout {
        grid-template-columns: 1fr;
    }
    .side-col {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .staff-card {
        grid-column: span 2;
    }
}
@media (max-width: 700px) {
    .top-header {
        padding-top: 28px;
    }
    .page-title {
        font-size: 34px;
    }
    .page-desc {
        font-size: 16px;
    }
    .stats-box {
        width: 100%;
    }
    .stat-item {
        flex: 1;
        min-width: 0;
    }
    .layout {
        padding-left: 18px;
        padding-right: 18px;
    }
    .hero {
        height: 270px;
    }
    .services-grid,
    .requisitos-grid,
    .side-col {
        grid-template-columns: 1fr;
    }
    .staff-card {
        grid-column: auto;
    }
    .section-block-header {
        align-items: flex-start;
        flex-direction: column;
    }
    .section-count {
        align-self: flex-start;
    }
}
@media (max-width: 480px) {
    .stats-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .stat-item {
        padding: 15px;
    }
    .hero {
        height: 240px;
    }
    .hero-caption-title {
        font-size: 22px;
    }
    .service-item {
        min-height: 0;
        padding: 16px;
    }
    .service-item-title {
        font-size: 17px;
    }
    .service-item-text {
        font-size: 14px;
    }
    .requisitos-block {
        padding: 17px;
    }
    .staff-actions {
        flex-direction: column;
    }
}
</style>
