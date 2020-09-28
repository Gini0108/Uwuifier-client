<template>
  <section id="sample">
    <carousel :per-page="1" :mouse-drag="false">
      <slide>
        <vue-code-highlight language="javascript">
          <pre>
  // Import the Uwuifier package
  import { Uwuifier } from 'https://deno.land/x/uwuifier/src/index.ts';

  // Create a "Uwuifier" instance
  const uwuifier = new Uwuifier();

  // Uwuifiy a sentence
  console.log(uwuifier.uwuifySentence('This package is amazing!'));
          </pre>
        </vue-code-highlight>
      </slide>
      <slide>
        <vue-code-highlight language="javascript">
          <pre>
  // Import the Uwuifier package
  import { Uwuifier } from 'Uwuifier';

  // Create a "Uwuifier" instance
  const uwuifier = new Uwuifier();

  // Uwuifiy a sentence
  console.log(uwuifier.uwuifySentence('This package is amazing!'));
          </pre>
        </vue-code-highlight>
      </slide>
    </carousel>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
import { component as VueCodeHighlight } from 'vue-code-highlight';
 
 import { Carousel, Slide } from 'vue-carousel';

  import "vue-code-highlight/themes/prism.css";
  import "vue-code-highlight/themes/window.css";

  @Component({
    components: {
      VueCodeHighlight,
      Carousel,
      Slide,
    }
  })
  export default class Sample extends Vue { }
</script>

<style>
  #sample {
    background: var(--header-background);
  }
</style>