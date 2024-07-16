import { join } from "path";
import { Config } from "tailwindcss";
import { skeleton } from "@skeletonlabs/tw-plugin";

const config = {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
    ],

    theme: {
        extend: {}
    },

    plugins: [skeleton]
} satisfies Config;

export default config;