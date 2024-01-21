<script setup>
  import { useFirestore } from "vuefire";
import home from "./components/home.vue"

  let db = useFirestore();


</script>

<template>
  
  <link rel="stylesheet" href="../css/style.css">


  <nav class="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/about">Iniciar sesión</router-link>
  </nav>
  

  <router-view></router-view>

  
</template>
