<template>
  <ServiceCard
    title="Enfermería" class="titulo"
    banner="/images/fachada-enfermeria.jpg"
    description="La enfermería ofrece servicios de promoción y prevención de enfermedades para los aprendices del centro.
Brinda atención básica en primeros auxilios y orientación ante situaciones que puedan afectar su bienestar.
También realiza acompañamiento y seguimiento a las necesidades de salud de la comunidad educativa.
Su servicio está enfocado en apoyar el bienestar físico de los aprendices durante su formación.
Además, promueve hábitos saludables y acciones de prevención dentro de las instalaciones del SENA.
"
    :horarios="[
      { dia: 'Lunes a viernes', horario: '6:30 a.m. – 10:30 a.m. y 4:00 p.m. – 8:00 p.m.' }
    ]"
    :telefonos="['+57 321 415 3995']"
    :encargado="{
      foto: '/public/images/perfil-enfermeria.png',
      nombre: 'María Fernanda Gómez Reyes',
      cargo: 'Enfermera',
      correo: 'Mafecita1118@gmail.com'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>

<style>
.titulo{
  font-size: 50px;
}
</style>
