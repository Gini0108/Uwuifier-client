<template>
    <section id="ad" class="darker">
        <div class="container">
            <div id="637711063">
            </div>
        </div>
    </section>
</template>

<script lang="ts">
  declare global {
    interface Window {
      // eslint-disable-next-line
      _mNHandle: any;
      // eslint-disable-next-line
      _mNDetails: any;
    }
  }

  import { Vue } from 'vue-property-decorator';

  export default class Ad extends Vue {
    mounted() {
      window._mNHandle.queue.push(function() {
        console.log('bruh');
        setTimeout(() => {
        window._mNDetails.loadTag("637711063", "728x90", "637711063");
        }, 1500);
      });
    }
  }
</script>

<style scoped>

</style>