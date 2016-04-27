var gulp = require('gulp');
var config = require('../config');

var watch = function() {
    gulp.watch([
        config.paths.scss + '**/*.scss',
        config.paths.js + '**/*.*'
    ], ['default']);
};

gulp.task('watch', watch);
module.exports = gulp;
