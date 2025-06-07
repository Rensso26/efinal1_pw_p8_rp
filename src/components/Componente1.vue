<template>
  <div class="container">
    <h1>Puntaje: {{puntaje}}</h1>
    <h1>Intentos: {{intentos}}</h1>
    <div class="componente-1">
      <Componente1_1 />
      <Componente1_1 />
      <Componente1_1 />
    </div>
  </div>

  <!-- <Componente1_2 /> -->
  <button v-on="jugar()">JUGAR</button>
</template>

<script>
import Componente1_1 from "../components/Componente1_1.vue";
import Componente1_2 from "@/components/Componente1_2.vue";
import { consumirarregloPokemonsFachada } from "@/inter/pokemon";
export default {
  data(){
    return {
        intentos: 0,
        puntaje: 0,
    }
    },
  components: {
    Componente1_1,
    // Componente1_2,
  },
  methods: {
    validarPokemones() {
      pokemones = consumirarregloPokemonsFachada();
      if (pokemones[1] === pokemones[2] && pokemones[2] === pokemones[3]) {
        this.puntaje += 5;
      }else if(pokemones[1] === pokemones[2] || pokemones[2] === pokemones[3]){
        this.puntaje += 2;
      }
    },
    jugar() {
     this.intentos++;
    },
  },
  
};
</script>

<style>
</style>