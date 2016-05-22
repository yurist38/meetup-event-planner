var gulp     = require('gulp'),
    config   = require('../config'),
    bs       = require('browser-sync').create();

gulp.task('watch-all', function() {
    console.log('Watching for changes...');

    gulp.watch('./views/**/*.handlebars', ['reload']);
    gulp.watch(config.paths.scss + '**/*.scss', ['serveCss','reload']);
    gulp.watch(config.paths.js + '**/*.{js,es6}', ['serveJs','reload']);
    gulp.watch(config.paths.elements + '**/*.{html,es6,scss}', ['polymer','reload']);
});
