let mix = require("laravel-mix");

mix
    .setPublicPath("./")
    .sass("src/sass/popup.scss", "dist/css")
    .sass("src/sass/bootstrap.scss", "dist/css")
    .js("src/js/popup.js", "dist/js")
    .js("src/js/service-worker.js", "dist/js")
    .js("src/js/content-script.js", "dist/js")
    .js("src/js/options.js", "dist/js")
    .vue()
    .copy("src/images/", "dist/images")
    .copy("src/manifest.json", "dist/manifest.json")
    .copy("src/html", "dist/html")
    .options({
        processCssUrls: false,
    });
