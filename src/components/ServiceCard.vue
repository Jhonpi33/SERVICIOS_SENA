<template>
    <q-page class="service-page">

        <!-- Hero: foto de fachada con título superpuesto -->
        <section class="hero" :style="{ backgroundImage: `url(${banner})` }">
            <div class="hero-scrim"></div>
            <div class="hero-inner">
                <h1 class="hero-title">{{ title }}</h1>
            </div>
        </section>

        <div class="layout">

            <!-- Columna principal: descripción -->
            <div class="main-col">
                <h2 class="section-label">Qué ofrecemos</h2>
                <p class="description">{{ description }}</p>
            </div>

            <!-- Columna lateral: horarios, contacto, encargado -->
            
            <aside class="side-col">
                
                <div class="staff-card">
                    <img :src="encargado.foto" :alt="encargado.nombre" class="staff-photo" />
                    <div class="staff-name">{{ encargado.nombre }}</div>
                    <div class="staff-role">{{ encargado.cargo }}</div>
                    <a :href="'mailto:' + encargado.correo" class="pill-link staff-email">
                        <q-icon name="mail" size="16px" />
                        {{ encargado.correo }}
                    </a>
                </div>

                <div class="info-block">
                    <h3 class="info-block-title">
                        <q-icon name="schedule" size="18px" />
                        Horarios de atención
                    </h3>
                    <ul class="schedule-list">
                        <li v-for="(h, i) in horarios" :key="i">
                            <span class="day">{{ h.dia }}</span>
                            <span class="time">{{ h.horario }}</span>
                        </li>
                    </ul>
                </div>
                
                <div class="info-block">
                    <h3 class="info-block-title">
                        <q-icon name="call" size="18px" />
                        Contacto
                    </h3>
                    <p v-for="(t, i) in telefonos" :key="i" class="phone-line">{{ t }}</p>
                </div>

                

                

            </aside>
        </div>
    </q-page>
</template>

<script setup>
defineProps({
    title: { type: String, required: true },
    banner: { type: String, required: true },
    description: { type: String, required: true },
    horarios: { type: Array, required: true },   // [{ dia: '', horario: '' }]
    telefonos: { type: Array, required: true },  // ['+57 ...']
    encargado: { type: Object, required: true }  // { foto, nombre, cargo, correo }
})
</script>

<style scoped>
/* ---------- Hero ---------- */
.hero {
    position: relative;
    height: 340px;
    background-size: cover;
    background-position: center;
    background-color: var(--green-100);
    display: flex;
    align-items: flex-end;
}

.hero-scrim {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(22, 36, 27, 0) 40%, rgba(22, 36, 27, 0.75) 100%);
}

.hero-inner {
    position: relative;
    width: 100%;
    padding: 28px clamp(20px, 5vw, 56px);
}

.hero-title {
    font-size: clamp(55px, 4vw, 44px);
    font-weight: 700;
    color: var(--white);
    letter-spacing: -0.5px;
}

/* ---------- Layout ---------- */
.layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 48px;
    padding: 40px clamp(20px, 5vw, 56px) 64px;
    max-width: 1180px;
    margin: 0 auto;
}

@media (max-width: 900px) {
    .layout {
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 28px 20px 48px;
    }

    .hero {
        height: 220px;
    }
}

/* ---------- Columna principal ---------- */
.description {
    font-size: 22px;
    line-height: 1.75;
    color: var(--ink);
    max-width: 62ch;
    margin: 0;
}

/* ---------- Columna lateral ---------- */
.side-col {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.info-block {
    background: var(--white);
    border: 1px solid var(--card-border);
    border-left: 3px solid var(--green-600);
    border-radius: 8px;
    padding: 18px 20px;
}

.info-block-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-display);
    font-size: 20px;
    font-weight: 600;
    color: var(--ink);
    margin: 0 0 12px;
}

.info-block-title .q-icon {
    color: var(--green-600);
}

.schedule-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.schedule-list li {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 10px 0;
    border-bottom: 1px solid var(--card-border);
}

.schedule-list li:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.schedule-list li:first-child {
    padding-top: 0;
}

.day {
    font-weight: 600;
    font-size: 19px;
    color: var(--ink);
}

.time {
    font-size: 18px;
    color: var(--ink-muted);
}

.phone-line {
    font-size: 18px;
    color: var(--ink);
    margin: 0 0 6px;
}

.phone-line:last-child {
    margin-bottom: 0;
}

/* ---------- Ficha del encargado ---------- */
.staff-card {
    background: var(--white);
    border: 1px solid var(--card-border);
    border-top: 3px solid var(--green-600);
    border-radius: 8px;
    padding: 24px 20px;
    text-align: center;
}

.staff-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--green-100);
    margin-bottom: 12px;
}

.staff-name {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 20px;
    color: var(--ink);
}

.staff-role {
    font-size: 18px;
    color: var(--ink-muted);
    margin: 12px;
}

.staff-email {
    font-size: 17px;
    word-break: break-all;
}
</style>
