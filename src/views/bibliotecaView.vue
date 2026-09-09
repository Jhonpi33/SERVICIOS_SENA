<template>
  <ServiceCard
    title="Biblioteca"
    banner="/images/fachada-biblioteca.png"
    description="La biblioteca ofrece consulta en sala, préstamo a domicilio, préstamo interbibliotecario (PIP), talleres de lectura, capacitaciones, acceso a TIC, asesorías en búsqueda de información y orientación en el uso adecuado del catálogo bibliográfico."
    :horarios="[
      { dia: 'Lunes a viernes', horario: '7:00 a.m. – 10:00 a.m.' }
    ]"
    :telefonos="['+57 312 584 8032']"
    :encargado="{
      foto: 'https://ui-avatars.com/api/?name=Yudith+Milagros+Martinez&background=39A900&color=fff&size=256',
      nombre: 'Yudith Milagros Martínez Bautista',
      cargo: 'Bibliotecaria',
      correo: 'ymmartinez@sena.edu.co'
    }"
  />
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>
