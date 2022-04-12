const mix = require('laravel-mix');
const tailwind = require('tailwindcss');
const pimport = require('postcss-import');
const pnested = require('postcss-nested');
const purgeCss = require('laravel-mix-purgecss');

mix.postCss('resources/css/app.css', 'public/css', [
   pimport(),
   require('tailwindcss'),
   tailwind('tailwind.config.js'),
   pnested(),
]);

mix.options({
   processCssUrls: false,
})

mix.js('resources/js/app.js', 'public/js');

if(mix.inProduction()) {
   mix.purgeCss({
      enable: true,
      folders: ['resources'],
      whitelistPatterns: [
         /tooltip/,
         /markdown/
      ],
      whitelistPatternsChildren: [],
      extensions: ['html', 'js', 'php', 'vue', 'twig', 'svg'],
   })
}