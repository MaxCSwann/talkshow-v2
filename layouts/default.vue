<template>
    <div class="add-noise bg-black text-white">
        <div
            class="max-w-md layout mx-auto pt-12 pb-8 px-6 grid grid-rows-[auto_1fr_auto] gap-6"
        >
            <header>
                <h1 class="sr-only">Talk Show</h1>

                <NuxtLink to="/" class="mx-auto flex justify-center">
                    <NuxtImg
                        src="/img/talkshow_logo_small.png"
                        alt="Talk Show Logo"
                        sizes="100% md:500px"
                    />
                </NuxtLink>
            </header>

            <main>
                <slot />
            </main>

            <aside>
                <iframe
                    style="border-radius: 12px"
                    src="https://open.spotify.com/embed/artist/6maphvdwLWb9tIeiFAAaE3?utm_source=generator&theme=0"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </aside>

            <footer>
                <ContentQuery path="/social-links">
                    <template #default="{ data }">
                        <ul class="flex justify-between flex-wrap">
                            <li
                                v-for="(social_link, index) of data[0].body"
                                :key="index"
                            >
                                <a
                                    :href="social_link.url"
                                    :target="
                                        !social_link.internal ? '_blank' : ''
                                    "
                                >
                                    <Icon
                                        :name="social_link.iconName"
                                        class="w-8 h-8 md:w-12 md:h-12"
                                    />

                                    <span class="sr-only">
                                        {{ social_link.label }}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </template>
                </ContentQuery>
            </footer>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .layout {
        min-height: 100vh;

        @supports (min-height: 100dvh) {
            min-height: 100dvh;
        }
    }

    // .add-noise {
    //     isolation: isolate;
    //     position: relative;
    // }

    // .add-noise::after {
    //     position: absolute;
    //     pointer-events: none;
    //     inset: 0;
    //     z-index: 20;
    //     opacity: 1;
    //     mix-blend-mode: overlay;
    //     content: "";
    //     background: url("/img/astro_noise.png");
    // }
</style>
