var gulp     = require('gulp'),
    config   = require('../config'),
    bs       = require('browser-sync').create(),
    sequence = require('gulp-sequence');

gulp.task('watch-all', function() {
    console.log('Watching for changes...');
    gulp.watch('./views/**/*.handlebars', ['reload']);
    gulp.watch(config.paths.scss + '**/*.scss', ['serveCss', 'reload']);
    gulp.watch(config.paths.js + '**/*.{js,es6}', ['serveJs', 'reload']);
});
