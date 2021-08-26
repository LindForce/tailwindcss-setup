const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['components/*', 'public/js/*', '*.php'],
    },
    theme: {
        extend: {
            fontFamily: {
                // body: ['Roboto', defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [],
};
