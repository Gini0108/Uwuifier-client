<template>
    <section id="demo" class="darker">
        <div class="container">
            <div class="input">
                <div class="legend">
                    <span>Input</span>
                </div>
                <Textarea type="input" :value="input" @change="updateInput"></Textarea>
            </div>
            <div class="output">
                <div class="legend">
                    <span>Output</span>
                </div>
                <Textarea type="output" :value="output"></Textarea>
                <button>♻</button>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Uwuifier } from '../uwuifier/index';
  
  import Textarea from './Textarea.vue';

  const uwuifier = new Uwuifier();

  @Component({
    components: {
      Textarea
    }
  })
  export default class Demo extends Vue {
    private input = `Hey! This site can help you make any old boring text nice and uwu? We can't imagen anyone would actually use this but you gotta do what you gotta do.`;

    get output() {
      return uwuifier.uwuifySentence(this.input);
    }

    updateInput(value: string) {
      this.input = value;
    }
  }
</script>

<style scoped>
    #demo .container {
        position: relative;
        height: 500px;
        width: 1100px;
        box-shadow: 0 20px 25px 10px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border-radius: 6px;
        overflow: hidden;
    }

    #demo .input,
    #demo .output {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100%;
        width: 100%;
    }

    #demo .input {
        flex: 4;
    }

    #demo .output {
        flex: 5;
    }

    #demo .input textarea {
        background: var(--demo-io-background);
    }

    #demo .output textarea {
        background: var(--app-accent);
        color: #000;
    }

    #demo .legend {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--demo-io-background);
        font-weight: 600;
        height: 40px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    @media screen and (min-width: 901px) {
        #demo .input .legend::before {
            content: '↔';
            position: absolute;
            background: inherit;
            top: 0;
            right: -10px;
            font-size: 1.2rem;
            height: 100%;
            width: 20px;
            display: flex;
            align-items: center;
            z-index: 1;
        }
    }

    #demo .output button {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 20px;
        width: 40px;
        height: 40px;
        font-size: 1.4rem;
        color: #3a3a3a;
        border-radius: 50%;
        transition: background 0.25s ease;
    }

    #demo .output button:hover {
        background: rgba(0, 0, 0, 0.15);
    }
</style>