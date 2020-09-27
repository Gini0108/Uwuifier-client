<template>
  <section id="sample">
    <carousel :per-page="1" :mouse-drag="false">
      <slide>
        <vue-code-highlight language="javascript" class="center">
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
        <vue-code-highlight language="javascript" class="center">
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
  .center {
    display: flex;;
    align-items: center;
    justify-content: center;
  }

  section {
    background: var(--header-background);
  }

  pre { 
    grid-template-columns: 4fr 5fr;
    display: grid;

    margin: 30px;
    width: 1100px;
  }
</style>