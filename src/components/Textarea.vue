<template>
    <textarea v-model="computedValue" :readonly="!isInput" spellcheck="false" @keydown="keyDown"></textarea>
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
