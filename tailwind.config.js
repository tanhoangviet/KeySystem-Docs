import { createPreset } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
export default {
    presets: [
        createPreset({
            cssPrefix: "fuma-", // here!
        }),
    ],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                'max-xl': { max: '1279px' }
            }
        }
    },
    plugins: [],
    experimental: {
        optimizeUniversalDefaults: false,
    },
};