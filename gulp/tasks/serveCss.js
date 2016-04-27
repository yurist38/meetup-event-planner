var gulp = require('gulp');
var babel = require('gulp-babel');
var extname = require('gulp-extname');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var config = require('../config');

var serveCss = function() {
    console.log('Serving css...');

    return gulp.src(paths.scss + '**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.distCss));
};

gulp.task('serveCss', serveCss);
module.exports = gulp;
