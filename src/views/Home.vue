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
import { Options, Vue } from "vue-class-component";

// Import Vue components
import HeaderComponent from "../components/Header.vue";
import BannerComponent from "../components/Banner.vue";
import DemoComponent from "../components/Demo.vue";

@Options({
  components: {
    HeaderComponent,
    BannerComponent,
    DemoComponent,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
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
