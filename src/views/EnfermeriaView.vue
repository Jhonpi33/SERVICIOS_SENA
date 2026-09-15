<template>
  <ServiceCard
    title="Enfermería y Atención Médica"
    banner="/images/fachada-enfermeria.jpg"
    description="La enfermería ofrece servicios de promoción y prevención de enfermedades para los aprendices del centro.
Brinda atención básica en primeros auxilios y orientación ante situaciones que puedan afectar su bienestar.
También realiza acompañamiento y seguimiento a las necesidades de salud de la comunidad educativa.
Su servicio está enfocado en apoyar el bienestar físico de los aprendices durante su formación.
Además, promueve hábitos saludables y acciones de prevención dentro de las instalaciones del SENA."

    :stats="[
      { label: 'Tiempo promedio', value: '5 – 10 min' },
      { label: 'Cobertura sede', value: '100% Gratuito' }
    ]"

    :hero-tags="[
      { texto: 'Consultorio certificado', icono: 'verified' }
    ]"
    :hero-caption="{
      eyebrow: 'Instalaciones de primer nivel',
      titulo: 'Espacio equipado para valoración rápida y bienestar'
    }"

    servicios-titulo="¿Qué servicios prestamos en la enfermería?"
    :servicios="[
      {
        icono: 'emergency',
        titulo: 'Primeros auxilios y urgencias',
        texto: 'Curaciones menores, curación de heridas superficiales, toma de signos vitales y estabilización primaria ante accidentes.',
    
      },
      {
        icono: 'medical_services',
        titulo: 'Valoración médica básica',
        texto: 'Orientación ante situaciones que puedan afectar el bienestar del aprendiz, con acompañamiento y seguimiento de salud.',
        
      },
      {
        icono: 'fact_check',
        titulo: 'Validación de incapacidades',
        texto: 'Orientación y acompañamiento en el trámite de justificación de fallas académicas por incapacidad médica ante Coordinación.',
        
      },
      {
        icono: 'campaign',
        titulo: 'Campañas de salud y prevención',
        texto: 'Jornadas periódicas de promoción de hábitos saludables y acciones de prevención de enfermedades en el centro.',
        
      }
    ]"



    :horarios="[
      { dia: 'Lunes a viernes', etiqueta: 'DOS JORNADAS', icono: 'wb_sunny', horario: 'Mañana: 6:30 a.m. – 10:30 a.m.' },
      { icono: 'nights_stay', horario: 'Tarde: 4:00 p.m. – 8:00 p.m.' }
    ]"
    :en-servicio="true"

    :telefonos="['+57 321 415 3995']"
    :ubicacion="{ titulo: 'Edificio A · Primer piso', detalle: 'Justo frente a la oficina de Bienestar al Aprendiz' }"

    :encargado="{
      foto: '/images/perfil-enfermeria.png',
      nombre: 'María Fernanda Gómez Reyes',
      cargo: 'Enfermera',
      credencial: 'Enfermera profesional titulada',
      correo: 'Mafecita1118@gmail.com',
      estado: 'En consultorio'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>