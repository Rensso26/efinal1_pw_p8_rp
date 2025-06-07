<template>
  <div class="container" :v-model="turno===5">
    <h1 :v-if="!gano">
      Ha utilizado tus 5 intentos El juego a terminado, inténtelo otra vez
    </h1>

    <h1 :v-if="gano">Puntaje: # Felicitaciones has ganado un premio de $10.000,00</h1>
  </div>
</template>

<script>
export default {

  data() {
    
    return puntaje;
  },
  components :{
    puntaje: 0,
    gano: false,
    
  },
  methods:{
    gano(){
        if(puntaje>=10){
            this.gano = true;
        }
    }
  }
};
</script>

<style>
</style>