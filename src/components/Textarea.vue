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
      <textarea v-model="computedValue" :readonly="!isInput"></textarea>
      <div class="textarea-image">{{ isInput ? '🤮' : '🥰' }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Textarea extends Vue {
    @Prop() private type!: string;
    @Prop() private value!: string;

    get isInput() {
      return this.type === `input`;
    }

    get computedValue() {
      return this.value;
    }

    set computedValue(value) {
      this.$emit(`change`, value);
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
</style>
