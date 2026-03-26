/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'pop-orange': '#F58025',
                'pop-black': '#1a1a1a',
                'pop-dark': '#0a0a0a',
                'pop-gray': '#333333',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
            },
            animation: {
                'gradient-xy': 'gradient-xy 3s ease infinite',
                'marquee': 'marquee 25s linear infinite',
                'marquee-fast': 'marquee 3s linear infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out both',
                'slide-in-left': 'slideInLeft 0.8s ease-out both',
                'slide-in-right': 'slideInRight 0.8s ease-out both',
                'slide-in-up': 'slideInUp 0.8s ease-out both',
                'slide-in-down': 'slideInDown 0.8s ease-out both',
            },
            backgroundImage: {
                'pattern': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
            }
        },
    },
    plugins: [],
}
