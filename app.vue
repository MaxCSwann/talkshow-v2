<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style scoped>
    /* .add-noise {
        isolation: isolate;
        position: relative;
    }

    .add-noise::after {
        position: absolute;
        pointer-events: none;
        inset: 0;
        z-index: 20;
        opacity: 1;
        mix-blend-mode: overlay;
        content: "";
        background: url("/img/astro_noise.png");
    } */
</style>

<script setup>
    useSeoMeta({
        ogImage: "/img/logo_w_grad.png",
    });
</script>
