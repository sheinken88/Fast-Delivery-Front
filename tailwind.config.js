/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/(pages)/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: '#3D1DF3',
                secondary: '#00EA77',
                customGreen: '#C7FFB1',
                customYellow: '#F8E169',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                poppinsBold: ['Poppins-Black', 'sans-serif'],
            },
        },
    },
    plugins: [require('tailwindcss-animated')],
}
