<template>
  <ServiceCard
    title="Cafetería SENA"
    banner="/images/fachada-cafeteria.jpg"
    description="Servicio de venta y atención al cliente de alimentos y bebidas dentro de las instalaciones del SENA.
Está dirigido a aprendices, instructores, funcionarios y demás integrantes de la comunidad educativa.
Ofrece diferentes opciones de comidas, refrigerios y bebidas para satisfacer las necesidades de los usuarios.
Brinda una atención rápida, amable y eficiente durante las jornadas académicas y laborales.
Su objetivo es contribuir al bienestar, alimentación y comodidad de la comunidad del centro."

    :stats="[
      { label: 'Tiempo promedio', value: '3 – 5 min' },
      { label: 'Cobertura sede', value: 'Servicio general' }
    ]"

    :hero-tags="[
      { texto: 'Atención Rápida', icono: 'bolt' }
    ]"
    :hero-caption="{
      eyebrow: 'Zona de Alimentación',
      titulo: 'Espacio de alimentación para la comunidad educativa'
    }"

    servicios-titulo="¿Qué servicios ofrece la Cafetería?"
    :servicios="[
      {
        icono: 'restaurant',
        titulo: 'Almuerzos y comidas',
        texto: 'Venta de alimentos preparados durante las jornadas de la mañana, tarde y noche.',
      },
      {
        icono: 'local_cafe',
        titulo: 'Refrigerios y bebidas',
        texto: 'Opciones de refrigerios, snacks y bebidas frías y calientes para toda la jornada académica.',
      },
      {
        icono: 'groups',
        titulo: 'Atención a la comunidad',
        texto: 'Servicio dirigido a aprendices, instructores, funcionarios y visitantes del centro.',
      },
      {
        icono: 'schedule',
        titulo: 'Horario extendido',
        texto: 'Atención en tres franjas horarias para cubrir las jornadas de la mañana, tarde y noche.',
      }
    ]"

    :horarios="[
      { dia: 'Lunes a viernes', etiqueta: 'TRES JORNADAS', icono: 'wb_sunny', horario: 'Mañana: 7:00 a.m. – 12:00 p.m.' },
      { icono: 'wb_twilight', horario: 'Tarde: 1:00 p.m. – 5:30 p.m.' },
      { icono: 'nights_stay', horario: 'Noche: 7:00 p.m. – 9:30 p.m.' },
      { dia: 'Sábados', horario: '7:30 a.m. – 12:00 p.m.' }
    ]"
    :en-servicio="true"

    :telefonos="['+57 322 303 8451']"
    :ubicacion="{ titulo: 'Zona de Cafetería', detalle: 'Esquina izquierda del domo' }"

    :encargado="{
      foto: '/images/perfil-cafeteria.png',
      nombre: 'Luisa Carreño',
      cargo: 'Coordinadora de Cafetería',
      correo: 'lcarreno@sena.edu.com',
      estado: 'En atención'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>