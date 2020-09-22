<template>
    <section id="demo" class="darker">
        <div class="container">
            <label for="input">Input</label>
            <label for="output">Output</label>
            <textarea id="input" spellcheck="false" v-model="inputValue"></textarea>
            <textarea id="output" spellcheck="false" readonly v-model="outputValue"></textarea>
        </div>
    </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Uwuifier } from 'uwuifier';

  const uwuifier = new Uwuifier();

  @Component
  export default class Demo extends Vue {
    private input = `Hey! This site can help you make any old boring text nice and uwu. We can't imagine anyone would actually use this, but you gotta do what you gotta do.`;

    get inputValue() {
      return this.input;
    }

    set inputValue(value) {
      this.input = value;
    }

    get outputValue() {
      return uwuifier.uwuifySentence(this.input);
    }
  }
</script>

<style scoped>
    #demo .container {
        display: grid;
        grid-template-columns: 4fr 5fr;
        grid-template-rows: 40px;
        align-items: stretch;
        justify-items: stretch;
        height: 500px;
        width: 1100px;
        box-shadow: 0 20px 25px 10px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border-radius: 6px;
        overflow: hidden;
    }

    #demo label {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
    }

    #demo label::before {
        content: '';
        width: 50px;
        height: 2px;
        background: currentColor;
        position: absolute;
        bottom: 0;
    }

    #demo label:first-of-type {
        background: var(--demo-io-background);
    }

    #demo label:last-of-type {
        background: var(--app-accent);
        color: #000;
    }

    #demo textarea {
        font-family: inherit;
        border: none;
        outline: none;
        resize: none;
        background: none;
        color: inherit;
        font-size: 1.2rem;
        line-height: 1.8rem;
        font-weight: 300;
        padding: 20px;
    }

    #demo textarea:first-of-type {
        background: var(--demo-io-background);
    }

    #demo textarea:last-of-type {
        background: var(--app-accent);
        color: #000;
    }

    @media screen and (max-width: 900px) {
        #demo .container {
            grid-template-columns: 1fr;
            grid-template-rows: 40px 1fr 40px 1fr;
        }

        #demo textarea:first-of-type {
            grid-area: 2;
        }
    }
</style>