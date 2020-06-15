<template>
  <div class="textarea">
    <h2 class="title">
      <!-- Input written in emoji's -->
      <template v-if="isInput">
        <span>ℹ️</span>
        <div class="divider"></div>
        <span>♑</span>
        <div class="divider"></div>
        <span>🅿️</span>
        <div class="divider"></div>
        <span>⛎</span> 
        <div class="divider"></div>
        <span>✝️</span>
      </template>

      <!-- Input output written in emoji's -->
      <template v-else>
        <span class="first">🅾️</span>
        <div class="divider"></div>
        <span>⛎</span>
        <div class="divider"></div>
        <span>✝️</span>
        <div class="divider"></div>
        <span>🅿️</span>
        <div class="divider"></div>
        <span>⛎</span> 
        <div class="divider"></div>
        <span>✝️</span>
      </template>
    </h2>

    <div class="textarea-container">
      <textarea v-model="computedValue" :readonly="!isInput" @keydown="keyDown"></textarea>
      <div class="textarea-image" :class="{ shaking: typing }">{{ isInput ? '🤮' : '🥰' }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Textarea extends Vue {
    @Prop() private type!: string;
    @Prop() private value!: string;
    @Prop() private typing!: string;

    get isInput() {
      return this.type === `input`;
    }

    get computedValue() {
      return this.value;
    }

    set computedValue(value) {
      this.$emit(`change`, value);
    }

    keyDown() {
      this.$emit(`keydown`);
    }
  }
</script>

<style scoped>
  .divider {
    height: 100%;
    width: 7.5px;
  }

  span {
    font-size: 1.5em;
    line-height: 1;
  }

  .title {
    margin: 0px 0px 15px 0px;
    text-align: left;
    display: flex;
  }

  textarea {
    height: 100%;
    padding: 15px;
    background-color: transparent;
    
    border: 1px solid #cccccc;
    border-radius: 7.5px;

    font-size: 18px;
    font-family: inherit;
    font-weight: 200;
  }

  .textarea-container {
    height: 100%;
    border-radius: 7.5px;
    background-color: rgba(255, 232, 163, 1);

    overflow: hidden;
    position: relative;

    display: flex;
    flex-direction: column; 
  }

  .textarea-image {
    height: auto;
    position: absolute;

    opacity: 0.25;
    font-size: 10em;

    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    user-select: none;
    pointer-events: none;
  }

  .shaking {
    animation: shake 0.5s;
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    0% { transform: translate(calc(-50% + 1px), calc(-50% + 1px)) rotate(0deg); }
    10% { transform: translate(calc(-50% - 1px), calc(-50% - 2px)) rotate(-1deg); }
    20% { transform: translate(calc(-50% - 3px), calc(-50% + 0px)) rotate(1deg); }
    30% { transform: translate(calc(-50% + 3px), calc(-50% + 2px)) rotate(0deg); }
    40% { transform: translate(calc(-50% + 1px), calc(-50% - 1px)) rotate(1deg); }
    50% { transform: translate(calc(-50% - 1px), calc(-50% + 2px)) rotate(-1deg); }
    60% { transform: translate(calc(-50% - 3px), calc(-50% + 1px)) rotate(0deg); }
    70% { transform: translate(calc(-50% + 3px), calc(-50% - 1px)) rotate(-1deg); }
    80% { transform: translate(calc(-50% - 1px), calc(-50% + 1px)) rotate(1deg); }
    90% { transform: translate(calc(-50% + 1px), calc(-50% + 2px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + 1px), calc(-50% - 2px)) rotate(-1deg); }
  }
</style>
