<template>
    <section id="demo" class="darker">
        <div class="container">
            <label for="input">Input</label>
            <label for="output">Output</label>

            <div class="textarea-container">
              <textarea id="input" spellcheck="false" v-model="inputValue"></textarea>
            </div>

            <div class="textarea-container">
              <textarea id="output" spellcheck="false" readonly v-model="outputValue"></textarea>
              <a :href="twitterUrl" class="twitter-button">
                <img src="https://img.icons8.com/android/2x/ffffff/twitter.png">Share on Twitter</a>
            </div>
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

    get twitterUrl() {
      return `https://twitter.com/intent/tweet?text=${this.outputValue}&url=https://uwuifier.com`;
    }
  }
</script>

<style scoped>
    #demo {
        display: flex;
        justify-content: center;
    }
    
    #demo .container {
        box-shadow: 0 20px 25px 10px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        align-items: stretch;
        border-radius: 6px;
        justify-items: stretch;

        display: grid;
        grid-template-rows: 40px;
        grid-template-columns: 4fr 5fr;

        width: 1100px;
        height: 500px;
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

    #demo label:first-of-type { background: var(--demo-io-background); }
    #demo label:last-of-type {
        background: var(--app-accent);
        color: #000;
    }

    #demo textarea {
        width: 100%;
        height: 100%;
        background-color: inherit;

        font-family: inherit;
        font-size: 1.2rem;
        line-height: 1.8rem;
        font-weight: 300;

        background: none;
        padding: 20px;
        outline: none;
        border: none;
        resize: none;
        color: inherit;
    }

    #demo .textarea-container {
        position: relative;
    }

    #demo .textarea-container .twitter-button {
        color: white;
        display: flex;
        position: absolute;

        left: 20px;
        right: 20px;
        bottom: 20px;
        padding: 20px;

        box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.03);
        font-family: inherit;
        font-weight: 300;
        line-height: 1;
        font-size: 18px;
        border-radius: 5px;
        background-color: var(--section-darker-background);
    }

    #demo .textarea-container .twitter-button:hover {
        background-color: #292929;
        cursor: pointer;
    }

    .twitter-button img {
        width: auto;
        height: 20px;

        padding-right: 10px;
        margin-right: 10px;

        border-color: rgba(255, 255, 255, 0.35);
        border-width: 0px 1px 0px 0px;
        border-style: solid;
    }

    #demo .textarea-container:first-of-type { background: var(--demo-io-background); }
    #demo .textarea-container:last-of-type {
        background: var(--app-accent);
        color: #000;
    }

    @media screen and (max-width: 900px) {
        #demo .container {
            grid-template-columns: 1fr;
            grid-template-rows: 40px 1fr 40px 1fr;
        }

        #demo .textarea-container:first-of-type {
            grid-area: 2;
        }
    }
</style>