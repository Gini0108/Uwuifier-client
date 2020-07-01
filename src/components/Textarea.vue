<template>
    <textarea v-model="computedValue" spellcheck="false"></textarea>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Textarea extends Vue {
    @Prop() private value!: string;

    get computedValue() {
      return this.value;
    }

    set computedValue(value) {
      this.$emit(`change`, value);
    }
  }
</script>
