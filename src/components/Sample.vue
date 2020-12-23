<template>
  <section id="javascript">
    <div class="container">
      <span class="title">
        <span class="main">{{ sample.title }}</span>
        <span class="small">{{ sample.subtitle }}</span>
      </span>
      <vue-code-highlight language="javascript">
        <pre>{{ sample.sample }}</pre>
      </vue-code-highlight>
    </div>
  </section>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { component as VueCodeHighlight } from 'vue-code-highlight';

  import "vue-code-highlight/themes/prism.css";
  import "vue-code-highlight/themes/window.css";

  // Import interfaces
  import SampleInterface from '../interface/Sample'

  @Component({
    components: {
      VueCodeHighlight,
    }
  })
  export default class JavaScript extends Vue { 
    @Prop() sample!: SampleInterface;
  }
</script>

<style>
  #javascript .title {
    opacity: 0.85;
    font-size: 2rem;
    align-self: baseline;
    font-weight: 300;
    margin-bottom: 15px;
  }

  #javascript .small {
    opacity: 0.75;
    font-size: 1.4rem;
    margin-left: 5px;
  }
  
  #javascript {
    display: flex;
    justify-content: center;
  }
  
  #javascript .container {
    width: 1100px;
    display: flex;

    box-shadow: 0 20px 25px 10px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    flex-direction: column;
  }

  #javascript .container div, 
  #javascript .container pre {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    #javascript .container {
        width: 100%;
        padding: 0px 20px;
    }
  }
</style>