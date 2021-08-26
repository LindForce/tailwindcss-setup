const mix = require('laravel-mix');

mix.postCss('assets/css/theme.css', 'public/css/theme.css', [
	require('tailwindcss'),
	require('postcss-nested'),
]).options({
	processCssUrls: false,
});
