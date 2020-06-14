<template>
  <div class="textarea">
    <h2 class="title">
      <!-- Input written in emoji's -->
      <template v-if="isInput">
        <span class="first">ℹ️</span>
        <span>♑</span>
        <span>🅿️</span>
        <span class="upside-down">♎</span> 
        <span>✝️</span>
      </template>

      <!-- Input output written in emoji's -->
      <template v-else>
        <span class="first">🅾️</span>
        <span class="upside-down">♎</span>
        <span>✝️</span>
        <span>🅿️</span>
        <span class="upside-down">♎</span> 
        <span>✝️</span>
      </template>
    </h2>

    <div class="textarea-container">
      <textarea v-model="computedValue" :readonly="!isInput"></textarea>
      <div class="textarea-image">{{ isInput ? '🤮' : '🥰' }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: `Textarea`,

    props: {
      type: String,
      value: String
    },

    computed: {
      isInput: {
        get: function() {
          return this.type === `input`;
        }
      },

      computedValue: {
        get: function () {
          return this.value;
        },

        set: function (value) {
          this.$emit(`change`, value);
        }
      }
    }
  }
</script>

<style scoped>
.first {
  padding-left: 0px;
}

.upside-down {
  display: block;
  transform: scale(1, -1);
  margin-bottom: -3px;
}
span {
  font-size: 1.5em;
  line-height: 1;
  padding: 2px 7.5px 0 7.5px;
}
.title {
  margin: 0px 0px 15px 0px;
  text-align: left;
  display: flex;
}
textarea {
  height: 100%;
  width: calc(100% - 32px);
  border-radius: 7.5px;
font-weight: 200;
  padding: 15px;
  font-size: 18px;
  font-family: inherit;
  border: 1px solid #cccccc;
    background-color: transparent;
}
.textarea-container {
  border-radius: 7.5px;
      display: flex;
      background-color: rgba(255, 232, 163, 1);
  flex-direction: column; 

  height: 100%;
  overflow: hidden;
  position: relative;
}

.textarea-input {
  height: 100%;
  position: relative;
}

.textarea-image {
  position: absolute;
  height: auto;

  font-size: 10em;

    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    margin-top: -10px;

  opacity: 0.25;
}
</style>