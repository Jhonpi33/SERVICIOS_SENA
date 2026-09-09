<template>
  <ServiceCard
    title="Coordinación Académica"
    banner="/images/fachada-coordinacion.jpg"
    description="Apoyamos el trámite de novedades de los aprendices: retiros, deserción y aplazamientos correspondientes a la formación titulada del SENA. También gestionamos la programación de los instructores para la formación y la logística de los ambientes, garantizando que se encuentren en óptimas condiciones."
    :horarios="[
      { dia: 'Lunes a viernes', horario: '7:30 a.m. – 12:00 p.m.' }
    ]"
    :telefonos="['No disponible']"
    :encargado="{
      foto: 'https://ui-avatars.com/api/?name=Luis+Carlos+Reina&background=39A900&color=fff&size=256',
      nombre: 'Luis Carlos Reina',
      cargo: 'Coordinador Académico',
      correo: 'lreinas@sena.edu.com'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>
