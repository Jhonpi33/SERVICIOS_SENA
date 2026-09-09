<template>
  <ServiceCard
    title="Enfermería"
    banner="/images/fachada-enfermeria.jpg"
    description="Aquí se ofrecen todos los servicios de promoción y prevención de enfermedades, así como atención básica en primeros auxilios para los aprendices del centro. El servicio busca acompañar el bienestar físico de la comunidad educativa durante su proceso de formación."
    :horarios="[
      { dia: 'Lunes a viernes', horario: '6:30 a.m. – 10:30 a.m. y 4:00 p.m. – 8:00 p.m.' }
    ]"
    :telefonos="['+57 321 415 3995']"
    :encargado="{
      foto: 'https://ui-avatars.com/api/?name=Maria+Fernanda+Gomez&background=39A900&color=fff&size=256',
      nombre: 'María Fernanda Gómez Reyes',
      cargo: 'Enfermera',
      correo: 'Mafecita1118@gmail.com'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>
