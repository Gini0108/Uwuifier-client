<template>
  <section class="demo darker">
    <div class="container">
      <label for="input">Input</label>
      <label for="output">Output</label>

      <div class="textarea-container">
        <textarea id="input" @click="clearInput" spellcheck="false" v-model="inputValue"></textarea>
      </div>

      <div class="textarea-container">
        <textarea
          id="output"
          spellcheck="false"
          readonly
          v-model="outputValue"
        ></textarea>
        <a
          :href="twitterUrl"
          class="twitter-button"
          title="Share this text on Twitter"
          aria-label="Twitter"
          rel="noopener"
          target="_blank"
        >
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 00325 122.47a102.38 102.38 0 01-29.46 8.07 51.47 51.47 0 0022.55-28.37 102.79 102.79 0 01-32.57 12.45 51.34 51.34 0 00-87.41 46.78A145.62 145.62 0 0192.4 107.81a51.33 51.33 0 0015.88 68.47A50.91 50.91 0 0185 169.86v.65a51.31 51.31 0 0041.15 50.28 51.21 51.21 0 01-23.16.88 51.35 51.35 0 0047.92 35.62 102.92 102.92 0 01-63.7 22 104.41 104.41 0 01-12.21-.74 145.21 145.21 0 0078.62 23"
              fill="var(--app-color)"
            />
          </svg>
          <span class="divider"> | </span>
          <span class="label"> Share on Twitter </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

import Uwuifier from "uwuifier";

const uwuifier = new Uwuifier();

export default class Demo extends Vue {
  private changed = false;
  private timeout = 0;
  private input = `Hey! This site can help you make any old boring text nice and uwu. We can't imagine anyone would actually use this, but you gotta do what you gotta do.`;

  get inputValue(): string {
    return this.input;
  }

  set inputValue(value: string) {
    this.input = value;
  }

  get outputValue(): string {
    if (this.changed) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.addHistory, 1000);
    }

    return uwuifier.uwuifySentence(this.input);
  }

  get twitterUrl(): string {
    return `https://twitter.com/intent/tweet?text=${this.outputValue}&url=https://uwuifier.com`;
  }

  clearInput(): void {
    if (!this.changed) {
      this.input = ``;
      this.changed = true;
    }
  }

  addHistory(): void {
    const body = JSON.stringify({ origin: "website" });
    const method = "POST";
    const headers = { "Content-Type": "application/json" };

    fetch("https://api.uwuifier.com/v1/history", { method, body, headers });
  }
}
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  justify-content: center;

  .container {
    box-shadow: 0 20px 25px 10px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    align-items: stretch;
    border-radius: 6px;
    justify-items: stretch;

    display: grid;
    grid-template-rows: 40px;
    grid-template-columns: 4fr 5fr;

    width: 100%;
    height: 500px;
    overflow: hidden;

    label {
      display: flex;
      position: relative;

      font-size: 0.85rem;
      font-weight: 600;
      align-items: center;
      justify-content: center;

      &::before {
        width: 50px;
        height: 2px;
        bottom: 0;
        content: "";
        position: absolute;
        background: currentColor;
      }

      &:first-of-type {
        background: var(--section-normal-background);
      }

      &:last-of-type {
        color: #000;
        background: var(--app-normal-accent);
      }
    }

    .textarea-container {
      display: flex;
      position: relative;
      flex-direction: column;

      textarea {
        width: 100%;
        height: 100%;
        background-color: inherit;

        font-size: 1.15rem;
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
        position: relative;
        margin: 0px 20px 20px 20px;

        font-size: 1.15rem;
        box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.03);
        line-height: 1;
        font-weight: 300;
        font-family: inherit;
        border-radius: 5px;
        background-color: var(--button-normal-color);

        &:hover {
          cursor: pointer;
          background-color: var(--button-hover-color);
        }

        svg {
          width: auto;
          height: 30px;
          margin: 12px 0px 12px 14px;
        }

        span {
          color: var(--app-color);
          margin: 25px 0px;
          line-height: 0;
        }

        .divider {
          opacity: 0.45;
          padding: 0px 11px 0px 6px;
        }

        .label {
          padding: 1px 0px 0px 0px;
        }
      }

      &:first-of-type {
        background: var(--section-normal-background);
      }

      &:last-of-type {
        color: #000;
        background: var(--app-normal-accent);
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .demo {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: 40px 0.85fr 40px 1fr;

      .textarea-container:first-of-type {
        grid-area: 2;
      }
    }
  }
}
</style>
