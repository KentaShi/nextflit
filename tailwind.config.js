/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        colors: {
            black: "rgb(var(--black))",
            black10: "rgb(var(--black10))",
            black20: "rgba(var(--black20))",
            black30: "rgb(var(--black30))",
            black40: "rgb(var(--black40))",
            black50: "rgb(var(--black50))",
            gray10: "rgb(var(--gray10))",
            gray20: "rgb(var(--gray20))",
            gray40: "rgba(var(--gray40))",
            white10: "rgba(var(--white10))",
            white20: "rgba(var(--white20))",
            white30: "rgb(var(--white30))",
            green10: "rgba(var(--green10))",
            red: "rgb(var(--red))",
            red10: "rgba(var(--red10))",
            blue: "rgba(var(--blue))",
            blue20: "rgb(var(--blue20))",
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
}
