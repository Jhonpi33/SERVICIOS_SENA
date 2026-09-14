<template>
  <ServiceCard
    title="Cafetería SENA"
    banner="public/images/fachada-cafeteria.jpg"
    description="Servicio de venta y atención al cliente de alimentos y bebidas dentro de las instalaciones del SENA.
Está dirigido a aprendices, instructores, funcionarios y demás integrantes de la comunidad educativa.
Ofrece diferentes opciones de comidas, refrigerios y bebidas para satisfacer las necesidades de los usuarios.
Brinda una atención rápida, amable y eficiente durante las jornadas académicas y laborales.
Su objetivo es contribuir al bienestar, alimentación y comodidad de la comunidad del centro.
"
    :horarios="[
      { dia: 'Lunes a viernes', horario: '7:00 a.m. – 12:00 p.m. / 1:00 p.m. – 5:30 p.m. / 7:00 p.m. – 9:30 p.m.' },
      { dia: 'Sábados', horario: '7:30 a.m. – 12:00 p.m.' }
    ]"
    :telefonos="['Ficha cocina: 341 0173', 'Teléfono: +57 322 303 8451']"
    :encargado="{
      foto: '/public/images/perfil-cafeteria.png',
      nombre: 'Luisa Carreño',
      cargo: 'Coordinadora de Cafetería',
      correo: 'lcarreno@sena.edu.com'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>
