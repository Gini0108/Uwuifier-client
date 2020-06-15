<template>
  <div id="app">
    <Logo></Logo>

    <div class="container">
      <Textarea class="child" type="input" :value="input" :typing="typing" @change="updateInput" @keydown="keyDown"></Textarea>
      <div class="spacer"></div>
      <Textarea class="child" type="output" :value="output" :typing="typing"></Textarea>
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
    private input = `Hey! This site can help you make any old boring text nice and uwu? We can't imagen anyone would actually use this but you gotta do what you gotta do`;
    private typing = false;

    get output() {
      const uwuifier = new Uwuifier();
      return uwuifier.uwuifySentence(this.input);
    }

    updateInput(value: string) {
      this.input = value;
    }

    keyDown() {
      // Start shaking animation by passing boolean down to children
      this.typing = true;

      // Cancel the animation after 100 milliseconds
      setTimeout(() => {
        this.typing = false;
      }, 100);
    }
  }
</script>

<style>
  body, html, #app {
    height: 100%;
    margin: 0px;
  }

  #app {
    color: #2c3e50;
    height: 100%;
    text-align: center;
    background-color: rgba(255, 203, 45, 1);

    font-weight: 400;
    font-family: 'Quicksand', sans-serif;

    display: flex;
    flex-flow: column;
  }

  .container {
    padding: 0 5% 5% 5%;
    height: 100%;

    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
  }

  .child {
    width: 100%;
    height: 47.5%;

    display: flex;
    flex-direction: column; 
  }

  .spacer {
    width: 100%;
    height: 5%;
  }

  @media only screen and (min-width: 768px) {
    .container {
      padding: 0 2.5% 2.5% 2.5%;
      flex-direction: row;
    }

    .spacer {
      width: 2.5%;
      height: 100%;
    }

    .child {
      height: 100%;
      width: 48.75%;
    }
  }
</style>
