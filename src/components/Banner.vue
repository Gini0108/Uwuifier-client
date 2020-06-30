<template>
    <section id="banner">
        <div class="container">
            <div class="image">
                <img src="/yawning-face.png" alt="Yawning face">
            </div>
            <div class="content">
                <span><b>Uwuifier</b> the best tool when it comes to...</span>
                <div id="buttons">
                    <a href="">GET STARTED</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    #banner .container {
        justify-content: center;
        height: 350px;
        width: 900px;
        margin-top: calc(var(--header-height) * -1 + 20px) !important;
    }

    #banner .image img {
        width: 190px;
        height: 190px;
    }

    #banner .content {
        margin: 30px 0 0 60px;
    }

    #banner span {
        font-size: 3rem;
        font-weight: 300;
        margin-bottom: 20px;
        display: block;
    }

    #banner a {
        color: #000;
        background: var(--app-accent);
        border-radius: 30px;
        padding: 15px 20px;
        font-weight: 600;
        transition: background 0.25s ease, box-shadow 0.25s ease;
    }

    #banner a:hover {
        background: rgba(255, 200, 61, 0.80);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    @media screen and (max-width: 900px) {
        #banner .container {
            height: auto;
            margin: 0 60px;
        }
        #banner .content {
            margin: 0;
            margin-top: 20px;
        }
        #banner span {
            text-align: center;
            margin-bottom: 30px;
        }
        #banner #buttons {
            display: flex;
            justify-content: center;
        }
    }

    @media screen and (max-width: 700px) {
        #banner .image img {
            width: 150px;
            height: 150px;
        }
    }
</style>