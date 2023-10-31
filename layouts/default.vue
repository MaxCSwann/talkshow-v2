<template>
    <div class="page-container add-noise bg-black text-white">
        <div class="background-image" aria-hidden="true"></div>

        <div
            class="max-w-md layout mx-auto p-6 md:pt-12 md:pb-8 grid grid-rows-[auto_1fr_auto] gap-6"
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

<style scoped>
    .page-container {
        position: relative;
        isolation: isolate;
    }
    .layout {
        min-height: 100vh;

        @supports (min-height: 100dvh) {
            min-height: 100dvh;
        }
    }

    .background-image {
        height: 100%;
        width: 100%;
        background-image: url("/img/sm-album_cover.jpeg");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        position: fixed;
        z-index: -1;
    }

    .background-image::before {
        content: "";
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        pointer-events: none;
        background-color: rgb(0 0 0 / 0.6);
    }
</style>
