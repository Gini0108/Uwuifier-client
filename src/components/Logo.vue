<template>
  <div class="logo">
    <h1>
      <span>🥺</span>
      <span class="left-finger">👉🏽</span>
      <span class="right-finger">👈🏽</span>
    </h1>
  </div>
</template>

<script lang="ts">
  import { Vue } from "vue-property-decorator";
  
  export default class Logo extends Vue {}
</script>

<style scoped>
  .logo {
    width: 100%;
    padding: 45px 0;

    display: flex;
    justify-content: center;
  }

  .right-finger {
    animation: right-finger 2s 0s infinite ease-in-out;
  }

  .left-finger {
    animation: left-finger 2s 0s infinite ease-in-out;
  }

  @keyframes right-finger {
    from {
      padding-left: 7.5px;
    }
    50% {
      padding-left: 25px;
    }
    to {
      padding-left: 7.5px;
    }
  }

  @keyframes left-finger {
    from {
      padding-right: 7.5px;
    }
    50% {
      padding-right: 25px;
    }
    to {
      padding-right: 7.5px;
    }
  }

  span {
    font-size: 3em;
    margin: 0px;
  }
</style>
