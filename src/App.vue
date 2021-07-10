<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>

    <main>
      <BannerComponent></BannerComponent>
      <DemoComponent></DemoComponent>
    </main>
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  
  // Import Vue components
  import HeaderComponent from './components/Header.vue';
  import BannerComponent from './components/Banner.vue';
  import DemoComponent from './components/Demo.vue';

  @Options({
    components: {
      HeaderComponent,
      BannerComponent,
      DemoComponent,
    },
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  :root {
    --app-normal-accent: #ffc83d;
    --app-hover-accent: #ffc83dcc
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --header-background: inherit;
      --header-height: 80px;
      --header-color: #fff;

      --app-background: #1f1f1f;
      --app-color: #fff;

      --button-normal-color: #303030;
      --button-hover-color: #252525;

      --section-darker-background: #303030;
      --section-normal-background: #252525;
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --header-background: inherit;
      --header-height: 80px;
      --header-color: #000;

      --app-background: #fff;
      --app-color: #000;

      --button-normal-color: #fff;
      --button-hover-color: #f2f3f5;
      
      --section-darker-background: #f2f3f5;
      --section-normal-background: #fff;
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
    font-family: Segoe UI, system-ui, -apple-system, sans-serif;
    background: var(--app-background);
    color: var(--app-color);
  }

  span {
    display: block;
  }

  a {
    color: inherit;
    display: inline-block;
  }

  b {
    font-weight: 600;
  }

  img {
    display: block;
    width: 100%;
  }

  main > section {
    padding: 80px 0;
  }

  .container {
    max-width: 1128px;
    margin: 0 30px;
    display: flex;
    align-items: center;
  }

  .darker {
    background: var(--section-darker-background);
  }

  @media screen and (max-width: 700px) {
    html {
      font-size: 0.85rem;
    }

    .container {
      margin: 0 20px;
    }
  }
</style>
