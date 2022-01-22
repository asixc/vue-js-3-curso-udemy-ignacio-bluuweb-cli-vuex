<template>
  <button @click="accionDisminuirContador(20)" >Disminuir</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions(['accionDisminuirContador'])
    }
}
</script>

<style>

</style>