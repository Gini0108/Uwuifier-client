<template>
    <section id="readme">
        <div class="container">
            <h2>About</h2>
            <p>This lightweight package allows you to uwuify any sentence or word (excluding URL's) with many configurable parameters while giving access to many vewy kawaii sentences and faces!</p>
            <p>This package uses a seeded random generator to ensure all results will be the same, this package also analyses the casing of every sentence to ensure letter casing will still look correct even when the string is uwuified. If you've got any more suggestions on how to improve this package, please create an issue on our <a href="https://github.com/Schotsl/Uwuifier">GitHub</a> page!</p>
            <div class="line"></div>

            <h2>Constructor</h2>
            <p>If you don't provide the Uwuifier constructor with an object it will use the default values. Below we've included an example of what a valid constructor object with the default values would look like while elaborating on it. We recommend taking a look at the <a href="https://github.com/Schotsl/Uwuifier#functions">functions</a> section of our documentation, since there is a function for every object property that is passed into the constructor:</p>
            <div class="spacer"></div>

            <vue-code-highlight language="javascript">
              <pre>{{ sample }}</pre>
            </vue-code-highlight>

            <div class="spacer"></div>
            <h3>spaces</h3>
            <p>The <code>spaces</code> property is the most advanced property, at every space we can either: add an action to the string <b>*notices buldge*</b>, add a s-s-stutter to the start of the word, or we can add a face UwU. This means that the combined value of all the three children properties must be equal or below 1. It should be noted that the default actions, faces, and exclamations can be modified by accessing and changing the public properties <code>actions</code>, <code>faces</code>, and <code>exclamations</code>.</p>
            
            <div class="spacer"></div>
            <h3>words</h3>
            <p>The <code>words</code> property affects what percentage of Regex matches get uwuified, the default value is 1 which means that every character that matches the Regex gets replaced. To gain a deeper understanding of what this Regex does please take a look at the <code>uwuifyWords</code> function in the documentation.</p>
            
            <div class="spacer"></div>
            <h3>exclamations</h3>
            <p>The <code>exclamations</code> property determines what percentage of exclamations get replaced with a more 'expressive' exclamation from our internal array. It should be noted that the default actions, faces, and exclamations can be modified by accessing and changing the public properties <code>actions</code>, <code>faces</code>, and <code>exclamations</code>.</p>
            <div class="line"></div>

            <h2>Functions</h2>
            <p><b>Warning</b>: All functions besides the default <code>uwuifySentence</code> function function might mangle a URL if it includes exclamations, spaces, or certain characters. It should also be noted that every function in this package could mangle other data such as phone-numbers, names, addresses, or any other credentials.</p>
        
            <div class="spacer"></div>
            <h3><code>uwuifySentence(string)</code></h3>
            <p>The <code>uwuifySentence</code> function combines all three other functions (<code>uwuifyWords</code>, <code>uwuifySpaces</code> and <code>uwuifyExclamations</code>) into one, it also filters out any URL's. This is also why it's the easiest function to quickly get you started on your weeaboo journey.</p>

            <div class="spacer"></div>
            <h3><code>uwuifyWords(string)</code></h3>
            <p>The <code>uwuifyWords</code> function only runs a Regex on certain characters, by lowering the <code>wordsModifier</code> value from the default 1 only a certain percentage of characters will be modified, a value of 0.9 causes only 90% of matching characters to be modified.</p>

            <div class="spacer"></div>
            <h3><code>uwuifySpaces(string)</code></h3>
            <p>The <code>uwuifyWords</code> function does most of the work! It adds random <i>s-s-stutters</i> to certain words, adds <b>*notices buldge*</b> actions in between words, and adds random faces in between words UwU. It should be noted that the default actions, faces, and exclamations can be modified by accessing and changing the public properties <code>actions</code>, <code>faces</code>, and <code>exclamations</code>.</p>

            <div class="spacer"></div>
            <h3><code>uwuifyExclamations(string)</code></h3>
            <p>The <code>uwuifyExclamations</code> function only replaces exclamations with more 'expressive' exclamations. It should be noted that the default <code>actions</code>, <code>faces</code>, and <code>exclamations</code> can be modified by accessing and changing the public properties <code>actions</code>, <code>faces</code>, and <code>exclamations</code>.</p>
            
            <div class="line"></div>
            <h2>Special thanks</h2>
            <p>I was inspired to write this god awful package by <a href="https://honk.moe/tools/owo.html">this</a> site, I would've given full credit but it appears he got most of the Regex from the OwO Google Chrome extension made by leafysweetsgarden, I would include a link but the page is offline. So short story short: I'd like to give a big thanks to leafysweetsgarden for the Regex and the inspiration!</p>
        </div>
    </section>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { component as VueCodeHighlight } from 'vue-code-highlight';

  import "vue-code-highlight/themes/prism.css";
  import "vue-code-highlight/themes/window.css";

  @Component({
    components: {
      VueCodeHighlight,
    }
  })
  export default class Readme extends Vue {
    @Prop() sample!: string;
  }
</script>

<style scoped>
  h1, h2, h3, h4, p { font-weight: 100; }
  h2 { font-size: 36px; }
  h3 { font-size: 26px; }

  #readme {
    display: flex;
    justify-content: center;
  }

  #readme .container {
    width: 1100px;
    display: grid;
    align-items: stretch;
    grid-template-columns: 9fr;
  }

  .line {
    height: 1px;
    display: block;

    margin: 2.5em 0;
    border-top: 1px solid rgb(204, 204, 204, .05);
  }

  .spacer {
    height: 15px;
  }

  p {
    padding: 10px 0px;
    font-size: 22px;
  }

  a {
    color: rgba(200, 200, 155, 0.45);
    text-decoration: underline;
  }

  code {
    padding: 2px 4px;
    background-color: rgba(255, 255, 255, 0.15);
  }
</style>