<template>
  <div class="logo">
    <h1>
      <span class="face">🥺</span>
      <div class="fingers">
        <span class="left" v-html="left"><span></span></span>
        <span class="right" v-html="right"></span>
      </div>
    </h1>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Logo extends Vue {
    private left = `&#128073;`;
    private right = `&#128072;`;

    mounted() {
      const colors = [`&#127999;`, `&#127998;`, `&#127997;`, `&#127996;`, `&#127995;`];
      const color = colors[Math.floor(Math.random() * colors.length)];

      this.left = this.left + color;
      this.right = this.right + color;
    }
  }
</script>

<style scoped>
  h1 {
    z-index: 0;
    position: relative;
  }

  .logo {
    width: 100%;
    padding: 25px 0;

    display: flex;
    justify-content: center;
  }

  .left {
    animation: left-finger 2s 0s infinite ease-in-out;
  }

  .right {
    animation: right-finger 2s 0s infinite ease-in-out;
  }

  .fingers {
    padding-top: 50px;
  }

  .face {
    z-index: -1;
    position: absolute;

    left: 50%;
    transform: translate(-50%, 0);
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
  }
</style>
