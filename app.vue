<template>
    <div class="add-noise bg-zinc-700 text-zinc-50">
        <NuxtPage />
    </div>
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
