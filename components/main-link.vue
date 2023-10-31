import type { Icon } from '#build/components';
<template>
    <template v-if="children?.length">
        <div class="w-full flex flex-col items-center gap-2">
            <button
                type="button"
                aria-haspopup="true"
                class="flex py-4 px-8 gap-4 text-left items-center w-full hand-drawn bg-black transition-colors lg:hover:bg-zinc-900 text-xl md:text-3xl add-noise leading-none"
                :aria-controls="uid"
                @click="() => (menuOpen = !menuOpen)"
            >
                <Icon v-if="iconName?.length" :name="iconName" />

                <span class="translate-y-1">
                    {{ label }}
                </span>

                <Icon
                    name="ri:arrow-down-s-line"
                    class="transition-transform ml-auto"
                    size="28px"
                    :class="[
                        {
                            '-rotate-180': menuOpen,
                        },
                    ]"
                />
            </button>

            <ul
                class="flex gap-2 flex-col w-full pl-8"
                role="menu"
                :id="uid"
                v-show="menuOpen"
            >
                <li
                    v-for="(child_link, child_index) in children"
                    :key="child_index"
                    class="block"
                >
                    <main-link
                        :label="child_link.label"
                        :url="child_link.url"
                        :children="child_link.children"
                        :internal="child_link.internal"
                        :iconName="child_link.iconName"
                    />
                </li>
            </ul>
        </div>
    </template>

    <NuxtLink
        v-else-if="url"
        :href="url"
        :target="!internal ? '_blank' : ''"
        class="flex w-full py-4 px-8 gap-4 hand-drawn transition-colors hover:bg-zinc-900 text-xl md:text-3xl items-center"
        prefetch
    >
        <Icon v-if="iconName?.length" :name="iconName" />

        <span class="translate-y-1">
            {{ label }}
        </span>
    </NuxtLink>
</template>

<script setup>
    import { ref } from "vue";

    defineProps({
        label: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            default: "",
        },
        children: {
            type: Array,
            default: () => [],
        },
        internal: {
            type: Boolean,
            default: false,
        },
        iconName: {
            type: String,
            default: "",
        },
    });

    const uid = ref(Math.random()); // hacky way to generate a uniqueid
    const menuOpen = ref(false);
</script>

<style scoped>
    .hand-drawn {
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border: solid 2px white;
        position: relative;
    }
    /* 
    .add-noise {
        isolation: isolate;
        position: relative;
    }

    .add-noise::after {
        position: absolute;
        pointer-events: none;
        inset: 0;
        z-index: -20;
        opacity: 1;
        mix-blend-mode: overlay;
        content: "";
        background: url("/img/astro_noise.png");
    } */
</style>
