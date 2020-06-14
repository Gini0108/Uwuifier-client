<template>
  <div id="app">
    <Logo></Logo>

    <div class="container">
      <Textarea class="child left" type="input" :value="input" @change="updateInput"></Textarea>
      <Textarea class="child right" type="output" :value="output"></Textarea>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Textarea from './components/Textarea.vue';
import Logo from './components/Logo.vue';

import { Uwuifier } from './uwuifier/index';

@Component({
  components: {
    Textarea,
    Logo
  }
})

export default class App extends Vue {
  private input = `This site can help you make any old boring text nice and uwu? We can't imagen anyone would actually use this but you gotta do what you gotta do`;

  get output() {
    const uwuifier = new Uwuifier();
    return uwuifier.uwuifySentence(this.input);
  }

  updateInput(value: string) {
    console.log("a");
    this.input = value;
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
