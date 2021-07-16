<template>
  <router-view />
</template>

<style lang="scss">
:root {
  --app-normal-accent: #ffc83d;
  --app-hover-accent: #ffc83dcc;
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
</style>
