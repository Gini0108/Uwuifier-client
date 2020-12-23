<template>
    <section class="demo darker">
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

<style lang="scss" scoped>
  .demo {
    display: flex;
    justify-content: center;
    
    .container {
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

      label {
        display: flex;
        position: relative;

        font-weight: 600;
        align-items: center;
        justify-content: center;

        &::before {
          width: 50px;
          height: 2px;
          bottom: 0;
          content: '';
          position: absolute;
          background: currentColor;
        }

        &:first-of-type {
          background: var(--demo-io-background);
        }

        &:last-of-type {
          color: #000;
          background: var(--app-accent);
        }
      }

     .textarea-container {
        position: relative;

        textarea {
          width: 100%;
          height: 100%;
          background-color: inherit;

          font-size: 1.2rem;
          line-height: 1.8rem;
          font-weight: 300;
          font-family: inherit;

          color: inherit;
          resize: none;
          border: none;
          outline: none;
          padding: 20px;
          background: none;
        }

        .twitter-button {
          color: white;
          display: flex;
          position: absolute;

          left: 20px;
          right: 20px;
          bottom: 20px;
          padding: 20px;

          font-size: 18px;
          box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.03);
          line-height: 1;
          font-weight: 300;
          font-family: inherit;
          border-radius: 5px;
          background-color: var(--section-darker-background);

          &:hover {
            cursor: pointer;
            background-color: #292929;
          }

          img {
            width: auto;
            height: 20px;

            margin-right: 10px;
            padding-right: 10px;

            border-style: solid;
            border-width: 0px 1px 0px 0px;
            border-color: rgba(255, 255, 255, 0.35);
          }
        }

        &:first-of-type {
          background: var(--demo-io-background);
        }

        &:last-of-type {
          color: #000;
          background: var(--app-accent);
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 40px 1fr 40px 1fr;

      .textarea-container:first-of-type {
        grid-area: 2;
      }
    }
  }
</style>