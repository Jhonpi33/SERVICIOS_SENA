<template>
  <ServiceCard
    title="Bienestar al Aprendiz"
    banner="/images/fachada-bienestar.jpg"
    description="Bienestar al Aprendiz es una estrategia institucional para contribuir en la permanencia de los aprendices en su proceso formativo. Sus servicios están alineados con la Política Nacional Integral de Bienestar al Aprendiz: reconocimiento de la cultura como creadora de identidad e inclusión, promoción de la salud física y mental, fortalecimiento de habilidades blandas y para la vida, deporte y aprovechamiento del tiempo libre, y promoción de expresiones artísticas. Además, gestiona apoyos socioeconómicos (sostenimiento regular, FIC, medios tecnológicos, alimentación y transporte), monitorías y el fortalecimiento del liderazgo estudiantil."
    :horarios="[
      { dia: 'Enfermería – Sede principal', horario: '6:30 a.m. – 10:30 a.m. y 4:00 p.m. – 8:00 p.m.' },
      { dia: 'Enfermería – Sede Unisangil', horario: '8:00 a.m. – 12:00 p.m. y 4:00 p.m. – 8:00 p.m.' },
      { dia: 'Apoyos socioeconómicos', horario: '8:00 a.m. – 12:00 p.m. y 2:00 p.m. – 6:00 p.m.' },
      { dia: 'Líder de Bienestar al Aprendiz', horario: '7:30 a.m. – 12:00 p.m. y 2:00 p.m. – 6:00 p.m.' }
    ]"
    :telefonos="['+57 317 637 7670']"
    :encargado="{
      foto: '/public/images/perfil-bienestar.png',
      nombre: 'María Delia Arenas Mejía',
      cargo: 'Líder de Bienestar al Aprendiz',
      correo: 'mdarenas@sena.edu.com'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>
