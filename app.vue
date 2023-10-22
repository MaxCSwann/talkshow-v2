<template>
    <!-- <div class="add-noise bg-black text-white">
        <NuxtPage />
    </div> -->
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
    .add-noise {
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
    }
</style>
