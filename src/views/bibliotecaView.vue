<template>
  <ServiceCard
    title="Biblioteca"
    banner="/images/fachada-biblioteca.png"
    description="La biblioteca ofrece servicios de consulta y préstamo de material bibliográfico para la comunidad educativa del SENA.
Cuenta con consulta en sala, préstamo a domicilio y préstamo interbibliotecario (PIP).
También desarrolla talleres de lectura, capacitaciones y actividades de apoyo académico.
Brinda acceso a herramientas TIC y asesorías para la búsqueda y selección de información.
Además, orienta a los usuarios en el uso adecuado del catálogo bibliográfico y los recursos disponibles.
"
    :horarios="[
      { dia: 'Lunes a viernes', horario: '7:00 a.m. – 10:00 a.m.' }
    ]"
    :telefonos="['+57 312 584 8032']"
    :encargado="{
      foto: 'public/images/perfil-biblioteca.png',
      nombre: 'Yudith Milagros Martínez Bautista',
      cargo: 'Bibliotecaria',
      correo: 'ymmartinez@sena.edu.co'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>
