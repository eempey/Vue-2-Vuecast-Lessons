<template>
  <div id="app">
    <message>Hello There</message>

    <message>Hello There Again</message>
  </div>
</template>

<script>
import Message from './components/message.vue';

export default {
  name: 'app',

  components: { Message },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
