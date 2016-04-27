var gulp = require('gulp');
var babel = require('gulp-babel');
var extname = require('gulp-extname');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var config = require('../config');

var serveJs = function() {
    console.log('Serving JS...');

    return gulp.src(config.paths.js + '**/*.*')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['es2015']}))
        .pipe(sourcemaps.write())
        .pipe(extname('.js'))
        .pipe(gulp.dest(config.paths.distJs));
};

gulp.task('serveJs', serveJs);
module.exports = gulp;
