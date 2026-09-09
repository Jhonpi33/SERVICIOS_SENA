<template>
  <ServiceCard
    title="Cafetería SENA"
    banner="/images/fachada-cafeteria.jpg"
    description="Venta y atención al cliente del servicio de alimentación (comidas) del SENA, dirigido a aprendices, instructores y funcionarios del centro."
    :horarios="[
      { dia: 'Lunes a viernes', horario: '7:00 a.m. – 12:00 p.m. / 1:00 p.m. – 5:30 p.m. / 7:00 p.m. – 9:30 p.m.' },
      { dia: 'Sábados', horario: '7:30 a.m. – 12:00 p.m.' }
    ]"
    :telefonos="['Ficha cocina: 341 0173', 'Teléfono: +57 322 303 8451']"
    :encargado="{
      foto: 'https://ui-avatars.com/api/?name=Cafeteria+SENA&background=39A900&color=fff&size=256',
      nombre: 'L. Carreño',
      cargo: 'Coordinadora de Cafetería',
      correo: 'lcarreno@sena.edu.com'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>
