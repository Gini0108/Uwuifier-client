<template>
  <div id="app">
    <Logo></Logo>

    <div class="container">
      <Textarea class="child left" type="input" :value="input" @change="updateInput"></Textarea>
      <Textarea class="child right" type="output" :value="output"></Textarea>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import Textarea from './components/Textarea.vue'

import { Uwuifier } from './uwuifier/index';

export default {
  name: 'App',

  data: function () {
    return {
      input: `This site can help you make any old boring text nice and uwu? We can't imagen anyone would actually use this but you gotta do what you gotta do`
    }
  },

  computed: {
    output: function() {
      const uwuifier = new Uwuifier();
      return uwuifier.uwuifySentence(this.input);
    }
  },

  methods: {
    updateInput(input) {
      this.input = input;
    }
  },

  components: {
    Textarea,
    Logo
  }
}
</script>

<style>
  body, html, #app {
    height: 100%;
    margin: 0px;
  }

  #app {
    background-color: rgba(255, 203, 45, 1);
    height: 100%;
    color: #2c3e50;

    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    text-align: center;
  }

  .container {
    height: 50%;
    display: flex;
    justify-content: space-between;
  }

  .child {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column; 
  }

  .left {
    margin: 0 1.25% 0 2.5%;
  }

  .right {
    margin: 0 2.5% 0 1.25%;
  }
</style>

