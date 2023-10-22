<template>
    <section>
        <ContentQuery path="/main-links">
            <template #default="{ data }">
                <ul class="w-full flex flex-col gap-4">
                    <li
                        v-for="(link, index) of data[0].body"
                        :key="index"
                        class="block"
                    >
                        <main-link
                            :label="link.label"
                            :url="link.url"
                            :children="link.children"
                            :internal="link.internal"
                            :iconName="link.iconName"
                        />
                    </li>
                </ul>
            </template>
        </ContentQuery>
    </section>
</template>
