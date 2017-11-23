<template>
  <div id="app">
    <message>Hello World</message>

    <counter>Yarrr</counter>
  </div>
</template>

<script>
import Message from './components/Message.vue';
import Counter from './components/Counter.vue';

export default {
  name: 'app',

  components: { Message, Counter },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
