<template>
    <section class="flex w-full justify-center">
        <a
            class="bit-widget-initializer"
            data-artist-name="Talk Show"
            data-display-past-dates="false"
            data-text-color="#ffffff"
            data-link-color="#A2A2A2"
            data-background-color="#000000"
            data-display-details="false"
            data-popup-background-color="#ffffff"
            data-link-text-color="#FFFFFF"
            data-separator-color="#CBCBCB"
            data-language="en"
            data-font="Helvetica"
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
