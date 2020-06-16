<template>
  <div id="app">
    <Header></Header>

    <main>
        <Banner></Banner>
        <Demo></Demo>
    </main>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  
  import Header from './components/Header.vue';
  import Banner from './components/Banner.vue';
  import Demo from './components/Demo.vue';

  @Component({
    components: {
      Header,
      Banner,
      Demo,
    }
  })
  export default class App extends Vue {
    
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

            --section-darker-background: rgb(48, 48, 48);

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

    img,
    span {
        display: block;
    }

    a {
        color: inherit;
        display: inline-block;
    }

    img {
        width: 100%;
    }

    section {
        padding: 80px 0;
        display: flex;
        justify-content: center;
    }

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    textarea {
        font-family: inherit;
        border: none;
        outline: none;
        resize: none;
        background: none;
        color: inherit;
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.8rem;
        flex: 1;
        margin: 0;
        padding: 20px;
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
