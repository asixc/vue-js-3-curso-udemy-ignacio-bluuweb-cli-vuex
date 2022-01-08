<template>
  <div class="home">
    <!-- <h1>Mi contador: {{ $store.state.contador }}</h1> -->

    <!-- tener condicionales dentro de los tag es incorrecto por lo tanto lo movemos a computed: 
    <h1
      :style="[contador >100 ? {'color':'green'} : {'color':'red'}]" 
    >Mi contador: {{ contador }}</h1>
    </div>
     -->

  
    <h1
      :style="colotContador" 
    >{{ titulo }} {{ contador }}</h1>
    <button @click="accionIncrementarContador">Aumentar contador</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      titulo: 'Mi contador Vuex:'
    }
  },
  components: {

  },
  computed: {
    ...mapState(['contador']),
    colotContador() {
      return [this.contador >100 ? {'color':'green'} : {'color':'red'}]
    }
  },
  methods: {
    ...mapMutations(['incrementar']), //No se recomienda traer las mutaciones ya que su función es modificar el estado para eso usar las acciones con evento commit
    ...mapActions(['accionIncrementarContador'])
  }
  
}
</script>
