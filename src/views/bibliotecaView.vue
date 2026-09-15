<template>
  <ServiceCard
    title="Biblioteca"
    banner="/images/fachada-biblioteca.png"
    description="La biblioteca ofrece servicios de consulta y préstamo de material bibliográfico para la comunidad educativa del SENA.
Cuenta con consulta en sala, préstamo a domicilio y préstamo interbibliotecario (PIP).
También desarrolla talleres de lectura, capacitaciones y actividades de apoyo académico.
Brinda acceso a herramientas TIC y asesorías para la búsqueda y selección de información.
Además, orienta a los usuarios en el uso adecuado del catálogo bibliográfico y los recursos disponibles."

    :stats="[
      { label: 'Tiempo promedio', value: '5 – 10 min' },
      { label: 'Cobertura sede', value: '100% Gratuito' }
    ]"

    :hero-tags="[
      { texto: 'Acceso a TIC', icono: 'devices' }
    ]"
    :hero-caption="{
      eyebrow: 'Sala de Consulta',
      titulo: 'Espacio de consulta, préstamo y apoyo académico'
    }"

    servicios-titulo="¿Qué servicios presta la Biblioteca?"
    :servicios="[
      {
        icono: 'menu_book',
        titulo: 'Consulta en sala',
        texto: 'Consulta de material bibliográfico dentro de las instalaciones de la biblioteca.',
      },
      {
        icono: 'local_shipping',
        titulo: 'Préstamo a domicilio y PIP',
        texto: 'Préstamo de libros para consulta externa y gestión de préstamo interbibliotecario con otras sedes.',
      },
      {
        icono: 'school',
        titulo: 'Talleres y capacitaciones',
        texto: 'Desarrollo de talleres de lectura, capacitaciones y actividades de apoyo académico.',
      },
      {
        icono: 'devices',
        titulo: 'Acceso a herramientas TIC',
        texto: 'Acceso a equipos y herramientas TIC, con asesoría para la búsqueda y selección de información.',
      }
    ]"


    :horarios="[
      { dia: 'Lunes a viernes', horario: '7:00 a.m. – 10:00 a.m.' }
    ]"
    :en-servicio="true"

    :telefonos="['+57 312 584 8032']"
    :ubicacion="{ titulo: 'Sala de Biblioteca', detalle: 'Bloque académico' }"

    :encargado="{
      foto: '/images/perfil-biblioteca.png',
      nombre: 'Yudith Milagros Martínez Bautista',
      cargo: 'Bibliotecaria',
      correo: 'ymmartinez@sena.edu.co',
      estado: 'En sala'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>