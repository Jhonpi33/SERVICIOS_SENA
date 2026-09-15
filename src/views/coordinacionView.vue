<template>
  <ServiceCard
    title="Coordinación Académica"
    banner="/images/fachada-coordinacion.jpg"
    description="La coordinación apoya la gestión y trámite de novedades de los aprendices durante su proceso de formación.
Se encarga de gestionar retiros, deserciones y aplazamientos de la formación titulada del SENA.
También coordina la programación y asignación de instructores para las diferentes actividades de formación.
Gestiona la logística y disponibilidad de los ambientes de aprendizaje del centro.
Su objetivo es garantizar una adecuada organización y funcionamiento de los procesos de formación."

    :stats="[
      { label: 'Tiempo promedio', value: '10 – 15 min' },
      { label: 'Cobertura sede', value: '100% Gratuito' }
    ]"

    :hero-tags="[
      { texto: 'Gestión de Novedades', icono: 'assignment_turned_in' }
    ]"
    :hero-caption="{
      eyebrow: 'Oficina de Coordinación',
      titulo: 'Gestión académica y trámite de novedades de formación'
    }"

    servicios-titulo="¿Qué gestiona la Coordinación Académica?"
    :servicios="[
      {
        icono: 'event_busy',
        titulo: 'Retiros y aplazamientos',
        texto: 'Gestión y trámite de retiros, deserciones y aplazamientos de la formación titulada del SENA.',
      },
      {
        icono: 'groups',
        titulo: 'Asignación de instructores',
        texto: 'Coordinación de la programación y asignación de instructores para las diferentes actividades de formación.',
      },
      {
        icono: 'meeting_room',
        titulo: 'Disponibilidad de ambientes',
        texto: 'Gestión de la logística y disponibilidad de los ambientes de aprendizaje del centro.',
      },
      {
        icono: 'fact_check',
        titulo: 'Novedades de aprendices',
        texto: 'Apoyo en la gestión y trámite de novedades presentadas durante el proceso de formación.',
      }
    ]"


    :horarios="[
      { dia: 'Lunes a viernes', horario: '7:30 a.m. – 12:00 p.m.' }
    ]"
    :en-servicio="true"

    :telefonos="['+57 316 678 3027']"
    :ubicacion="{ titulo: 'Bloque Administrativo', detalle: 'Oficina de Coordinación Académica' }"

    :encargado="{
      foto: '/images/perfil-coordinacion.png',
      nombre: 'Luis Carlos Reina',
      cargo: 'Coordinador Académico',
      correo: 'lreinas@sena.edu.com',
      estado: 'En oficina'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>