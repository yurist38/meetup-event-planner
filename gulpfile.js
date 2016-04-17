'use strict';

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    extname = require('gulp-extname'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber');

gulp.task('serve-css', function() {
    console.log('Compiling SCSS to CSS, adding autoprefixes and sourcemaps...');

    return gulp.src('assets/scss/**/*.scss')
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
        .pipe(gulp.dest('dist/css'));
});

gulp.task('serve-js', function() {
    console.log('Compiling ES6 files to JS...');

    return gulp.src('assets/js/**/*.es6')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['es2015']}))
        .pipe(sourcemaps.write())
        .pipe(extname('.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch-all', function() {
    gulp.watch([
        'assets/scss/**/*.scss',
        'assets/js/**/*.es6'
    ], ['default']);
});

gulp.task('default', ['serve-css', 'serve-js']);
