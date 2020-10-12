<template>
  <div id="app">
    <Header></Header>

    <main>
      <Banner></Banner>
      <Demo></Demo>
      <Sample :title="javascriptObject.title" :subtitle="javascriptObject.subtitle" :sample="javascriptObject.sample"></Sample>
      <Ad></Ad>
      <Sample :title="denoObject.title" :subtitle="denoObject.subtitle" :sample="denoObject.sample"></Sample>
    </main>
  </div>
</template>

<script lang="ts">
  // Import Vue properties
  import { Component, Vue } from 'vue-property-decorator';
  
  // Import Vue components
  import Header from './components/Header.vue';
  import Banner from './components/Banner.vue';
  import Sample from './components/Sample.vue';
  import Demo from './components/Demo.vue';
  import Ad from './components/Ad.vue';

  // Import sample data
  import sampleData from './sample.json';

  @Component({
    components: {
      Header,
      Banner,
      Sample,
      Demo,
      Ad,
    }
  })
  export default class App extends Vue {
    get denoObject() {
      return sampleData.deno;
    }

    get javascriptObject() {
      return sampleData.javascript;
    }

    get readmeObject() {
      return sampleData.readme;
    }
  }
</script>

<style>
    @media (prefers-color-scheme: dark) {
        :root {
            --header-height: 80px;
            --header-background: inherit;
            --header-color: #fff;

            --app-background: #1f1f1f;
            --app-accent: #ffc83d;
            --app-color: #fff;

            --section-darker-background: #303030;

            --demo-io-background: #252525;
        }
    }

    @media (prefers-color-scheme: light) {
        :root {
            --header-height: 80px;
            --header-background: inherit;
            --header-color: #000;

            --app-background: #fff;
            --app-accent: #ffc83d;
            --app-color: #000;

            --section-darker-background: #f2f3f5;

            --demo-io-background: #fff;
        }
    }

    *, 
    *:before, 
    *:after {
        margin: 0; 
        padding: 0; 
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body {
        font-family: "Source Sans Pro", Arial, sans-serif;
        background: var(--app-background);
        color: var(--app-color);
    }

    a {
        color: inherit;
        display: inline-block;
    }

    img {
        display: block;
        width: 100%;
    }

    main > section {
        padding: 80px 0;
    }

    .container {
        display: flex;
        align-items: center;
        margin: 0 30px;
    }

    .darker {
        background: var(--section-darker-background);
    }

    @media screen and (max-width: 900px) {
        .container {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 700px) {
        html {
            font-size: 0.8rem;
        }
        .container {
            margin: 0 20px;
        }
    }
</style>
