<template>
    <main
        class="max-w-md mx-auto py-12 px-2 grid grid-rows-[auto_1fr_auto] gap-6"
    >
        <h1 class="text-center text-5xl">Talk Show</h1>

        <section class="flex">
            <ContentQuery path="/main-links">
                <template #default="{ data }">
                    <ul>
                        <li v-for="(link, index) of data[0].body" :key="index">
                            <main-link
                                :label="link.label"
                                :url="link.url"
                                :children="link.children"
                                :internal="link.internal"
                            />
                        </li>
                    </ul>
                </template>
            </ContentQuery>
        </section>

        <section>
            <ContentQuery path="/social-links">
                <template #default="{ data }">
                    <ul class="flex justify-center gap-6">
                        <li
                            v-for="(social_link, index) of data[0].body"
                            :key="index"
                        >
                            <a
                                :href="social_link.url"
                                :target="!social_link.internal ? '_blank' : ''"
                            >
                                <Icon
                                    :name="social_link.iconName"
                                    size="32px"
                                />

                                <span class="sr-only">
                                    {{ social_link.label }}
                                </span>
                            </a>
                        </li>
                    </ul>
                </template>
            </ContentQuery>
        </section>
    </main>
</template>

<style lang="scss">
    main {
        min-height: 100vh;

        @supports (min-height: 100dvh) {
            min-height: 100dvh;
        }
    }
</style>
