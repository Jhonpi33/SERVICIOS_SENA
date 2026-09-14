<template>
  <ServiceCard
    title="Coordinación Académica"
    banner="/images/fachada-coordinacion.jpg"
    description="La coordinación apoya la gestión y trámite de novedades de los aprendices durante su proceso de formación.
Se encarga de gestionar retiros, deserciones y aplazamientos de la formación titulada del SENA.
También coordina la programación y asignación de instructores para las diferentes actividades de formación.
Gestiona la logística y disponibilidad de los ambientes de aprendizaje del centro.
Su objetivo es garantizar una adecuada organización y funcionamiento de los procesos de formación.
"
    :horarios="[
      { dia: 'Lunes a viernes', horario: '7:30 a.m. – 12:00 p.m.' }
    ]"
    :telefonos="['+57 3166783027']"
    :encargado="{
      foto: '/public/images/perfil-coordinacion.png',
      nombre: 'Luis Carlos Reina',
      cargo: 'Coordinador Académico',
      correo: 'lreinas@sena.edu.com'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>
