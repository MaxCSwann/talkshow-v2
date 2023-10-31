<template>
    <nav>
        <NuxtLink
            to="/"
            class="flex gap-4 items-center pb-2 mb-4 w-full py-2 px-4 lg:py-4 lg:px-8 hand-drawn text-xl bg-black bg-opacity-75"
        >
            <Icon name="ri:arrow-left-line" />
            <span class="translate-y-1">Back</span>
        </NuxtLink>
    </nav>

    <section class="flex w-full justify-center">
        <a
            class="bit-widget-initializer"
            data-artist-name="Talk Show"
            data-display-past-dates="false"
            data-text-color="#ffffff"
            data-link-color="#d4d4d8"
            data-background-color="#000000BF"
            data-display-details="false"
            data-popup-background-color="#ffffff"
            data-link-text-color="#000"
            data-separator-color="#ffffff"
            data-language="en"
            data-font="Cella"
            data-display-local-dates="false"
            data-auto-style="false"
            data-display-lineup="false"
            data-display-play-my-city="true"
            data-display-limit="15"
            data-display-start-time="false"
        ></a>
    </section>
</template>

<script setup>
    import { onMounted } from "vue";

    onMounted(() => {
        let bandInTownScript = document.createElement("script");
        bandInTownScript.setAttribute(
            "src",
            "https://widget.bandsintown.com/main.min.js"
        );
        document.head.appendChild(bandInTownScript);
    });
</script>

<style scoped>
    .bit-widget .bit-play-my-city-button {
        outline: 2px solid red;
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border: solid 2px white;
        position: relative;
    }

    .hand-drawn {
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border: solid 2px white;
        position: relative;
    }
</style>
