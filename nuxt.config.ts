// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || "https://api.example.com/",
        },
    },
    modules: ["@nuxt/content", "nuxt-icon", "@nuxt/image"],
    app: {
        head: {
            title: "Talk Show",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    name: "theme-color",
                    content: "#000",
                },
                {
                    hid: "description",
                    name: "description",
                    content: "Talk Show | Pre order the debut album now!",
                },
                { hid: "og-type", property: "og:type", content: "website" },
                { hid: "og-title", property: "og:title", content: "Talk Show" },
                {
                    hid: "og-desc",
                    property: "og:description",
                    content: "Talk Show | Pre order the debut album now!",
                },
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "anonymous",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Walter+Turncoat&amp;display=swap",
                },
            ],
        },
    },
});
