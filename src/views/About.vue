<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Mi contador: {{ $store.state.contador }} </h2>
    <input type="text" v-model="texto">
    <h3>{{ texto }}</h3>
  </div>
</template>

<script>

export default {
  data() {
    return  {
      texto: ''
    }
  },
}
</script>
