<template>
    <template v-if="children?.length">
        <div>
            <button
                type="button"
                aria-haspopup="true"
                :aria-controls="uid"
                @click="() => (menuOpen = !menuOpen)"
            >
                {{ label }}

                <Icon
                    name="ri:arrow-down-s-line"
                    class="transition-transform"
                    :class="[
                        {
                            '-rotate-180': menuOpen,
                        },
                    ]"
                />
            </button>

            <ul class="ml-2" role="menu" :id="uid" v-show="menuOpen">
                <li
                    v-for="(child_link, child_index) in children"
                    :key="child_index"
                >
                    <main-link
                        :label="child_link.label"
                        :url="child_link.url"
                        :children="child_link.children"
                        :internal="child_link.internal"
                    />
                </li>
            </ul>
        </div>
    </template>

    <a v-else-if="url" :href="url" :target="!internal ? '_blank' : ''">
        {{ label }}
    </a>
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
    });

    const uid = ref(Math.random()); // hacky way to generate a uniqueid
    const menuOpen = ref(false);
</script>
