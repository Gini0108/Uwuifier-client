<template>
  <section class="banner">
    <div class="container">
      <picture>
        <source type="image/webp" srcset="/playstore.svg" />
        <img
          width="196"
          height="190"
          src="/playstore.svg"
          alt="Google Play Store logo"
        />
      </picture>
      <div class="content">
        <span><b>Uwuifier</b> is now available for every Android device.</span>
        <div class="buttons">
          <a
            href="https://play.google.com/store/apps/details?id=com.sjorsvanholst.uwuifier"
            title="Go to the PlayStore Uwuifier app"
            >DOWNLOAD NOW</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: center;

  .container {
    width: 900px;
    height: 350px;
    margin-top: calc(var(--header-height) * -1 + 20px) !important;
    justify-content: center;

    picture img {
      width: 196px;
      height: 190px;
    }

    .content {
      margin: 30px 0 0 60px;
    }

    span {
      font-size: 2.8rem;
      font-weight: 300;
      margin-bottom: 20px;
    }

    a {
      color: #000;
      padding: 15px 20px;
      background: var(--app-normal-accent);
      transition: background 0.25s ease, box-shadow 0.25s ease;

      font-weight: 600;
      border-radius: 30px;

      &:hover {
        background: var(--app-hover-accent);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .banner {
    padding: 100px 0px 80px 0px;

    .container {
      height: auto;
      margin: 0 30px;
      flex-direction: column;

      .content {
        margin: 0;
        margin-top: 30px;
      }

      span {
        text-align: center;
        margin-bottom: 30px;
      }

      .buttons {
        display: flex;
        justify-content: center;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .banner picture img {
    width: 155px;
    height: 150px;
  }
}
</style>
