<template>
  <ServiceCard
    title="Bienestar al Aprendiz"
    banner="/images/fachada-bienestar.jpg"
    description="Bienestar al Aprendiz es una estrategia institucional para contribuir en la permanencia de los aprendices en su proceso formativo.
Sus servicios están alineados con la Política Nacional Integral de Bienestar al Aprendiz: reconocimiento de la cultura como creadora de identidad e inclusión, promoción de la salud física y mental, fortalecimiento de habilidades blandas y para la vida, deporte y aprovechamiento del tiempo libre, y promoción de expresiones artísticas.
Además, gestiona apoyos socioeconómicos (sostenimiento regular, FIC, medios tecnológicos, alimentación y transporte), monitorías y el fortalecimiento del liderazgo estudiantil."

    :stats="[
      { label: 'Tiempo promedio', value: '10 – 20 min' },
      { label: 'Cobertura sede', value: '100% Gratuito' }
    ]"

    :hero-tags="[
      { texto: 'Apoyo Integral', icono: 'volunteer_activism' }
    ]"
    :hero-caption="{
      eyebrow: 'Programa Institucional',
      titulo: 'Estrategia de bienestar y permanencia para aprendices'
    }"

    servicios-titulo="¿Qué servicios presta Bienestar al Aprendiz?"
    :servicios="[
      {
        icono: 'diversity_3',
        titulo: 'Cultura e inclusión',
        texto: 'Reconocimiento de la cultura como creadora de identidad e inclusión dentro de la comunidad educativa.',
      },
      {
        icono: 'favorite',
        titulo: 'Salud física y mental',
        texto: 'Promoción de la salud física y mental de los aprendices durante su proceso de formación.',
      },
      {
        icono: 'psychology',
        titulo: 'Habilidades blandas y para la vida',
        texto: 'Fortalecimiento de habilidades blandas y competencias para la vida de los aprendices.',
      },
      {
        icono: 'sports_soccer',
        titulo: 'Deporte, recreación y arte',
        texto: 'Aprovechamiento del tiempo libre mediante actividades deportivas, recreativas y expresiones artísticas.',
      },
      {
        icono: 'payments',
        titulo: 'Apoyos socioeconómicos',
        texto: 'Gestión de sostenimiento regular, FIC, medios tecnológicos, alimentación y transporte.',
      },
      {
        icono: 'school',
        titulo: 'Monitorías y liderazgo',
        texto: 'Fortalecimiento de monitorías y del liderazgo estudiantil entre los aprendices.',
      }
    ]"


    :horarios="[
      { dia: 'Apoyos socioeconómicos', icono: 'payments', horario: '8:00 a.m. – 12:00 p.m. y 2:00 p.m. – 6:00 p.m.' },
      { dia: 'Líder de Bienestar al Aprendiz', icono: 'support_agent', horario: '7:30 a.m. – 12:00 p.m. y 2:00 p.m. – 6:00 p.m.' }
    ]"
    :en-servicio="true"

    :telefonos="['+57 317 637 7670']"
    :ubicacion="{ titulo: 'Oficina de Bienestar al Aprendiz', detalle: 'Edificio A · Primer piso' }"

    :encargado="{
      foto: '/images/perfil-bienestar.png',
      nombre: 'María Delia Arenas Mejía',
      cargo: 'Líder de Bienestar al Aprendiz',
      correo: 'mdarenas@sena.edu.com',
      estado: 'En oficina'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>